import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type StateTrustItem = { title: string; description: string; highlighted?: boolean };
type StateTrustGridProps = { heading: string; description: string; items: StateTrustItem[] };

export default function StateTrustGrid({ heading, description, items }: StateTrustGridProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <AnimatedHeading text={heading} className="mb-5 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl" />
          <p className="font-manrope text-lg leading-8 text-neutral-500">{description}</p>
        </div>
        <StaggerGroup stagger={0.08} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.title} preset="card" hover="premium" className={`rounded-[20px] p-7 ${item.highlighted ? "border border-teal-500 bg-teal-500/10 shadow-[0px_10px_20px_rgba(0,0,0,0.07)]" : "bg-white"}`}>
              <h3 className="mb-5 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">{item.title}</h3>
              <p className="font-manrope text-lg leading-8 text-neutral-500">{item.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
