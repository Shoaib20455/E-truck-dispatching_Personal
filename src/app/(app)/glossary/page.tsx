import GlossaryLayout from "../Components/GlossaryLayout";
import { glossarySections } from "./GlossaryData";

export default function GlossaryPage() {
  return (
    <main>
      <GlossaryLayout
        title="Glossary of Medical Coding, Billing & Insurance Terminologies"
        sections={glossarySections}
        alphabetAriaLabel="Glossary alphabet"
        tableOfContentsLabel="Table of Content"
        consultation={{
          heading: "Schedule a Free Consultation",
          specialties: [
            "Cardiology",
            "Dermatology",
            "Pediatrics",
            "Primary Care",
            "Neurology",
            "Orthopedics",
          ],
          monthlyCollections: [
            "Under $25,000",
            "$25,000 - $50,000",
            "$50,000 - $100,000",
            "$100,000+",
          ],
          copy: {
            practiceNameLabel: "Practice Name *",
            practiceNamePlaceholder: "Full Name",
            specialtyLabel: "Select Your Specialty *",
            specialtyPlaceholder: "Select Specialty",
            nameLabel: "Name *",
            namePlaceholder: "Enter Full Name",
            phoneLabel: "Phone Number *",
            phonePlaceholder: "(000) 000-0000",
            emailLabel: "Email Address *",
            emailPlaceholder: "Your Email Address",
            monthlyCollectionLabel: "Monthly Collection *",
            monthlyCollectionPlaceholder: "Monthly Collection",
          },
          buttonText: "Book Consultation",
        }}
        author={{
          name: "Danish Gujjar",
          role: "Seo sapecialits",
          image: "/blog detail( basically slug)/11_ellipse_198.png",
          imageAlt: "Danish Gujjar",
          published: "January 3, 2026",
          updated: "April 28, 2026",
          publishedLabel: "Published",
          updatedLabel: "Updated",
          socialLinks: [
            { label: "LinkedIn", mark: "in", href: "#" },
            { label: "Facebook", mark: "f", href: "#" },
            { label: "Instagram", mark: "◎", href: "#" },
            { label: "X", mark: "𝕏", href: "#" },
            { label: "YouTube", mark: "▶", href: "#" },
          ],
        }}
      />
    </main>
  );
}
