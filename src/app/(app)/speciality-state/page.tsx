import BillingProcess from "../Components/BillingProcess";
import CaseStudyArticles from "../Components/CaseStudyArticles";
import CertificationCTA from "../Components/CertificationCTA";
import EHRPartners from "../Components/EHRPartners";
import ExpertGuides from "../Components/ExpertGuides";
import ExpertiseCardGrid from "../Components/ExpertiseCardGrid";
import FAQSection from "../Components/FAQSection";
import LocationShowcase from "../Components/LocationShowcase";
import ServiceGridWithImage from "../Components/ServiceGridWithImage";
import StateConsultationCTA from "../Components/StateConsultationCTA";
import StateRegions from "../Components/StateRegions";
import StateServiceHero from "../Components/StateServiceHero";
import StateTrustGrid from "../Components/StateTrustGrid";
import SuccessNumbers from "../Components/SuccessNumbers";
import Testimonials from "../Components/Testimonials";

export default function SpecialityStatePage() {
  return (
    <main>
      <StateServiceHero
        eyebrow="Best Medical Billing Company in Florida"
        heading="Healthcare Billing Services for Florida Practices"
        description="Avenue Billing Services serves healthcare providers from Miami, Orlando, Tampa, Jacksonville, and all communities across Florida. We deliver precise medical billing, faster reimbursements, denial reduction, and complete revenue cycle support. Our Florida-focused billing experts help practices improve cash flow, strengthen compliance, and maximize collections statewide."
        servedText="Served 25+ Healthcare Practices in Florida"
        backgroundImage="/speciality state/2_rectangle_1893.png"
        formHeading="Consult With a Florida Medical Billing Specialist"
        reviews={[
          { label: "Clutch", rating: "★★★★★" },
          { label: "Google", rating: "★★★★★" },
          { label: "Testimonial", rating: "★★★★★" },
          { label: "Trustpilot", rating: "★★★★★" },
        ]}
      />

      <StateRegions
        heading="Major Florida Regions Covered by Avenue Billing Services"
        description="Serving healthcare providers across Florida with specialized medical billing, coding, and revenue cycle management solutions."
        image="/speciality state/7_rectangle_1955.png"
        imageAlt="Florida medical billing specialists"
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
              { label: "Medicaid, CHIP & Commercial", value: "3+ Payer Types" },
            ],
          },
          {
            items: [
              { label: "Aging A/R Reduction", value: "35%" },
              { label: "End-to-End Billing Support", value: "6+ RCM Functions" },
            ],
          },
        ]}
      />

      <StateConsultationCTA
        heading="Stop Losing Revenue in the Growing Healthcare Space of Florida"
        description="Reduce denials, speed up payments, and stabilize your revenue cycle with Avenue Billing Services."
        backgroundImage="/RCM Services Location/66_1.png"
        formHeading="Claim Your Free Consultation"
        buttonText="Request a Free Quote"
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

      <LocationShowcase
        heading="City-Wise Medical Billing Services in Florida"
        buttonText="View All Cities"
        items={[
          {
            title: "Wilmington",
            image: "/speciality state/59_wilmington.png",
            imageAlt: "Wilmington",
          },
          {
            title: "Dover",
            image: "/speciality state/58_dover.png",
            imageAlt: "Dover",
          },
          {
            title: "Newark",
            image: "/speciality state/57_newark.png",
            imageAlt: "Newark",
          },
        ]}
      />

      <LocationShowcase
        heading="Specializing in RCM Solutions across the counties of Florida"
        buttonText="View All Counties"
        columns={4}
        items={[
          {
            title: "New Castle County",
            image: "/speciality state/3_new_castle_countyectangle_593.png",
            imageAlt: "New Castle County",
          },
          {
            title: "Sussex County",
            image: "/speciality state/4_sussex_county.png",
            imageAlt: "Sussex County",
          },
          {
            title: "Kent County",
            image: "/speciality state/6_kent_county.png",
            imageAlt: "Kent County",
          },
          {
            title: "Wilmington CCD",
            image: "/speciality state/5_wilmington_ccd.png",
            imageAlt: "Wilmington CCD",
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
              "We manage billing and coding for well-child visits, vaccines, screenings, newborn care, acute visits, and chronic pediatric conditions. Our workflows also account for Medicaid, CHIP, VFC, and commercial payer requirements.",
          },
          {
            title: "A/R Management & Revenue Reporting",
            description:
              "We track unpaid, underpaid, denied, and aging claims throughout the revenue cycle. Outstanding balances receive consistent follow-up while payment and denial trends are monitored.",
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

      <ExpertiseCardGrid
        heading="Our Expertise in Pain Management, CPT Codes & ICD Cases"
        cards={[
          {
            title: "Comprehensive CPT Coding",
            code: "",
            description:
              "Expert navigation of complex procedural codes specific to interventional procedures, medication management, and evaluations.",
            highlighted: true,
          },
          {
            title: "Accurate ICD-10 Diagnosis Mapping",
            code: "",
            description:
              "Precise linkage of diagnostic codes to support medical necessity and prevent rejection.",
          },
          {
            title: "Modifier Optimization",
            code: "",
            description:
              "Strategic application of anatomical and procedural modifiers to ensure proper reimbursement.",
          },
          {
            title: "Compliance & Documentation Review",
            code: "",
            description:
              "Thorough clinical documentation checks to withstand payer audits and reduce compliance risks.",
          },
          {
            title: "Interventional Pain Procedures",
            code: "",
            description:
              "Specialized handling of complex spinal injections, nerve blocks, and neuromodulation claims.",
          },
          {
            title: "Chronic Pain Management",
            code: "",
            description:
              "Detailed tracking of recurring patient visits, care plans, and multidisciplinary treatment documentation.",
          },
          {
            title: "Pre-Authorization Handling",
            code: "",
            description:
              "Proactive acquisition of prior authorizations to eliminate procedural delays and upfront denials.",
          },
          {
            title: "Appeals & Dispute Resolution",
            code: "",
            description:
              "Robust management of denied or underpaid claims backed by clinical notes and policy guidelines.",
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
          imageAlt: "Healthcare practice transformation",
        }}
        sideArticles={[
          {
            date: "Feb 12, 2026",
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/93_rectangle_201.png",
            imageAlt: "Healthcare practice case study",
          },
          {
            date: "Feb 10, 2026",
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/96_rectangle_206.png",
            imageAlt: "Healthcare billing case study",
          },
        ]}
      />

      <EHRPartners
        heading="We Work With Leading EHR & Practice Management Systems"
        description="Our billing team works with established medical EHR and practice management platforms so your practice does not need to rebuild its workflow simply to outsource billing."
        partners={[
          { logo: "/RCM Services Location/16_rectangle_859.png", alt: "athenahealth" },
          { logo: "/RCM Services Location/17_rectangle_850.png", alt: "AdvancedMD" },
          { logo: "/RCM Services Location/18_rectangle_849.png", alt: "eClinicalWorks" },
          { logo: "/RCM Services Location/19_rectangle_853.png", alt: "Tebra" },
          { logo: "/RCM Services Location/20_rectangle_854.png", alt: "NextGen" },
          { logo: "/RCM Services Location/21_rectangle_1923.png", alt: "Office Ally" },
        ]}
        bottomText="If your pediatric practice is using another EHR, talk with our billing team about your current platform and billing audit."
        buttonText="Talk to an expert"
        buttonHref="#"
      />

      <StateConsultationCTA
        heading="Start Optimizing Your RCM with Florida Billing Experts"
        description="Connect with our Florida billing specialists for a personalized consultation and discover opportunities to strengthen cash flow, accelerate reimbursements, and optimize practice performance."
        backgroundImage="/RCM Services Location/66_1.png"
        formHeading="Claim Your Free Consultation"
        buttonText="Request a Free Quote"
        phones={["770-892-1006", "770-779-9930"]}
      />

      <Testimonials
        heading="What Healthcare Practices Say About Us"
        testimonials={[
          {
            name: "Dr. Emily Carter",
            role: "Pediatrician | BrightCare Pediatrics",
            image: "/RCM Services Location/29_ellipse_291.png",
            imageAlt: "Dr. Emily Carter",
            ratingImage: "/RCM Services Location/34_rectangle_1897.png",
            ratingAlt: "5 star rating",
            quote:
              "Avenue Billing Services has made our pediatric billing process much more organized. Their team understands well-child visits, immunizations, payer requirements, and denial follow-up. We now have better visibility into our claims and outstanding revenue.",
          },
          {
            name: "Jessica Reynold",
            role: "Practice Manager | Little Steps Pediatric Clinic",
            image: "/RCM Services Location/32_ellipse_292.png",
            imageAlt: "Jessica Reynold",
            ratingImage: "/RCM Services Location/34_rectangle_1897.png",
            ratingAlt: "5 star rating",
            quote:
              "The biggest improvement has been consistency. Claims are reviewed carefully, denials are followed up on, and aging balances no longer sit untouched.",
          },
          {
            name: "Dr. Daniel Mitchell",
            role: "Medical Director | Growing Kids Pediatrics",
            image: "/RCM Services Location/31_ellipse_293.png",
            imageAlt: "Dr. Daniel Mitchell",
            ratingImage: "/RCM Services Location/34_rectangle_1897.png",
            ratingAlt: "5 star rating",
            quote:
              "Pediatric billing comes with its own challenges, especially with Medicaid, preventive services, and vaccinations. Avenue Billing Services has given us a clearer revenue cycle.",
          },
        ]}
      />

      <ExpertGuides
        heading="Blogs"
        guides={[
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing blog",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing blog",
          },
          {
            title: "How to Bill Physical Therapy for Group Therapy Sessions",
            description:
              "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
            image: "/Home/49_rectangle_79.png",
            imageAlt: "Medical billing blog",
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
    </main>
  );
}
