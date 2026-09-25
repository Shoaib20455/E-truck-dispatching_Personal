import AboutUsContent from "../Components/AboutUsContent";
import ServiceHero from "../Components/ServiceHero";

export default function AboutUsPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Smart Solutions for Seamless Medical Billing"
        description="We are a trusted medical billing partner committed to improving your practice’s financial performance. With certified experts and advanced technology, we deliver accurate, efficient, and compliant billing solutions."
        backgroundImage="/about us/2_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <AboutUsContent />
    </main>
  );
}
