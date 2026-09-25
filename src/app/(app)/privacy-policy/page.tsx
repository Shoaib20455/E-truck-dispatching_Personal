import PrivacyBreachNotificationSection from "../Components/PrivacyBreachNotificationSection";
import PrivacyChildrenSection from "../Components/PrivacyChildrenSection";
import PrivacyDataRetentionSection from "../Components/PrivacyDataRetentionSection";
import PrivacyDataUseSection from "../Components/PrivacyDataUseSection";
import PrivacyHIPAASection from "../Components/PrivacyHIPAASection";
import PrivacyInformationCollectedSection from "../Components/PrivacyInformationCollectedSection";
import PrivacyPolicyUpdatesSection from "../Components/PrivacyPolicyUpdatesSection";
import PrivacyRightsSection from "../Components/PrivacyRightsSection";
import PrivacySecurityMeasuresSection from "../Components/PrivacySecurityMeasuresSection";
import PrivacyThirdPartySection from "../Components/PrivacyThirdPartySection";
import ServiceHero from "../Components/ServiceHero";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Privacy Policy"
        description="At Avenue Billing Services, we are committed to protecting your privacy and ensuring the confidentiality and security of Protected Health Information (PHI) in compliance with the Health Insurance Portability and Accountability Act of 1996 (HIPAA), HITECH Act, and other applicable U.S. healthcare privacy laws. This Privacy Policy describes how we collect, use, disclose, and safeguard PHI and other personal information."
        backgroundImage="/Medical Billing analysis/1_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <section className="w-full bg-cyan-50 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1520px] space-y-10 px-6 lg:px-8 2xl:px-0">
          <PrivacyHIPAASection />
          <PrivacyInformationCollectedSection />
          <PrivacyDataUseSection />
          <PrivacyRightsSection />
          <PrivacySecurityMeasuresSection />
          <PrivacyBreachNotificationSection />
          <PrivacyThirdPartySection />
          <PrivacyDataRetentionSection />
          <PrivacyChildrenSection />
          <PrivacyPolicyUpdatesSection />
        </div>
      </section>
    </main>
  );
}
