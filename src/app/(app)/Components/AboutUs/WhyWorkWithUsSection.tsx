import SectionHeading from "./SectionHeading";

const workWithUsItems = [
  "Lower denials & rejections",
  "98% clean claim acceptance",
  "HIPAA-compliant processes",
  "Faster reimbursements & A/R recovery",
  "Dedicated biller for your practice",
  "Accurate coding & real-time reporting",
];

export default function WhyWorkWithUsSection() {
  return (
    <section className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <SectionHeading
          title="Why Work With Us?"
          subtitle="Partnering with Avenue means"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workWithUsItems.map((item) => (
            <div
              key={item}
              className="rounded-[74px] border border-dashed border-primary-light bg-white px-8 py-6 text-center font-manrope text-base font-normal leading-8 text-neutral-500 shadow-[0px_10px_20px_rgba(0,0,0,0.05)] md:text-lg"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-manrope text-base font-bold leading-8 text-heading md:text-lg">
          We don’t just manage billing, improve your financial outcomes.
        </p>
      </div>
    </section>
  );
}
