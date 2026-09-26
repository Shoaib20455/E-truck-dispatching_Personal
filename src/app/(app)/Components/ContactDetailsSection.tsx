import { AnimatedDiv, AnimatedHeading, AnimatedSection } from "./animation/MotionElements";

import ContactConsultationForm, { type ContactFormCopy } from "./ContactConsultationForm";
import ContactInformationPanel, { type ContactCard, type SocialLinkItem } from "./ContactInformationPanel";

type ContactDetailsSectionProps = {
  heading: string;
  information: {
    heading: string;
    description: string;
    cards: ContactCard[];
    socialLinks: SocialLinkItem[];
  };
  form: {
    heading: string;
    specialties: string[];
    states: string[];
    monthlyCollections: string[];
    copy: ContactFormCopy;
    privacyLabel: string;
    privacyLinkLabel: string;
    privacyHref: string;
    buttonText: string;
  };
};

export default function ContactDetailsSection({
  heading,
  information,
  form,
}: ContactDetailsSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <AnimatedHeading
          text={heading}
          className="mx-auto max-w-[660px] whitespace-pre-line text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl md:leading-[1.15]"
        />

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <AnimatedDiv preset="slide-left"><ContactInformationPanel {...information} /></AnimatedDiv>
          <AnimatedDiv preset="slide-right"><ContactConsultationForm {...form} /></AnimatedDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}
