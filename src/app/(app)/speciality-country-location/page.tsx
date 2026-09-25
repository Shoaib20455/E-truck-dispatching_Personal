import BillingProcess from "../Components/BillingProcess";
import ComparisonTable from "../Components/ComparisonTable";
import EHRPartners from "../Components/EHRPartners";
import ExpertGuides from "../Components/ExpertGuides";
import FAQSection from "../Components/FAQSection";
import RCMSolutions from "../Components/RCMSolutions";
import RevenueCTA from "../Components/RevenueCTA";
import RevenueCTAWithTestimonial from "../Components/RevenueCTAWithTestimonial";
import ServiceGridWithImage from "../Components/ServiceGridWithImage";
import ServiceHero from "../Components/ServiceHero";
import StateRegions from "../Components/StateRegions";
import StateSupportGrid from "../Components/StateSupportGrid";
import SuccessNumbers from "../Components/SuccessNumbers";

export default function SpecialityCountryLocationPage() {
  return (
    <main>
      <ServiceHero
        heading="Pediatric Medical Billing Services Built for Revenue Stability of Pediatric Practices"
        description="Pediatric billing involves far more than submitting routine office claims. It includes well-child visits, vaccines, developmental screenings, Medicaid requirements, and newborn services. All these factors affect your pediatric medical billing process and revenue. Here is how Avenue Billing Services manages your complete pediatric revenue cycle:"
        backgroundImage="/RCM Services Location/2_rectangle_1893.png"
        highlights={[
          {
            text: "Complete Pediatric RCM: From eligibility verification and coding to claim submission and denial follow-up, we manage the full billing cycle.",
          },
          {
            text: "98.5% Clean Claim Rate: Our detailed claim reviews and payer-specific processes reduce errors and prevent denials.",
          },
          {
            text: "Pediatric-Focused Revenue Support: We handle well-child visits, immunizations, screenings, and newborn care, so your team can focus more on patient care.",
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

      <StateRegions
        heading="Major Florida Regions Covered by Avenue Billing Services"
        description="Serving healthcare providers across Florida with specialized medical billing, coding, and revenue cycle management solutions."
        image="/speciality state/7_rectangle_1955.png"
        imageAlt="Florida pediatric healthcare providers"
        regions={[
          {
            title: "South Florida",
            description:
              "Supporting providers with accurate billing and faster reimbursements across South Florida.",
          },
          {
            title: "Central-West Florida",
            description:
              "Helping practices improve cash flow and reduce claim denials throughout the region.",
          },
          {
            title: "Central Florida",
            description:
              "Delivering reliable revenue cycle management and billing support for growing practices.",
          },
          {
            title: "Northeast Florida",
            description:
              "Providing streamlined medical billing services to maximize collections and compliance.",
          },
        ]}
      />

      <ServiceGridWithImage
        heading="Our Best Pediatric Medical Billing Services"
        image="/RCM Services Location/53_rectangle_1896.png"
        imageAlt="Pediatric medical billing services"
        services={[
          {
            title: "Pediatric Claim Scrubbing & Submission",
            description:
              "We review pediatric claims before submission to catch missing details, coding conflicts, eligibility issues, and payer-specific edits. Claims are corrected and submitted through the appropriate clearinghouse workflow. This helps improve clean claim performance and reduce avoidable rejections.",
            highlighted: true,
          },
          {
            title: "Pediatric Denial Management & Appeals",
            description:
              "Our team reviews denied claims to identify the exact reason for nonpayment. We correct billing or coding issues, prepare required documentation, and submit appeals within payer deadlines. Ongoing follow-up helps recover revenue that might otherwise remain unpaid.",
          },
          {
            title: "Pediatric Medical Billing & Coding",
            description:
              "We manage billing and coding for well-child visits, vaccines, screenings, newborn care, acute visits, and chronic pediatric conditions. Our workflows also account for Medicaid, CHIP, VFC, and commercial payer requirements. This supports more accurate reimbursement across pediatric services.",
          },
          {
            title: "A/R Management & Revenue Reporting",
            description:
              "We track unpaid, underpaid, denied, and aging claims throughout the revenue cycle. Outstanding balances receive consistent follow-up while payment and denial trends are monitored. Clear reporting gives your practice better visibility into collections and areas requiring attention.",
          },
        ]}
      />

      <RevenueCTA
        heading="Ready to strengthen your Massachusetts practice revenue"
        description="Let our billing team optimize your claims, improve coding accuracy and reduce denials"
        backgroundImage="/RCM Services Location/66_1.png"
        primaryButtonText="Get Your Massachusetts Billing Assessment"
        primaryButtonHref="#"
        secondaryButtonText="Speak With a Billing Specialist"
        secondaryButtonHref="#"
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

      <ComparisonTable
        featureHeading="Feature / Benefit"
        avenueHeading="Avenue Billing Services"
        comparisonHeading="Typical In-House / General Billing"
        rows={[
          {
            feature: "Pediatric Billing Knowledge",
            avenue:
              "Our process is built around pediatric preventive care, vaccines, screening, Medicaid, and sick-visit billing",
            comparison:
              "General billing knowledge without dedicated pediatric focus",
          },
          {
            feature: "Claim Quality",
            avenue:
              "Claims reviewed before submission for coding, payer, demographic, and billing issues",
            comparison:
              "Errors often discovered after rejection or denial",
          },
          {
            feature: "Denial Management",
            avenue:
              "Root-cause analysis, correction, appeal tracking, and payer follow-up",
            comparison: "Denials are often handled reactively.",
          },
          {
            feature: "A/R Management",
            avenue:
              "Structured follow-up by payer, balance, age, denial status, and deadline",
            comparison:
              "Follow-up competes with front-office responsibilities.",
          },
          {
            feature: "Reporting",
            avenue:
              "Regular visibility into collections, A/R, denials, and payer trends",
            comparison: "Reporting depends on internal staff capacity",
          },
          {
            feature: "Staffing",
            avenue:
              "Dedicated billing resources without maintaining a full internal billing department",
            comparison:
              "Recruiting, salaries, training, turnover, and supervision remain with the practice",
          },
        ]}
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
        bottomText="If your pedriatric practice is using another EHR? Talk with our billing team about your current platform and billing audit."
        buttonText="Talk to an expert"
        buttonHref="#"
      />

      <StateSupportGrid
        heading="Pediatric Billing Support Across the U.S."
        description="We support U.S. pediatric practices with payer-focused medical billing accross all US States."
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
              "A preventive visit and a problem focused service require separate coding and documentation when both are performed. Incorrect modifier use or weak documentation often causes one service to be bundled or denied. Current AAP guidance addresses modifier 25 for qualifying separately identifiable E/M services.",
          },
          {
            question:
              "Why do pediatric practices face billing problems with vaccines and VFC claims?",
            answer:
              "Vaccine product codes, administration codes, counseling requirements, VFC eligibility, and payer-specific rules must align for clean reimbursement.",
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
              "Medicaid and CHIP programs follow state and payer-specific rules for eligibility, preventive services, vaccines, modifiers, and reimbursement.",
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
            imageAlt: "Medical billing resource",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing resource",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing resource",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing resource",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing resource",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing resource",
          },
        ]}
      />
    </main>
  );
}
