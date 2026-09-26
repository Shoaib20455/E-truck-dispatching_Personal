import { AnimatedSection } from "./animation/MotionElements";

type RevenueLossCard = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  highlighted?: boolean;
};

type RevenueLossReasonsProps = {
  heading: string;
  descriptionOne: string;
  descriptionTwo: string;

  image: string;
  imageAlt: string;

  cards: RevenueLossCard[];
};

export default function RevenueLossReasons({
  heading,
  descriptionOne,
  descriptionTwo,
  image,
  imageAlt,
  cards,
}: RevenueLossReasonsProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* TOP CONTENT */}
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <p className="mb-5 font-manrope text-lg font-normal leading-8 text-neutral-500">
              {descriptionOne}
            </p>

            <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
              {descriptionTwo}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-[472px] object-contain"
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[30px] p-7 ${
                card.highlighted
                  ? "border border-teal-500 bg-teal-500/10 shadow-[0px_10px_20px_rgba(0,0,0,0.07)]"
                  : "bg-white"
              }`}
            >
              <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-sky-500">
                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  className="size-16 object-contain"
                />
              </div>

              <h3 className="mb-5 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                {card.title}
              </h3>

              <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}