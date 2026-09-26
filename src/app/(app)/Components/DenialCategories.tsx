import { AnimatedDiv } from "./animation/MotionElements";

type DenialCategoryItem = {
  title: string;
  description?: string;
  highlighted?: boolean;
};

type DenialCategoriesProps = {
  heading: string;
  description?: string;
  categories: DenialCategoryItem[];
  variant?: "default" | "stats";
};

export default function DenialCategories({
  heading,
  description,
  categories,
  variant = "default",
}: DenialCategoriesProps) {
  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4, 7);
  const isStats = variant === "stats";

  const HexCard = ({ item }: { item: DenialCategoryItem }) => {
    const borderColor = item.highlighted ? "bg-teal-500" : "bg-sky-300";

    return (
      <AnimatedDiv preset="fade-up" className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
        <div
          className={`aspect-square p-px ${borderColor}`}
          style={{
            clipPath:
              "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
          }}
        >
          <div
            className={`flex h-full w-full items-center justify-center px-7 text-center ${
              item.highlighted ? "bg-teal-100" : "bg-white"
            }`}
            style={{
              clipPath:
                "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
            }}
          >
            <div>
              <h3
                className={`whitespace-pre-line font-inter font-semibold leading-tight ${
                  isStats
                    ? "text-xl text-heading md:text-2xl"
                    : "mb-3 text-xl text-sky-500 md:text-2xl"
                }`}
              >
                {item.title}
              </h3>

              {item.description && (
                <p className="font-manrope text-sm font-normal leading-6 text-neutral-600 md:text-base">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-5 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>

          {description && (
            <p className="font-manrope text-base font-normal leading-7 text-neutral-500 md:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((item) => (
            <HexCard key={item.title} item={item} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:-mt-8 lg:grid-cols-3 lg:px-[12.5%]">
          {secondRow.map((item) => (
            <HexCard key={item.title} item={item} />
          ))}
        </div>
      </AnimatedDiv>
    </section>
  );
}
