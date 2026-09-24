type EHRPartner = {
  logo: string;
  alt: string;
};

type EHRPartnersProps = {
  heading: string;
  description: string;

  partners: EHRPartner[];

  bottomText: string;
  buttonText: string;
  buttonHref: string;
};

export default function EHRPartners({
  heading,
  description,
  partners,
  bottomText,
  buttonText,
  buttonHref,
}: EHRPartnersProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* TOP */}
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>

          <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
            {description}
          </p>
        </div>

        {/* LOGOS */}
        <div className="mb-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center rounded-[10px] bg-teal-500/10 p-5"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 font-manrope text-lg font-normal leading-8 text-neutral-500">
            {bottomText}
          </p>

          <a
            href={buttonHref}
            className="inline-flex rounded-[58px] bg-sky-500 px-7 py-2.5 font-manrope text-lg font-normal leading-8 text-white"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}