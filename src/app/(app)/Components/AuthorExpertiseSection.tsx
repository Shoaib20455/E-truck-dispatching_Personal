import { AnimatedHeading, AnimatedSection, HoverIcon, StaggerGroup, StaggerArticle } from "./animation/MotionElements";

import Image from "next/image";

export type AuthorExpertiseItem = {
  title: string;
  icon: string;
  iconAlt: string;
};

type AuthorExpertiseSectionProps = {
  heading: string;
  items: AuthorExpertiseItem[];
};

export default function AuthorExpertiseSection({
  heading,
  items,
}: AuthorExpertiseSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <AnimatedHeading
          text={heading}
          className="text-center font-inter text-4xl font-semibold leading-tight text-black md:text-5xl"
        />

        <StaggerGroup stagger={0.075} className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerArticle key={item.title} preset="card" hover="premium"
              className="flex min-h-[240px] flex-col items-center justify-center rounded-[20px] bg-teal-500/20 px-6 py-8 text-center"
            >
              <HoverIcon className="flex size-24 items-center justify-center rounded-full bg-sky-500">
                <Image
                  src={item.icon}
                  alt={item.iconAlt}
                  width={64}
                  height={64}
                  className="size-16 object-contain"
                />
              </HoverIcon>

              <h3> className="mt-7 max-w-[240px] font-inter text-xl font-semibold leading-8 text-heading">
                {item.title}
              </h3>
            </StaggerArticle>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
