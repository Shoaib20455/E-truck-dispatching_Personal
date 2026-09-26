import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type ComparisonRow = {
  feature: string;
  avenue: string;
  comparison: string;
};

type ComparisonTableProps = {
  heading?: string;

  featureHeading: string;
  avenueHeading: string;
  comparisonHeading: string;

  rows: ComparisonRow[];
};

export default function ComparisonTable({
  heading,
  featureHeading,
  avenueHeading,
  comparisonHeading,
  rows,
}: ComparisonTableProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        {heading && (
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <AnimatedHeading
              text={heading}
              className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
            />
          </div>
        )}

        {/* TABLE */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px] overflow-hidden rounded-[20px] border border-zinc-400">
            
            {/* HEADER */}
            <div className="grid grid-cols-3 bg-sky-500 text-white">
              <div className="px-8 py-5 font-inter text-2xl font-semibold">
                {featureHeading}
              </div>

              <div className="border-l border-white/30 px-8 py-5 font-inter text-2xl font-semibold">
                {avenueHeading}
              </div>

              <div className="border-l border-white/30 px-8 py-5 font-inter text-2xl font-semibold">
                {comparisonHeading}
              </div>
            </div>

            {/* ROWS */}
            <StaggerGroup stagger={0.055} className="">
            {rows.map((row, index) => (
              <StaggerItem key={row.feature} preset={index % 2 === 0 ? "tile-left" : "tile-right"} className="grid grid-cols-3 border-t border-zinc-300">
                <div className="bg-teal-500/10 px-8 py-4 font-manrope text-lg font-semibold text-heading">
                  {row.feature}
                </div>

                <div className="border-l border-zinc-300 bg-white px-8 py-4 font-manrope text-base font-normal leading-7 text-neutral-500">
                  {row.avenue}
                </div>

                <div className="border-l border-zinc-300 bg-white px-8 py-4 font-manrope text-base font-normal leading-7 text-neutral-500">
                  {row.comparison}
                </div>
              </StaggerItem>
            ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}