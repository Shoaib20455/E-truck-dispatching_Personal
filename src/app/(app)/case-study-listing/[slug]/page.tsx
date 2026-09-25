import CaseStudyApproachSection from "../../Components/CaseStudyApproachSection";
import CaseStudyBeforeAfterSection from "../../Components/CaseStudyBeforeAfterSection";
import CaseStudyPracticeSnapshot from "../../Components/CaseStudyPracticeSnapshot";
import CaseStudyProblemSection from "../../Components/CaseStudyProblemSection";
import CaseStudyResultsSection from "../../Components/CaseStudyResultsSection";
import CaseStudyTestimonialsSection from "../../Components/CaseStudyTestimonialsSection";
import CaseStudyWhatChangedSection from "../../Components/CaseStudyWhatChangedSection";
import CaseStudyWhyItMattersSection from "../../Components/CaseStudyWhyItMattersSection";
import ServiceHero from "../../Components/ServiceHero";

export default function CaseStudyListingDetailPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Medical Billing Case Study | Revenue Cycle Management | Florida"
        description="A growing Florida medical practice had no shortage of patients. Providers were busy, the schedule was full, and monthly visits were increasing. But the revenue was not moving at the same speed. Claims were getting delayed. Denials were stacking up. Old A/R kept growing. The practice could see unpaid revenue in reports, but the billing workflow was too messy to recover it fast. That is when the practice partnered with Avenue Billing Services."
        backgroundImage="/contact us/2_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <CaseStudyPracticeSnapshot />
      <CaseStudyProblemSection />
      <CaseStudyApproachSection />
      <CaseStudyWhatChangedSection />
      <CaseStudyResultsSection />
      <CaseStudyBeforeAfterSection />
      <CaseStudyTestimonialsSection />
      <CaseStudyWhyItMattersSection />
    </main>
  );
}
