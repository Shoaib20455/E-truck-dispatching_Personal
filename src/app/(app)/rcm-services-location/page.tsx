import BillingIntelligence from "../Components/BillingIntelligence";
import BillingSolutions from "../Components/BillingSolutions";
import CertificationCTA from "../Components/CertificationCTA";
import CitiesCounties from "../Components/CitiesCounties";
import ConsultationCTA from "../Components/ConsultationCTA";
import ExpertiseCardGrid from "../Components/ExpertiseCardGrid";
import RevenueCTA from "../Components/RevenueCTA";
import RevenueLossReasons from "../Components/RevenueLossReasons";
import ServiceGridWithImage from "../Components/ServiceGridWithImage";
import ServiceHero from "../Components/ServiceHero";
import StateSupportGrid from "../Components/StateSupportGrid";
import SuccessNumbers from "../Components/SuccessNumbers";

export default function rcmserviceslocation() {
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
<RevenueCTA
  heading="Ready to Improve Your South Carolina Practice Revenue?"
  description="Let our billing team optimize your claims, fix denials, and strengthen collections."
  backgroundImage="/RCM Services Location/13_1.png"
  primaryButtonText="Get Free Billing Audit"
  primaryButtonHref="#"
  secondaryButtonText="Get Pricing"
  secondaryButtonHref="#"
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
<BillingIntelligence
  heading="Massachusetts Focused Billing Intelligence"
  description="Massachusetts billing requires payer-aligned workflows, strong documentation accuracy and experience with MassHealth and regional commercial plans"
  items={[
    "Experienced with BCBS MA, MassHealth, Tufts and Harvard Pilgrim",
    "Accurate coding for outpatient and high-volume specialties",
    "Dedicated billing support tailored to Massachusetts practices",
    "Eligibility verification for ConnectorCare and plan variations",
    "Faster resolution for Medicare Advantage claim issues",
    "Precise denial analysis to prevent repeat errors",
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
<ConsultationCTA
  variant="plain"
  heading="What Supports Efficient Pediatric Billing in Our Process?"
  description="At Avenue Billing Services, our pediatric billing process follows each claim from eligibility verification through final payment. We review coding, payer requirements, immunization details, Medicaid or CHIP rules, and claim accuracy before submission. After submission, our team tracks payments, resolves denials, posts EOBs, and follows aging A/R to keep pediatric revenue moving efficiently."
  formHeading="Get Your Free Pediatric Billing Audit"
  namePlaceholder="Name"
  phonePlaceholder="Phone Number"
  emailPlaceholder="Email"
  practicePlaceholder="Practice Name"
  buttonText="Get Your Free Billing Audit"
/>
<ExpertiseCardGrid
  heading="Our Expertise in Pediatric CPT Codes & ICD-10 Cases"
  cards={[
    {
      title: "Well-Child Visit Coding",
      code: "CPT 99381–99385 & 99391–99395",
      description:
        "Accurate preventive visit coding based on patient age and new or established status. These codes cover routine pediatric preventive examinations and well-child services.",
      highlighted: true,
    },
    {
      title: "Sick & Problem Visit Coding",
      code: "CPT 99202–99205 & 99211–99215",
      description:
        "Office E/M codes are selected for acute illnesses, chronic conditions, and other problem-focused pediatric encounters based on current documentation and E/M requirements.",
    },
    {
      title: "Immunization Administration Coding",
      code: "CPT 90460–90461",
      description:
        "These codes apply to pediatric vaccine administration when required counseling criteria are met for patients through age 18. Vaccine product codes are reported separately when applicable.",
    },
    {
      title: "Developmental & Behavioral Screening",
      code: "CPT 96110 & 96127",
      description:
        "Code 96110 supports standardized developmental screening, while 96127 covers brief emotional or behavioral assessments such as ADHD or depression screening.",
    },
    {
      title: "Pediatric Health Risk Assessments",
      code: "CPT 96160–96161",
      description:
        "These codes support standardized health-risk assessments involving pediatric patients or caregivers when documentation and payer requirements are satisfied.",
    },
    {
      title: "Newborn Care Coding",
      code: "CPT 99460–99463",
      description:
        "Newborn coding covers initial, subsequent, and qualifying normal newborn care across hospital, birthing center, home, and office settings.",
    },
    {
      title: "Pediatric ICD-10-CM Mapping",
      code: "Z00.121, Z00.129, Z23 & Z13.42",
      description:
        "Common pediatric diagnosis coding includes routine child examinations, immunization encounters, and developmental screening. Diagnosis selection must match the documented reason for each encounter.",
    },
    {
      title: "Pediatric Modifier Application",
      code: "Modifier 25 & EP",
      description:
        "Appropriate modifiers distinguish separately reportable services and support payer-specific pediatric requirements, including certain Medicaid and EPSDT procedures. Their use depends on documentation and individual payer policy.",
    },
    {
      title: "Pediatric Vision & Hearing Screening",
      code: "CPT 99173 & 92551",
      description:
        "These codes support quantitative visual-acuity and pure-tone hearing screenings commonly performed during pediatric preventive visits. Proper documentation and diagnosis linkage help support separate reimbursement when allowed by payer policy.",
    },
  ]}
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
    </main>
  );
}