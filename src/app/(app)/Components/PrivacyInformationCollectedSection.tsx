export default function PrivacyInformationCollectedSection() {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
        Information We Collect
      </h2>

      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>We collect only the data necessary to provide our medical billing and coding services.</p>

        <p className="mt-1 font-semibold text-heading">From Healthcare Providers:</p>
        <p>Patient demographic information (e.g., name, DOB, gender)</p>
        <p>Diagnosis codes (ICD-10)</p>
        <p>Procedure codes (CPT/HCPCS)</p>
        <p>Treatment records</p>
        <p>Insurance provider details</p>
        <p>Claim submission and remittance information</p>

        <p className="mt-1 font-semibold text-heading">From Patients:</p>
        <p>Name and contact information</p>
        <p>Insurance identification numbers</p>
        <p>Limited financial data required for billing and claims</p>
        <p>Any communication sent directly to our support or billing teams</p>

        <p className="mt-1 font-semibold text-heading">
          We do not collect or store clinical treatment notes unless needed for billing purposes.
        </p>
      </div>
    </div>
  );
}
