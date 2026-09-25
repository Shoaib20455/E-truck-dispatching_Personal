import FAQSection from "../Components/FAQSection";
import LocationShowcase from "../Components/LocationShowcase";
import LogoStrip from "../Components/LogoStrip";
import RCMSolutions from "../Components/RCMSolutions";
import SpecialtyBilling from "../Components/SpecialtyBilling";
import StateChallenges from "../Components/StateChallenges";
import StateConsultationCTA from "../Components/StateConsultationCTA";
import StateDetailHero from "../Components/StateDetailHero";
import StateRegions from "../Components/StateRegions";
import StateTestimonials from "../Components/StateTestimonials";
import StateTrustGrid from "../Components/StateTrustGrid";

export default function StateDetailPage() {
  return (
    <main>
      <StateDetailHero
        eyebrow="BEST MEDICAL BILLING COMPANY IN FLORIDA"
        heading="Healthcare Billing Services for Florida Practices"
        description="Avenue Billing Services serves healthcare providers from Miami, Orlando, Tampa, Jacksonville, and all communities across Florida. We deliver precise medical billing, faster reimbursements, denial reduction, and complete revenue cycle support. Our Florida focused billing experts help practices improve cash flow, strengthen compliance, and maximize collections statewide."
        servedText="Served 25+ Healthcare Practices in Florida"
        backgroundImage="/State Detail/10_rectangle_1942.png"
        formHeading="Consult With a Florida Medical Billing Specialist"
        metrics={[
          {
            value: "250+",
            label: "Florida Cities Coverage",
            icon: "/State Detail/50_rectangle_1920.png",
            iconAlt: "Florida cities coverage",
          },
          {
            value: "51+",
            label: "Specialties Experts",
            icon: "/State Detail/51_rectangle_1920.png",
            iconAlt: "Specialties experts",
          },
          {
            value: "0%",
            label: "Advance Payments",
            icon: "/State Detail/52_rectangle_1920.png",
            iconAlt: "Advance payments",
          },
        ]}
      />

      <LogoStrip
        logos={[
          { image: "/State Detail/3_rectangle_859.png", alt: "Florida Blue" },
          { image: "/State Detail/4_rectangle_850.png", alt: "UnitedHealthcare" },
          { image: "/State Detail/5_rectangle_849.png", alt: "Aetna" },
          { image: "/State Detail/6_rectangle_853.png", alt: "Cigna" },
          { image: "/State Detail/7_rectangle_1922.png", alt: "Molina Healthcare" },
          { image: "/State Detail/8_rectangle_1923.png", alt: "Ambetter Health" },
          { image: "/State Detail/9_rectangle_1923.png", alt: "Oscar" },
        ]}
      />

      <StateChallenges
        heading="Medical Billing Challenges Facing Florida Healthcare Providers"
        image="/State Detail/10_rectangle_1942.png"
        imageAlt="Florida healthcare provider"
        challenges={[
          {
            title: "Taxonomy and NPI Crosswalk Mismatches",
            description:
              "Florida payers frequently reject claims when a provider's taxonomy code does not match the specialty linked to their NPI or AHCA enrollment records. Even a minor mismatch can trigger claim rejections, payment delays, and credentialing issues.",
            highlighted: true,
          },
          {
            title: "90-Day Payer Submission Deadline Trap",
            description:
              "Many Florida insurance carriers enforce claim filing deadlines as short as 90 days. Claims submitted after the payer's filing window are often denied permanently, resulting in lost reimbursement opportunities despite longer patient collection periods allowed under state law.",
          },
          {
            title: "Surgical Bundled Coding and Modifier Errors",
            description:
              "Florida surgical practices frequently encounter denials when CPT modifiers are missing, incorrect, or unsupported. Global surgery rules, bundled procedures, and post-operative services require accurate modifier usage to secure proper reimbursement.",
          },
          {
            title: "Medicaid Managed Care Billing Complexity",
            description:
              "Florida's Medicaid program operates through multiple managed care organizations, each with unique billing rules, authorization requirements, and reimbursement policies. Administrative errors often lead to payment delays and denials.",
          },
          {
            title: "Medicare Advantage Plan Variations",
            description:
              "Florida has one of the nation's largest Medicare Advantage populations. Practices must navigate plan-specific coverage policies, authorization rules, and documentation requirements that differ from traditional Medicare.",
          },
          {
            title: "Hurricane-Related Revenue Disruptions",
            description:
              "Severe weather events and hurricane seasons can interrupt patient visits, claim submission workflows, and payment cycles, creating cash flow challenges for healthcare organizations throughout Florida.",
          },
          {
            title: "Prior Authorization Delays",
            description:
              "Florida providers experience treatment and reimbursement delays due to increasing prior authorization requirements from commercial insurers, Medicare Advantage plans, and Medicaid managed care plans.",
          },
          {
            title: "Credentialing and Enrollment Bottlenecks",
            description:
              "Delays in provider enrollment, payer credentialing, and network participation approvals can postpone billing eligibility and impact revenue generation for new and expanding Florida practices.",
          },
        ]}
      />

      <RCMSolutions
        heading="Get Medical Billing Solutions Designed for Florida Practices"
        services={[
          {
            title: "State Specific RCM Experts",
            description:
              "Prevent claim delays from Florida payer edits and filing deadline requirements.",
            icon: "/State Detail/11_rectangle_255.png",
            iconAlt: "State specific RCM experts",
          },
          {
            title: "In-depth Billing Audit",
            description:
              "Uncover hidden revenue losses across Florida's complex reimbursement landscape.",
            icon: "/State Detail/12_rectangle_255.png",
            iconAlt: "Billing audit",
          },
          {
            title: "Medical Coding",
            description:
              "Reduce coding-related denials through accurate CPT, ICD-10, and modifier reporting.",
            icon: "/State Detail/13_rectangle_255.png",
            iconAlt: "Medical coding",
          },
          {
            title: "Denial Management",
            description:
              "Address Florida-specific denial trends before they impact practice cash flow.",
            icon: "/State Detail/14_rectangle_255.png",
            iconAlt: "Denial management",
          },
          {
            title: "A/R Management",
            description:
              "Recover outstanding reimbursements from commercial, Medicare, and Medicaid payers.",
            icon: "/State Detail/15_rectangle_255.png",
            iconAlt: "Accounts receivable management",
          },
          {
            title: "State Licensing Support",
            description:
              "Support Florida provider licensing, renewals, and regulatory compliance requirements.",
            icon: "/State Detail/16_rectangle_255.png",
            iconAlt: "State licensing support",
          },
          {
            title: "Credentialing & Enrollment",
            description:
              "Maintain active participation with Florida payer and managed care networks.",
            icon: "/State Detail/17_rectangle_255.png",
            iconAlt: "Credentialing and enrollment",
          },
          {
            title: "EHR/EMR Support",
            description:
              "Improve claim accuracy through streamlined documentation and workflow optimization.",
            icon: "/State Detail/18_rectangle_255.png",
            iconAlt: "EHR and EMR support",
          },
        ]}
      />

      <SpecialtyBilling
        heading="Medical Speciality Types We Serve in Florida"
        description="Every medical specialty has unique coding sets, billing rules, and audit risks. As a result, documentation depth, payer rules, and medical necessity requirements vary across specialties. Our coders and billers are trained for 40+ specialties."
        buttonText="Get Personalized Billing for your Speciality"
        buttonHref="#"
        specialties={[
          {
            title: "Cardiology Billing",
            icon: "/State Detail/20_rectangle_295.png",
            iconAlt: "Cardiology billing",
            highlighted: true,
          },
          {
            title: "Dermatology Billing",
            icon: "/State Detail/21_rectangle_299.png",
            iconAlt: "Dermatology billing",
          },
          {
            title: "Internal Medicine",
            icon: "/State Detail/22_rectangle_324.png",
            iconAlt: "Internal medicine",
          },
          {
            title: "Behavioral Health",
            icon: "/State Detail/23_rectangle_297.png",
            iconAlt: "Behavioral health",
          },
          {
            title: "Urgent Care",
            icon: "/State Detail/24_rectangle_299.png",
            iconAlt: "Urgent care",
          },
          {
            title: "Orthopedic",
            icon: "/State Detail/25_rectangle_300.png",
            iconAlt: "Orthopedic",
          },
          {
            title: "Pain Management",
            icon: "/State Detail/26_rectangle_301.png",
            iconAlt: "Pain management",
          },
          {
            title: "Pediatrics",
            icon: "/State Detail/27_rectangle_302.png",
            iconAlt: "Pediatrics",
          },
          {
            title: "Neurology",
            icon: "/State Detail/28_rectangle_303.png",
            iconAlt: "Neurology",
          },
          {
            title: "Radiology",
            icon: "/State Detail/29_rectangle_304.png",
            iconAlt: "Radiology",
          },
        ]}
      />

      <StateConsultationCTA
        heading="Stop Losing Revenue in the Growing Healthcare Space of Florida"
        description="Reduce denials, speed up payments, and stabilize your revenue cycle with Avenue Billing Services."
        backgroundImage="/State Detail/19_1.png"
        formHeading="Claim Your Free Consultation"
        buttonText="Request a Free Quote"
      />

      <StateRegions
        heading="Major Florida Regions Covered by Avenue Billing Services"
        description="Serving healthcare providers across Florida with specialized medical billing, coding, and revenue cycle management solutions."
        image="/State Detail/37_rectangle_1955.png"
        imageAlt="Florida state flag"
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

      <LocationShowcase
        heading="City-Wise Medical Billing Services in Florida"
        buttonText="View All Cities"
        columns={3}
        items={[
          {
            title: "Jacksonville",
            image: "/State Detail/30_rectangle_591.png",
            imageAlt: "Jacksonville Florida",
          },
          {
            title: "Miami",
            image: "/State Detail/31_rectangle_593.png",
            imageAlt: "Miami Florida",
          },
          {
            title: "Tampa",
            image: "/State Detail/32_rectangle_594.png",
            imageAlt: "Tampa Florida",
          },
        ]}
      />

      <LocationShowcase
        heading="Specializing in RCM Solutions across the counties of Florida"
        buttonText="View All Counties"
        columns={4}
        items={[
          {
            title: "Miami-Dade",
            image: "/State Detail/33_rectangle_593.png",
            imageAlt: "Miami-Dade County Florida",
          },
          {
            title: "Broward",
            image: "/State Detail/34_rectangle_624.png",
            imageAlt: "Broward County Florida",
          },
          {
            title: "Palm Beach",
            image: "/State Detail/35_rectangle_595.png",
            imageAlt: "Palm Beach County Florida",
          },
          {
            title: "Hillsborough",
            image: "/State Detail/36_rectangle_617.png",
            imageAlt: "Hillsborough County Florida",
          },
        ]}
      />

      <StateTrustGrid
        heading="Why Florida Healthcare Providers Trust Avenue Billing Services"
        description="Florida healthcare providers face unique billing challenges, from strict payer filing deadlines and Medicare Advantage complexities to Medicaid managed care requirements and credentialing delays. Avenue Billing Services helps practices across Florida strengthen revenue performance through accurate billing, proactive denial prevention, and state-specific revenue cycle expertise."
        items={[
          {
            title: "Florida-Focused Billing Expertise",
            description:
              "Our team understands Florida payer requirements, Medicare Advantage plans, Medicaid managed care organizations, and commercial insurance billing guidelines. We help practices reduce payment delays.",
            highlighted: true,
          },
          {
            title: "Faster Payments & Lower Denials",
            description:
              "Through claim scrubbing, coding validation, eligibility verification, and denial management, we help improve first-pass claim acceptance rates and accelerate reimbursement timelines for Florida providers.",
          },
          {
            title: "Complete Revenue Cycle Support",
            description:
              "From patient eligibility verification and charge entry to payment posting, A/R follow-up, and reporting, we manage the entire revenue cycle under one roof to reduce administrative burden on your staff.",
          },
          {
            title: "Support Across 51+ Medical Specialties",
            description:
              "Different specialties face different coding, documentation, and payer requirements. Our billing and coding teams support 51+ specialties, helping providers maintain compliance and improve payments.",
          },
          {
            title: "Credentialing, Licensing & Compliance Assistance",
            description:
              "We assist Florida providers with payer credentialing, enrollment management, state licensing support, and ongoing compliance requirements to help maintain uninterrupted billing operations.",
          },
          {
            title: "Scalable Solutions for Practices Across Florida",
            description:
              "Whether you operate a solo practice, specialty clinic, group practice, or multi-location healthcare organization, our scalable billing solutions adapt to your growth and operational needs.",
          },
        ]}
      />

      <StateConsultationCTA
        heading="Start Optimizing Your RCM with Florida Billing Experts"
        description="Connect with our Florida billing specialists for a personalized consultation and discover opportunities to strengthen cash flow, accelerate reimbursements, and optimize practice performance."
        backgroundImage="/State Detail/38_2.png"
        formHeading="Claim Your Free Consultation"
        buttonText="Request a Free Quote"
        phones={["770-892-1006", "770-779-9930"]}
      />

      <StateTestimonials
        heading="Our Satisfied Clients Across Florida"
        testimonials={[
          {
            name: "Dr. Ahmed Raza",
            role: "Orthopedic Surgeon",
            quote:
              "They reduced our billing backlog and helped us recover thousands in unpaid claims. Their team really knows the healthcare system.",
            ratingImage: "/State Detail/39_rectangle_181.png",
            ratingAlt: "5 star rating",
          },
          {
            name: "Dr. Sarah Khan",
            role: "Family Physician",
            quote:
              "This team has completely streamlined my billing process. I can now focus on patient care while they handle claims quickly and accurately. Excellent service!",
            ratingImage: "/State Detail/40_rectangle_187.png",
            ratingAlt: "5 star rating",
          },
          {
            name: "Dr. Imran Malik",
            role: "Cardiologist",
            quote:
              "They are professional, efficient, and knowledgeable. Our collections increased by nearly 35% in just a few months. Truly a great experience!",
            ratingImage: "/State Detail/41_rectangle_183.png",
            ratingAlt: "5 star rating",
          },
          {
            name: "Dr. Ayesha Qureshi",
            role: "Dermatologist",
            quote:
              "Their understanding of medical coding and compliance is exceptional. Every claim is handled perfectly, saving us time and avoiding errors.",
            ratingImage: "/State Detail/42_rectangle_185.png",
            ratingAlt: "5 star rating",
          },
          {
            name: "Dr. Maria Yousaf",
            role: "Pediatrician",
            quote:
              "They are detail-oriented and professional. Our practice has seen a noticeable difference in revenue and efficiency since partnering with them.",
            ratingImage: "/State Detail/43_rectangle_189.png",
            ratingAlt: "5 star rating",
          },
        ]}
      />

      <FAQSection
        heading="Frequently Asked Questions"
        defaultOpenIndex={0}
        faqs={[
          {
            question:
              "What makes Avenue Medical Billing different from other billing companies?",
            answer:
              "We combine technology, experience, and personal attention to ensure faster reimbursements with transparent reporting and U.S.-based support.",
          },
          {
            question: "Is your medical billing process HIPAA-compliant?",
            answer:
              "Yes. Our workflows are designed to support HIPAA-compliant handling of protected health information throughout the billing process.",
          },
          {
            question: "Do you work with all specialties?",
            answer:
              "We support a broad range of medical specialties with specialty-aware billing, coding, denial management, credentialing, and revenue cycle workflows.",
          },
          {
            question: "Can I get a free consultation before signing up?",
            answer:
              "Yes. You can request a consultation to discuss your current billing workflow, payer mix, denials, and revenue cycle needs before moving forward.",
          },
        ]}
      />
    </main>
  );
}
