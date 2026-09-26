import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type TextGridItem = {
  title: string;
  description: string;
  highlighted?: boolean;
};

type TextFeatureGridProps = {
  heading: string;
  items: TextGridItem[];
};

export default function TextFeatureGrid({
  heading,
  items,
}: TextFeatureGridProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mb-12 text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        <StaggerGroup stagger={0.08} className="grid grid-cols-1 overflow-hidden rounded-[20px] md:grid-cols-2">
          {items.map((item, index) => (
            <StaggerItem
              key={item.title}
              preset="card"
              hover="lift"
              className={
                "p-7 md:p-10 lg:p-12 " +
                (item.highlighted || index === 3 ? "bg-teal-500/10" : "bg-white")
              }
            >
              <h3 className="mb-5 max-w-xl font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                {item.title}
              </h3>

              <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
