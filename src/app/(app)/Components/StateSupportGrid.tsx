import { AnimatedSection } from "./animation/MotionElements";

type StateSupportGridProps = {
  heading: string;
  description?: string;
  states: string[];
  buttonText: string;
  buttonHref: string;
  variant?: "default" | "map";
  mapImage?: string;
  mapAlt?: string;
  highlightedState?: string;
};

export default function StateSupportGrid({
  heading,
  description,
  states,
  buttonText,
  buttonHref,
  variant = "default",
  mapImage,
  mapAlt = "",
  highlightedState,
}: StateSupportGridProps) {
  const isMap = variant === "map";

  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {isMap ? (
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <div>
              <h2 className="mb-8 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl">
                {heading}
              </h2>

              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {states.map((state) => (
                  <div
                    key={state}
                    className={`rounded-[10px] px-5 py-3 text-center font-manrope text-lg font-semibold text-heading ${
                      state === highlightedState
                        ? "border border-teal-500 bg-teal-100 shadow-[0px_2px_1px_rgba(24,202,150,1)]"
                        : "bg-white shadow-[0px_2px_1px_rgba(4,173,241,0.60)]"
                    }`}
                  >
                    {state}
                  </div>
                ))}
              </div>

              <a
                href={buttonHref}
                className="block w-full rounded-[54px] bg-sky-500 px-7 py-3 text-center font-manrope text-base font-medium text-white"
              >
                {buttonText}
              </a>
            </div>

            <div className="flex justify-center">
              {mapImage && (
                <img
                  src={mapImage}
                  alt={mapAlt}
                  className="w-full max-w-[900px] object-contain"
                />
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <h2 className="mb-5 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
                {heading}
              </h2>

              {description && (
                <p className="font-manrope text-lg font-normal leading-8 text-neutral-500 md:text-2xl">
                  {description}
                </p>
              )}
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {states.map((state) => (
                <div
                  key={state}
                  className="rounded-[10px] bg-white px-6 py-3 text-center font-inter text-xl font-semibold text-heading shadow-[0px_2px_1px_0px_rgba(4,173,241,0.60)]"
                >
                  {state}
                </div>
              ))}

              <a
                href={buttonHref}
                className="rounded-[45px] bg-sky-500 px-6 py-3 text-center font-inter text-xl font-semibold text-white"
              >
                {buttonText}
              </a>
            </div>
          </>
        )}
      </div>
    </AnimatedSection>
  );
}
