type TrustCard = {
  title: string;
  description: string;
};

type WhyTrustABSProps = {
  heading: string;
  description: string;
  mainCardHeading: string;
  cards: TrustCard[];
};

export default function WhyTrustABS({
  heading,
  description,
  mainCardHeading,
  cards,
}: WhyTrustABSProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>

          <p className="whitespace-pre-line font-manrope text-lg font-normal leading-8 text-neutral-500">
            {description}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* MAIN CARD */}
          <div className="flex items-center rounded-[20px] bg-teal-500/10 p-8">
            <h3 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {mainCardHeading}
            </h3>
          </div>

          {/* OTHER CARDS */}
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[20px] bg-white p-8"
            >
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
    </section>
  );
}