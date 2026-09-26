import AppLink from "./navigation/AppLink";
import { AnimatedDiv, AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type SpecialtyItem = {
  title: string;
  icon: string;
  iconAlt: string;
  highlighted?: boolean;
};

type SpecialtyBillingProps = {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  specialties: SpecialtyItem[];
};

export default function SpecialtyBilling({
  heading,
  description,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  specialties,
}: SpecialtyBillingProps) {
  const rows: SpecialtyItem[][] = [];
  let cursor = 0;
  let rowSize = 3;

  while (cursor < specialties.length) {
    rows.push(specialties.slice(cursor, cursor + rowSize));
    cursor += rowSize;
    rowSize = rowSize === 3 ? 4 : 3;
  }

  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <AnimatedDiv preset="slide-left">
            <AnimatedHeading
              text={heading}
              className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
            />

            <p className="mb-7 whitespace-pre-line font-manrope text-lg font-normal leading-8 text-zinc-700">
              {description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <AppLink
                href={buttonHref}
                className="inline-flex justify-center rounded-[58px] bg-sky-500 px-7 py-2.5 font-manrope text-lg font-normal text-white"
              >
                {buttonText}
              </AppLink>

              {secondaryButtonText && secondaryButtonHref && (
                <AppLink
                  href={secondaryButtonHref}
                  className="inline-flex justify-center rounded-[34px] bg-white px-7 py-2.5 font-manrope text-lg font-normal text-neutral-600"
                >
                  {secondaryButtonText}
                </AppLink>
              )}
            </div>
          </AnimatedDiv>

          <AnimatedDiv preset="slide-right" className="flex justify-center lg:justify-end">
            <div className="hidden w-full max-w-[620px] flex-col items-center justify-center lg:flex">
              {rows.map((row, rowIndex) => (
                <StaggerGroup
                  key={rowIndex}
                  stagger={0.055}
                  className={`flex items-center justify-center gap-2.5 ${rowIndex > 0 ? "-mt-3" : ""}`}
                >
                  {row.map((specialty) => (
                    <StaggerItem
                      key={specialty.title}
                      preset="card"
                      hover="premium"
                      className="flex h-[92px] w-[106px] flex-col items-center justify-center bg-teal-500/10 px-2 text-center drop-shadow-[0_8px_12px_rgba(0,0,0,0.10)] xl:h-[100px] xl:w-[116px]"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 24%, 100% 76%, 50% 100%, 0% 76%, 0% 24%)",
                      }}
                    >
                      <img
                        src={specialty.icon}
                        alt={specialty.iconAlt}
                        className="mb-1.5 size-9 object-contain"
                      />

                      <span className="max-w-[90%] font-inter text-[11px] font-semibold leading-[14px] text-heading xl:text-xs xl:leading-4">
                        {specialty.title}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              ))}
            </div>

            <StaggerGroup stagger={0.06} className="grid w-full max-w-[520px] grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
              {specialties.map((specialty) => (
                <StaggerItem key={specialty.title} preset="card" hover="premium" className="flex min-h-[110px] flex-col items-center justify-center bg-teal-500/10 px-4 py-4 text-center shadow-sm">
                  <img
                    src={specialty.icon}
                    alt={specialty.iconAlt}
                    className="mb-2 size-9 object-contain"
                  />
                  <span className="font-inter text-sm font-semibold leading-5 text-heading">
                    {specialty.title}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </AnimatedDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}
