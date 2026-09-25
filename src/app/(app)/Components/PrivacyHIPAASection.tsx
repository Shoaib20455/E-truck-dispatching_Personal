export default function PrivacyHIPAASection() {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
        Our Commitment to HIPAA Compliance
      </h2>

      <div className="mt-5 space-y-1 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>
          We take our role as a HIPAA-compliant medical billing company seriously. Our internal systems, staff protocols, and third-party partnerships are all designed to comply with HIPAA’s Privacy and Security Rules.
        </p>
        <p className="font-semibold text-heading">Key Measures:</p>
        <p><strong>Encryption:</strong> All PHI is encrypted during transmission (via SSL/TLS) and while stored (AES-256 encryption).</p>
        <p><strong>Access Controls:</strong> Only authorized personnel have access to PHI through strict role-based access systems.</p>
        <p><strong>Business Associate Agreements (BAAs):</strong> We execute signed BAAs with all vendors, contractors, and associates who process or store PHI on our behalf.</p>
        <p><strong>Audit Trails:</strong> Comprehensive logging and monitoring ensure all access to PHI is recorded and auditable.</p>
      </div>
    </div>
  );
}
