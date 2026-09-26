import { AnimatedSection } from "./animation/MotionElements";

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
  variant?: "default" | "compact";
};

export default function ServiceGridWithImage({
  heading,
  image,
  imageAlt,
  services,
  variant = "default",
}: ServiceGridWithImageProps) {
  const isCompact = variant === "compact";

  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className={`grid grid-cols-1 items-start gap-10 ${
            isCompact
              ? "lg:grid-cols-[0.95fr_1.05fr] lg:gap-14"
              : "lg:grid-cols-[0.85fr_1.35fr] lg:gap-6"
          }`}
        >
          {/* LEFT SIDE */}
          <div>
            <h2 className="mb-8 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <img
              src={image}
              alt={imageAlt}
              className={`w-full rounded-[20px] object-cover ${
                isCompact
                  ? "shadow-[0px_10px_20px_rgba(0,0,0,0.10)]"
                  : ""
              }`}
            />
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`grid grid-cols-1 gap-5 ${
              isCompact
                ? "grid-cols-2 md:grid-cols-4"
                : "md:grid-cols-2"
            }`}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-[20px] ${
                  isCompact ? "p-5 text-center" : "p-7 md:p-8"
                } ${
                  service.highlighted
                    ? "border border-teal-500 bg-teal-100 shadow-[0px_10px_20px_rgba(0,0,0,0.10)]"
                    : isCompact
                      ? "border border-sky-500 bg-white"
                      : "bg-white"
                }`}
              >
                <h3
                  className={`font-inter font-semibold text-heading ${
                    isCompact
                      ? "mb-4 text-lg leading-6"
                      : "mb-5 text-2xl leading-tight md:text-3xl"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`font-manrope font-normal ${
                    isCompact
                      ? "text-base leading-7 text-zinc-700"
                      : "text-lg leading-8 text-neutral-500"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
