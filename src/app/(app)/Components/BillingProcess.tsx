import { AnimatedDiv, AnimatedHeading, AnimatedSection, ImageReveal, ParallaxDiv, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type BillingProcessProps = {
  heading: string;
  image: string;
  imageAlt: string;
  steps: ProcessStep[];
};

export default function BillingProcess({
  heading,
  image,
  imageAlt,
  steps,
}: BillingProcessProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="rounded-[20px] bg-teal-500/10 p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            
            {/* LEFT IMAGE */}
            <ParallaxDiv distance={20}>
              <ImageReveal className="h-full">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                />
              </ImageReveal>
            </ParallaxDiv>

            {/* RIGHT CONTENT */}
            <AnimatedDiv preset="slide-right">
              <AnimatedHeading
                text={heading}
                className="mb-8 font-inter text-3xl font-bold leading-tight text-heading md:text-4xl lg:text-5xl"
              />

              <StaggerGroup stagger={0.08} className="space-y-5">
                {steps.map((step) => (
                  <StaggerItem key={step.number} preset="card" hover="premium" className="flex flex-col gap-5 bg-white p-5 sm:flex-row">
                    <div className="flex shrink-0 items-center justify-center bg-sky-500/10 px-7 py-4">
                      <span className="font-inter text-5xl font-bold text-sky-500 md:text-6xl">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="mb-3 font-inter text-xl font-semibold text-heading">
                        {step.title}
                      </h3>

                      <p className="font-dm-sans text-base font-normal leading-6 text-neutral-500 lg:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </AnimatedDiv>

          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}