import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type ExpertiseCard = {
  title: string;
  code: string;
  description: string;
  highlighted?: boolean;
};

type ExpertiseCardGridProps = {
  heading: string;
  cards: ExpertiseCard[];
};

export default function ExpertiseCardGrid({
  heading,
  cards,
}: ExpertiseCardGridProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        {/* CARDS */}
        <StaggerGroup stagger={0.08} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <StaggerItem key={card.title} preset={index % 2 === 0 ? "tile-left" : "tile-right"} hover="premium" className={`rounded-[20px] p-7 ${
                card.highlighted
                  ? "border border-teal-500 bg-teal-500/10 shadow-[0px_10px_20px_rgba(0,0,0,0.07)]"
                  : "bg-white"
              }`}
            >
              <h3 className="mb-4 font-inter text-2xl font-semibold leading-8 text-heading">
                {card.title}
              </h3>

              <div className="mb-5 font-inter text-lg font-semibold text-heading">
                {card.code}
              </div>

              <p className="font-manrope text-base font-normal leading-7 text-neutral-500">
                {card.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}