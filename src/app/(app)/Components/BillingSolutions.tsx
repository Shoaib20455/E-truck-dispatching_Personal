import { AnimatedSection } from "./animation/MotionElements";

type BillingSolutionItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  highlighted?: boolean;
};

type BillingSolutionsProps = {
  heading: string;
  solutions: BillingSolutionItem[];
  variant?: "default" | "outsource";
};

export default function BillingSolutions({
  heading,
  solutions,
  variant = "default",
}: BillingSolutionsProps) {
  const isOutsource = variant === "outsource";

  return (
    <AnimatedSection preset="fade-up"
      className={`w-full py-14 lg:py-20 ${
        isOutsource ? "bg-cyan-50" : "bg-teal-500/10"
      }`}
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mb-12 text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 gap-7 ${
            isOutsource ? "md:grid-cols-3" : "lg:grid-cols-2"
          }`}
        >
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className={
                isOutsource
                  ? "rounded-[30px] border border-sky-500 bg-cyan-50 px-8 py-8 text-center shadow-[0px_10px_20px_rgba(0,0,0,0.10)]"
                  : `rounded-[30px] p-7 md:p-8 ${
                      solution.highlighted
                        ? "border border-teal-500 bg-teal-500/10 shadow-[0px_10px_20px_rgba(0,0,0,0.07)]"
                        : "bg-white"
                    }`
              }
            >
              {isOutsource ? (
                <img
                  src={solution.icon}
                  alt={solution.iconAlt}
                  className="mx-auto mb-5 size-20 object-contain"
                />
              ) : (
                <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-sky-500">
                  <img
                    src={solution.icon}
                    alt={solution.iconAlt}
                    className="size-16 object-contain"
                  />
                </div>
              )}

              <h3
                className={`font-inter font-semibold ${
                  isOutsource
                    ? "mb-4 text-2xl leading-8 text-neutral-600 md:text-3xl"
                    : "mb-5 text-2xl leading-tight text-heading md:text-3xl"
                }`}
              >
                {solution.title}
              </h3>

              <p
                className={`font-manrope text-lg font-normal ${
                  isOutsource
                    ? "leading-8 text-zinc-700"
                    : "leading-8 text-neutral-500"
                }`}
              >
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
