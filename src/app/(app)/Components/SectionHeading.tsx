import { AnimatedDiv } from "./animation/MotionElements";

import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <AnimatedDiv preset="fade-up" className="text-center">
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <div className="mx-auto mt-5 max-w-3xl font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
          {subtitle}
        </div>
      )}
    </AnimatedDiv>
  );
}
