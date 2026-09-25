export default function PrivacyDataUseSection() {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
        How We Use Your Data
      </h2>

      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>
          We use PHI strictly for purposes related to medical billing, revenue cycle management, and healthcare operations, including:
        </p>
        <p>Preparing and submitting insurance claims</p>
        <p>Verifying insurance eligibility and benefits</p>
        <p>Following up on unpaid or denied claims</p>
        <p>Resolving billing and payment issues</p>
        <p>Generating reports for providers (using de-identified or limited datasets where possible)</p>
        <p className="font-semibold text-heading">
          We do not sell, rent, or use your PHI for marketing or commercial purposes.
        </p>
      </div>
    </div>
  );
}
