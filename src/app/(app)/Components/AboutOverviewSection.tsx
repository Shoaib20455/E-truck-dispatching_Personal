import { AnimatedSection } from "./animation/MotionElements";

import Image from "next/image";

type AboutOverviewSectionProps = {
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  points: string[];
  story: string;
};

export default function AboutOverviewSection({
  heading,
  intro,
  image,
  imageAlt,
  points,
  story,
}: AboutOverviewSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-[60px]">
          <h2 className="whitespace-pre-line font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
            {heading}
          </h2>

          <div className="rounded-[20px] bg-accent/10 px-8 py-6 md:px-10">
            <p className="whitespace-pre-line font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg md:leading-9">
              {intro}
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[400px_300px_minmax(0,1fr)] lg:gap-10 xl:gap-[60px]">
          <Image
            src={image}
            alt={imageAlt}
            width={399}
            height={384}
            className="h-auto w-full max-w-[400px] rounded-[20px] object-cover"
          />

          <div className="space-y-10 lg:pt-3">
            {points.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl"
              >
                <span
                  aria-hidden="true"
                  className="flex size-5 shrink-0 items-center justify-center rounded-full border border-heading font-manrope text-xs font-semibold leading-none"
                >
                  ›
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg md:leading-9 lg:pt-3">
            {story}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
