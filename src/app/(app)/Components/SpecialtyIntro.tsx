type SpecialtyIntroProps = {
  heading: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export default function SpecialtyIntro({
  heading,
  description,
  points,
  image,
  imageAlt,
}: SpecialtyIntroProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <p className="mb-7 max-w-2xl font-manrope text-lg font-normal leading-8 text-neutral-500">
              {description}
            </p>

            <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {points.map((point, index) => (
                <div
                  key={point}
                  className={`rounded-[20px] px-5 py-6 text-center font-manrope text-base leading-7 shadow-[0px_10px_20px_rgba(0,0,0,0.10)] ${
                    index === 1 ? "bg-sky-500 text-white" : "bg-white text-neutral-500"
                  }`}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="size-64 rotate-45 overflow-hidden rounded-[42px] border-[8px] border-sky-500 bg-white shadow-[0px_10px_25px_rgba(0,0,0,0.10)] sm:size-72 lg:size-80">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full -rotate-45 scale-[1.42] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
