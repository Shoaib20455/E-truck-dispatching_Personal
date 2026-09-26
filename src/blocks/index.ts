import type { Block } from "payload";

import { AboutOverviewSectionBlock } from "./AboutOverviewSection";
import { AboutUsCTASectionBlock } from "./AboutUsCTASection";
import { AlternatingServiceSectionsBlock } from "./AlternatingServiceSections";
import { BillingChallengesBlock } from "./BillingChallenges";
import { BillingIntelligenceBlock } from "./BillingIntelligence";
import { BillingProcessBlock } from "./BillingProcess";
import { BillingSolutionsBlock } from "./BillingSolutions";
import { ComparisonTableBlock } from "./ComparisonTable";
import { ComplianceCommitmentSectionBlock } from "./ComplianceCommitmentSection";
import { ConsultationCTABlock } from "./ConsultationCTA";
import { CoreValuesSectionBlock } from "./CoreValuesSection";
import { DenialCategoriesBlock } from "./DenialCategories";
import { EHRPartnersBlock } from "./EHRPartners";
import { ExpertiseCardGridBlock } from "./ExpertiseCardGrid";
import { FAQSectionBlock } from "./FAQSection";
import { NationwideBillingBlock } from "./NationwideBilling";
import { OurApproachSectionBlock } from "./OurApproachSection";
import { RCMSolutionsBlock } from "./RCMSolutions";
import { RevenueCTABlock } from "./RevenueCTA";
import { RevenueCTAWithTestimonialBlock } from "./RevenueCTAWithTestimonial";
import { RevenueLossReasonsBlock } from "./RevenueLossReasons";
import { ServiceGridWithImageBlock } from "./ServiceGridWithImage";
import { ServiceHeroBlock } from "./ServiceHero";
import { SimpleFeatureCardsBlock } from "./SimpleFeatureCards";
import { SmallPracticesBlock } from "./SmallPractices";
import { SoftwarePartnersBlock } from "./SoftwarePartners";
import { StateConsultationCTABlock } from "./StateConsultationCTA";
import { SuccessNumbersBlock } from "./SuccessNumbers";
import { TestimonialsBlock } from "./Testimonials";
import { TextFeatureGridBlock } from "./TextFeatureGrid";
import { WhyChooseUsSectionBlock } from "./WhyChooseUsSection";
import { WhyTrustABSBlock } from "./WhyTrustABS";
import { WhyWorkWithUsSectionBlock } from "./WhyWorkWithUsSection";

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
  ConsultationCTABlock,
  StateConsultationCTABlock,
  RevenueCTAWithTestimonialBlock,
  SmallPracticesBlock,
  RCMSolutionsBlock,
  RevenueLossReasonsBlock,
  BillingSolutionsBlock,
  BillingIntelligenceBlock,
  WhyChooseUsSectionBlock,
  WhyTrustABSBlock,
  WhyWorkWithUsSectionBlock,
  OurApproachSectionBlock,
  NationwideBillingBlock,
];

export {
  AboutOverviewSectionBlock,
  AboutUsCTASectionBlock,
  AlternatingServiceSectionsBlock,
  BillingChallengesBlock,
  BillingIntelligenceBlock,
  BillingProcessBlock,
  BillingSolutionsBlock,
  ComparisonTableBlock,
  ComplianceCommitmentSectionBlock,
  ConsultationCTABlock,
  CoreValuesSectionBlock,
  DenialCategoriesBlock,
  EHRPartnersBlock,
  ExpertiseCardGridBlock,
  FAQSectionBlock,
  NationwideBillingBlock,
  OurApproachSectionBlock,
  RCMSolutionsBlock,
  RevenueCTABlock,
  RevenueCTAWithTestimonialBlock,
  RevenueLossReasonsBlock,
  ServiceGridWithImageBlock,
  ServiceHeroBlock,
  SimpleFeatureCardsBlock,
  SmallPracticesBlock,
  SoftwarePartnersBlock,
  StateConsultationCTABlock,
  SuccessNumbersBlock,
  TestimonialsBlock,
  TextFeatureGridBlock,
  WhyChooseUsSectionBlock,
  WhyTrustABSBlock,
  WhyWorkWithUsSectionBlock,
};
