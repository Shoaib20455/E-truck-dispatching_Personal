import ContactDetailsSection from "../Components/ContactDetailsSection";
import ServiceHero from "../Components/ServiceHero";

export default function ContactUsPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Let's Connect Now!"
        description="If you are interested in our services, want to know more or have got any question's, We would be glad to answer your query. Get in touch now to find out how we can skyrocket your practice growth."
        backgroundImage="/contact us/2_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <ContactDetailsSection
        heading={"We will contact you within\none business day"}
        information={{
          heading: "Contact Us For Further Information",
          description:
            "Have questions or need more details? Reach out to us for personalized assistance and additional information. We’re here to help you with all your medical billing needs and provide expert support.",
          cards: [
            {
              title: "Address",
              lines: ["4309 Schubert,", "Colleyville", "Texas, TX 76034"],
              icon: "location",
            },
            {
              title: "Phone Number",
              lines: ["(737) 787 2147"],
              icon: "phone",
            },
            {
              title: "Business Hours",
              lines: ["Monday – Friday:", "08.00 – 17.00", "Saturday: 09.00 –", "12.00"],
              icon: "clock",
            },
          ],
          socialLinks: [
            { label: "LinkedIn", mark: "in", href: "#" },
            { label: "Facebook", mark: "f", href: "#" },
            { label: "X", mark: "𝕏", href: "#" },
            { label: "Instagram", mark: "◎", href: "#" },
            { label: "YouTube", mark: "▶", href: "#" },
          ],
        }}
        form={{
          heading: "Schedule a Free Consultation",
          specialties: [
            "Cardiology",
            "Dermatology",
            "Pediatrics",
            "Primary Care",
            "Neurology",
            "Orthopedics",
          ],
          states: [
            "Texas",
            "Florida",
            "California",
            "New York",
            "Georgia",
            "Washington",
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
            dateLabel: "Date *",
            timeLabel: "Time*",
            stateLabel: "Select Your State *",
            statePlaceholder: "Select State",
            messageLabel: "How Can We Help You?",
            messagePlaceholder: "Message",
          },
          privacyLabel:
            "I agree that Avenue Billing Services may contact me and use my information as described in its",
          privacyLinkLabel: "Privacy Policy",
          privacyHref: "#",
          buttonText: "Book Consultation",
        }}
      />
    </main>
  );
}
