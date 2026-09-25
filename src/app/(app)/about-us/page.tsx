import AboutOverviewSection from "../Components/AboutOverviewSection";
import AboutUsCTASection from "../Components/AboutUsCTASection";
import ComplianceCommitmentSection from "../Components/ComplianceCommitmentSection";
import CoreValuesSection from "../Components/CoreValuesSection";
import LeadershipExpertiseSection from "../Components/LeadershipExpertiseSection";
import OurApproachSection from "../Components/OurApproachSection";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import WhyWorkWithUsSection from "../Components/WhyWorkWithUsSection";
import ServiceHero from "../Components/ServiceHero";

export default function AboutUsPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Smart Solutions for Seamless Medical Billing"
        description="We are a trusted medical billing partner committed to improving your practice’s financial performance. With certified experts and advanced technology, we deliver accurate, efficient, and compliant billing solutions."
        backgroundImage="/about us/2_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <AboutOverviewSection />
      <CoreValuesSection />
      <LeadershipExpertiseSection />
      <ComplianceCommitmentSection />
      <OurApproachSection />
      <WhyChooseUsSection />
      <WhyWorkWithUsSection />
      <AboutUsCTASection />
    </main>
  );
}
