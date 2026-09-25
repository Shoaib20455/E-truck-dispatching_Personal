const rows = [
  ["Claim Submission", "Delayed and inconsistent", "Cleaner same-week submission process"],
  ["Denial Follow-Up", "Worked late", "Worked within 48 hours"],
  ["A/R Management", "Aging without clear priority", "Sorted by payer, age, and action"],
  ["Payment Posting", "Basic posting", "Underpayment and adjustment review"],
  ["Reporting", "Hard to use", "Monthly RCM performance dashboard"],
  ["Staff Workload", "Heavy rework", "Fewer repeated billing errors"],
];

export default function CaseStudyBeforeAfterSection() {
  return (
    <section className="w-full bg-cyan-50 py-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <h2 className="text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
          Before vs After
        </h2>

        <div className="mt-10 overflow-x-auto rounded-[20px] border border-zinc-400">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-primary-light text-white">
                <th className="w-1/3 border-r border-white/50 px-6 py-5 text-left font-inter text-xl font-semibold md:text-2xl">Area</th>
                <th className="w-1/3 border-r border-white/50 px-6 py-5 text-left font-inter text-xl font-semibold md:text-2xl">Before Avenue</th>
                <th className="w-1/3 px-6 py-5 text-left font-inter text-xl font-semibold md:text-2xl">After Avenue</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([area, before, after]) => (
                <tr key={area} className="border-t border-zinc-400">
                  <td className="bg-accent/10 px-6 py-5 font-inter text-base font-semibold leading-8 text-heading md:text-lg">{area}</td>
                  <td className="bg-white px-6 py-5 font-manrope text-base leading-8 text-neutral-500 md:text-lg">{before}</td>
                  <td className="bg-white px-6 py-5 font-manrope text-base leading-8 text-neutral-500 md:text-lg">{after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
