import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revenue Cycle Management Services",
  description: "Revenue cycle management services covering billing, coding, denials, A/R, payment workflows, and financial performance for healthcare practices.",
  path: "/rcm",
});

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
import RCMSolutions from "../Components/RCMSolutions";
import RevenueCTA from "../Components/RevenueCTA";
import RevenueCTAWithTestimonial from "../Components/RevenueCTAWithTestimonial";
import RevenueLossReasons from "../Components/RevenueLossReasons";
import ServiceGridWithImage from "../Components/ServiceGridWithImage";
import ServiceHero from "../Components/ServiceHero";
import StateSupportGrid from "../Components/StateSupportGrid";
import SuccessNumbers from "../Components/SuccessNumbers";
import Testimonials from "../Components/Testimonials";

export default function rcmpage() {
  return (
    <main>
        <ServiceHero
  heading="Pediatric Medical Billing Services Built for Revenue Stability of Pediatric Practices"
  description="Pediatric billing involves far more than submitting routine office claims. It includes well-child visits, vaccines, developmental screenings, Medicaid requirements, and newborn services. All these factors affect your pediatric medical billing process and revenue. Here is how Avenue Billing Services manages your complete pediatric revenue cycle:"
  backgroundImage="/RCM Services Location/2_rectangle_1893.png"
  highlights={[
    {
      text:
        "Complete Pediatric RCM: From eligibility verification and coding to claim submission and denial follow-up, we manage the full billing cycle.",
    },
    {
      text:
        "98.5% Clean Claim Rate: Our detailed claim reviews and payer-specific processes reduce errors and prevent denials.",
    },
    {
      text:
        "Pediatric-Focused Revenue Support: We handle well-child visits, immunizations, screenings, and newborn care, so your team can focus more on patient care.",
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
      alt: "Review platform",
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
<BillingSolutions
  heading="Pediatric Billing Solutions"
  solutions={[
    {
      title: "Complex Pediatric Payer Rules",
      description:
        "Commercial insurance, Medicaid, CHIP, managed Medicaid plans, and other payers follow distinct coverage, authorization, filing, and reimbursement rules. Our team checks payer requirements before they turn into avoidable denials.",
      icon: "/RCM Services Location/4_rectangle_8362.png",
      iconAlt: "Complex Pediatric Payer Rules",
      highlighted: true,
    },
    {
      title: "Preventive & Sick Visit Coding",
      description:
        "A routine well-child visit sometimes includes a separately identifiable service. Proper documentation, diagnosis selection, and modifier use are essential when reporting both services.",
      icon: "/RCM Services Location/5_rectangle_8363.png",
      iconAlt: "Preventive and Sick Visit Coding",
    },
    {
      title: "Vaccine Billing Errors",
      description:
        "Vaccine product codes, administration codes, counseling requirements, VFC vaccines, patient eligibility, and payer rules create frequent opportunities for underbilling or rejection.",
      icon: "/RCM Services Location/6_rectangle_8364.png",
      iconAlt: "Vaccine Billing Errors",
    },
    {
      title: "Aging Pediatric A/R",
      description:
        "Unworked denials and pending claims quickly move into older A/R buckets. Structured follow-up keeps claims from sitting unpaid while filing and appeal deadlines approach.",
      icon: "/RCM Services Location/7_rectangle_8365.png",
      iconAlt: "Aging Pediatric A/R",
    },
  ]}
/>


<RCMSolutions
  heading="Complete RCM and Billing Solution"
  services={[
    {
      title: "Medical Billing",
      description: "Clean claims engineered for fast approval",
      icon: "/Home/55_rectangle_255.png",
      iconAlt: "Medical Billing",
    },
    {
      title: "Medical Billing Analysis",
      description: "Uncover hidden billing revenue gaps",
      icon: "/Home/57_rectangle_255.png",
      iconAlt: "Medical Billing Analysis",
    },
    {
      title: "Medical Coding",
      description: "Certified ICD-10/CPT/HCPCS accuracy",
      icon: "/Home/59_rectangle_255.png",
      iconAlt: "Medical Coding",
    },
    {
      title: "Denial Management",
      description: "Root-cause correction + appeals",
      icon: "/Home/61_rectangle_255.png",
      iconAlt: "Denial Management",
    },
    {
      title: "A/R Management",
      description: "Aggressive recovery of unpaid claims",
      icon: "/Home/56_rectangle_255.png",
      iconAlt: "A/R Management",
    },
    {
      title: "State Licensing Support",
      description: "Hassle-free license filing",
      icon: "/Home/58_rectangle_255.png",
      iconAlt: "State Licensing Support",
    },
    {
      title: "Credentialing & Enrollment",
      description: "Fast payer setup",
      icon: "/Home/60_rectangle_255.png",
      iconAlt: "Credentialing and Enrollment",
    },
    {
      title: "EHR/EMR Support",
      description: "Smooth workflows inside your EHR",
      icon: "/Home/62_rectangle_255.png",
      iconAlt: "EHR EMR Support",
    },
  ]}
/>
<SuccessNumbers
  heading="Our Success Numbers"
  columns={[
    {
      items: [
        {
          label: "Pediatric Clean Claim",
          value: "98.5%",
        },
        {
          label: "Lower Billing Costs",
          value: "Up to 50%",
        },
      ],
    },
    {
      items: [
        {
          label: "Collection Ratio",
          value: "96%",
        },
        {
          label: "Pediatric Billing Coverage",
          value: "100%",
        },
      ],
    },
    {
      items: [
        {
          label: "Average A/R Cycle",
          value: "24 Days",
        },
        {
          label: "Medicaid, CHIP & Commercial",
          value: "3+ Payer Types",
        },
      ],
    },
    {
      items: [
        {
          label: "Aging A/R Reduction",
          value: "35%",
        },
        {
          label: "End-to-End Billing Support",
          value: "6+ RCM Functions",
        },
      ],
    },
  ]}
/>

<ConsultationCTA
  heading="No More Billing Challenges with ABS"
  description="Reduce denials, speed up payments, and simplify your medical billing operations with Avenue Billing Services."
  backgroundImage="/Home/12_1.png"
  formHeading="Claim Your Free Consultation"
  namePlaceholder="Name"
  phonePlaceholder="Phone Number"
  emailPlaceholder="Email"
  practicePlaceholder="Practice Name"
  buttonText="Request a Free Quote"
/>
<BillingProcess
  heading="How Our Billing Process Works"
  image="/RCM Services Location/12_rectangle_1923.png"
  imageAlt="Medical billing team"
  steps={[
    {
      number: "1",
      title: "Free Practice Review",
      description:
        "We review your current billing workflow, payer mix, denials, and revenue gaps.",
    },
    {
      number: "2",
      title: "Secure Onboarding",
      description:
        "Our team collects required practice details, provider information, payer data, and system access.",
    },
    {
      number: "3",
      title: "Eligibility & Authorization Check",
      description:
        "We verify patient insurance, benefits, referrals, and prior authorization requirements before claims submission.",
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
<ConsultationCTA
  heading="Pediatric Practices Across the US Trust Us"
  description="Pediatric practitioners and organizations across the U.S. trust Avenue Billing Services for specialized pediatric billing support. Our pediatric billing experts cover well-child visits, immunizations, developmental screenings, and newborn care across a number of payers, like Medicaid, CHIP, and commercial payers. We help practices reduce billing errors, prevent denials, and maintain a healthier pediatric billing revenue cycle."
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
      alt: "Innovative Pain Care Center",
    },
    {
      image: "/RCM Services Location/65_container.png",
      alt: "CMS Pain and Rehab",
    },
  ]}
/>
<CitiesCounties
  heading="Cities & Counties We Serve"
  leftList={{
    title: "Cities",
    icon: "/RCM Services Location/69_rectangle_351.png",
    iconAlt: "Cities",
    items: [
      "Los Angeles",
      "San Diego",
      "San Jose",
      "Los Angeles",
      "San Diego",
      "San Jose",
    ],
  }}
  rightList={{
    title: "Counties",
    icon: "/RCM Services Location/70_rectangle_354.png",
    iconAlt: "Counties",
    items: [
      "Los Angeles",
      "San Diego",
      "San Jose",
      "Los Angeles",
      "San Diego",
      "San Jose",
    ],
  }}
  mapImage="/RCM Services Location/68_rectangle_355.png"
  mapAlt="California service area map"
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
<CertificationCTA
  heading="OUR CERTIFICATIONS & COMPLIANCE"
  description="Avenue Billing Services strengthens its pediatric billing process through HIPAA compliance, ISO 27001 information security standards, and AAPC-certified coding expertise. These standards support secure handling of patient data, accurate pediatric coding, and a consistent billing process."
  backgroundImage="/RCM Services Location/66_1.png"
  certificationImage="/RCM Services Location/67_rectangle_8374.png"
  certificationImageAlt="HIPAA ISO and AAPC certifications"
  buttonText="Talk to Our Certified Pediatric Billing Experts"
  buttonHref="#"
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
      comparison:
        "Denials are often handled reactively.",
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
      comparison:
        "Reporting depends on internal staff capacity",
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
    ratingImage: "/RCM Services Location/33_rectangle_187.png",
    ratingAlt: "5 star rating",
    quote:
      "Avenue Billing Services understands the billing challenges pediatric practices face. Their attention to claim accuracy, payer requirements, and denial follow-up has improved the consistency of our revenue cycle.",
  }}
/>
<EHRPartners
  heading="We Work With Leading EHR & Practice Management Systems"
  description="Our billing team works with established medical EHR and practice management platforms so your practice does not need to rebuild its workflow simply to outsource billing."
  partners={[
    {
      logo: "/RCM Services Location/16_rectangle_859.png",
      alt: "Athenahealth",
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
      ratingImage: "/RCM Services Location/33_rectangle_187.png",
      ratingAlt: "5 star rating",
      quote:
        "Avenue Billing Services has made our pediatric billing process much more organized. Their team understands well-child visits, immunizations, payer requirements, and denial follow-up. We now have better visibility into our claims and outstanding revenue.",
    },
    {
      name: "Jessica Reynold",
      role: "Practice Manager | Little Steps Pediatric Clinic",
      image: "/RCM Services Location/32_ellipse_292.png",
      imageAlt: "Jessica Reynold",
      ratingImage: "/RCM Services Location/33_rectangle_187.png",
      ratingAlt: "5 star rating",
      quote:
        "The biggest improvement has been consistency. Claims are reviewed carefully, denials are followed up on, and aging balances no longer sit untouched. Our team spends less time tracking billing issues and more time supporting patients and families.",
    },
    {
      name: "Dr. Daniel Mitchell",
      role: "Medical Director | Growing Kids Pediatrics",
      image: "/RCM Services Location/31_ellipse_293.png",
      imageAlt: "Dr. Daniel Mitchell",
      ratingImage: "/RCM Services Location/33_rectangle_187.png",
      ratingAlt: "5 star rating",
      quote:
        "Pediatric billing comes with its own challenges, especially with Medicaid, preventive services, and vaccinations. Avenue Billing Services has given us a clearer and more structured revenue cycle while reducing avoidable billing delays.",
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
<ExpertGuides
  heading="Medical Billing and Coding Guides by Experts"
  guides={[
    {
      title: "How to Bill Physical Therapy for Group Therapy Sessions",
      description:
        "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
      image: "/Home/49_rectangle_79.png",
      imageAlt: "Medical billing guide",
      href: "#",
    },
    {
      title: "How to Bill Physical Therapy for Group Therapy Sessions",
      description:
        "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
      image: "/Home/49_rectangle_79.png",
      imageAlt: "Medical billing guide",
      href: "#",
    },
    {
      title: "How to Bill Physical Therapy for Group Therapy Sessions",
      description:
        "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
      image: "/Home/49_rectangle_79.png",
      imageAlt: "Medical billing guide",
      href: "#",
    },
    {
      title: "How to Bill Physical Therapy for Group Therapy Sessions",
      description:
        "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
      image: "/Home/49_rectangle_79.png",
      imageAlt: "Medical billing guide",
      href: "#",
    },
    {
      title: "How to Bill Physical Therapy for Group Therapy Sessions",
      description:
        "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
      image: "/Home/49_rectangle_79.png",
      imageAlt: "Medical billing guide",
      href: "#",
    },
    {
      title: "How to Bill Physical Therapy for Group Therapy Sessions",
      description:
        "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
      image: "/Home/49_rectangle_79.png",
      imageAlt: "Medical billing guide",
      href: "#",
    },
  ]}
/>

  </main>
  );
}