import AlternatingServiceSections from "../Components/AlternatingServiceSections";
import BillingSolutions from "../Components/BillingSolutions";
import EHRPartners from "../Components/EHRPartners";
import FAQSection from "../Components/FAQSection";
import MedicalBillingWorkflow from "../Components/MedicalBillingWorkflow";
import RevenueCTA from "../Components/RevenueCTA";
import RevenueLossReasons from "../Components/RevenueLossReasons";
import ServiceGridWithImage from "../Components/ServiceGridWithImage";
import ServiceHero from "../Components/ServiceHero";
import SimpleFeatureCards from "../Components/SimpleFeatureCards";
import SpecialtyBilling from "../Components/SpecialtyBilling";
import StateSupportGrid from "../Components/StateSupportGrid";

export default function CredentialsAndEnrollmentPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Provider Credentialing, Payer Enrollment & Hospital Privileging Services"
        description="From CAQH updates to payer enrollment and hospital privileging, we manage the entire credentialing workflow, allowing your providers to start seeing patients without delay."
        backgroundImage="/Medical Billing analysis/1_rectangle_1893.png"
        highlights={[
          { text: "NCQA-Aligned Credentialing" },
          { text: "Medicare & Medicaid Experts" },
          { text: "Commercial Payer Enrollment" },
          { text: "Hospital & Facility Privileging" },
        ]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
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

      <AlternatingServiceSections
        items={[
          {
            title: "Provider Credentialing (NCQA-Aligned)",
            description:
              "Full credentialing for physicians, mid-level providers, and facility-based clinicians.",
            image: "/Credentials & Enrollment/1_rectangle_595.png",
            imageAlt: "Provider credentialing services",
            bullets: [
              "Application preparation & submission",
              "Primary Source Verification (PSV)",
              "Medical education & training verification",
              "Board certification verification",
              "Work history validation",
              "Malpractice history review",
              "Sanctions check (OIG, SAM, NPDB)",
              "Ongoing re-credentialing support",
            ],
          },
          {
            title: "Payer Enrollment Services (Medicare, Medicaid & Commercial Plans)",
            description:
              "We enroll providers with all major payers, including BCBS, Aetna, Cigna, UnitedHealthcare, Humana, Medicare, Medicaid, TRICARE, Kaiser, WellCare and more.",
            image: "/Credentials & Enrollment/2_rectangle_595.png",
            imageAlt: "Payer enrollment services",
            bullets: [
              "New provider enrollment",
              "Group enrollment",
              "Revalidations (Medicare)",
              "Re-enrollment after gaps",
              "Termination & re-joining management",
              "Taxonomy / NPI alignment",
              "EFT / ERA setup",
              "PECOS support",
            ],
          },
          {
            title: "CAQH Profile Creation & Management",
            description:
              "Most payer delays start with inaccurate CAQH details.",
            image: "/Credentials & Enrollment/3_rectangle_595.png",
            imageAlt: "CAQH profile management",
            bullets: [
              "Document uploads",
              "Profile correctness",
              "Attestations (every 90 days)",
              "Demographic updates",
              "Credential discrepancies",
              "Payer access permissions",
            ],
          },
          {
            title: "Hospital Privileging Services",
            description:
              "Hospital onboarding is complex, slow, and high-risk for compliance. We simplify everything.",
            image: "/Credentials & Enrollment/4_rectangle_595.png",
            imageAlt: "Hospital privileging services",
            bullets: [
              "Hospital credentialing packet preparation",
              "Privilege form completion",
              "Case logs review",
              "Facility-specific checklists",
              "Committee updates",
              "Follow up with the medical staff offices",
              "Expiration management (licenses, DEA, CME)",
            ],
            footerText:
              "Hospitals supported: Local hospitals • ASC facilities • Surgery centers • Multi-hospital systems.",
          },
          {
            title: "Telehealth Licensing Support",
            description:
              "Streamlined telehealth licensing support that accelerates payer enrollment and enables confident multi-state virtual care.",
            image: "/Credentials & Enrollment/5_rectangle_595.png",
            imageAlt: "Telehealth licensing support",
            bullets: [
              "Telehealth payer enrollment",
              "Telehealth coding requirements",
              "Provider eligibility rules",
              "IMLC multi-state guidance",
              "Virtual care compliance alignment",
            ],
          },
        ]}
      />

      <ServiceGridWithImage
        variant="compact"
        heading="Credentialing & Enrollment Support"
        image="/Credentials & Enrollment/6_rectangle_767.png"
        imageAlt="Credentialing and enrollment support"
        services={[
          {
            title: "Provider Profile Setup",
            description: "Complete and accurate provider profiles created.",
            highlighted: true,
          },
          {
            title: "Primary Source Verification",
            description: "All credentials verified directly at source.",
          },
          {
            title: "Payer Enrollment Management",
            description: "Medicare, Medicaid, and commercial submissions tracked.",
          },
          {
            title: "Credential File Maintenance",
            description: "Clean files are maintained for audits.",
          },
          {
            title: "Payer Contracting Support",
            description: "Panels, fee schedules, and EFT handled.",
          },
          {
            title: "Hospital Privileging",
            description: "Privileges are prepared and coordinated smoothly.",
          },
          {
            title: "Recredentialing & Renewals",
            description: "Revalidations, renewals, and CME tracked.",
          },
          {
            title: "Compliance Documentation",
            description: "Audit-ready, payer-approved records maintained.",
          },
        ]}
      />

      <MedicalBillingWorkflow
        heading="Credentialing Workflow"
        centerImage="/Credentials & Enrollment/27_rectangle_457.png"
        centerImageAlt="Credentialing specialist"
        ringImage="/Medical Billing/3_rectangle_776.png"
        ringImageAlt=""
        leftSteps={[
          {
            label: "Provider Intake & Documentation Review",
            icon: "/Credentials & Enrollment/28_rectangle_459.png",
            iconAlt: "Provider intake",
            highlighted: true,
          },
          {
            label: "Primary Source Verification (PSV)",
            icon: "/Credentials & Enrollment/29_rectangle_470.png",
            iconAlt: "Primary source verification",
          },
          {
            label: "Submission to Medicare/Medicaid & Commercial Plans",
            icon: "/Credentials & Enrollment/30_rectangle_464.png",
            iconAlt: "Payer submission",
          },
          {
            label: "48–72 Hour Follow-Up Cadence",
            icon: "/Credentials & Enrollment/31_rectangle_471.png",
            iconAlt: "Follow-up cadence",
          },
          {
            label: "EFT / ERA Setup",
            icon: "/Medical Billing analysis/10_rectangle_477.png",
            iconAlt: "EFT ERA setup",
          },
        ]}
        rightSteps={[
          {
            label: "CAQH Setup / Attestation",
            icon: "/Credentials & Enrollment/33_rectangle_461.png",
            iconAlt: "CAQH setup",
          },
          {
            label: "Payer Enrollment Application Preparation",
            icon: "/Credentials & Enrollment/34_rectangle_472.png",
            iconAlt: "Payer enrollment application",
          },
          {
            label: "Hospital Privileging Submission",
            icon: "/Credentials & Enrollment/35_rectangle_478.png",
            iconAlt: "Hospital privileging submission",
          },
          {
            label: "Approval & Effective Date Confirmation",
            icon: "/Credentials & Enrollment/36_rectangle_465.png",
            iconAlt: "Approval confirmation",
          },
          {
            label: "Ongoing Maintenance & Re-Credentialing",
            icon: "/Credentials & Enrollment/37_rectangle_473.png",
            iconAlt: "Recredentialing maintenance",
          },
        ]}
        pricingBackgroundImage="/Medical Billing/16_rectangle_456.png"
        pricingHeading="Simple, Transparent Pricing"
        pricingDescription="We provide transparent, upfront pricing after reviewing your credentialing scope, no surprises, no long-term contracts."
        buttonText="Talk to a Credentialing Expert"
        buttonHref="#"
      />

      <SpecialtyBilling
        heading="Specialties We Credential Credentialing & Enrollment"
        description="We credential providers across 40+ specialties, including"
        buttonText="View All Specialties"
        buttonHref="#"
        secondaryButtonText="Talk To An Expert"
        secondaryButtonHref="#"
        specialties={[
          {
            title: "Cardiology Billing",
            icon: "/Medical Billing/17_rectangle_295.png",
            iconAlt: "Cardiology Billing",
            highlighted: true,
          },
          {
            title: "Dermatology Billing",
            icon: "/Medical Billing/18_rectangle_299.png",
            iconAlt: "Dermatology Billing",
          },
          {
            title: "Internal Medicine",
            icon: "/Medical Billing/19_rectangle_324.png",
            iconAlt: "Internal Medicine",
          },
          {
            title: "Behavioral Health",
            icon: "/Medical Billing/20_rectangle_297.png",
            iconAlt: "Behavioral Health",
          },
          {
            title: "Urgent Care",
            icon: "/Medical Billing/21_rectangle_299.png",
            iconAlt: "Urgent Care",
          },
          {
            title: "Orthopedic",
            icon: "/Medical Billing/22_rectangle_300.png",
            iconAlt: "Orthopedic",
          },
          {
            title: "Pain Management",
            icon: "/Medical Billing/23_rectangle_301.png",
            iconAlt: "Pain Management",
          },
          {
            title: "Pediatrics",
            icon: "/Medical Billing/24_rectangle_302.png",
            iconAlt: "Pediatrics",
          },
          {
            title: "Neurology",
            icon: "/Medical Billing/25_rectangle_303.png",
            iconAlt: "Neurology",
          },
          {
            title: "Radiology",
            icon: "/Medical Billing/26_rectangle_304.png",
            iconAlt: "Radiology",
          },
        ]}
      />

      <EHRPartners
        variant="compact"
        heading="Payers We Work With"
        description=""
        partners={[
          { logo: "/Medical Billing/42_rectangle_430.png", alt: "Kareo" },
          { logo: "/Medical Billing/43_rectangle_842.png", alt: "Claim.MD" },
          { logo: "/Medical Billing/44_rectangle_843.png", alt: "Apex EDI" },
          { logo: "/Medical Billing/45_rectangle_846.png", alt: "Osmind" },
          { logo: "/Medical Billing/46_rectangle_848.png", alt: "IntakeQ" },
        ]}
      />

      <SimpleFeatureCards
        heading="Facilities We Support for Privileging"
        items={[
          { title: "Hospitals" },
          { title: "Ambulatory Surgery Centers" },
          { title: "Urgent Care Systems" },
          { title: "Multi-location networks" },
          { title: "Behavioral health centers" },
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
        mapAlt="Credentialing services across USA map"
      />

      <BillingSolutions
        variant="outsource"
        heading="Benefits of Outsourcing Credentialing"
        solutions={[
          {
            title: "Faster Network Activation",
            description: "Aggressive follow-up = quicker approvals.",
            icon: "/Medical Billing/27_rectangle_402.png",
            iconAlt: "Faster Network Activation",
          },
          {
            title: "Immediate Revenue Growth",
            description: "Start billing sooner. Avoid credentialing gaps.",
            icon: "/Medical Billing/28_rectangle_403.png",
            iconAlt: "Immediate Revenue Growth",
          },
          {
            title: "Zero Admin Stress",
            description: "We manage your entire credentialing calendar.",
            icon: "/Medical Billing/29_rectangle_767.png",
            iconAlt: "Zero Admin Stress",
          },
        ]}
      />

      <RevenueCTA
        heading="Ready to Get Credentialed Faster?"
        description="Let our credentialing experts streamline your payer approvals and hospital privileging, so your providers can start seeing patients sooner."
        backgroundImage="/Medical Billing/30_99.png"
        primaryButtonText="Start Credentialing Today"
        primaryButtonHref="#"
        secondaryButtonText="Talk to a Credentialing Expert"
        secondaryButtonHref="#"
      />

      <FAQSection
        heading="Frequently Asked Questions"
        defaultOpenIndex={0}
        faqs={[
          {
            question: "How long does credentialing take?",
            answer:
              "Commercial payers: 30–90 days, Medicare: 45–60 days, Medicaid: 30–120 days, Hospital Privileging: 60–120 days.",
          },
          {
            question: "Do you manage CAQH?",
            answer:
              "Yes. We can manage CAQH profile setup, document uploads, attestations, demographic updates, credential discrepancies, and payer access permissions.",
          },
          {
            question: "Do you handle Medicare PECOS?",
            answer:
              "Yes. Medicare enrollment and revalidation support can include PECOS setup, application preparation, follow-up, and status tracking.",
          },
          {
            question: "Do you offer credentialing for telehealth providers?",
            answer:
              "Yes. We support telehealth payer enrollment, provider eligibility rules, virtual-care compliance alignment, coding requirements, and multi-state guidance.",
          },
          {
            question: "Can you manage ongoing expirations?",
            answer:
              "Yes. Ongoing credentialing support can track licenses, DEA, CME, renewals, revalidations, and re-credentialing deadlines.",
          },
        ]}
      />
    </main>
  );
}
