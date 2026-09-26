import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Denial Management Services",
  description: "Medical billing denial management and appeals support focused on root-cause correction, payer follow-up, and revenue recovery.",
  path: "/denial-management",
});

import BillingIntelligence from "../Components/BillingIntelligence";
import BillingProcess from "../Components/BillingProcess";
import BillingSolutions from "../Components/BillingSolutions";
import CertificationCTA from "../Components/CertificationCTA";
import CitiesCounties from "../Components/CitiesCounties";
import ComparisonTable from "../Components/ComparisonTable";
import ConsultationCTA from "../Components/ConsultationCTA";
import DenialCategories from "../Components/DenialCategories";
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

export default function denialPage() {
  return (
    <main>
        <ServiceHero
  variant="compact"
  heading="Stop Losing Money, Get Denials Fixed Fast & Recover Revenue You Didn’t Know You Lost"
  description="Our denial management team identifies the root cause, fixes coding and documentation errors, and gets your claims approved fast."
  backgroundImage="/Medical Billing/2_rectangle_767.png"
  highlights={[
    {
      text: "HIPAA Compliant",
    },
    {
      text: "Full A/R + Denial Support",
    },
    {
      text: "30–50% Denial Reduction",
    },
    {
      text: "Specialty-Focused Expertise",
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
  heading="Why Clinics Choose Our Denial Management Specialists"
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
  heading="Denial Management Services"
  image="/Denial Management/2_rectangle_767.png"
  imageAlt="Denial management services"
  services={[
    {
      title: "Denial Identification",
      description: "CO, PR, OA codes reviewed by payer.",
      highlighted: true,
    },
    {
      title: "Documentation & Coding Review",
      description: "ICD-10, CPT, modifiers, necessity verified.",
    },
    {
      title: "Root-Cause Diagnostic Audit",
      description: "Denial patterns and payer rules analyzed.",
    },
    {
      title: "Claim Correction",
      description: "Coding, modifiers, and eligibility corrected.",
    },
    {
      title: "Appeal Management",
      description: "Policy-supported appeals prepared and submitted.",
    },
    {
      title: "Payer Follow-Up",
      description: "30/60/90/120+ day claims followed up",
    },
    {
      title: "Denial Prevention",
      description: "Workflows implemented to stop repeat denials.",
    },
    {
      title: "Denial Reporting",
      description: "Real-time trends and financial impact visibility.",
    },
  ]}
/>
<DenialCategories
  heading="We Resolve All Major Denial Categories"
  description="Whether caused by coding, documentation, eligibility, medical necessity, or payer rules, our team handles every denial type with accuracy and speed."
  categories={[
    {
      title: "Coding\nDenials",
      description: "Incorrect CPT/ICD codes, modifiers and NCCI edits",
      highlighted: true,
    },
    {
      title: "Documentation-\nBased Denials",
      description: "Insufficient notes, missing signatures, unclear medical necessity",
    },
    {
      title: "Eligibility &\nCoverage Denials",
      description: "Inactive plans, wrong payer, missing referrals",
    },
    {
      title: "Medical Necessity\nDenials",
      description: "LCD/NCD issues, unsupported diagnoses",
    },
    {
      title: "Timely Filing\nDenials",
      description: "Expired claim windows (we fix + request reconsiderations)",
    },
    {
      title: "Duplicate Claim\nDenials",
      description: "Clearinghouse, payer or system-based duplicates",
    },
    {
      title: "Billing &\nCharge Errors",
      description: "Incorrect units, unbundling, improper POS",
    },
  ]}
/>
<MedicalBillingWorkflow
  heading="How Our Denial Resolution Process Works"
  centerImage="/Denial Management/4_rectangle_457.png"
  centerImageAlt="Denial resolution process"
  ringImage="/Denial Management/3_rectangle_776.png"
  ringImageAlt=""
  leftSteps={[
    {
      label: "Eligibility Check",
      icon: "/Denial Management/5_rectangle_459.png",
      iconAlt: "Eligibility Check",
      highlighted: true,
    },
    {
      label: "Documentation & Coding Review",
      icon: "/Denial Management/7_rectangle_464.png",
      iconAlt: "Documentation and Coding Review",
    },
    {
      label: "Payer Appeal/Resubmission",
      icon: "/Denial Management/6_rectangle_470.png",
      iconAlt: "Payer Appeal or Resubmission",
    },
    {
      label: "Clean Claim Confirmation",
      icon: "/Denial Management/8_rectangle_471.png",
      iconAlt: "Clean Claim Confirmation",
    },
  ]}
  rightSteps={[
    {
      label: "Error Root Cause Analysis",
      icon: "/Denial Management/9_rectangle_461.png",
      iconAlt: "Error Root Cause Analysis",
    },
    {
      label: "Claim Correction",
      icon: "/Denial Management/11_rectangle_465.png",
      iconAlt: "Claim Correction",
    },
    {
      label: "Continuous Payer Follow-Up",
      icon: "/Denial Management/10_rectangle_472.png",
      iconAlt: "Continuous Payer Follow-Up",
    },
    {
      label: "Prevention Plan Creation",
      icon: "/Denial Management/12_rectangle_473.png",
      iconAlt: "Prevention Plan Creation",
    },
  ]}
  pricingBackgroundImage="/Denial Management/13_rectangle_456.png"
  pricingHeading="Simple, Transparent Pricing"
  pricingDescription={"Most practices pay 3%–6% of collected revenue for denial + A/R recovery support.\nZero hidden fees. Cancel anytime."}
  buttonText="Get a Custom Quote"
  buttonHref="#"
/>

<SpecialtyBilling
  heading="Specialty-Focused Denial Management"
  description={"Every specialty has unique coding and denial patterns — our team understands the rules, documentation needs, and payer challenges across 40+ specialties."}
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
  heading="Works With Every Major EHR, EMR, PM & Clearinghouse"
  description="Our denial experts work directly inside your existing software — no training, no disruption, no added workload."
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

<StateSupportGrid
  variant="map"
  heading="Denial Management Services Across the USA"
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
  mapAlt="Medical billing services across USA map"
/>


<DenialCategories
  variant="stats"
  heading="Why Fixing Denials Should Be Your Top Revenue Priority"
  categories={[
    {
      title: "Denials steal\n5–15% of\ntotal practice\nrevenue",
      highlighted: true,
    },
    {
      title: "65% of denied\nclaims never\nget reworked\n(industry\naverage)",
    },
    {
      title: "Most denials are\npreventable\n(coding,\ndocumentation,\neligibility)",
    },
    {
      title: "Strong denial\nworkflow improves\ncash flow stability.",
    },
    {
      title: "Preventable\ndenials slow\ndown payments\nby 25–40%",
    },
    {
      title: "Clean claim\nimprovement\nreduces overall\nA/R ageing.",
    },
    {
      title: "Faster\nreimbursements\nimprove practice\nliquidity",
    },
  ]}
/>

<RevenueCTA
  heading="Stop Losing Money to Preventable Denials"
  description="Get a free denial trend report and see how much revenue you can recover in the next 30 days."
  backgroundImage="/RCM Services Location/13_1.png"
  primaryButtonText="Fix My Denials Now"
  primaryButtonHref="#"
  secondaryButtonText="Get a FREE Denial Trend Report"
  secondaryButtonHref="#"
/>
<FAQSection
  heading="Frequently Asked Questions"
  defaultOpenIndex={0}
  faqs={[
    {
      question: "What is denial management in medical billing?",
      answer: "Identifying, correcting, appealing, and preventing claim denials to protect your revenue.",
    },
    {
      question: "Why do claims get denied?",
      answer: "Claims are often denied because of coding errors, missing documentation, eligibility issues, authorization problems, or payer-specific requirements.",
    },
    {
      question: "How fast can you fix existing denials?",
      answer: "Resolution time depends on the denial reason and payer response, but our team begins review and correction as soon as the denied claims are received.",
    },
    {
      question: "Do you handle appeals?",
      answer: "Yes. We prepare, submit, and track payer appeals with the required supporting documentation and follow-up.",
    },
    {
      question: "Can you work inside our EHR or PM system?",
      answer: "Yes. Our team can work within your existing EHR, EMR, practice management, or clearinghouse workflow whenever access and system requirements allow.",
    },
    {
      question: "What denial types do you specialize in?",
      answer: "We handle coding, documentation, eligibility, medical necessity, timely filing, duplicate claim, billing, and charge-related denials.",
    },
    {
      question: "Do you recover old A/R + denied claims?",
      answer: "Yes. We review aging A/R and older denied claims, identify recoverable balances, and follow up based on payer deadlines and claim status.",
    },
  ]}
/>

  </main>
  );
}