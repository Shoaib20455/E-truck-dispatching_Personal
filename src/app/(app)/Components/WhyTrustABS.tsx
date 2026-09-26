import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type TrustCard = {
  title: string;
  description: string;
};

type WhyTrustABSProps = {
  heading: string;
  description: string;
  mainCardHeading: string;
  cards: TrustCard[];
};

export default function WhyTrustABS({
  heading,
  description,
  mainCardHeading,
  cards,
}: WhyTrustABSProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <AnimatedHeading
            text={heading}
            className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />

          <p className="whitespace-pre-line font-manrope text-lg font-normal leading-8 text-neutral-500">
            {description}
          </p>
        </div>

        {/* CARDS */}
        <StaggerGroup stagger={0.08} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* MAIN CARD */}
          <StaggerItem preset="scale" hover="soft" className="flex items-center rounded-[20px] bg-teal-500/10 p-8">
            <h3 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {mainCardHeading}
            </h3>
          </StaggerItem>

          {/* OTHER CARDS */}
          {cards.map((card, index) => (
            <StaggerItem key={card.title} preset={index % 2 === 0 ? "tile-left" : "tile-right"} hover="premium" className="rounded-[20px] bg-white p-8">
              <h3 className="mb-5 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                {card.title}
              </h3>

              <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                {card.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}