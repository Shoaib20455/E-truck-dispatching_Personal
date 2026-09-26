import type { ReactNode } from "react";

import type { Media, Page } from "@/payload-types";

import FAQSection from "@/app/(app)/Components/FAQSection";
import RevenueCTA from "@/app/(app)/Components/RevenueCTA";
import ServiceGridWithImage from "@/app/(app)/Components/ServiceGridWithImage";
import ServiceHero from "@/app/(app)/Components/ServiceHero";
import SimpleFeatureCards from "@/app/(app)/Components/SimpleFeatureCards";

export type PageBlock = NonNullable<Page["blocks"]>[number];

/** A Payload `upload` field once the relation has been populated at a depth greater than 0. */
type MediaField = number | Media | null | undefined;

function asMedia(field: MediaField): Media | null {
  return field && typeof field === "object" ? field : null;
}

/**
 * Resolves an uploaded media field to a URL.
 *
 * `preferredSizes` are tried in order before falling back to the original file. Size
 * names come from the image sizes configured on the Media collection (thumbnail, card,
 * article, hero). Pass an empty list to always use the original, which is what you want
 * for anything rendered with `object-contain` or with a fixed aspect ratio.
 */
function mediaUrl(field: MediaField, preferredSizes: string[] = []): string {
  const media = asMedia(field);
  if (!media) return "";

  const sizes = media.sizes as Record<string, { url?: string | null } | undefined> | undefined;
  for (const size of preferredSizes) {
    const url = sizes?.[size]?.url;
    if (url) return url;
  }

  return media.url ?? "";
}

/**
 * Maps a single Payload block onto its frontend component.
 *
 * Blocks whose required media has been deleted are skipped so the page never renders a
 * broken image. Unknown block types render nothing, so adding a block to the collection
 * without a frontend counterpart cannot break a live page.
 */
export function renderPageBlock(block: PageBlock): ReactNode {
  switch (block.blockType) {
    case "serviceHero": {
      const backgroundImage = mediaUrl(block.backgroundImage, ["hero", "article"]);
      if (!backgroundImage) return null;

      return (
        <ServiceHero
          heading={block.heading}
          description={block.description}
          backgroundImage={backgroundImage}
          highlights={block.highlights.map(({ text }) => ({ text }))}
          reviews={(block.reviews ?? []).map((review) => ({
            logo: mediaUrl(review.logo) || undefined,
            alt: review.alt ?? undefined,
            label: review.label ?? undefined,
            rating: review.rating ?? undefined,
          }))}
          formHeading={block.formHeading}
          namePlaceholder={block.namePlaceholder}
          phonePlaceholder={block.phonePlaceholder}
          emailPlaceholder={block.emailPlaceholder}
          organizationPlaceholder={block.organizationPlaceholder}
          buttonText={block.buttonText}
          variant={block.variant ?? undefined}
        />
      );
    }

    case "simpleFeatureCards": {
      return <SimpleFeatureCards heading={block.heading} items={block.items.map(({ title }) => ({ title }))} />;
    }

    case "serviceGridWithImage": {
      // The original file is used here because this component sizes the image from its
      // intrinsic ratio, so a cropped variant would distort the layout.
      const image = mediaUrl(block.image);
      if (!image) return null;

      return (
        <ServiceGridWithImage
          heading={block.heading}
          image={image}
          imageAlt={block.imageAlt || asMedia(block.image)?.alt || block.heading}
          services={block.services.map(({ title, description, highlighted }) => ({
            title,
            description,
            highlighted: Boolean(highlighted),
          }))}
          variant={block.variant ?? undefined}
        />
      );
    }

    case "faqSection": {
      return (
        <FAQSection
          heading={block.heading}
          faqs={block.faqs.map(({ question, answer }) => ({ question, answer }))}
          defaultOpenIndex={block.defaultOpenIndex ?? undefined}
        />
      );
    }

    case "revenueCTA": {
      const backgroundImage = mediaUrl(block.backgroundImage, ["hero", "article"]);
      if (!backgroundImage) return null;

      return (
        <RevenueCTA
          heading={block.heading}
          description={block.description}
          backgroundImage={backgroundImage}
          primaryButtonText={block.primaryButtonText}
          primaryButtonHref={block.primaryButtonHref}
          secondaryButtonText={block.secondaryButtonText}
          secondaryButtonHref={block.secondaryButtonHref}
        />
      );
    }

    default:
      return null;
  }
}
