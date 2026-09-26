import { AnimatedHeading, AnimatedSection, ScrollRotateDiv, StaggerGroup, StaggerItem } from "./animation/MotionElements";

import Image from "next/image";

export type CoreValueItem = {
  title: string;
  description?: string;
};

type CoreValuesSectionProps = {
  heading: string;
  image: string;
  imageAlt: string;
  values: CoreValueItem[];
  openIndex?: number;
};

export default function CoreValuesSection({
  heading,
  image,
  imageAlt,
  values,
  openIndex = 0,
}: CoreValuesSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-accent/10 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <AnimatedHeading
          text={heading}
          className="text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl"
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:gap-20">
          <ScrollRotateDiv degrees={3} className="flex items-center justify-center py-8">
            <div className="relative size-[270px] rotate-45 rounded-[42px] border-[8px] border-primary-light bg-sky-100 sm:size-[320px] lg:size-[350px]">
              <div className="absolute inset-[16px] overflow-hidden rounded-[32px] bg-sky-100">
                <div className="absolute left-1/2 top-1/2 size-[430px] -translate-x-1/2 -translate-y-1/2 -rotate-45">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="430px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </ScrollRotateDiv>

          <StaggerGroup stagger={0.07} className="space-y-3">
            {values.map((value, index) => (
              <StaggerItem key={value.title} preset="card" hover="lift" className="rounded-2xl bg-white px-5 py-4">
                <div className="flex items-center justify-between gap-5">
                  <h3 className="font-inter text-xl font-semibold leading-8 text-heading md:text-2xl">
                    {value.title}
                  </h3>
                  <span className="font-inter text-2xl font-normal text-primary-light">
                    {index === openIndex ? "−" : "+"}
                  </span>
                </div>

                {index === openIndex && value.description && (
                  <p className="mt-3 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                    {value.description}
                  </p>
                )}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </AnimatedSection>
  );
}
