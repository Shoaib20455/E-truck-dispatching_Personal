type ServiceCard = {
  title: string;
  description: string;
  highlighted?: boolean;
};

type ServiceGridWithImageProps = {
  heading: string;
  image: string;
  imageAlt: string;
  services: ServiceCard[];
};

export default function ServiceGridWithImage({
  heading,
  image,
  imageAlt,
  services,
}: ServiceGridWithImageProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.35fr] lg:gap-6">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="mb-8 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <img
              src={image}
              alt={imageAlt}
              className="w-full rounded-[20px] object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-[20px] p-7 md:p-8 ${
                  service.highlighted
                    ? "border border-teal-500 bg-teal-500/10 shadow-[0px_10px_20px_rgba(0,0,0,0.07)]"
                    : "bg-white"
                }`}
              >
                <h3 className="mb-5 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                  {service.title}
                </h3>

                <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}