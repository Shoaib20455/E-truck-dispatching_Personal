type RevenueCTAProps = {
  heading: string;
  description: string;
  backgroundImage: string;

  primaryButtonText: string;
  primaryButtonHref: string;

  secondaryButtonText: string;
  secondaryButtonHref: string;
};

export default function RevenueCTA({
  heading,
  description,
  backgroundImage,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: RevenueCTAProps) {
  return (
    <section className="w-full bg-cyan-50 py-10 lg:py-14">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className="w-full overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        >
          <div className="w-full bg-teal-500/85 px-6 py-10 text-center md:py-12">
            <h2 className="mx-auto mb-4 max-w-4xl font-inter text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <p className="mb-6 font-manrope text-base font-normal leading-8 text-white md:text-lg">
              {description}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={primaryButtonHref}
                className="rounded-[53px] bg-white px-7 py-2.5 font-manrope text-base font-normal leading-8 text-zinc-700"
              >
                {primaryButtonText}
              </a>

              <a
                href={secondaryButtonHref}
                className="rounded-[53px] bg-sky-500 px-7 py-2.5 font-manrope text-base font-normal leading-8 text-white"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}