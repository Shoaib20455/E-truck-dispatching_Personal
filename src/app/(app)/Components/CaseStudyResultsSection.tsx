const results = [
  ["98.5% Clean Claim Rate", "Claims went out cleaner with fewer preventable errors."],
  ["35% Reduction in A/R", "Older unpaid balances dropped after structured follow-up."],
  ["96% Collection Ratio", "Revenue became more stable and predictable."],
  ["24 Days Average A/R", "Payments moved faster through the revenue cycle."],
];

export default function CaseStudyResultsSection() {
  return (
    <section className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <h2 className="mx-auto max-w-[700px] text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
          Results After Avenue Billing Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {results.map(([title, description]) => (
            <article key={title} className="rounded-[10px] border border-primary-light bg-white px-7 py-8">
              <h3 className="font-inter text-xl font-semibold leading-8 text-heading">
                {title}
              </h3>
              <p className="mt-4 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
