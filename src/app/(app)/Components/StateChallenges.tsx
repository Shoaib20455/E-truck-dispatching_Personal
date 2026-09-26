import { AnimatedSection } from "./animation/MotionElements";

type StateChallenge = {
  title: string;
  description: string;
  highlighted?: boolean;
};

type StateChallengesProps = {
  heading: string;
  image: string;
  imageAlt: string;
  challenges: StateChallenge[];
};

export default function StateChallenges({
  heading,
  image,
  imageAlt,
  challenges,
}: StateChallengesProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:row-span-2">
            <img
              src={image}
              alt={imageAlt}
              className="h-full min-h-[420px] w-full rounded-[20px] object-cover"
            />
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>
          </div>

          {challenges.map((challenge) => (
            <article
              key={challenge.title}
              className={
                challenge.highlighted
                  ? "rounded-[20px] border border-teal-500 bg-teal-500/10 p-7"
                  : "rounded-[20px] bg-white p-7"
              }
            >
              <h3 className="mb-4 font-inter text-2xl font-semibold leading-tight text-heading">
                {challenge.title}
              </h3>
              <p className="font-manrope text-lg leading-8 text-neutral-500">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
