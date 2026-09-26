import { AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type EHRPartner = {
  logo: string;
  alt: string;
};

type EHRPartnersProps = {
  heading: string;
  description: string;
  partners: EHRPartner[];
  bottomText?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "compact";
};

export default function EHRPartners({
  heading,
  description,
  partners,
  bottomText,
  buttonText,
  buttonHref,
  variant = "default",
}: EHRPartnersProps) {
  const isCompact = variant === "compact";

  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* TOP */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-5 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>

          <p className="font-manrope text-lg font-normal leading-8 text-zinc-700">
            {description}
          </p>
        </div>

        {/* LOGOS */}
        <StaggerGroup
          stagger={0.06}
          className={`grid grid-cols-2 gap-5 md:grid-cols-3 ${
            isCompact ? "lg:grid-cols-5" : "lg:grid-cols-6"
          } ${bottomText || buttonText ? "mb-10" : ""}`}
        >
          {partners.map((partner) => (
            <StaggerItem
              key={partner.alt}
              preset="logo"
              hover="soft"
              className={`flex items-center justify-center rounded-[10px] p-6 ${
                isCompact ? "bg-white" : "bg-teal-500/10"
              }`}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className={`max-w-full object-contain ${
                  isCompact ? "max-h-24" : "max-h-12"
                }`}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {(bottomText || buttonText) && (
          <div className="mx-auto max-w-4xl text-center">
            {bottomText && (
              <p className="mb-5 font-manrope text-lg font-normal leading-8 text-neutral-500">
                {bottomText}
              </p>
            )}

            {buttonText && buttonHref && (
              <a
                href={buttonHref}
                className="inline-flex rounded-[58px] bg-sky-500 px-7 py-2.5 font-manrope text-lg font-normal leading-8 text-white"
              >
                {buttonText}
              </a>
            )}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
