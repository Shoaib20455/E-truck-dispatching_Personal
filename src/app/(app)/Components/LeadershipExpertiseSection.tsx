import { AnimatedSection } from "./animation/MotionElements";

import SectionHeading from "./SectionHeading";

type LeadershipExpertiseSectionProps = {
  heading: string;
  subtitle?: string;
  items: string[];
  footerText?: string;
};

export default function LeadershipExpertiseSection({
  heading,
  subtitle,
  items,
  footerText,
}: LeadershipExpertiseSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 pb-10 pt-16 lg:pt-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <SectionHeading title={heading} subtitle={subtitle} />

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="flex justify-center">
              <div
                className="aspect-square w-full max-w-[300px] bg-primary-light p-px drop-shadow-[0_10px_18px_rgba(0,0,0,0.10)]"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <div
                  className="flex h-full w-full flex-col items-center justify-center bg-white px-8 py-9 text-center"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  <span className="mb-5 flex size-16 items-center justify-center rounded-full border-2 border-primary-light text-3xl text-primary-light">
                    ✓
                  </span>
                  <p className="font-manrope text-base leading-7 text-neutral-500 md:text-lg md:leading-8">
                    {item}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {footerText && (
          <p className="mt-10 text-center font-manrope text-base font-bold leading-8 text-heading md:text-lg">
            {footerText}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
