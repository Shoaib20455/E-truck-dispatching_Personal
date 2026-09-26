import { AnimatedSection, StaggerGroup, StaggerArticle } from "./animation/MotionElements";

import SectionHeading from "./SectionHeading";

export type ApproachItem = {
  title: string;
  description: string;
};

type OurApproachSectionProps = {
  heading: string;
  items: ApproachItem[];
};

export default function OurApproachSection({
  heading,
  items,
}: OurApproachSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <SectionHeading title={heading} />

        <StaggerGroup stagger={0.08} className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {items.map((item, index) => (
            <StaggerArticle key={item.title} preset={index % 2 === 0 ? "tile-left" : "tile-right"} hover="premium"
              className="rounded-[30px] border border-dashed border-primary-light bg-indigo-50 px-10 py-14 text-center"
            >
              <h3 className="font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl md:leading-10">
                {item.title}
              </h3>
              <p className="mx-auto mt-5 max-w-sm font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                {item.description}
              </p>
            </StaggerArticle>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
