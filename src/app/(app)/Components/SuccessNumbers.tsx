import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type StatItem = {
  label: string;
  value: string;
};

type StatColumn = {
  items: StatItem[];
};

type SuccessNumbersProps = {
  heading: string;
  columns: StatColumn[];
};

export default function SuccessNumbers({
  heading,
  columns,
}: SuccessNumbersProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-16">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mb-12 text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        {/* STATS */}
        <StaggerGroup stagger={0.09} className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column, columnIndex) => (
            <StaggerItem
              key={columnIndex}
              preset="stat"
              className={
                columnIndex < columns.length - 1
                  ? "lg:border-r-2 lg:border-teal-500 lg:px-12 first:lg:pl-0"
                  : "lg:pl-12"
              }
            >
              <div className="space-y-10">
                {column.items.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 font-inter text-base font-semibold leading-6 text-heading lg:text-lg">
                      {item.label}
                    </div>

                    <div className="font-inter text-2xl font-bold leading-10 text-sky-500 lg:text-3xl">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}