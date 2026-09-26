import { AnimatedSection } from "./animation/MotionElements";

type StateRevenueBannerProps = {
  heading: string;
  description: string;
  backgroundImage: string;
  doctorImage: string;
  doctorAlt: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
};

export default function StateRevenueBanner({
  heading,
  description,
  backgroundImage,
  doctorImage,
  doctorAlt,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: StateRevenueBannerProps) {
  return (
    <AnimatedSection preset="cta" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className="overflow-hidden rounded-[20px] bg-teal-500 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        >
          <div className="grid grid-cols-1 items-end gap-8 px-8 pt-10 md:px-12 lg:grid-cols-[1fr_auto] lg:px-16 lg:pt-12">
            <div className="pb-10 text-white lg:max-w-2xl lg:pb-12">
              <h2 className="mb-5 font-inter text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                {heading}
              </h2>

              <p className="mb-7 font-inter text-base font-semibold leading-8 md:text-lg">
                {description}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={primaryButtonHref}
                  className="rounded-[44px] bg-white px-7 py-2.5 text-center font-manrope text-base text-zinc-700"
                >
                  {primaryButtonText}
                </a>

                <a
                  href={secondaryButtonHref}
                  className="rounded-[44px] bg-sky-500 px-7 py-2.5 text-center font-manrope text-base text-white"
                >
                  {secondaryButtonText}
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={doctorImage}
                alt={doctorAlt}
                className="w-full max-w-[330px] object-contain lg:-mt-20 lg:max-w-[390px]"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
