const priorities = [
  {
    title: "Clean claims before submission.",
    description:
      "Every claim was checked for patient details, eligibility, CPT codes, ICD-10 codes, modifiers, provider information, and payer-specific rules.",
  },
  {
    title: "Work denials faster.",
    description:
      "Denials were sorted by reason code, payer, dollar value, and appeal deadline. No more waiting for monthly cleanup.",
  },
  {
    title: "Turn A/R into action.",
    description:
      "Old balances were separated into clear work queues: payer follow-up, corrected claim, appeal, patient balance, underpayment review, or adjustment.",
  },
];

export default function CaseStudyApproachSection() {
  return (
    <section className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <h2 className="text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
          Avenue Billing Services’ Approach
        </h2>

        <p className="mx-auto mt-6 max-w-[1255px] text-center font-manrope text-base leading-8 text-neutral-500 md:text-lg">
          Avenue started with a complete billing audit. The goal was simple: find where money was stuck, fix old claims, and stop the same issues from repeating.
          <br />
          The team reviewed the practice’s claim history, payer rules, denial patterns, aging reports, and payment posting workflow.
          <br />
          Then Avenue built a cleaner billing process around three priorities:
        </p>

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {priorities.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-primary-light bg-white px-9 py-12 text-center"
            >
              <h3 className="font-inter text-2xl font-semibold leading-10 text-heading md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-6 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
