import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type FeatureCardItem = {
  title: string;
};

type SimpleFeatureCardsProps = {
  heading: string;
  items: FeatureCardItem[];
};

export default function SimpleFeatureCards({
  heading,
  items,
}: SimpleFeatureCardsProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        <StaggerGroup stagger={0.07} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <StaggerItem key={item.title} preset="card" hover="premium" className="flex min-h-40 items-center justify-center rounded-[10px] border border-sky-500 bg-white p-6 text-center shadow-[0px_10px_20px_rgba(0,0,0,0.10)]">
              <h3 className="font-inter text-xl font-semibold leading-8 text-heading md:text-2xl">
                {item.title}
              </h3>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
