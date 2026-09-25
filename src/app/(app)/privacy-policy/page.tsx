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
          <PrivacyHIPAASection
            heading="Our Commitment to HIPAA Compliance"
            intro="We take our role as a HIPAA-compliant medical billing company seriously. Our internal systems, staff protocols, and third-party partnerships are all designed to comply with HIPAA’s Privacy and Security Rules."
            measuresHeading="Key Measures:"
            measures={[
              { label: "Encryption", text: "All PHI is encrypted during transmission (via SSL/TLS) and while stored (AES-256 encryption)." },
              { label: "Access Controls", text: "Only authorized personnel have access to PHI through strict role-based access systems." },
              { label: "Business Associate Agreements (BAAs)", text: "We execute signed BAAs with all vendors, contractors, and associates who process or store PHI on our behalf." },
              { label: "Audit Trails", text: "Comprehensive logging and monitoring ensure all access to PHI is recorded and auditable." },
            ]}
          />

          <PrivacyInformationCollectedSection
            heading="Information We Collect"
            intro="We collect only the data necessary to provide our medical billing and coding services."
            groups={[
              {
                heading: "From Healthcare Providers:",
                items: [
                  "Patient demographic information (e.g., name, DOB, gender)",
                  "Diagnosis codes (ICD-10)",
                  "Procedure codes (CPT/HCPCS)",
                  "Treatment records",
                  "Insurance provider details",
                  "Claim submission and remittance information",
                ],
              },
              {
                heading: "From Patients:",
                items: [
                  "Name and contact information",
                  "Insurance identification numbers",
                  "Limited financial data required for billing and claims",
                  "Any communication sent directly to our support or billing teams",
                ],
              },
            ]}
            footerText="We do not collect or store clinical treatment notes unless needed for billing purposes."
          />

          <PrivacyDataUseSection
            heading="How We Use Your Data"
            intro="We use PHI strictly for purposes related to medical billing, revenue cycle management, and healthcare operations, including:"
            items={[
              "Preparing and submitting insurance claims",
              "Verifying insurance eligibility and benefits",
              "Following up on unpaid or denied claims",
              "Resolving billing and payment issues",
              "Generating reports for providers (using de-identified or limited datasets where possible)",
            ]}
            footerText="We do not sell, rent, or use your PHI for marketing or commercial purposes."
          />

          <PrivacyRightsSection
            heading="Your Rights Under HIPAA"
            intro="Patients have the following rights regarding their PHI, which Avenue Billing Services fully supports and facilitates:"
            rights={[
              { label: "Right to Access", text: "You have the right to request a copy of your billing records." },
              { label: "Right to Amend", text: "You have the right to request corrections to inaccurate or incomplete PHI." },
              { label: "Right to Restrict Use", text: "You can request restrictions on how your PHI is used or disclosed for treatment, payment, or operations (subject to legal limitations)." },
              { label: "Right to an Accounting of Disclosures", text: "You may receive a list of disclosures of your PHI not related to treatment, payment, or operations." },
            ]}
          />

          <PrivacySecurityMeasuresSection
            heading="Security Measures to Protect Your Data"
            groups={[
              {
                heading: "Technical Safeguards:",
                items: [
                  "End-to-end data encryption (SSL, AES-256)",
                  "Secure VPN access for remote operations",
                  "Intrusion detection and malware protection systems",
                  "Multi-factor authentication (MFA) for all internal systems",
                ],
              },
              {
                heading: "Physical Safeguards:",
                items: [
                  "Restricted server access with 24/7 monitoring",
                  "Biometric or card access control systems at facility entrances",
                  "Secure disposal of physical records",
                ],
              },
              {
                heading: "Administrative Safeguards:",
                items: [
                  "Annual HIPAA compliance training for all staff",
                  "Internal policies for breach prevention and response",
                  "Regular third-party security audits and assessments",
                ],
              },
            ]}
          />

          <PrivacyBreachNotificationSection
            heading="Breach Notification Protocol"
            intro="Despite our best efforts, if a data breach affecting your PHI occurs, we will:"
            items={[
              "Notify you in writing within 60 days of discovery",
              "Provide details about the nature of the breach, what information was involved, and the steps taken",
              "Report the breach to the HHS Office for Civil Rights, as required under the HIPAA Breach Notification Rule.",
            ]}
            footerText="We may also inform state or local authorities, depending on jurisdictional laws."
          />

          <PrivacyThirdPartySection
            heading="Third-Party Vendors and Data Sharing"
            intro="We only share data with vendors who have signed Business Associate Agreements and meet HIPAA compliance requirements. These vendors may assist with:"
            items={[
              "Claims processing systems",
              "Clearinghouses",
              "Secure cloud storage providers",
              "Accounting and auditing services",
            ]}
            footerText="We do not allow any vendor to use PHI beyond what is necessary to deliver services."
          />

          <PrivacyDataRetentionSection
            heading="Data Retention Policy"
            text="We retain PHI only as long as required by law or contract. Once data is no longer needed, it is securely deleted or destroyed in accordance with HIPAA’s data disposal requirements."
          />

          <PrivacyChildrenSection
            heading="Children’s Privacy"
            text="Our services do not target children under 13, and we do not knowingly collect personal data from minors without proper legal or parental consent."
          />

          <PrivacyPolicyUpdatesSection
            heading="Policy Updates"
            paragraphs={[
              "We may update this Privacy Policy to reflect changes in regulations, technology, or business practices. We will post all updates on our website with a revised effective date.",
              "Please review this page periodically to stay informed about how we protect your information.",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
