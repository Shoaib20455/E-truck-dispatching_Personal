import { AnimatedSection } from "./animation/MotionElements";

export type BeforeAfterRow = {
  area: string;
  before: string;
  after: string;
};

type CaseStudyBeforeAfterSectionProps = {
  heading: string;
  headers: [string, string, string];
  rows: BeforeAfterRow[];
};

export default function CaseStudyBeforeAfterSection({
  heading,
  headers,
  rows,
}: CaseStudyBeforeAfterSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <h2 className="text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
          {heading}
        </h2>

        <div className="mt-10 overflow-x-auto rounded-[20px] border border-zinc-400">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-primary-light text-white">
                {headers.map((header) => (
                  <th key={header} className="w-1/3 border-r border-white/50 px-6 py-5 text-left font-inter text-xl font-semibold last:border-r-0 md:text-2xl">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.area} className="border-t border-zinc-400">
                  <td className="bg-accent/10 px-6 py-5 font-inter text-base font-semibold leading-8 text-heading md:text-lg">{row.area}</td>
                  <td className="bg-white px-6 py-5 font-manrope text-base leading-8 text-neutral-500 md:text-lg">{row.before}</td>
                  <td className="bg-white px-6 py-5 font-manrope text-base leading-8 text-neutral-500 md:text-lg">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>
  );
}
