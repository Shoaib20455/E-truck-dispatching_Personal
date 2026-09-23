type SpecialtyItem = {
  title: string;
  icon: string;
  iconAlt: string;
};

type SpecialtyBillingProps = {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  specialties: SpecialtyItem[];
};

export default function SpecialtyBilling({
  heading,
  description,
  buttonText,
  buttonHref,
  specialties,
}: SpecialtyBillingProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <p className="mb-8 font-manrope text-lg font-normal leading-8 text-neutral-500">
              {description}
            </p>

            <a
              href={buttonHref}
              className="inline-flex rounded-[58px] bg-sky-500 px-7 py-2.5 font-manrope text-lg font-normal leading-8 text-white"
            >
              {buttonText}
            </a>
          </div>

          {/* SPECIALTIES */}
          <div className="flex justify-center">
            <div className="grid w-full max-w-[620px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {specialties.map((specialty) => (
                <div
                  key={specialty.title}
                  className="flex flex-col items-center rounded-[20px] bg-teal-500/10 px-5 py-5 text-center shadow"
                >
                  <img
                    src={specialty.icon}
                    alt={specialty.iconAlt}
                    className="mb-3 size-9 object-contain"
                  />

                  <span className="font-inter text-sm font-semibold leading-5 text-heading">
                    {specialty.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}