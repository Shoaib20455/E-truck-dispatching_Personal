import { AnimatedSection } from "./animation/MotionElements";

type ServiceItem = {
  title: string;
  description?: string;
  icon: string;
  iconAlt: string;
  highlighted?: boolean;
};

type RCMSolutionsProps = {
  heading: string;
  services: ServiceItem[];
  variant?: "default" | "procedure";
};

export default function RCMSolutions({
  heading,
  services,
  variant = "default",
}: RCMSolutionsProps) {
  const isProcedure = variant === "procedure";

  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={
                isProcedure
                  ? "flex min-h-40 flex-col items-center justify-center rounded-[10px] bg-white px-5 py-6 text-center shadow-[0px_10px_20px_rgba(0,0,0,0.08)] " +
                    (service.highlighted ? "border border-teal-500 bg-teal-500/10" : "")
                  : "flex flex-col items-center rounded-[20px] bg-teal-500/20 px-6 py-8 text-center"
              }
            >
              {isProcedure ? (
                <img
                  src={service.icon}
                  alt={service.iconAlt}
                  className="mb-4 size-16 object-contain"
                />
              ) : (
                <div className="mb-5 flex size-20 items-center justify-center rounded-full bg-sky-500">
                  <img
                    src={service.icon}
                    alt={service.iconAlt}
                    className="size-14 object-contain"
                  />
                </div>
              )}

              <h3
                className={
                  isProcedure
                    ? "font-inter text-lg font-semibold leading-6 text-heading"
                    : "mb-4 font-inter text-lg font-semibold text-heading"
                }
              >
                {service.title}
              </h3>

              {!isProcedure && service.description && (
                <p className="font-manrope text-base font-normal leading-6 text-neutral-500">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
