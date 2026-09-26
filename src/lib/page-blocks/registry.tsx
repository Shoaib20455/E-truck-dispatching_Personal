import type { ReactNode } from "react";

import type { Media, Page } from "@/payload-types";

import AboutOverviewSection from "@/app/(app)/Components/AboutOverviewSection";
import AboutUsCTASection from "@/app/(app)/Components/AboutUsCTASection";
import AlternatingServiceSections from "@/app/(app)/Components/AlternatingServiceSections";
import BillingChallenges from "@/app/(app)/Components/BillingChallenges";
import BillingIntelligence from "@/app/(app)/Components/BillingIntelligence";
import BillingProcess from "@/app/(app)/Components/BillingProcess";
import BillingSolutions from "@/app/(app)/Components/BillingSolutions";
import ComparisonTable from "@/app/(app)/Components/ComparisonTable";
import ComplianceCommitmentSection from "@/app/(app)/Components/ComplianceCommitmentSection";
import ConsultationCTA from "@/app/(app)/Components/ConsultationCTA";
import CoreValuesSection from "@/app/(app)/Components/CoreValuesSection";
import DenialCategories from "@/app/(app)/Components/DenialCategories";
import EHRPartners from "@/app/(app)/Components/EHRPartners";
import ExpertiseCardGrid from "@/app/(app)/Components/ExpertiseCardGrid";
import FAQSection from "@/app/(app)/Components/FAQSection";
import NationwideBilling from "@/app/(app)/Components/NationwideBilling";
import OurApproachSection from "@/app/(app)/Components/OurApproachSection";
import RCMSolutions from "@/app/(app)/Components/RCMSolutions";
import RevenueCTA from "@/app/(app)/Components/RevenueCTA";
import RevenueCTAWithTestimonial from "@/app/(app)/Components/RevenueCTAWithTestimonial";
import RevenueLossReasons from "@/app/(app)/Components/RevenueLossReasons";
import ServiceGridWithImage from "@/app/(app)/Components/ServiceGridWithImage";
import ServiceHero from "@/app/(app)/Components/ServiceHero";
import SimpleFeatureCards from "@/app/(app)/Components/SimpleFeatureCards";
import SmallPractices from "@/app/(app)/Components/SmallPractices";
import StateConsultationCTA from "@/app/(app)/Components/StateConsultationCTA";
import SuccessNumbers from "@/app/(app)/Components/SuccessNumbers";
import Testimonials from "@/app/(app)/Components/Testimonials";
import TextFeatureGrid from "@/app/(app)/Components/TextFeatureGrid";
import WhyChooseUsSection from "@/app/(app)/Components/WhyChooseUsSection";
import WhyTrustABS from "@/app/(app)/Components/WhyTrustABS";
import WhyWorkWithUsSection from "@/app/(app)/Components/WhyWorkWithUsSection";

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

    case "consultationCTA": {
      const logos = compact(
        (block.logos ?? []).map((logo) => {
          // Logos are shown with object-contain, so the original file is used here.
          const image = mediaUrl(logo.image);
          if (!image) return null;

          return { image, alt: logo.alt || mediaAlt(logo.image, "") };
        }),
      );

      return (
        <ConsultationCTA
          heading={block.heading}
          description={block.description}
          backgroundImage={mediaUrl(block.backgroundImage, ["hero", "article"]) || undefined}
          formHeading={block.formHeading}
          namePlaceholder={block.namePlaceholder}
          phonePlaceholder={block.phonePlaceholder}
          emailPlaceholder={block.emailPlaceholder}
          practicePlaceholder={block.practicePlaceholder}
          buttonText={block.buttonText}
          logos={logos.length > 0 ? logos : undefined}
          variant={block.variant ?? undefined}
        />
      );
    }

    case "stateConsultationCTA": {
      // The image fills the whole panel, so a wide crop is preferred.
      const backgroundImage = mediaUrl(block.backgroundImage, ["hero", "article"]);
      if (!backgroundImage) return null;

      return (
        <StateConsultationCTA
          heading={block.heading}
          description={block.description}
          backgroundImage={backgroundImage}
          formHeading={block.formHeading}
          buttonText={block.buttonText}
          phones={toTextList(block.phones)}
        />
      );
    }

    case "revenueCTAWithTestimonial": {
      const backgroundImage = mediaUrl(block.backgroundImage, ["hero", "article"]);
      const testimonialImage = mediaUrl(block.testimonial.image);
      if (!backgroundImage || !testimonialImage) return null;

      const ratingImage = mediaUrl(block.testimonial.ratingImage);

      return (
        <RevenueCTAWithTestimonial
          heading={block.heading}
          description={block.description}
          backgroundImage={backgroundImage}
          primaryButtonText={block.primaryButtonText}
          primaryButtonHref={block.primaryButtonHref}
          secondaryButtonText={block.secondaryButtonText}
          secondaryButtonHref={block.secondaryButtonHref}
          testimonial={{
            image: testimonialImage,
            imageAlt: block.testimonial.imageAlt || mediaAlt(block.testimonial.image, block.testimonial.name),
            name: block.testimonial.name,
            role: block.testimonial.role,
            quote: block.testimonial.quote,
            // The rating graphic is object-contain, so the original file is used here.
            ratingImage: ratingImage || undefined,
            ratingAlt: block.testimonial.ratingAlt || undefined,
          }}
        />
      );
    }

    case "smallPractices": {
      // Sized from its intrinsic ratio, so the original file is used here.
      const image = mediaUrl(block.image);
      if (!image) return null;

      return (
        <SmallPractices
          heading={block.heading}
          description={block.description}
          supportHeading={block.supportHeading}
          supportItems={toTextList(block.supportItems)}
          cardHeading={block.cardHeading}
          cardDescription={block.cardDescription}
          cardLinkText={block.cardLinkText}
          cardLinkHref={block.cardLinkHref}
          image={image}
          imageAlt={block.imageAlt || mediaAlt(block.image, block.heading)}
        />
      );
    }

    case "rcmSolutions": {
      const services = compact(
        block.services.map((service) => {
          // Icons are shown with object-contain, so the original file is used here.
          const icon = mediaUrl(service.icon);
          if (!icon) return null;

          return {
            title: service.title,
            description: service.description ?? undefined,
            icon,
            iconAlt: service.iconAlt || mediaAlt(service.icon, service.title),
            highlighted: Boolean(service.highlighted),
          };
        }),
      );
      if (services.length === 0) return null;

      return (
        <RCMSolutions
          heading={block.heading}
          services={services}
          variant={block.variant ?? undefined}
        />
      );
    }

    case "revenueLossReasons": {
      // Constrained by a max width and not cropped, so the original file is used here.
      const image = mediaUrl(block.image);
      if (!image) return null;

      const cards = compact(
        block.cards.map((card) => {
          // Icons are shown with object-contain, so the original file is used here.
          const icon = mediaUrl(card.icon);
          if (!icon) return null;

          return {
            title: card.title,
            description: card.description,
            icon,
            iconAlt: card.iconAlt || mediaAlt(card.icon, card.title),
            highlighted: Boolean(card.highlighted),
          };
        }),
      );
      if (cards.length === 0) return null;

      return (
        <RevenueLossReasons
          heading={block.heading}
          descriptionOne={block.descriptionOne}
          descriptionTwo={block.descriptionTwo}
          image={image}
          imageAlt={block.imageAlt || mediaAlt(block.image, block.heading)}
          cards={cards}
        />
      );
    }

    case "billingSolutions": {
      const solutions = compact(
        block.solutions.map((solution) => {
          // Icons are shown with object-contain, so the original file is used here.
          const icon = mediaUrl(solution.icon);
          if (!icon) return null;

          return {
            title: solution.title,
            description: solution.description,
            icon,
            iconAlt: solution.iconAlt || mediaAlt(solution.icon, solution.title),
            highlighted: Boolean(solution.highlighted),
          };
        }),
      );
      if (solutions.length === 0) return null;

      return (
        <BillingSolutions
          heading={block.heading}
          solutions={solutions}
          variant={block.variant ?? undefined}
        />
      );
    }

    case "billingIntelligence": {
      return (
        <BillingIntelligence
          heading={block.heading}
          description={block.description}
          items={toTextList(block.items)}
        />
      );
    }

    case "whyChooseUs": {
      return (
        <WhyChooseUsSection
          heading={block.heading}
          items={block.items.map(({ title, description }) => ({ title, description }))}
        />
      );
    }

    case "whyTrustABS": {
      return (
        <WhyTrustABS
          heading={block.heading}
          description={block.description}
          mainCardHeading={block.mainCardHeading}
          cards={block.cards.map(({ title, description }) => ({ title, description }))}
        />
      );
    }

    case "whyWorkWithUs": {
      return (
        <WhyWorkWithUsSection
          heading={block.heading}
          subtitle={block.subtitle ?? undefined}
          items={toTextList(block.items)}
          footerText={block.footerText ?? undefined}
        />
      );
    }

    case "ourApproach": {
      return (
        <OurApproachSection
          heading={block.heading}
          items={block.items.map(({ title, description }) => ({ title, description }))}
        />
      );
    }

    case "nationwideBilling": {
      const states = compact(
        block.states.map((state) => {
          // State graphics are shown with object-contain, so the original file is used here.
          const image = mediaUrl(state.image);
          if (!image) return null;

          return {
            name: state.name,
            image,
            imageAlt: state.imageAlt || mediaAlt(state.image, state.name),
            highlighted: Boolean(state.highlighted),
          };
        }),
      );
      if (states.length === 0) return null;

      return (
        <NationwideBilling
          heading={block.heading}
          description={block.description}
          states={states}
        />
      );
    }

    default:
      return null;
  }
}
