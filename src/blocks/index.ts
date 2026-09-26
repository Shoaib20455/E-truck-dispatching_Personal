import type { Block } from "payload";

import { AboutOverviewSectionBlock } from "./AboutOverviewSection";
import { AboutUsCTASectionBlock } from "./AboutUsCTASection";
import { AlternatingServiceSectionsBlock } from "./AlternatingServiceSections";
import { BillingChallengesBlock } from "./BillingChallenges";
import { BillingProcessBlock } from "./BillingProcess";
import { ComparisonTableBlock } from "./ComparisonTable";
import { ComplianceCommitmentSectionBlock } from "./ComplianceCommitmentSection";
import { CoreValuesSectionBlock } from "./CoreValuesSection";
import { DenialCategoriesBlock } from "./DenialCategories";
import { EHRPartnersBlock } from "./EHRPartners";
import { ExpertiseCardGridBlock } from "./ExpertiseCardGrid";
import { FAQSectionBlock } from "./FAQSection";
import { RevenueCTABlock } from "./RevenueCTA";
import { ServiceGridWithImageBlock } from "./ServiceGridWithImage";
import { ServiceHeroBlock } from "./ServiceHero";
import { SimpleFeatureCardsBlock } from "./SimpleFeatureCards";
import { SuccessNumbersBlock } from "./SuccessNumbers";
import { TestimonialsBlock } from "./Testimonials";
import { TextFeatureGridBlock } from "./TextFeatureGrid";

/**
 * Every block available to the Pages collection. Adding a block here also requires
 * a matching entry in the frontend registry (src/lib/page-blocks/registry.tsx).
 */
export const pageBlocks: Block[] = [
  ServiceHeroBlock,
  SimpleFeatureCardsBlock,
  ServiceGridWithImageBlock,
  FAQSectionBlock,
  RevenueCTABlock,
  AboutOverviewSectionBlock,
  AboutUsCTASectionBlock,
  AlternatingServiceSectionsBlock,
  BillingChallengesBlock,
  BillingProcessBlock,
  ComparisonTableBlock,
  ComplianceCommitmentSectionBlock,
  CoreValuesSectionBlock,
  DenialCategoriesBlock,
  EHRPartnersBlock,
  ExpertiseCardGridBlock,
  TestimonialsBlock,
  SuccessNumbersBlock,
  TextFeatureGridBlock,
];

export {
  AboutOverviewSectionBlock,
  AboutUsCTASectionBlock,
  AlternatingServiceSectionsBlock,
  BillingChallengesBlock,
  BillingProcessBlock,
  ComparisonTableBlock,
  ComplianceCommitmentSectionBlock,
  CoreValuesSectionBlock,
  DenialCategoriesBlock,
  EHRPartnersBlock,
  ExpertiseCardGridBlock,
  FAQSectionBlock,
  RevenueCTABlock,
  ServiceGridWithImageBlock,
  ServiceHeroBlock,
  SimpleFeatureCardsBlock,
  SuccessNumbersBlock,
  TestimonialsBlock,
  TextFeatureGridBlock,
};
