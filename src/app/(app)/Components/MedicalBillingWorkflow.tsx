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
        className="size-12 object-contain"
      />

      <span className="font-manrope text-lg text-sky-500">
        {step.label}
      </span>
    </div>
  );

  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mb-10 text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr_0.8fr]">
          <div className="space-y-5">
            {leftSteps.map((step) => (
              <StepCard key={step.label} step={step} />
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src={centerImage}
              alt={centerImageAlt}
              className="w-full max-w-[655px] object-contain"
            />
          </div>

          <div className="space-y-5">
            {rightSteps.map((step) => (
              <StepCard key={step.label} step={step} />
            ))}
          </div>
        </div>

        <div
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
        </div>
      </div>
    </section>
  );
}
