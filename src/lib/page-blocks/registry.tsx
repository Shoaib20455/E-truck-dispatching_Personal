import type { ReactNode } from "react";

import type { Media, Page } from "@/payload-types";

import AboutOverviewSection from "@/app/(app)/Components/AboutOverviewSection";
import AboutUsCTASection from "@/app/(app)/Components/AboutUsCTASection";
import AlternatingServiceSections from "@/app/(app)/Components/AlternatingServiceSections";
import BillingChallenges from "@/app/(app)/Components/BillingChallenges";
import BillingProcess from "@/app/(app)/Components/BillingProcess";
import ComparisonTable from "@/app/(app)/Components/ComparisonTable";
import ComplianceCommitmentSection from "@/app/(app)/Components/ComplianceCommitmentSection";
import CoreValuesSection from "@/app/(app)/Components/CoreValuesSection";
import DenialCategories from "@/app/(app)/Components/DenialCategories";
import EHRPartners from "@/app/(app)/Components/EHRPartners";
import ExpertiseCardGrid from "@/app/(app)/Components/ExpertiseCardGrid";
import FAQSection from "@/app/(app)/Components/FAQSection";
import RevenueCTA from "@/app/(app)/Components/RevenueCTA";
import ServiceGridWithImage from "@/app/(app)/Components/ServiceGridWithImage";
import ServiceHero from "@/app/(app)/Components/ServiceHero";
import SimpleFeatureCards from "@/app/(app)/Components/SimpleFeatureCards";
import SuccessNumbers from "@/app/(app)/Components/SuccessNumbers";
import Testimonials from "@/app/(app)/Components/Testimonials";
import TextFeatureGrid from "@/app/(app)/Components/TextFeatureGrid";

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

/** Alt text for a block image, preferring the block's own value over the media alt text. */
function mediaAlt(field: MediaField, fallback: string): string {
  return asMedia(field)?.alt || fallback;
}

/** Narrows away the `null`s produced when an item's media can no longer be resolved. */
function compact<T>(entries: (T | null)[]): T[] {
  return entries.filter((entry): entry is T => entry !== null);
}

/** Payload stores a list of short strings as an array of rows with a single `text` field. */
function toTextList(rows: { text: string }[] | null | undefined): string[] {
  return (rows ?? []).map((row) => row.text);
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
          imageAlt={block.imageAlt || mediaAlt(block.image, block.heading)}
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

    case "aboutOverview": {
      // Sized from its intrinsic ratio, so the original file is used here.
      const image = mediaUrl(block.image);
      if (!image) return null;

      return (
        <AboutOverviewSection
          heading={block.heading}
          intro={block.intro}
          image={image}
          imageAlt={block.imageAlt || mediaAlt(block.image, block.heading)}
          points={toTextList(block.points)}
          story={block.story}
        />
      );
    }

    case "aboutUsCTA": {
      const backgroundImage = mediaUrl(block.backgroundImage, ["hero", "article"]);
      // The overlapping portrait is object-contain, so cropping it would clip the subject.
      const doctorImage = mediaUrl(block.doctorImage);
      if (!backgroundImage || !doctorImage) return null;

      return (
        <AboutUsCTASection
          heading={block.heading}
          description={block.description}
          backgroundImage={backgroundImage}
          doctorImage={doctorImage}
          doctorImageAlt={block.doctorImageAlt || mediaAlt(block.doctorImage, block.heading)}
          buttons={block.buttons.map(({ label, href, variant }) => ({
            label,
            href,
            variant: variant ?? undefined,
          }))}
        />
      );
    }

    case "alternatingServices": {
      const items = compact(
        block.items.map((item) => {
          const image = mediaUrl(item.image);
          if (!image) return null;

          return {
            title: item.title,
            description: item.description,
            image,
            imageAlt: item.imageAlt || mediaAlt(item.image, item.title),
            bullets: toTextList(item.bullets),
            footerText: item.footerText ?? undefined,
          };
        }),
      );
      if (items.length === 0) return null;

      return <AlternatingServiceSections items={items} />;
    }

    case "billingChallenges": {
      const challenges = compact(
        block.challenges.map((challenge) => {
          const icon = mediaUrl(challenge.icon);
          if (!icon) return null;

          return {
            title: challenge.title,
            description: challenge.description,
            icon,
            iconAlt: challenge.iconAlt || mediaAlt(challenge.icon, challenge.title),
          };
        }),
      );
      if (challenges.length === 0) return null;

      return <BillingChallenges heading={block.heading} challenges={challenges} />;
    }

    case "billingProcess": {
      // Fills a fixed-height grid cell, so a cropped variant is safe here.
      const image = mediaUrl(block.image, ["article", "card"]);
      if (!image) return null;

      return (
        <BillingProcess
          heading={block.heading}
          image={image}
          imageAlt={block.imageAlt || mediaAlt(block.image, block.heading)}
          steps={block.steps.map(({ number, title, description }) => ({ number, title, description }))}
        />
      );
    }

    case "comparisonTable": {
      return (
        <ComparisonTable
          heading={block.heading ?? undefined}
          featureHeading={block.featureHeading}
          avenueHeading={block.avenueHeading}
          comparisonHeading={block.comparisonHeading}
          rows={block.rows.map(({ feature, avenue, comparison }) => ({ feature, avenue, comparison }))}
        />
      );
    }

    case "complianceCommitment": {
      return (
        <ComplianceCommitmentSection
          heading={block.heading}
          subtitle={block.subtitle ?? undefined}
          items={toTextList(block.items)}
          footerText={block.footerText ?? undefined}
        />
      );
    }

    case "coreValues": {
      // Rendered inside a rotated square, so a square-friendly crop is safe here.
      const image = mediaUrl(block.image, ["card", "article"]);
      if (!image) return null;

      return (
        <CoreValuesSection
          heading={block.heading}
          image={image}
          imageAlt={block.imageAlt || mediaAlt(block.image, block.heading)}
          values={block.values.map(({ title, description }) => ({
            title,
            description: description ?? undefined,
          }))}
        />
      );
    }

    case "denialCategories": {
      return (
        <DenialCategories
          heading={block.heading}
          description={block.description ?? undefined}
          categories={block.categories.map(({ title, description, highlighted }) => ({
            title,
            description: description ?? undefined,
            highlighted: Boolean(highlighted),
          }))}
          variant={block.variant ?? undefined}
        />
      );
    }

    case "ehrPartners": {
      const partners = compact(
        block.partners.map((partner) => {
          const logo = mediaUrl(partner.logo);
          if (!logo) return null;

          return { logo, alt: partner.alt || mediaAlt(partner.logo, "") };
        }),
      );
      if (partners.length === 0) return null;

      return (
        <EHRPartners
          heading={block.heading}
          description={block.description}
          partners={partners}
          bottomText={block.bottomText ?? undefined}
          buttonText={block.buttonText ?? undefined}
          buttonHref={block.buttonHref ?? undefined}
          variant={block.variant ?? undefined}
        />
      );
    }

    case "expertiseCards": {
      return (
        <ExpertiseCardGrid
          heading={block.heading}
          cards={block.cards.map(({ title, code, description, highlighted }) => ({
            title,
            code,
            description,
            highlighted: Boolean(highlighted),
          }))}
        />
      );
    }

    case "testimonials": {
      const testimonials = compact(
        block.testimonials.map((testimonial) => {
          const image = mediaUrl(testimonial.image);
          const ratingImage = mediaUrl(testimonial.ratingImage);
          if (!image || !ratingImage) return null;

          return {
            name: testimonial.name,
            role: testimonial.role,
            image,
            imageAlt: testimonial.imageAlt || mediaAlt(testimonial.image, testimonial.name),
            ratingImage,
            ratingAlt: testimonial.ratingAlt || "Rated 5 out of 5",
            quote: testimonial.quote,
          };
        }),
      );
      if (testimonials.length === 0) return null;

      return <Testimonials heading={block.heading} testimonials={testimonials} />;
    }

    case "successNumbers": {
      return (
        <SuccessNumbers
          heading={block.heading}
          columns={block.columns.map((column) => ({
            items: column.items.map(({ label, value }) => ({ label, value })),
          }))}
        />
      );
    }

    case "textFeatureGrid": {
      return (
        <TextFeatureGrid
          heading={block.heading}
          items={block.items.map(({ title, description, highlighted }) => ({
            title,
            description,
            highlighted: Boolean(highlighted),
          }))}
        />
      );
    }

    default:
      return null;
  }
}
