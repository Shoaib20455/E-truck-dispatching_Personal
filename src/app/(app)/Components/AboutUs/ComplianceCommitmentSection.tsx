import SectionHeading from "./SectionHeading";

const complianceItems = [
  "Secure data handling & encrypted access",
  "Regular internal audits",
  "Accurate documentation alignment",
  "Strict privacy protection for every patient record",
];

export default function ComplianceCommitmentSection() {
  return (
    <section className="w-full bg-cyan-50 py-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <SectionHeading
          title="Compliance Commitment"
          subtitle={
            <>
              Compliance is the backbone of our billing operations.
              <br />
              We follow all national and state regulations including HIPAA, CMS, AMA, OIG, and payer-specific rules.
              <br />
              <strong className="text-heading">Our workflows include</strong>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-16 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {complianceItems.map((item) => (
            <div key={item} className="flex justify-center py-8">
              <div className="relative flex size-[230px] rotate-45 items-center justify-center rounded-2xl border border-primary-light bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.07)] md:size-[250px]">
                <div className="-rotate-45 px-7 text-center">
                  <div className="mb-4 text-4xl text-primary-light">✓</div>

                  <p className="font-manrope text-base leading-7 text-neutral-500 md:text-lg">
                    {item}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-manrope text-base font-bold leading-8 text-heading md:text-lg">
          Your practice stays protected, compliant, and audit-ready.
        </p>
      </div>
    </section>
  );
}
