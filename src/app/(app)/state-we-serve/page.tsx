import FAQSection from "../Components/FAQSection";
import ServiceHero from "../Components/ServiceHero";
import SpecialtyIntro from "../Components/SpecialtyIntro";
import StateDirectoryGrid from "../Components/StateDirectoryGrid";
import StateRevenueBanner from "../Components/StateRevenueBanner";

export default function StateWeServePage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Medical Billing & RCM Services Across the United States"
        description="We support healthcare providers across multiple U.S. states with complete medical billing, coding, denial management, credentialing, and full RCM workflows."
        backgroundImage="/Medical Billing/2_rectangle_767.png"
        highlights={[
          { text: "Solo Providers" },
          { text: "Multi-Location Clinics" },
          { text: "Specialty Practices" },
          { text: "Urgent Care" },
          { text: "Group Practices" },
        ]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <SpecialtyIntro
        heading="Why State-Specific Billing Matters"
        description="Each state has unique Medicaid rules, payer policies, enrollment requirements, and filing deadlines. We adjust your billing workflow to match your state’s regulations, reducing denials and improving reimbursement."
        points={[
          "State-based Medicaid and payer rule alignment",
          "Faster provider enrollment and credentialing",
          "Accurate claim submission based on regional guidelines",
        ]}
        image="/state we serve/2_rectangle_422.png"
        imageAlt="Healthcare professional holding a stethoscope"
      />

      <StateDirectoryGrid
        heading="States We Serve"
        pinIcon="/state we serve/8_rectangle_619.png"
        states={[
          { name: "New York", abbreviation: "NY", image: "/state we serve/17_rectangle_593.png" },
          { name: "North Carolina", abbreviation: "NC", image: "/state we serve/18_rectangle_624.png" },
          { name: "Florida", abbreviation: "FL", image: "/state we serve/23_rectangle_617.png" },
          { name: "South Carolina", abbreviation: "SC", image: "/state we serve/19_rectangle_595.png" },

          { name: "Massachusetts", abbreviation: "MA", image: "/state we serve/37_rectangle_615.png" },
          { name: "Alabama", abbreviation: "AL", image: "/state we serve/35_rectangle_593.png" },
          { name: "New Jersey", abbreviation: "NJ", image: "/state we serve/38_rectangle_618.png" },
          { name: "California", abbreviation: "CA", image: "/state we serve/33_rectangle_591.png" },

          { name: "Alaska", abbreviation: "AK", image: "/state we serve/26_rectangle_594.png" },
          { name: "Virginia", abbreviation: "VA", image: "/state we serve/31_rectangle_616.png" },
          { name: "Oklahoma", abbreviation: "OK", image: "/state we serve/25_rectangle_591.png" },
          { name: "Illinois", abbreviation: "IL", image: "/state we serve/27_rectangle_595.png" },

          { name: "Washington", abbreviation: "WA", image: "/state we serve/43_rectangle_617.png" },
          { name: "Colorado", abbreviation: "CO", image: "/state we serve/42_rectangle_616.png" },
          { name: "Michigan", abbreviation: "MI", image: "/state we serve/41_rectangle_615.png" },
          { name: "Nevada", abbreviation: "NV", image: "/state we serve/44_rectangle_618.png" },

          { name: "Missouri", abbreviation: "MO", image: "/state we serve/51_rectangle_617.png" },
          { name: "Maine", abbreviation: "ME", image: "/state we serve/50_rectangle_616.png" },
          { name: "Oregon", abbreviation: "OR", image: "/state we serve/49_rectangle_615.png" },
          { name: "Pennsylvania", abbreviation: "PA", image: "/state we serve/52_rectangle_618.png" },

          { name: "Ohio", abbreviation: "OH", image: "/state we serve/7_rectangle_628.png" },
          { name: "Texas", abbreviation: "TX", image: "/state we serve/5_rectangle_594.png" },
          { name: "Connecticut", abbreviation: "CT", image: "/state we serve/12_rectangle_628.png" },
          { name: "Georgia", abbreviation: "GA", image: "/state we serve/11_rectangle_594.png" },

          { name: "Maryland", abbreviation: "MD", image: "/state we serve/6_rectangle_631.png" },
          { name: "New Hampshire", abbreviation: "NH", image: "/state we serve/13_rectangle_631.png" },
        ]}
      />

      <StateRevenueBanner
        heading="Ready to Improve Revenue for Your State?"
        description="Get a free audit and see how much revenue your practice is losing to state-specific denials, payer rules, and billing errors."
        backgroundImage="/state we serve/3_1.png"
        doctorImage="/state we serve/4_rectangle_627.png"
        doctorAlt="Medical billing specialist"
        primaryButtonText="Get Free Billing Audit"
        primaryButtonHref="#"
        secondaryButtonText="Talk to an RCM Expert"
        secondaryButtonHref="#"
      />

      <FAQSection
        heading="Frequently Asked Questions"
        defaultOpenIndex={0}
        faqs={[
          {
            question: "Do you support Medicaid and state-specific insurance plans?",
            answer:
              "Yes, we work with statewide Medicaid programs, regional insurers, and state-level filing policies.",
          },
          {
            question: "Do you help clinics spreading across multiple states?",
            answer:
              "Yes. Our billing workflows can support practices operating across multiple states while accounting for state-level payer and enrollment requirements.",
          },
          {
            question: "How fast can you start billing in my state?",
            answer:
              "Onboarding time depends on your current billing setup, payer access, credentialing status, and workflow requirements.",
          },
        ]}
      />
    </main>
  );
}
