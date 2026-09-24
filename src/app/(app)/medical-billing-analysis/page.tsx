import BillingSolutions from "../Components/BillingSolutions";
import DenialCategories from "../Components/DenialCategories";
import EHRPartners from "../Components/EHRPartners";
import FAQSection from "../Components/FAQSection";
import MedicalBillingWorkflow from "../Components/MedicalBillingWorkflow";
import RevenueCTA from "../Components/RevenueCTA";
import RevenueLossReasons from "../Components/RevenueLossReasons";
import ServiceGridWithImage from "../Components/ServiceGridWithImage";
import ServiceHero from "../Components/ServiceHero";
import SpecialtyBilling from "../Components/SpecialtyBilling";
import StateSupportGrid from "../Components/StateSupportGrid";

export default function MedicalBillingAnalysisPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Medical Billing Audit Services That Protect Your Revenue & Ensure Compliance"
        description="Our expert audit team analyzes your entire billing cycle to uncover coding errors, missed revenue, payer issues, and compliance risks before they affect your practice."
        backgroundImage="/Medical Billing analysis/1_rectangle_1893.png"
        highlights={[
          { text: "HIPAA-Compliant Audit Process" },
          { text: "Certified ICD-10/CPT Auditors" },
          { text: "360° Revenue Cycle Review" },
          { text: "Coding & Compliance Accuracy" },
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
        descriptionOne="Medical billing audits give providers a clear view of revenue leakage, coding weaknesses, payer-related errors, and compliance risks across the complete billing process."
        descriptionTwo="Our audit team reviews claim accuracy, documentation, coding, payer requirements, denials, and A/R trends to identify where revenue is being lost and where workflow corrections are needed."
        image="/RCM Services Location/3_rectangle_8361.png"
        imageAlt="Revenue cycle management"
        cards={[
          {
            title: "Complex Payer Rules:",
            description:
              "Changing insurance guidelines and payer-specific requirements create avoidable billing errors.",
            icon: "/RCM Services Location/4_rectangle_8362.png",
            iconAlt: "Complex payer rules",
            highlighted: true,
          },
          {
            title: "Coding Inaccuracies:",
            description:
              "Incorrect codes or modifiers can cause denials, underpayments, and compliance concerns.",
            icon: "/RCM Services Location/5_rectangle_8363.png",
            iconAlt: "Coding inaccuracies",
          },
          {
            title: "Lagging Follow-Ups:",
            description:
              "Unworked claims and aging balances reduce revenue visibility and delay collections.",
            icon: "/RCM Services Location/6_rectangle_8364.png",
            iconAlt: "Lagging follow-ups",
          },
          {
            title: "Administrative Burnout:",
            description:
              "Overloaded internal teams often struggle to review billing performance in depth.",
            icon: "/RCM Services Location/7_rectangle_8365.png",
            iconAlt: "Administrative burnout",
          },
        ]}
      />

      <ServiceGridWithImage
        variant="compact"
        heading="Comprehensive Billing Audit Services"
        image="/Medical Billing analysis/3_rectangle_767.png"
        imageAlt="Comprehensive medical billing audit services"
        services={[
          {
            title: "Coding Accuracy Audit",
            description: "ICD-10, CPT, HCPCS, modifiers, NCCI edits checked.",
            highlighted: true,
          },
          {
            title: "Documentation & Medical Review",
            description: "Validates provider notes to support billed services.",
          },
          {
            title: "Charge Capture Audit",
            description: "Identifies missed charges, duplicate charges, and incorrect units.",
          },
          {
            title: "Claim Accuracy & Compliance Review",
            description: "Reviews claim fields, payer edits, bundling and unbundling errors.",
          },
          {
            title: "Denial Pattern Audit",
            description: "Finds root causes behind recurring denials.",
          },
          {
            title: "RCM Workflow Audit",
            description: "Reviews eligibility, coding, authorization, A/R, posting and reporting.",
          },
          {
            title: "A/R & Underpayment Audit",
            description: "Identifies unpaid claims and incorrect payer reimbursements.",
          },
          {
            title: "Corrective Action Planning",
            description: "Delivers recommendations, SOP updates and risk-mitigation steps.",
          },
        ]}
      />

      <DenialCategories
        heading="Which Type of Medical Billing Audit Do You Need?"
        categories={[
          {
            title: "Prospective\n(Pre-Bill) Audit",
            description:
              "Prevent errors before claims are submitted and reduce avoidable denials.",
            highlighted: true,
          },
          {
            title: "Retrospective\n(Post-Bill) Audit",
            description:
              "Review historical claims to identify coding, payment and compliance issues.",
          },
          {
            title: "Risk-Based\nAudit",
            description:
              "Target high-risk areas, payer concerns and specialty-specific billing issues.",
          },
          {
            title: "Full RCM\nAudit",
            description:
              "Deep review of your entire revenue cycle from documentation through A/R.",
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
            label: "Claim & Audit Scope Definition",
            icon: "/Medical Billing/5_rectangle_459.png",
            iconAlt: "Audit scope definition",
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
            label: "Payer / Account Review",
            icon: "/Medical Billing/8_rectangle_471.png",
            iconAlt: "Payer account review",
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
        pricingDescription={"Most practices pay a fixed fee based on the audit size and scope.\nNo hidden fees. No long-term contracts."}
        buttonText="Get a Custom Audit Quote"
        buttonHref="#"
      />

      <SpecialtyBilling
        heading="Specialty-Focused Audit Expertise"
        description={"Every specialty has unique coding rules, documentation risks, payer requirements, and reimbursement patterns.\nOur audit team reviews billing with those specialty-specific requirements in mind."}
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
        heading="Audit-Ready With Every Major EHR, PM System & Clearinghouse"
        description="Our audit team works within your existing billing systems to review claims, documentation, payer activity and revenue-cycle data without disrupting your workflow."
        partners={[
          { logo: "/Medical Billing/42_rectangle_430.png", alt: "Kareo" },
          { logo: "/Medical Billing/43_rectangle_842.png", alt: "Claim.MD" },
          { logo: "/Medical Billing/44_rectangle_843.png", alt: "Apex EDI" },
          { logo: "/Medical Billing/45_rectangle_846.png", alt: "Osmind" },
          { logo: "/Medical Billing/46_rectangle_848.png", alt: "IntakeQ" },
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
        buttonText="View Location Pages"
        buttonHref="#"
        mapImage="/Medical Billing/33_rectangle_135.png"
        mapAlt="Medical billing audit services across USA map"
      />

      <BillingSolutions
        variant="outsource"
        heading="Why Outsourcing Your Billing Audit Makes Sense"
        solutions={[
          {
            title: "Lower Compliance Risk",
            description:
              "Avoid coding, documentation, payer and billing compliance issues.",
            icon: "/Medical Billing/27_rectangle_402.png",
            iconAlt: "Lower Compliance Risk",
          },
          {
            title: "Higher Reimbursement Accuracy",
            description:
              "Identify missed charges, underpayments and preventable revenue loss.",
            icon: "/Medical Billing/28_rectangle_403.png",
            iconAlt: "Higher Reimbursement Accuracy",
          },
          {
            title: "Stronger Revenue Integrity",
            description:
              "A complete audit gives your practice clearer financial and billing visibility.",
            icon: "/Medical Billing/29_rectangle_767.png",
            iconAlt: "Stronger Revenue Integrity",
          },
        ]}
      />

      <RevenueCTA
        heading="Protect Your Revenue. Reduce Errors. Stay Compliant."
        description="Get a complete medical billing audit and discover where revenue, accuracy, and compliance can improve."
        backgroundImage="/RCM Services Location/13_1.png"
        primaryButtonText="Get Free Billing Audit"
        primaryButtonHref="#"
        secondaryButtonText="Talk to a Medical Billing Expert"
        secondaryButtonHref="#"
      />

      <FAQSection
        heading="Frequently Asked Questions"
        defaultOpenIndex={0}
        faqs={[
          {
            question: "What is a medical billing audit?",
            answer:
              "A medical billing audit reviews coding, documentation, claims, payments, denials, and revenue-cycle processes to identify errors, compliance risks, and missed revenue.",
          },
          {
            question: "What errors do audits usually find?",
            answer:
              "Audits commonly identify coding mistakes, missing modifiers, documentation gaps, charge-capture issues, underpayments, duplicate claims, and payer-related errors.",
          },
          {
            question: "Who performs the audit?",
            answer:
              "The audit is performed by experienced medical billing and coding professionals who review claims, documentation, payer activity, and revenue-cycle workflows.",
          },
          {
            question: "How often should clinics run billing audits?",
            answer:
              "The right frequency depends on claim volume, specialty, payer mix, compliance risk, and changes in billing performance. Periodic reviews help identify problems before they grow.",
          },
          {
            question: "Do you help fix errors found in the audit?",
            answer:
              "Yes. Audit findings can be turned into a corrective action plan covering coding, documentation, workflow, denial, and A/R improvements.",
          },
          {
            question: "Can you integrate with our EHR for document review?",
            answer:
              "Yes. Our team can work within supported EHR, PM, and clearinghouse systems when appropriate access is provided.",
          },
          {
            question: "Do you perform payer-specific audits?",
            answer:
              "Yes. Reviews can focus on payer-specific claim rules, reimbursement patterns, denial trends, underpayments, and documentation requirements.",
          },
        ]}
      />
    </main>
  );
}
