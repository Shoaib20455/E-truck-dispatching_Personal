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

      <ContactDetailsSection />
    </main>
  );
}
