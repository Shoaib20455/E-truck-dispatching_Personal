import { AnimatedDiv, AnimatedHeading, AnimatedSection, ImageReveal } from "./animation/MotionElements";

import Image from "next/image";

type CaseStudyWhatChangedSectionProps = {
  heading: string;
  paragraphs: string[];
  cardTitle: string;
  cardDescription: string;
  cardLinkLabel: string;
  cardLinkHref: string;
  image: string;
  imageAlt: string;
};

export default function CaseStudyWhatChangedSection({
  heading,
  paragraphs,
  cardTitle,
  cardDescription,
  cardLinkLabel,
  cardLinkHref,
  image,
  imageAlt,
}: CaseStudyWhatChangedSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-10 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2 lg:px-8 2xl:px-0">
        <AnimatedDiv preset="slide-left">
          <AnimatedHeading text={heading}
            className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl"
          />

          <div className="mt-6 space-y-4 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </AnimatedDiv>

        <AnimatedDiv preset="slide-right" className="space-y-6">
          <div className="rounded-[20px] border border-sky-700/30 bg-accent/10 p-8">
            <h3 className="font-inter text-2xl font-semibold leading-8 text-stone-900">
              {cardTitle}
            </h3>
            <p className="mt-2 font-inter text-lg leading-6 text-gray-700">
              {cardDescription}
            </p>
            <a href={cardLinkHref} className="mt-4 inline-flex items-center gap-2 font-inter text-base font-bold leading-6 text-sky-700">
              {cardLinkLabel} <span>→</span>
            </a>
          </div>

          <ImageReveal className="rounded-[20px]"><Image
            src={image}
            alt={imageAlt}
            width={744}
            height={308}
            className="h-auto w-full rounded-[20px] object-cover"
          /></ImageReveal>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}
