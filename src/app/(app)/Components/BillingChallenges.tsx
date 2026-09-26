import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type ChallengeItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

type BillingChallengesProps = {
  heading: string;
  challenges: ChallengeItem[];
};

export default function BillingChallenges({
  heading,
  challenges,
}: BillingChallengesProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-4xl text-center lg:mb-16">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        {/* CHALLENGES */}
        <StaggerGroup stagger={0.08} className="grid grid-cols-1 overflow-hidden rounded-[20px] md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <StaggerItem
              key={challenge.title}
              preset={index % 2 === 0 ? "tile-left" : "tile-right"}
              hover="lift"
              className={`flex flex-col items-center px-8 py-10 text-center ${
                index % 2 === 0 ? "bg-teal-500/10" : "bg-white"
              }`}
            >
              <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-sky-500">
                <img
                  src={challenge.icon}
                  alt={challenge.iconAlt}
                  className="size-16 object-contain"
                />
              </div>

              <h3 className="mb-4 font-inter text-2xl font-semibold leading-8 text-heading">
                {challenge.title}
              </h3>

              <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                {challenge.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}