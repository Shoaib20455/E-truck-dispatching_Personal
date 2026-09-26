import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Medical Billing Services & RCM Solutions",
  description: "Medical billing, coding, denial management, A/R management, credentialing, and revenue cycle management services for U.S. healthcare practices.",
  path: "/",
});

import BillingChallenges from "./Components/BillingChallenges";
import BillingProcess from "./Components/BillingProcess";
import CaseStudyArticles from "./Components/CaseStudyArticles";
import ConsultationCTA from "./Components/ConsultationCTA";
import ExpertGuides from "./Components/ExpertGuides";
import FAQSection from "./Components/FAQSection";
import HomeHero from "./Components/HomeHero";
import NationwideBilling from "./Components/NationwideBilling";
import RCMSolutions from "./Components/RCMSolutions";
import SmallPractices from "./Components/SmallPractices";
import SoftwarePartners from "./Components/SoftwarePartners";
import SpecialtyBilling from "./Components/SpecialtyBilling";
import SuccessNumbers from "./Components/SuccessNumbers";
import Testimonials from "./Components/Testimonials";
import WhyTrustABS from "./Components/WhyTrustABS";

export default function Page() {
  return (
    <main>
      <HomeHero
        eyebrow="Avenue Billing Services"
        heading="Best Medical Billing Services for US Healthcare Practices"
        description="At Avenue Billing Services (ABS), we support healthcare facilities nationwide by handling their medical billing and revenue cycle management with precision. Our certified medical coders and billers strengthen your organization’s financial stability and compliance as per CMS & AMA guidelines through professional coding and billing services."
        backgroundImage="/Home/2_rectangle_1895.png"
        reviews={[
          {
            logo: "/Home/90_rectangle_1898.png",
            alt: "Clutch reviews",
          },
          {
            logo: "/Home/72_rectangle_1899.png",
            alt: "Customer reviews",
          },
          {
            logo: "/Home/78_rectangle_1901.png",
            alt: "Testimonials",
          },
          {
            logo: "/Home/65_rectangle_1897.png",
            alt: "Trustpilot reviews",
          },
        ]}
        stats={[
          {
            value: "310+",
            label: "Providers Supported",
            icon: "/Home/3_rectangle_1920.png",
            iconAlt: "Providers supported",
          },
          {
            value: "98%",
            label: "Clean Claim Rate",
            icon: "/Home/4_rectangle_1920.png",
            iconAlt: "Clean claim rate",
          },
          {
            value: "10+",
            label: "Years Experience",
            icon: "/Home/5_rectangle_1920.png",
            iconAlt: "Years of experience",
          },
        ]}
      />

      <SoftwarePartners />
      <BillingChallenges
  heading="Biggest Medical Billing Challenges for Healthcare Providers"
  challenges={[
    {
      title: "Automated Claim Denials",
      description:
        "12% to 22% of medical billing claims are now being denied across U.S. healthcare specialties because of insurance companies' AI-powered claim review systems. As a result, traditional billing models are struggling to survive in this rapidly evolving automated global healthcare environment.",
      icon: "/Home/6_rectangle_255.png",
      iconAlt: "Automated Claim Denials",
    },
    {
      title: "The Patient Payment Crisis",
      description:
        "30% to 40% of patient-billed revenue is now being lost as bad debt. High-deductible health plans have shifted financial responsibility from insurance companies directly to patients. Healthcare providers now struggle with delayed payments and financial instability due to a lack of patient-friendly payment systems.",
      icon: "/Home/7_rectangle_256.png",
      iconAlt: "Patient Payment Crisis",
    },
    {
      title: "Prior Authorization Delays",
      description:
        "Prior authorizations continue to slow down healthcare operations and increase administrative pressure on providers. Clinical staff spend nearly 14.5 hours every week managing approvals and documentation requirements. Healthcare practices using outdated manual billing systems face treatment delays, denied services, and revenue loss.",
      icon: "/Home/8_rectangle_257.png",
      iconAlt: "Prior Authorization Delays",
    },
    {
      title: "Billing System Fragmentation",
      description:
        "Disconnected billing systems are draining healthcare revenue. Outdated EHRs and modern RCM software often fail to communicate with each other. Staff is forced into manual double-entry, slowing down the billing process. Even small data mismatches trigger first-pass claim denials and frequent audits.",
      icon: "/Home/9_rectangle_259.png",
      iconAlt: "Billing System Fragmentation",
    },
    {
      title: "Documentation Gaps",
      description:
        "Overburdened billing staff or outsourcing to an incompetent billing team leads to a mismatch in documentation and medical necessity. A less-explained medical necessity or low-value documentation causes audits and denials. At Avenue Billing Services, we manage documentation in a timely manner to avoid errors.",
      icon: "/Home/10_rectangle_261.png",
      iconAlt: "Documentation Gaps",
    },
    {
      title: "Credentialing Delays",
      description:
        "The National Committee for Quality Assurance (NCQA) reduced credentialing timelines from 180 to 120 days, but most commercial insurers still require 90 to 120+ days. A credentialing delay causes significant revenue losses for healthcare practices. Healthcare providers treating patients before payer enrollment activation face instant claim denials.",
      icon: "/Home/11_rectangle_260.png",
      iconAlt: "Credentialing Delays",
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
<SpecialtyBilling
  heading="Speciality Focused Medical Billing with ABS"
  description="Every medical specialty has unique coding sets, billing rules, and audit risks. As a result, documentation depth, payer rules, and medical necessity requirements vary across specialties. Our coders and billers are trained for 40+ specialties."
  buttonText="Get Personalized Billing for your Speciality"
  buttonHref="/contact"
  specialties={[
    {
      title: "Cardiology Billing",
      icon: "/Home/13_rectangle_295.png",
      iconAlt: "Cardiology Billing",
    },
    {
      title: "Dermatology Billing",
      icon: "/Home/14_rectangle_299.png",
      iconAlt: "Dermatology Billing",
    },
    {
      title: "Internal Medicine",
      icon: "/Home/15_rectangle_324.png",
      iconAlt: "Internal Medicine",
    },
    {
      title: "Behavioral Health",
      icon: "/Home/16_rectangle_297.png",
      iconAlt: "Behavioral Health",
    },
    {
      title: "Urgent Care",
      icon: "/Home/17_rectangle_299.png",
      iconAlt: "Urgent Care",
    },
    {
      title: "Orthopedic",
      icon: "/Home/18_rectangle_300.png",
      iconAlt: "Orthopedic",
    },
    {
      title: "Pain Management",
      icon: "/Home/19_rectangle_301.png",
      iconAlt: "Pain Management",
    },
    {
      title: "Pediatrics",
      icon: "/Home/20_rectangle_302.png",
      iconAlt: "Pediatrics",
    },
    {
      title: "Neurology",
      icon: "/Home/21_rectangle_303.png",
      iconAlt: "Neurology",
    },
    {
      title: "Radiology",
      icon: "/Home/22_rectangle_304.png",
      iconAlt: "Radiology",
    },
  ]}
/>
<NationwideBilling
  heading="Nationwide Medical Billing & RCM Services Across the United States"
  description="Avenue Billing Services (ABS) provides reliable medical billing and revenue cycle management solutions for healthcare providers across all 50 US states. From claim submission and denial management to payment posting and compliance support, our certified billing experts help practices improve cash flow, reduce administrative workload, and maintain accurate reimbursement operations nationwide."
  states={[
    {
      name: "Illinois",
      image: "/Home/23_rectangle_295.png",
      imageAlt: "Illinois",
      highlighted: true,
    },
    {
      name: "Texas",
      image: "/Home/25_rectangle_1894.png",
      imageAlt: "Texas",
    },
    {
      name: "Florida",
      image: "/Home/27_rectangle_1895.png",
      imageAlt: "Florida",
    },
    {
      name: "California",
      image: "/Home/29_rectangle_1896.png",
      imageAlt: "California",
    },
    {
      name: "New York",
      image: "/Home/24_rectangle_1901.png",
      imageAlt: "New York",
    },
    {
      name: "Ohio",
      image: "/Home/26_rectangle_1902.png",
      imageAlt: "Ohio",
    },
    {
      name: "Washington",
      image: "/Home/28_rectangle_1903.png",
      imageAlt: "Washington",
    },
    {
      name: "Colorado",
      image: "/Home/30_rectangle_1904.png",
      imageAlt: "Colorado",
    },
  ]}
/>

<BillingProcess
  heading="How Our Billing Process Works"
  image="/Home/31_rectangle_1923.png"
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
<SmallPractices
  heading="Avenue Billing Services for Small Practices"
  description="Credentialing delays, limited administrative staff, and growing billing responsibilities slow down reimbursements and increase operational pressure. Avenue Billing Services helps small practices manage these challenges with professional medical billing and provider credentialing support designed for lean healthcare teams."
  supportHeading="How ABS Supports Small Healthcare Practices"
  supportItems={[
    "Provider credentialing and payer enrollment assistance",
    "Reduced administrative burden for office staff",
    "Faster claim submission and reimbursement workflows",
    "Dedicated billing and follow-up support",
    "Lower denial rates through accurate coding and verification",
    "HIPAA-compliant billing operations",
    "Scalable support for growing practices and clinics",
  ]}
  cardHeading="Medical Billing for Small Practices"
  cardDescription="Learn how we help independent clinics thrive in a landscape dominated by hospital systems."
  cardLinkText="View Small Practice Solutions"
  cardLinkHref="/medical-billing-for-small-practices"
  image="/Home/39_rectangle_1929.png"
  imageAlt="Medical billing for small practices"
/>
<WhyTrustABS
  heading="Why Healthcare Providers Trust ABS?"
  description={`Healthcare providers from the United States trust Avenue Billing Services because we combine billing accuracy and specialty-focused expertise under one roof. Our team helps practices reduce denials, increase reimbursements, and maintain compliance with evolving CMS and AMA billing regulations.

With a 98% clean claim rate and support for 40+ medical specialties, ABS delivers structured medical billing solutions designed for hospitals, clinics, private practices, and specialty care organizations across all 50 U.S. states.`}
  mainCardHeading="What Makes ABS Different?"
  cards={[
    {
      title: "40+ Specialty Billing Expertise",
      description:
        "ABS supports a wide range of specialties including mental health, cardiology, dermatology, radiology, endocrinology, general surgery, pulmonology, and more.",
    },
    {
      title: "Serving Providers Across 50 U.S. States",
      description:
        "We understand payer variations, Medicaid policies, and state-level billing requirements across nationwide healthcare networks.",
    },
    {
      title: "Transparent Communication & Reporting",
      description:
        "Providers receive consistent reporting, real-time updates, KPI tracking, and dedicated billing support for complete financial visibility.",
    },
    {
      title: "Denial Reduction & Revenue Optimization",
      description:
        "Our denial prevention workflows identify root-cause billing issues before submission, helping practices improve collections and reduce revenue leakage.",
    },
    {
      title: "HIPAA-Compliant Billing Operations",
      description:
        "ABS follows secure systems and compliance-focused processes to protect patient data and maintain regulatory standards.",
    },
  ]}
/>

<CaseStudyArticles
  heading="How We Transformed Pediatric Healthcare Practices across Florida?"
  featuredArticle={{
    date: "Feb 15, 2026",
    title: "How to Bill Physical Therapy for Group Therapy Sessions",
    description:
      "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
    image: "/Home/91_rectangle_204.png",
    imageAlt: "Healthcare billing article",
    href: "#",
  }}
  sideArticles={[
    {
      date: "Feb 12, 2026",
      title: "How to Bill Physical Therapy for Group Therapy Sessions",
      description:
        "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
      image: "/Home/95_rectangle_200.png",
      imageAlt: "Healthcare billing article",
      href: "#",
    },
    {
      date: "Feb 10, 2026",
      title: "How to Bill Physical Therapy for Group Therapy Sessions",
      description:
        "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
      image: "/Home/93_rectangle_201.png",
      imageAlt: "Healthcare billing article",
      href: "#",
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





<ExpertGuides
  heading="Medical Billing Services Explained Simply"
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
  ]}
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

    </main>
  );
}