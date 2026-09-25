export default function PrivacyThirdPartySection() {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
        Third-Party Vendors and Data Sharing
      </h2>

      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>
          We only share data with vendors who have signed Business Associate Agreements and meet HIPAA compliance requirements. These vendors may assist with:
        </p>
        <p>Claims processing systems</p>
        <p>Clearinghouses</p>
        <p>Secure cloud storage providers</p>
        <p>Accounting and auditing services</p>
        <p>We do not allow any vendor to use PHI beyond what is necessary to deliver services.</p>
      </div>
    </div>
  );
}
