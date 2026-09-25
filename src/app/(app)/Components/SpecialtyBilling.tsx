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
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <p className="mb-7 whitespace-pre-line font-manrope text-lg font-normal leading-8 text-zinc-700">
              {description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={buttonHref}
                className="inline-flex justify-center rounded-[58px] bg-sky-500 px-7 py-2.5 font-manrope text-lg font-normal text-white"
              >
                {buttonText}
              </a>

              {secondaryButtonText && secondaryButtonHref && (
                <a
                  href={secondaryButtonHref}
                  className="inline-flex justify-center rounded-[34px] bg-white px-7 py-2.5 font-manrope text-lg font-normal text-neutral-600"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex w-full max-w-[620px] flex-col items-center justify-center py-2">
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 ${rowIndex > 0 ? "-mt-4 sm:-mt-5" : ""}`}
                >
                  {row.map((specialty) => (
                    <div
                      key={specialty.title}
                      className="relative aspect-[1.12/1] w-[20vw] min-w-[68px] max-w-[118px] drop-shadow-[0_8px_12px_rgba(0,0,0,0.10)]"
                    >
                      <div
                        className={`absolute inset-0 ${specialty.highlighted ? "bg-teal-400" : "bg-sky-200"}`}
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      />

                      <div
                        className={`absolute inset-[1px] flex flex-col items-center justify-center px-2 text-center ${specialty.highlighted ? "bg-teal-100" : "bg-white"}`}
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      >
                        <img
                          src={specialty.icon}
                          alt={specialty.iconAlt}
                          className="mb-1.5 h-[clamp(20px,4vw,36px)] w-[clamp(20px,4vw,36px)] object-contain"
                        />

                        <span className="max-w-[90%] font-inter text-[clamp(8px,1.6vw,12px)] font-semibold leading-tight text-heading">
                          {specialty.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
