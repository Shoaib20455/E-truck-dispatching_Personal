import { AnimatedSection, StaggerGroup, StaggerArticle } from "./animation/MotionElements";

import SectionHeading from "./SectionHeading";

export type WhyChooseUsItem = {
  title: string;
  description: string;
};

type WhyChooseUsSectionProps = {
  heading: string;
  items: WhyChooseUsItem[];
};

export default function WhyChooseUsSection({
  heading,
  items,
}: WhyChooseUsSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <SectionHeading title={heading} />

        <div className="mt-12 overflow-hidden rounded-[20px]">
          <StaggerGroup stagger={0.075} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <StaggerArticle
                key={item.title}
                preset={index % 2 === 0 ? "tile-left" : "tile-right"}
                hover="premium"
                className={
                  "min-h-[240px] px-10 py-12 text-center " +
                  ([0, 2, 4].includes(index) ? "bg-accent/10" : "bg-white")
                }
              >
                <h3 className="font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl md:leading-10">
                  {item.title}
                </h3>
                <p className="mx-auto mt-6 max-w-sm font-manrope text-base leading-8 text-neutral-500 md:text-lg">
                  {item.description}
                </p>
              </StaggerArticle>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </AnimatedSection>
  );
}
