import CertificationCTA from "../Components/CertificationCTA";
import EHRPartners from "../Components/EHRPartners";
import FAQSection from "../Components/FAQSection";
import ServiceHero from "../Components/ServiceHero";
import SpecialtyDenialSections from "../Components/SpecialtyDenialSections";
import SpecialtyDirectory from "../Components/SpecialtyDirectory";
import SpecialtyIntro from "../Components/SpecialtyIntro";
import StateSupportGrid from "../Components/StateSupportGrid";
import Testimonials from "../Components/Testimonials";

export default function SpecialityListingPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Specialty-Focused Medical Billing & RCM Services"
        description="Every specialty has unique coding rules, documentation needs, modifiers, and payer requirements. Our specialty-trained billing & RCM team handles everything, from coding accuracy to denial prevention, so your clinic gets clean claims, faster payments, and predictable monthly revenue. We manage 40+ specialties and integrate directly with your EHR to keep your workflow smooth and your cash flow stable."
        backgroundImage="/Speciality Listing/2_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <SpecialtyIntro
        heading="Why Specialty Billing Matters"
        description="Every specialty comes with different codes, modifiers, payer rules, documentation guidelines, and medical necessity requirements. Generic billing teams miss these details; specialty-trained billers don't."
        points={[
          "Each specialty has unique ICD-10, CPT, and modifier rules",
          "Payers apply specialty-specific denials and edits",
          "Specialty-focused billing = fewer denials + faster approvals",
        ]}
        image="/Speciality Listing/55_rectangle_422.png"
        imageAlt="Medical specialists"
      />

      <SpecialtyDirectory
        heading="Our Specialities"
        specialties={[
          {
            title: "Cardiology",
            icon: "/Speciality Listing/36_rectangle_8413.png",
            iconAlt: "Cardiology",
            highlighted: true,
          },
          {
            title: "Urgent Care",
            icon: "/Speciality Listing/4_rectangle_325.png",
            iconAlt: "Urgent Care",
            
          },
          {
            title: "Urology",
            icon: "/Speciality Listing/5_rectangle_326.png",
            iconAlt: "Urology",
            
          },
          {
            title: "Behavioral Health",
            icon: "/Speciality Listing/6_rectangle_790.png",
            iconAlt: "Behavioral Health",
            
          },
          {
            title: "Internal Medicine",
            icon: "/Speciality Listing/7_rectangle_299.png",
            iconAlt: "Internal Medicine",
            
          },
          {
            title: "Dermatology",
            icon: "/Speciality Listing/3_rectangle_297.png",
            iconAlt: "Dermatology",
            
          },
          {
            title: "Plastic Surgery",
            icon: "/Speciality Listing/26_rectangle_319.png",
            iconAlt: "Plastic Surgery",
            
          },
          {
            title: "Emergency Medicine",
            icon: "/Speciality Listing/8_rectangle_300.png",
            iconAlt: "Emergency Medicine",
            
          },
          {
            title: "Geriatrics",
            icon: "/Speciality Listing/34_rectangle_303.png",
            iconAlt: "Geriatrics",
            
          },
          {
            title: "Hematology",
            icon: "/Speciality Listing/35_rectangle_304.png",
            iconAlt: "Hematology",
            
          },
          {
            title: "Infectious Disease",
            icon: "/Speciality Listing/11_rectangle_305.png",
            iconAlt: "Infectious Disease",
            
          },
          {
            title: "General Surgery",
            icon: "/Speciality Listing/10_rectangle_302.png",
            iconAlt: "General Surgery",
            
          },
          {
            title: "Radiology",
            icon: "/Speciality Listing/31_rectangle_307.png",
            iconAlt: "Radiology",
            
          },
          {
            title: "Rheumatology",
            icon: "/Speciality Listing/32_rectangle_308.png",
            iconAlt: "Rheumatology",
            
          },
          {
            title: "Vascular Surgery",
            icon: "/Speciality Listing/33_rectangle_309.png",
            iconAlt: "Vascular Surgery",
            
          },
          {
            title: "Nephrology",
            icon: "/Speciality Listing/12_rectangle_310.png",
            iconAlt: "Nephrology",
            
          },
          {
            title: "Neurology",
            icon: "/Speciality Listing/15_rectangle_321.png",
            iconAlt: "Neurology",
            
          },
          {
            title: "Obstetrics & Gynecology",
            icon: "/Speciality Listing/27_rectangle_311.png",
            iconAlt: "Obstetrics & Gynecology",
            
          },
          {
            title: "Oncology",
            icon: "/Speciality Listing/28_rectangle_313.png",
            iconAlt: "Oncology",
            
          },
          {
            title: "Ophthalmology",
            icon: "/Speciality Listing/20_rectangle_326.png",
            iconAlt: "Ophthalmology",
            
          },
          {
            title: "Orthopedics",
            icon: "/Speciality Listing/13_rectangle_315.png",
            iconAlt: "Orthopedics",
            
          },
          {
            title: "Otolaryngology (ENT)",
            icon: "/Speciality Listing/23_rectangle_316.png",
            iconAlt: "Otolaryngology (ENT)",
            
          },
          {
            title: "Pediatrics",
            icon: "/Speciality Listing/24_rectangle_317.png",
            iconAlt: "Pediatrics",
            
          },
          {
            title: "Physical Medicine & Rehabilitation",
            icon: "/Speciality Listing/25_rectangle_318.png",
            iconAlt: "Physical Medicine & Rehabilitation",
            
          },
          {
            title: "Gastroenterology",
            icon: "/Speciality Listing/9_rectangle_301.png",
            iconAlt: "Gastroenterology",
            
          },
          {
            title: "Podiatry",
            icon: "/Speciality Listing/14_rectangle_320.png",
            iconAlt: "Podiatry",
            
          },
          {
            title: "Psychiatry",
            icon: "/Speciality Listing/30_rectangle_312.png",
            iconAlt: "Psychiatry",
            
          },
          {
            title: "Pulmonology",
            icon: "/Speciality Listing/16_rectangle_322.png",
            iconAlt: "Pulmonology",
            
          },
          {
            title: "Durable Medical Equipment",
            icon: "/Speciality Listing/17_rectangle_323.png",
            iconAlt: "Durable Medical Equipment",
            
          },
          {
            title: "Allergy & Immunology",
            icon: "/Speciality Listing/18_rectangle_324.png",
            iconAlt: "Allergy & Immunology",
            
          },
          {
            title: "Anesthesiology",
            icon: "/Speciality Listing/19_rectangle_325.png",
            iconAlt: "Anesthesiology",
            
          },
          {
            title: "Optometry",
            icon: "/Speciality Listing/29_rectangle_314.png",
            iconAlt: "Optometry",
            
          },
          {
            title: "Endocrinology",
            icon: "/Speciality Listing/21_rectangle_323.png",
            iconAlt: "Endocrinology",
            
          },
          {
            title: "Audiology",
            icon: "/Speciality Listing/22_rectangle_323.png",
            iconAlt: "Audiology",
            
          }
        ]}
      />

      <SpecialtyDenialSections
        items={[
          {
            title: "How Avenue Billing Services Prevents Claim Denials",
            description:
              "Claim denial prevention begins before submission. A structured validation system ensures that claims meet payer requirements.\nEligibility verification confirms active coverage. Coding validation ensures that CPT and ICD-10 codes align with documentation. Claim scrubbing tools detect errors before submission. After submission, denial monitoring tracks rejected claims and identifies patterns.\nBy addressing root causes—coding errors, eligibility issues, and documentation gaps Avenue Billing Services reduces denial rates and improves reimbursement speed.",
            subheading: "KPI-Based Medical Billing Performance System",
            details:
              "Billing performance is measured using defined metrics that reflect financial efficiency.\nClean Claim Rate: Measures how many claims are accepted without rejection. Denial Rate: Indicates the percentage of claims rejected due to errors.",
            image: "/Speciality Listing/37_rectangle_723.png",
            imageAlt: "Medical team collaborating",
            buttonText: "Talk to a Billing Expert",
            buttonHref: "#",
          },
          {
            title: "How Avenue Billing Services Prevents Claim Denials",
            description:
              "Claim denial prevention begins before submission. A structured validation system ensures that claims meet payer requirements.\nEligibility verification confirms active coverage. Coding validation ensures that CPT and ICD-10 codes align with documentation. Claim scrubbing tools detect errors before submission. After submission, denial monitoring tracks rejected claims and identifies patterns.\nBy addressing root causes—coding errors, eligibility issues, and documentation gaps Avenue Billing Services reduces denial rates and improves reimbursement speed.",
            subheading: "KPI-Based Medical Billing Performance System",
            details:
              "Billing performance is measured using defined metrics that reflect financial efficiency.\nClean Claim Rate: Measures how many claims are accepted without rejection. Denial Rate: Indicates the percentage of claims rejected due to errors.",
            image: "/Speciality Listing/37_rectangle_723.png",
            imageAlt: "Medical team collaborating",
            buttonText: "Talk to a Billing Expert",
            buttonHref: "#",
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
        bottomText="If your pedriatric practice is using another EHR? Talk with our billing team about your current platform and billing audit."
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
              "The biggest improvement has been consistency. Claims are reviewed carefully, denials are followed up on, and aging balances no longer sit untouched. Our team spends less time tracking billing issues and more time supporting patients and families.",
          },
          {
            name: "Dr. Daniel Mitchell",
            role: "Medical Director | Growing Kids Pediatrics",
            image: "/RCM Services Location/31_ellipse_293.png",
            imageAlt: "Dr. Daniel Mitchell",
            ratingImage: "/RCM Services Location/34_rectangle_1897.png",
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
              "Vaccine billing depends on accurate product and administration coding, payer rules, VFC eligibility, counseling documentation, and timely claim submission.",
          },
          {
            question:
              "Why are developmental and behavioral screenings sometimes denied or underpaid?",
            answer:
              "Screenings can be denied when coding, diagnosis linkage, documentation, frequency limits, or payer-specific requirements are incomplete.",
          },
          {
            question:
              "How do Medicaid and CHIP requirements affect pediatric billing?",
            answer:
              "Medicaid and CHIP requirements vary by program and payer, including eligibility, preventive services, modifiers, authorizations, and reimbursement rules.",
          },
          {
            question:
              "Why do newborn claims get rejected even when the baby has Medicaid coverage?",
            answer:
              "Newborn claims can reject when enrollment, member identification, demographics, effective dates, or payer records have not yet synchronized.",
          },
          {
            question:
              "Why does pediatric A/R continue growing despite a high patient volume?",
            answer:
              "High patient volume does not prevent aging A/R when denied, underpaid, or pending claims are not followed consistently.",
          },
        ]}
      />
    </main>
  );
}
