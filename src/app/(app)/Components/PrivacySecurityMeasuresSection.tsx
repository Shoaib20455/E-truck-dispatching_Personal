export default function PrivacySecurityMeasuresSection() {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
        Security Measures to Protect Your Data
      </h2>

      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p className="font-semibold text-heading">Technical Safeguards:</p>
        <p>End-to-end data encryption (SSL, AES-256)</p>
        <p>Secure VPN access for remote operations</p>
        <p>Intrusion detection and malware protection systems</p>
        <p>Multi-factor authentication (MFA) for all internal systems</p>

        <p className="mt-1 font-semibold text-heading">Physical Safeguards:</p>
        <p>Restricted server access with 24/7 monitoring</p>
        <p>Biometric or card access control systems at facility entrances</p>
        <p>Secure disposal of physical records</p>

        <p className="mt-1 font-semibold text-heading">Administrative Safeguards:</p>
        <p>Annual HIPAA compliance training for all staff</p>
        <p>Internal policies for breach prevention and response</p>
        <p>Regular third-party security audits and assessments</p>
      </div>
    </div>
  );
}
