import { AnimatedSection } from "./animation/MotionElements";

export type SnapshotRow = {
  label: string;
  value: string;
};

type CaseStudyPracticeSnapshotProps = {
  heading: string;
  leftHeader: string;
  rightHeader: string;
  rows: SnapshotRow[];
};

export default function CaseStudyPracticeSnapshot({
  heading,
  leftHeader,
  rightHeader,
  rows,
}: CaseStudyPracticeSnapshotProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <h2 className="text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
          {heading}
        </h2>

        <div className="mt-10 overflow-hidden rounded-[20px] border border-neutral-400/50">
          <div className="grid grid-cols-[minmax(180px,0.75fr)_minmax(0,2.25fr)] bg-primary-light text-white">
            <div className="border-r border-white/50 px-6 py-5 font-inter text-xl font-semibold md:text-2xl">
              {leftHeader}
            </div>
            <div className="px-6 py-5 font-inter text-xl font-semibold md:text-2xl">
              {rightHeader}
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[minmax(180px,0.75fr)_minmax(0,2.25fr)] border-t border-neutral-400/50"
            >
              <div className="bg-accent/10 px-6 py-5 font-inter text-base font-semibold leading-8 text-heading md:text-lg">
                {row.label}
              </div>
              <div className="bg-white px-6 py-5 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
