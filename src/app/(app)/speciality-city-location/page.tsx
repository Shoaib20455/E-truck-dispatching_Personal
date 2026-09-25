import BillingProcess from "../Components/BillingProcess";
import BillingSolutions from "../Components/BillingSolutions";
import ComparisonTable from "../Components/ComparisonTable";
import EHRPartners from "../Components/EHRPartners";
import ExpertGuides from "../Components/ExpertGuides";
import FAQSection from "../Components/FAQSection";
import RCMSolutions from "../Components/RCMSolutions";
import RevenueCTA from "../Components/RevenueCTA";
import RevenueCTAWithTestimonial from "../Components/RevenueCTAWithTestimonial";
import RevenueLossReasons from "../Components/RevenueLossReasons";
import ServiceHero from "../Components/ServiceHero";
import StateSupportGrid from "../Components/StateSupportGrid";
import SuccessNumbers from "../Components/SuccessNumbers";

export default function SpecialityCityLocationPage() {
  return (
    <main>
      <ServiceHero
        heading="Pediatric Medical Billing Services Built for Revenue Stability of Pediatric Practices"
        description="Pediatric billing involves far more than submitting routine office claims. It includes well-child visits, vaccines, developmental screenings, Medicaid requirements, and newborn services. All these factors affect your pediatric medical billing process and revenue."
        backgroundImage="/RCM Services Location/2_rectangle_1893.png"
        highlights={[
          { text: "Complete Pediatric RCM: We manage the full billing cycle." },
          {
            text: "98.5% Clean Claim Rate: Detailed claim reviews and payer-specific processes reduce errors and prevent denials.",
          },
          {
            text: "Pediatric-Focused Revenue Support: Well-child visits, immunizations, screenings, and newborn care.",
          },
          {
            text: "Specialty-focused billing support for growing pediatric practices.",
          },
        ]}
        reviews={[
          {
            logo: "/RCM Services Location/61_rectangle_1897.png",
            alt: "Clutch",
            rating: "★★★★★",
          },
          {
            logo: "/RCM Services Location/41_rectangle_1899.png",
            alt: "Google",
            rating: "★★★★★",
          },
          {
            logo: "/RCM Services Location/47_rectangle_1901.png",
            alt: "Testimonial",
            rating: "★★★★★",
          },
          {
            logo: "/RCM Services Location/34_rectangle_1897.png",
            alt: "Trustpilot",
            rating: "★★★★★",
          },
        ]}
        formHeading="Ready to Improve Your Pediatric Billing Workflow?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <RevenueLossReasons
        heading="Why Does a Pediatric Practice Lose Revenue?"
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
              {
                label: "Medicaid, CHIP & Commercial",
                value: "3+ Payer Types",
              },
            ],
          },
          {
            items: [
              { label: "Aging A/R Reduction", value: "35%" },
              {
                label: "End-to-End Billing Support",
                value: "6+ RCM Functions",
              },
            ],
          },
        ]}
      />

      <BillingSolutions
        heading="Pediatric Billing Solutions"
        solutions={[
          {
            title: "Complex Pediatric Payer Rules",
            description:
              "Commercial insurance, Medicaid, CHIP, managed Medicaid plans, and other payers follow distinct coverage, authorization, filing, and reimbursement rules. Our team checks payer requirements before they turn into avoidable denials.",
            icon: "/RCM Services Location/4_rectangle_8362.png",
            iconAlt: "Complex pediatric payer rules",
            highlighted: true,
          },
          {
            title: "Preventive & Sick Visit Coding",
            description:
              "A routine well-child visit sometimes includes a separately identifiable service. Proper documentation, diagnosis selection, and modifier use are essential when reporting both services.",
            icon: "/RCM Services Location/5_rectangle_8363.png",
            iconAlt: "Preventive and sick visit coding",
          },
          {
            title: "Vaccine Billing Errors",
            description:
              "Vaccine product codes, administration codes, counseling requirements, VFC vaccines, patient eligibility, and payer rules create frequent opportunities for underbilling or rejection.",
            icon: "/RCM Services Location/6_rectangle_8364.png",
            iconAlt: "Vaccine billing errors",
          },
          {
            title: "Aging Pediatric A/R",
            description:
              "Unworked denials and pending claims quickly move into older A/R buckets. Structured follow-up keeps claims from sitting unpaid while filing and appeal deadlines approach.",
            icon: "/RCM Services Location/7_rectangle_8365.png",
            iconAlt: "Aging pediatric accounts receivable",
          },
        ]}
      />

      <RevenueCTA
        heading="Ready to Improve Your South Carolina Practice Revenue?"
        description="Let our billing team optimize your claims, fix denials, and strengthen collections."
        backgroundImage="/RCM Services Location/62_99.png"
        primaryButtonText="Get Free Billing Audit"
        primaryButtonHref="#"
        secondaryButtonText="Get Pricing"
        secondaryButtonHref="#"
      />

      <RCMSolutions
        variant="procedure"
        heading="Our Pediatric Billing Solutions for Procedure-Focused Services"
        services={[
          {
            title: "Well-Child Checkups",
            icon: "/Small Practices/58_rectangle_324.png",
            iconAlt: "Well-child checkups",
            highlighted: true,
          },
          {
            title: "Pediatric Vaccinations",
            icon: "/Small Practices/59_rectangle_325.png",
            iconAlt: "Pediatric vaccinations",
          },
          {
            title: "Newborn Circumcision",
            icon: "/Small Practices/60_rectangle_326.png",
            iconAlt: "Newborn circumcision",
          },
          {
            title: "Cardiac Catheterization",
            icon: "/Small Practices/61_rectangle_790.png",
            iconAlt: "Cardiac catheterization",
          },
          {
            title: "Kidney Biopsy",
            icon: "/Small Practices/62_rectangle_299.png",
            iconAlt: "Kidney biopsy",
          },
          {
            title: "Nasal Endoscopy",
            icon: "/Small Practices/57_rectangle_297.png",
            iconAlt: "Nasal endoscopy",
          },
          {
            title: "Inguinal Hernia Repair",
            icon: "/Small Practices/66_rectangle_319.png",
            iconAlt: "Inguinal hernia repair",
          },
          {
            title: "Umbilical Hernia Repair",
            icon: "/Small Practices/63_rectangle_300.png",
            iconAlt: "Umbilical hernia repair",
          },
          {
            title: "Pediatric Laparoscopy",
            icon: "/Small Practices/67_rectangle_303.png",
            iconAlt: "Pediatric laparoscopy",
          },
          {
            title: "Bone Marrow Aspiration & Biopsy",
            icon: "/Small Practices/68_rectangle_304.png",
            iconAlt: "Bone marrow aspiration and biopsy",
          },
          {
            title: "G-Tube / GJ-Tube Exchange",
            icon: "/Small Practices/65_rectangle_305.png",
            iconAlt: "G-Tube and GJ-Tube exchange",
          },
          {
            title: "Newborn Screening Tests",
            icon: "/Small Practices/64_rectangle_302.png",
            iconAlt: "Newborn screening tests",
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
        backgroundImage="/RCM Services Location/13_1.png"
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

      <BillingProcess
        heading="Our Pediatric Billing Process For Your Success"
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

      <StateSupportGrid
        heading="Pediatric Billing Support Across the U.S."
        description="We support U.S. pediatric practices with payer-focused medical billing across all US States."
        states={[
          "Delaware",
          "Pennsylvania",
          "New Jersey",
          "Florida",
          "New York",
          "Maryland",
          "Georgia",
        ]}
        buttonText="View More"
        buttonHref="#"
      />

      <FAQSection
        heading="Frequently Asked Questions About Pediatric Medical Billing Services"
        defaultOpenIndex={0}
        faqs={[
          {
            question:
              "Why are well-child visits denied when a sick condition is treated during the same appointment?",
            answer:
              "A preventive visit and a problem focused service require separate coding and documentation when both are performed. Incorrect modifier use or weak documentation often causes one service to be bundled or denied.",
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
