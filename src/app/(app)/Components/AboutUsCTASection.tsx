import { AnimatedDiv, AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

import Image from "next/image";

type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type AboutUsCTASectionProps = {
  heading: string;
  description: string;
  backgroundImage: string;
  doctorImage: string;
  doctorImageAlt: string;
  buttons: CTAButton[];
};

export default function AboutUsCTASection({
  heading,
  description,
  backgroundImage,
  doctorImage,
  doctorImageAlt,
  buttons,
}: AboutUsCTASectionProps) {
  return (
    <AnimatedSection preset="cta" className="w-full bg-cyan-50 pb-10 pt-6 lg:pb-14 lg:pt-8">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="relative pt-28 md:pt-32 lg:pt-36">
          <div className="relative min-h-[360px] overflow-hidden rounded-[20px] bg-teal-500">
            <Image
              src={backgroundImage}
              alt=""
              fill
              sizes="1520px"
              aria-hidden="true"
              className="pointer-events-none select-none object-cover object-center opacity-80"
            />

            <AnimatedDiv preset="slide-left" className="relative z-10 max-w-[720px] px-8 py-14 text-white md:px-12 lg:px-16 lg:py-16">
              <AnimatedHeading
                text={heading}
                className="max-w-[620px] font-inter text-3xl font-semibold leading-10 md:text-4xl"
              />
              <p className="mt-6 max-w-[560px] font-manrope text-base font-normal leading-8 md:text-lg">
                {description}
              </p>

              <StaggerGroup stagger={0.08} className="mt-8 flex flex-col gap-4 sm:flex-row">
                {buttons.map((button) => (
                  <StaggerItem key={button.label} preset="fade-up" hover="soft">
                  <a
                    href={button.href}
                    className={
                      button.variant === "primary"
                        ? "rounded-[44px] bg-primary-light px-7 py-2.5 text-center font-manrope text-base font-normal leading-8 text-white"
                        : "rounded-[44px] bg-white px-7 py-2.5 text-center font-manrope text-base font-normal leading-8 text-neutral-600"
                    }
                  >
                    {button.label}
                  </a>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </AnimatedDiv>
          </div>

          <AnimatedDiv
            preset="hero-right"
            className="pointer-events-none absolute bottom-0 right-4 z-20 hidden w-[330px] sm:block md:right-8 md:w-[390px] lg:right-16 lg:w-[466px]"
          >
            <Image
              src={doctorImage}
              alt={doctorImageAlt}
              width={466}
              height={587}
              className="h-auto w-full object-contain"
            />
          </AnimatedDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}
