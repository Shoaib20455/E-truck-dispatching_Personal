import Image from "next/image";
import AppLink from "./navigation/AppLink";
import { AnimatedDiv, AnimatedHeading, AnimatedSection, ImageReveal, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type SmallPracticesProps = {
  heading: string;
  description: string;

  supportHeading: string;
  supportItems: string[];

  cardHeading: string;
  cardDescription: string;
  cardLinkText: string;
  cardLinkHref: string;

  image: string;
  imageAlt: string;
};

export default function SmallPractices({
  heading,
  description,
  supportHeading,
  supportItems,
  cardHeading,
  cardDescription,
  cardLinkText,
  cardLinkHref,
  image,
  imageAlt,
}: SmallPracticesProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-16">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          
          {/* LEFT SIDE */}
          <AnimatedDiv preset="slide-left">
            <AnimatedHeading text={heading}
              className="mb-5 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
            />

            <p className="mb-5 font-manrope text-base font-normal leading-7 text-neutral-500 lg:text-lg lg:leading-8">
              {description}
            </p>

            <h3 className="mb-4 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
              {supportHeading}
            </h3>

            <StaggerGroup stagger={0.06} className="space-y-2 font-manrope text-base font-normal leading-5 text-neutral-500">
              {supportItems.map((item) => (
                <StaggerItem key={item} preset="step-left" className="flex items-start gap-3">
                  <span className="font-bold text-sky-500">•</span>
                  <span>{item}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </AnimatedDiv>

          {/* RIGHT SIDE */}
          <AnimatedDiv preset="slide-right" className="flex flex-col gap-5">
            
            {/* TOP CARD */}
            <div className="w-full rounded-[20px] border border-sky-700/30 bg-teal-500/10 p-7 lg:p-8">
              <h3 className="mb-1 font-inter text-xl font-semibold leading-8 text-stone-900 md:text-2xl">
                {cardHeading}
              </h3>

              <p className="mb-4 font-inter text-base font-normal leading-6 text-gray-700 md:text-lg">
                {cardDescription}
              </p>

              <AppLink
                href={cardLinkHref}
                className="inline-flex items-center gap-2 font-inter text-base font-bold leading-6 text-sky-700"
              >
                {cardLinkText}
                <span className="text-xl">→</span>
              </AppLink>
            </div>

            {/* IMAGE */}
            <ImageReveal className="rounded-[20px]"><Image src={image} alt={imageAlt} width={900} height={600} sizes="(min-width: 1024px) 48vw, 100vw" className="h-auto w-full rounded-[20px] object-cover" /></ImageReveal>
          </AnimatedDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}