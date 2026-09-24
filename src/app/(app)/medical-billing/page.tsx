import BillingIntelligence from "../Components/BillingIntelligence";
import BillingProcess from "../Components/BillingProcess";
import BillingSolutions from "../Components/BillingSolutions";
import CertificationCTA from "../Components/CertificationCTA";
import CitiesCounties from "../Components/CitiesCounties";
import ComparisonTable from "../Components/ComparisonTable";
import ConsultationCTA from "../Components/ConsultationCTA";
import EHRPartners from "../Components/EHRPartners";
import ExpertGuides from "../Components/ExpertGuides";
import ExpertiseCardGrid from "../Components/ExpertiseCardGrid";
import FAQSection from "../Components/FAQSection";
import MedicalBillingWorkflow from "../Components/MedicalBillingWorkflow";
import RCMSolutions from "../Components/RCMSolutions";
import RevenueCTA from "../Components/RevenueCTA";
import RevenueCTAWithTestimonial from "../Components/RevenueCTAWithTestimonial";
import RevenueLossReasons from "../Components/RevenueLossReasons";
import ServiceGridWithImage from "../Components/ServiceGridWithImage";
import ServiceHero from "../Components/ServiceHero";
import SpecialtyBilling from "../Components/SpecialtyBilling";
import StateSupportGrid from "../Components/StateSupportGrid";
import SuccessNumbers from "../Components/SuccessNumbers";
import Testimonials from "../Components/Testimonials";

export default function rcmpage() {
  return (
    <main>
        <ServiceHero
  variant="compact"
  heading="Medical Billing Services That Help You Get Paid Faster"
  description="We manage your billing, coding, claims and AR follow-up, and integrate smoothly with your complete RCM workflow."
  backgroundImage="/Medical Billing/2_rectangle_767.png"
  highlights={[
    {
      text: "HIPAA Compliant",
    },
    {
      text: "Certified Coders",
    },
    {
      text: "98% Clean Claim Rate",
    },
    {
      text: "30+ Specialties Supported",
    },
  ]}
  formHeading="Ready to Improve Your Medical Billing Revenue?"
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





<ServiceGridWithImage
  variant="compact"
  heading="Complete Medical Billing Services"
  image="/Medical Billing/2_rectangle_767.png"
  imageAlt="Complete medical billing services"
  services={[
    {
      title: "Eligibility Verification",
      description: "Coverage, copay, deductible, prior auth.",
      highlighted: true,
    },
    {
      title: "ICD-10 & CPT Coding",
      description: "Certified coding accuracy, CMS compliant.",
    },
    {
      title: "Charge Entry",
      description: "Correct units, modifiers, NCCI edits.",
    },
    {
      title: "Claim Submission",
      description: "837P/837I, clearinghouse, payer edits.",
    },
    {
      title: "Denial Management",
      description: "Fix errors, appeal, track status.",
    },
    {
      title: "ERA/EOB Payment Posting",
      description: "Faster posting, detect underpayments.",
    },
    {
      title: "AR & Follow-Up",
      description: "Reduce aging. Recover unpaid claims.",
    },
    {
      title: "Patient Billing",
      description: "Simple statements + support team.",
    },
  ]}
/>

<MedicalBillingWorkflow
  heading="Our Medical Billing Workflow"
  centerImage="/Medical Billing/4_rectangle_457.png"
  centerImageAlt="Medical billing workflow"
  ringImage="/Medical Billing/3_rectangle_776.png"
  ringImageAlt=""
  leftSteps={[
    {
      label: "Registration",
      icon: "/Medical Billing/5_rectangle_459.png",
      iconAlt: "Registration",
      highlighted: true,
    },
    {
      label: "Documentation",
      icon: "/Medical Billing/7_rectangle_464.png",
      iconAlt: "Documentation",
    },
    {
      label: "Charge Entry",
      icon: "/Medical Billing/6_rectangle_470.png",
      iconAlt: "Charge Entry",
    },
    {
      label: "Payer Review",
      icon: "/Medical Billing/8_rectangle_471.png",
      iconAlt: "Payer Review",
    },
    {
      label: "Payment Posting",
      icon: "/Medical Billing/12_rectangle_478.png",
      iconAlt: "Payment Posting",
    },
    {
      label: "Patient Billing",
      icon: "/Medical Billing/15_rectangle_479.png",
      iconAlt: "Patient Billing",
    },
  ]}
  rightSteps={[
    {
      label: "Eligibility Check",
      icon: "/Medical Billing/10_rectangle_461.png",
      iconAlt: "Eligibility Check",
    },
    {
      label: "ICD-10/CPT Coding",
      icon: "/Medical Billing/13_rectangle_465.png",
      iconAlt: "ICD-10 CPT Coding",
    },
    {
      label: "Claim Submission",
      icon: "/Medical Billing/11_rectangle_472.png",
      iconAlt: "Claim Submission",
    },
    {
      label: "Denial Management",
      icon: "/Medical Billing/14_rectangle_473.png",
      iconAlt: "Denial Management",
    },
    {
      label: "AR Follow-Up",
      icon: "/Medical Billing/9_rectangle_477.png",
      iconAlt: "AR Follow-Up",
    },
  ]}
  pricingBackgroundImage="/Medical Billing/16_rectangle_456.png"
  pricingHeading="Simple, Transparent Pricing"
  pricingDescription={"Most practices pay 4%–8% of monthly collections.\nNo hidden fees. No long contracts."}
  buttonText="Get a Custom Quote"
  buttonHref="#"
/>

<SpecialtyBilling
  heading="Specialty-Focused Billing Expertise"
  description={"Billing for every specialty is different.\nWe handle specialty-specific coding, payer rules, documentation needs, and claims workflows, so your clinic gets paid correctly the first time."}
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
  heading="We Work With All Major EHR & PM Systems"
  description="Seamless integration with your workflow. No downtime. No extra training required."
  partners={[
    {
      logo: "/Medical Billing/42_rectangle_430.png",
      alt: "Kareo",
    },
    {
      logo: "/Medical Billing/43_rectangle_842.png",
      alt: "Claim.MD",
    },
    {
      logo: "/Medical Billing/44_rectangle_843.png",
      alt: "Apex EDI",
    },
    {
      logo: "/Medical Billing/45_rectangle_846.png",
      alt: "Osmind",
    },
    {
      logo: "/Medical Billing/46_rectangle_848.png",
      alt: "IntakeQ",
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
        "A preventive visit and a problem focused service require separate coding and documentation when both are performed. Incorrect modifier use or weak documentation often causes one service to be bundled or denied. Current AAP guidance addresses modifier 25 for qualifying separately identifiable E/M services.",
    },
    {
      question:
        "Why do pediatric practices face billing problems with vaccines and VFC claims?",
      answer:
        "Add the answer for this FAQ here.",
    },
    {
      question:
        "Why are developmental and behavioral screenings sometimes denied or underpaid?",
      answer:
        "Add the answer for this FAQ here.",
    },
    {
      question:
        "How do Medicaid and CHIP requirements affect pediatric billing?",
      answer:
        "Add the answer for this FAQ here.",
    },
    {
      question:
        "Why do newborn claims get rejected even when the baby has Medicaid coverage?",
      answer:
        "Add the answer for this FAQ here.",
    },
    {
      question:
        "Why does pediatric A/R continue growing despite a high patient volume?",
      answer:
        "Add the answer for this FAQ here.",
    },
  ]}
/>

  </main>
  );
}