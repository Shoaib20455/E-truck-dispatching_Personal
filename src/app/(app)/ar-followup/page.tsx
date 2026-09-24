import BillingChallenges from "../Components/BillingChallenges";
import BillingProcess from "../Components/BillingProcess";
import BillingSolutions from "../Components/BillingSolutions";
import ComparisonTable from "../Components/ComparisonTable";
import ConsultationCTA from "../Components/ConsultationCTA";
import EHRPartners from "../Components/EHRPartners";
import ExpertGuides from "../Components/ExpertGuides";
import FAQSection from "../Components/FAQSection";
import MedicalBillingWorkflow from "../Components/MedicalBillingWorkflow";
import RevenueCTAWithTestimonial from "../Components/RevenueCTAWithTestimonial";
import RevenueLossReasons from "../Components/RevenueLossReasons";
import ServiceHero from "../Components/ServiceHero";
import StateSupportGrid from "../Components/StateSupportGrid";
import SuccessNumbers from "../Components/SuccessNumbers";
import Testimonials from "../Components/Testimonials";
import TextFeatureGrid from "../Components/TextFeatureGrid";

export default function ARFollowupPage() {
  return (
    <main>
      <ServiceHero
        heading="Pediatric Medical Billing Services Built for Revenue Stability of Pediatric Practices"
        description="Pediatric billing involves far more than submitting routine office claims. It includes well-child visits, vaccines, developmental screenings, Medicaid requirements, and newborn services. All these factors affect your pediatric medical billing process and revenue."
        backgroundImage="/RCM Services Location/2_rectangle_1893.png"
        highlights={[
          { text: "Complete Pediatric RCM: We manage the full billing cycle." },
          { text: "98.5% Clean Claim Rate: Detailed claim reviews and payer-specific processes reduce errors and prevent denials." },
          { text: "Pediatric-Focused Revenue Support: Well-child visits, immunizations, screenings, and newborn care." },
          { text: "Specialty-focused billing support for growing pediatric practices." },
        ]}
        formHeading="Ready to Improve Your Pediatric Billing Workflow?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <RevenueLossReasons
        heading="Why Providers Trust Our Medical Billing Audit Experts"
        descriptionOne="Pediatric practices handle a high volume of preventive and problem-oriented care during the same patient encounter. Each service carries its own documentation, coding, and payer requirements. So, attention to all these parameters while billing is important for smooth pediatric billing."
        descriptionTwo="Revenue starts leaking when eligibility is not verified before providing pediatric services. Incorrect vaccine coding and missed modifiers also trigger denials and underpayments. Medicaid requirements add another layer, especially when payer rules are overlooked. Denied claims create more pressure when they remain unresolved in aging A/R."
        image="/RCM Services Location/3_rectangle_8361.png"
        imageAlt="Revenue cycle management"
        cards={[
          {
            title: "Complex Payer Rules:",
            description:
              "Constantly changing insurance guidelines and specialty-specific policies lead to high rates of initial claim rejections.",
            icon: "/RCM Services Location/4_rectangle_8362.png",
            iconAlt: "Complex payer rules",
            highlighted: true,
          },
          {
            title: "Coding Inaccuracies:",
            description:
              "Minor errors in medical coding or missing modifiers can result in underpayments or outright claim denials.",
            icon: "/RCM Services Location/5_rectangle_8363.png",
            iconAlt: "Coding inaccuracies",
          },
          {
            title: "Lagging Follow-Ups:",
            description:
              "Inadequate tracking of aging accounts receivable allows overdue claims to slip through the cracks permanently.",
            icon: "/RCM Services Location/6_rectangle_8364.png",
            iconAlt: "Lagging follow-ups",
          },
          {
            title: "Administrative Burnout:",
            description:
              "Overburdened internal staff struggle to manage patient care alongside aggressive accounts receivable collection efforts.",
            icon: "/RCM Services Location/7_rectangle_8365.png",
            iconAlt: "Administrative burnout",
          },
        ]}
      />

      <BillingChallenges
        heading="Biggest Medical Billing Challenges for Healthcare Providers"
        challenges={[
          {
            title: "Automated Claim Denials",
            description:
              "12% to 22% of medical billing claims are now being denied across U.S. healthcare specialties because of insurance companies' AI-powered claim review systems. As a result, traditional billing models are struggling to survive in this rapidly evolving automated global healthcare environment.",
            icon: "/Home/6_rectangle_255.png",
            iconAlt: "Automated claim denials",
          },
          {
            title: "The Patient Payment Crisis",
            description:
              "30% to 40% of patient-billed revenue is now being lost as bad debt. High-deductible health plans have shifted financial responsibility from insurance companies directly to patients.",
            icon: "/Home/7_rectangle_256.png",
            iconAlt: "Patient payment crisis",
          },
          {
            title: "Prior Authorization Delays",
            description:
              "Prior authorizations continue to slow down healthcare operations and increase administrative pressure on providers. Clinical staff spend significant time managing approvals and documentation requirements.",
            icon: "/Home/8_rectangle_257.png",
            iconAlt: "Prior authorization delays",
          },
          {
            title: "Billing System Fragmentation",
            description:
              "Disconnected billing systems are draining healthcare revenue. Outdated EHRs and modern RCM software often fail to communicate with each other, forcing staff into manual double-entry.",
            icon: "/Home/9_rectangle_259.png",
            iconAlt: "Billing system fragmentation",
          },
          {
            title: "Documentation Gaps",
            description:
              "Overburdened billing staff or weak billing processes can lead to documentation mismatches, medical necessity issues, audits, and denials.",
            icon: "/Home/10_rectangle_261.png",
            iconAlt: "Documentation gaps",
          },
          {
            title: "Credentialing Delays",
            description:
              "Credentialing delays slow payer enrollment and can create significant revenue losses when providers treat patients before payer activation is complete.",
            icon: "/Home/11_rectangle_260.png",
            iconAlt: "Credentialing delays",
          },
        ]}
      />

      <SuccessNumbers
        heading="Our Success Numbers"
        columns={[
          {
            items: [
              { label: "Pediatric Clean Claim", value: "98.5%" },
              { label: "Lower Billing Costs", value: "Up to 50%" },
            ],
          },
          {
            items: [
              { label: "Collection Ratio", value: "96%" },
              { label: "Pediatric Billing Coverage", value: "100%" },
            ],
          },
          {
            items: [
              { label: "Average A/R Cycle", value: "24 Days" },
              { label: "Medicaid, CHIP & Commercial", value: "3+ Payer Types" },
            ],
          },
          {
            items: [
              { label: "Aging A/R Reduction", value: "35%" },
              { label: "End-to-End Billing Support", value: "6+ RCM Functions" },
            ],
          },
        ]}
      />

      <MedicalBillingWorkflow
        heading="Our Billing Audit Process"
        centerImage="/Medical Billing analysis/5_rectangle_457.png"
        centerImageAlt="Medical billing audit specialist"
        ringImage="/Medical Billing/3_rectangle_776.png"
        ringImageAlt=""
        leftSteps={[
          {
            label: "Data Intake & Scope Definition",
            icon: "/Medical Billing/5_rectangle_459.png",
            iconAlt: "Data intake and scope definition",
            highlighted: true,
          },
          {
            label: "Coding Validation",
            icon: "/Denial Management/11_rectangle_465.png",
            iconAlt: "Coding validation",
          },
          {
            label: "Claim Scrubbing Analysis",
            icon: "/Medical Billing/7_rectangle_464.png",
            iconAlt: "Claim scrubbing analysis",
          },
          {
            label: "Payment Accuracy Review",
            icon: "/Medical Billing/8_rectangle_471.png",
            iconAlt: "Payment accuracy review",
          },
          {
            label: "Audit Findings Report",
            icon: "/Medical Billing analysis/23_rectangle_477.png",
            iconAlt: "Audit findings report",
          },
        ]}
        rightSteps={[
          {
            label: "Documentation Review",
            icon: "/Medical Billing/10_rectangle_461.png",
            iconAlt: "Documentation review",
          },
          {
            label: "Charge Capture Review",
            icon: "/Medical Billing analysis/25_rectangle_472.png",
            iconAlt: "Charge capture review",
          },
          {
            label: "Denial Pattern Assessment",
            icon: "/Medical Billing/12_rectangle_478.png",
            iconAlt: "Denial pattern assessment",
          },
          {
            label: "Compliance Screening",
            icon: "/Medical Billing analysis/27_rectangle_465.png",
            iconAlt: "Compliance screening",
          },
          {
            label: "Corrective Action Plan (CAP)",
            icon: "/Medical Billing/14_rectangle_473.png",
            iconAlt: "Corrective action plan",
          },
        ]}
        pricingBackgroundImage="/Medical Billing/16_rectangle_456.png"
        pricingHeading="Simple, Transparent Audit Pricing"
        pricingDescription={"Most practices pay one flat audit fee based on the sample size and scope.\nNo hidden charges. No lock-in contracts."}
        buttonText="Get a Custom Audit Quote"
        buttonHref="#"
      />

      <BillingProcess
        heading="Our Pedriatric Billing Process For Your Success"
        image="/RCM Services Location/12_rectangle_1923.png"
        imageAlt="Pediatric billing process"
        steps={[
          {
            number: "1",
            title: "Patient Registration & Eligibility Verification",
            description:
              "We validate patient demographics, active coverage, plan details, copays, deductibles, referral requirements, and authorization requirements before billing begins.",
          },
          {
            number: "2",
            title: "Documentation & Pediatric Coding Review",
            description:
              "Clinical documentation is matched with the appropriate diagnosis, CPT, HCPCS, modifier, vaccine, screening, and E/M coding requirements.",
          },
          {
            number: "3",
            title: "Claim Scrubbing & Submission",
            description:
              "Claims pass through pre-submission checks for coding conflicts, demographic errors, payer edits, missing information, duplicate billing, and other rejection triggers.",
          },
        ]}
      />

      <TextFeatureGrid
        heading="Pediatric Billing Solutions"
        items={[
          {
            title: "Strengthen Claim Scrubbing Before Submission",
            description:
              "Pediatric claims should be reviewed before they reach the payer. Missing information, coding conflicts, duplicate services, eligibility issues, and billing edits should be corrected early. A strong pre-submission review process reduces preventable rejections and keeps claims moving toward payment.",
            highlighted: true,
          },
          {
            title: "Fix Denials at the Root Cause",
            description:
              "Denied claims should not be resubmitted without understanding why they failed. Each denial should be traced back to its coding, documentation, eligibility, authorization, or payer-rule issue. Correcting the root cause and tracking appeal deadlines prevents the same problems from repeating.",
          },
          {
            title: "Build Pediatric-Specific Billing Systems",
            description:
              "Pediatric billing works better when processes reflect the services children actually receive. Well-child exams, immunizations, screenings, newborn care, acute visits, and chronic conditions require accurate coding and payer-specific handling.",
          },
          {
            title: "Improve Revenue Visibility",
            description:
              "Practices need a clear view of what has been submitted, paid, denied, appealed, or left outstanding. Regular reporting should highlight aging claims, denial trends, underpayments, and collection gaps.",
            highlighted: true,
          },
        ]}
      />

      <ConsultationCTA
        heading="Pediatric Practices Across the US Trust Us"
        description="Pediatric practitioners and organizations across the U.S. trust Avenue Billing Services for specialized pediatric billing support. Our pediatric billing experts cover well-child visits, immunizations, developmental screenings, and newborn care across Medicaid, CHIP, and commercial payers."
        backgroundImage="/RCM Services Location/63_2.png"
        formHeading="Claim Your Free Consultation"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        practicePlaceholder="Practice Name"
        buttonText="Request a Free Quote"
        logos={[
          {
            image: "/RCM Services Location/64_container.png",
            alt: "Healthcare client",
          },
          {
            image: "/RCM Services Location/65_container.png",
            alt: "Healthcare client",
          },
        ]}
      />

      <StateSupportGrid
        variant="map"
        heading="Medical Billing Audit Services Across the USA"
        states={[
          "New York",
          "North Carolina",
          "Florida",
          "South Carolina",
          "Massachusetts",
          "Alabama",
          "New Jersey",
          "California",
        ]}
        highlightedState="New York"
        buttonText="View All Locations"
        buttonHref="#"
        mapImage="/Medical Billing/33_rectangle_135.png"
        mapAlt="Medical billing services across USA map"
      />

      <BillingSolutions
        variant="outsource"
        heading="Benefits of Outsourcing Credentialing"
        solutions={[
          {
            title: "Faster Network Activation",
            description: "Aggressive follow-up = quicker approvals.",
            icon: "/Medical Billing/27_rectangle_402.png",
            iconAlt: "Faster network activation",
          },
          {
            title: "Immediate Revenue Growth",
            description: "Start billing sooner. Avoid credentialing gaps.",
            icon: "/Medical Billing/28_rectangle_403.png",
            iconAlt: "Immediate revenue growth",
          },
          {
            title: "Zero Admin Stress",
            description: "We manage your entire credentialing calendar.",
            icon: "/Medical Billing/29_rectangle_767.png",
            iconAlt: "Zero admin stress",
          },
        ]}
      />

      <ComparisonTable
        heading="Why Pediatric Practices Prefer Avenue Billing Services?"
        featureHeading="Feature / Benefit"
        avenueHeading="Avenue Billing Services"
        comparisonHeading="Typical In-House / General Billing"
        rows={[
          {
            feature: "Pediatric Billing Knowledge",
            avenue:
              "Our process is built around pediatric preventive care, vaccines, screening, Medicaid, and sick-visit billing.",
            comparison:
              "General billing knowledge without dedicated pediatric focus.",
          },
          {
            feature: "Claim Quality",
            avenue:
              "Claims reviewed before submission for coding, payer, demographic, and billing issues.",
            comparison: "Errors often discovered after rejection or denial.",
          },
          {
            feature: "Denial Management",
            avenue:
              "Root-cause analysis, correction, appeal tracking, and payer follow-up.",
            comparison: "Denials are often handled reactively.",
          },
          {
            feature: "A/R Management",
            avenue:
              "Structured follow-up by payer, balance, age, denial status, and deadline.",
            comparison:
              "Follow-up competes with front-office responsibilities.",
          },
          {
            feature: "Reporting",
            avenue:
              "Regular visibility into collections, A/R, denials, and payer trends.",
            comparison: "Reporting depends on internal staff capacity.",
          },
          {
            feature: "Staffing",
            avenue:
              "Dedicated billing resources without maintaining a full internal billing department.",
            comparison:
              "Recruiting, salaries, training, turnover, and supervision remain with the practice.",
          },
        ]}
      />

      <RevenueCTAWithTestimonial
        heading="Get More From Your Pediatric Practice Revenue"
        description="Your focus should stay on children and families, not on unpaid claims and billing delays. Avenue Billing Services manages pediatric billing with greater consistency and accuracy."
        backgroundImage="/RCM Services Location/66_1.png"
        primaryButtonText="Request a Free Consultation"
        primaryButtonHref="#"
        secondaryButtonText="Talk to a Pediatric Billing Expert"
        secondaryButtonHref="#"
        testimonial={{
          image: "/RCM Services Location/15_ellipse_293.png",
          imageAlt: "Dr. Michael R.",
          name: "Dr. Michael R.",
          role: "Physician at PEDCARE",
          quote:
            "Avenue Billing Services understands the billing challenges pediatric practices face. Their attention to claim accuracy, payer requirements, and denial follow-up has improved the consistency of our revenue cycle.",
          ratingImage: "/RCM Services Location/34_rectangle_1897.png",
          ratingAlt: "5 star rating",
        }}
      />

      <EHRPartners
        heading="We Work With Leading EHR & Practice Management Systems"
        description="Our billing team works with established medical EHR and practice management platforms so your practice does not need to rebuild its workflow simply to outsource billing."
        partners={[
          {
            logo: "/RCM Services Location/16_rectangle_859.png",
            alt: "athenahealth",
          },
          {
            logo: "/RCM Services Location/17_rectangle_850.png",
            alt: "AdvancedMD",
          },
          {
            logo: "/RCM Services Location/18_rectangle_849.png",
            alt: "eClinicalWorks",
          },
          {
            logo: "/RCM Services Location/19_rectangle_853.png",
            alt: "Tebra",
          },
          {
            logo: "/RCM Services Location/20_rectangle_854.png",
            alt: "NextGen",
          },
          {
            logo: "/RCM Services Location/21_rectangle_1923.png",
            alt: "Office Ally",
          },
        ]}
        bottomText="If your pediatric practice is using another EHR, talk with our billing team about your current platform and billing audit."
        buttonText="Talk to an expert"
        buttonHref="#"
      />

      <Testimonials
        heading="What Healthcare Practices Say About Us"
        testimonials={[
          {
            name: "Dr. Emily Carter",
            role: "Pediatrician | BrightCare Pediatrics",
            image: "/RCM Services Location/29_ellipse_291.png",
            imageAlt: "Dr. Emily Carter",
            ratingImage: "/RCM Services Location/34_rectangle_1897.png",
            ratingAlt: "5 star rating",
            quote:
              "Avenue Billing Services has made our pediatric billing process much more organized. Their team understands well-child visits, immunizations, payer requirements, and denial follow-up.",
          },
          {
            name: "Jessica Reynold",
            role: "Practice Manager | Little Steps Pediatric Clinic",
            image: "/RCM Services Location/32_ellipse_292.png",
            imageAlt: "Jessica Reynold",
            ratingImage: "/RCM Services Location/34_rectangle_1897.png",
            ratingAlt: "5 star rating",
            quote:
              "The biggest improvement has been consistency. Claims are reviewed carefully, denials are followed up on, and aging balances no longer sit untouched.",
          },
          {
            name: "Dr. Daniel Mitchell",
            role: "Medical Director | Growing Kids Pediatrics",
            image: "/RCM Services Location/31_ellipse_293.png",
            imageAlt: "Dr. Daniel Mitchell",
            ratingImage: "/RCM Services Location/34_rectangle_1897.png",
            ratingAlt: "5 star rating",
            quote:
              "Pediatric billing comes with its own challenges, especially with Medicaid, preventive services, and vaccinations.",
          },
        ]}
      />

      <FAQSection
        heading="Frequently Asked Questions About Pediatric Medical Billing Services"
        defaultOpenIndex={0}
        faqs={[
          {
            question:
              "Why are well-child visits denied when a sick condition is treated during the same appointment?",
            answer:
              "A preventive visit and a problem focused service require separate coding and documentation when both are performed.",
          },
          {
            question:
              "Why do pediatric practices face billing problems with vaccines and VFC claims?",
            answer:
              "Vaccine product codes, administration codes, counseling requirements, VFC eligibility, and payer-specific rules must all align for clean reimbursement.",
          },
          {
            question:
              "Why are developmental and behavioral screenings sometimes denied or underpaid?",
            answer:
              "Screenings can be denied when documentation, diagnosis linkage, coding, frequency limits, or payer-specific requirements are incomplete.",
          },
          {
            question:
              "How do Medicaid and CHIP requirements affect pediatric billing?",
            answer:
              "Medicaid and CHIP programs follow state and payer-specific rules for eligibility, preventive services, vaccines, EPSDT requirements, modifiers, and reimbursement.",
          },
          {
            question:
              "Why do newborn claims get rejected even when the baby has Medicaid coverage?",
            answer:
              "Newborn claims can fail when enrollment, member identification, demographic data, effective dates, or payer records are not fully synchronized.",
          },
          {
            question:
              "Why does pediatric A/R continue growing despite a high patient volume?",
            answer:
              "High volume does not prevent aging A/R when denials, underpayments, pending claims, and unresolved payer issues are not followed consistently.",
          },
        ]}
      />

      <ExpertGuides
        heading="Pediatric Billing Insights & Resources"
        guides={[
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing guide",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing guide",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing guide",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing guide",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing guide",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing guide",
          },
        ]}
      />
    </main>
  );
}
