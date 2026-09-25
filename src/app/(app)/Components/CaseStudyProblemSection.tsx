import Image from "next/image";

const issues = [
  "Claims delayed after date of service",
  "Repeated payer denials",
  "Weak A/R follow-up",
  "Underpayments not reviewed",
  "Patient balances not cleaned properly",
  "No clear monthly RCM dashboard",
];

export default function CaseStudyProblemSection() {
  return (
    <section className="w-full bg-cyan-50 py-10 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:px-8 2xl:px-0">
        <div>
          <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
            The Problem: Revenue Was Getting Stuck After the Visit
          </h2>

          <div className="mt-6 space-y-4 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
            <p>
              The practice was doing the work. Patients were being seen. Notes were being completed. Claims were being created.
            </p>
            <p>Still, money was leaking inside the billing process.</p>
            <p>
              Some claims were not scrubbed properly before submission. Some denials were not appealed fast enough. Some payments were posted without checking for underpayment. Older balances sat in A/R reports without clear next steps.
            </p>
            <p>It was not a patient volume problem.</p>
            <p>It was a revenue cycle control problem.</p>
          </div>

          <h3 className="mt-7 font-inter text-xl font-semibold leading-8 text-heading">
            Main Billing Issues Found
          </h3>

          <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {issues.map((issue) => (
              <li key={issue} className="flex items-start gap-3 font-manrope text-base leading-6 text-neutral-500">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-light" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/case study detail/3_rectangle_723.png"
          alt="Doctor reviewing medical billing revenue"
          width={672}
          height={665}
          className="h-auto w-full rounded-[20px] object-cover"
        />
      </div>
    </section>
  );
}
