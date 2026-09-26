import Image from "next/image";
import { AnimatedDiv, AnimatedHeading, AnimatedSection, ScrollRotateDiv, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type SpecialtyIntroProps = {
  heading: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export default function SpecialtyIntro({
  heading,
  description,
  points,
  image,
  imageAlt,
}: SpecialtyIntroProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <AnimatedDiv preset="slide-left">
            <AnimatedHeading text={heading}
              className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
            />

            <p className="mb-7 max-w-2xl font-manrope text-lg font-normal leading-8 text-neutral-500">
              {description}
            </p>

            <StaggerGroup stagger={0.08} className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {points.map((point, index) => (
                <StaggerItem key={point} preset="card" hover="lift" className={`rounded-[20px] px-5 py-6 text-center font-manrope text-base leading-7 shadow-[0px_10px_20px_rgba(0,0,0,0.10)] ${
                    index === 1 ? "bg-sky-500 text-white" : "bg-white text-neutral-500"
                  }`}
                >
                  {point}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </AnimatedDiv>

          <ScrollRotateDiv degrees={4} className="flex justify-center lg:justify-end">
            <div className="rotate-45 rounded-[44px] border-[7px] border-sky-500 p-3 shadow-[0px_12px_30px_rgba(0,159,253,0.18)]">
              <div className="rounded-[36px] border-2 border-sky-300 p-2">
                <div className="size-56 overflow-hidden rounded-[30px] bg-white sm:size-64 lg:size-72">
                  <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 288px, 256px" className="-rotate-45 scale-[1.42] object-cover" />
                </div>
              </div>
            </div>
          </ScrollRotateDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}
