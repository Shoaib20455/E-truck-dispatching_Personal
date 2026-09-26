import { AnimatedDiv, AnimatedHeading, AnimatedSection, ImageReveal, ParallaxDiv, ScrollRotateDiv, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type WorkflowStep = {
  label: string;
  icon: string;
  iconAlt: string;
  highlighted?: boolean;
};

type MedicalBillingWorkflowProps = {
  heading: string;
  centerImage: string;
  centerImageAlt: string;
  ringImage?: string;
  ringImageAlt?: string;
  leftSteps: WorkflowStep[];
  rightSteps: WorkflowStep[];
  pricingBackgroundImage: string;
  pricingHeading: string;
  pricingDescription: string;
  buttonText: string;
  buttonHref: string;
};

export default function MedicalBillingWorkflow({
  heading,
  centerImage,
  centerImageAlt,
  ringImage,
  ringImageAlt = "",
  leftSteps,
  rightSteps,
  pricingBackgroundImage,
  pricingHeading,
  pricingDescription,
  buttonText,
  buttonHref,
}: MedicalBillingWorkflowProps) {
  const StepCard = ({ step }: { step: WorkflowStep }) => (
    <div
      className={`flex items-center gap-4 rounded-[65px] px-5 py-3 shadow-[0px_10px_20px_rgba(0,0,0,0.10)] ${
        step.highlighted
          ? "border border-teal-500 bg-teal-100"
          : "bg-white"
      }`}
    >
      <img
        src={step.icon}
        alt={step.iconAlt}
        className="size-12 shrink-0 object-contain"
      />

      <span className="font-manrope text-lg text-sky-500">
        {step.label}
      </span>
    </div>
  );

  const leftOffsets = [
    "lg:translate-x-24",
    "lg:translate-x-10",
    "lg:-translate-x-4",
    "lg:translate-x-10",
    "lg:translate-x-24",
    "lg:translate-x-10",
  ];

  const rightOffsets = [
    "lg:-translate-x-24",
    "lg:-translate-x-10",
    "lg:translate-x-4",
    "lg:-translate-x-10",
    "lg:-translate-x-24",
  ];

  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mb-10 text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        {/* WORKFLOW */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:gap-0">
          {/* LEFT STEPS */}
          <StaggerGroup stagger={0.07} className="space-y-8 lg:relative lg:z-20">
            {leftSteps.map((step, index) => (
              <StaggerItem key={step.label} preset="pill-left" hover="premium" className={`transition-transform ${leftOffsets[index] ?? ""}`}>
                <StepCard step={step} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* CENTER IMAGE + RING */}
          <ParallaxDiv distance={34} className="relative flex min-h-[520px] items-end justify-center lg:min-h-[620px]">
            <ImageReveal className="relative flex h-full w-full items-end justify-center">
            {ringImage && (
              <ScrollRotateDiv
                degrees={8}
                className="pointer-events-none absolute left-1/2 top-8 z-0 w-[82%] max-w-[560px] -translate-x-1/2 lg:top-10"
              >
                <img
                  src={ringImage}
                  alt={ringImageAlt}
                  className="w-full object-contain"
                />
              </ScrollRotateDiv>
            )}

            <img
              src={centerImage}
              alt={centerImageAlt}
              className="relative z-10 w-full max-w-[560px] object-contain"
            />
            </ImageReveal>
          </ParallaxDiv>

          {/* RIGHT STEPS */}
          <StaggerGroup stagger={0.07} className="space-y-8 lg:relative lg:z-20">
            {rightSteps.map((step, index) => (
              <StaggerItem key={step.label} preset="pill-right" hover="premium" className={`transition-transform ${rightOffsets[index] ?? ""}`}>
                <StepCard step={step} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* PRICING CTA */}
        <AnimatedDiv
          preset="cta"
          className="w-full overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${pricingBackgroundImage}")`,
          }}
        >
          <div className="w-full bg-black/60 px-6 py-10 text-center">
            <h3 className="mb-4 font-inter text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              {pricingHeading}
            </h3>

            <p className="mb-6 whitespace-pre-line font-manrope text-lg font-semibold leading-8 text-white">
              {pricingDescription}
            </p>

            <a
              href={buttonHref}
              className="inline-flex rounded-[36px] bg-sky-500 px-7 py-2.5 font-manrope text-base font-normal text-white"
            >
              {buttonText}
            </a>
          </div>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}
