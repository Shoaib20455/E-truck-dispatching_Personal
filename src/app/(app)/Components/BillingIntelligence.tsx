type BillingIntelligenceProps = {
  heading: string;
  description: string;
  items: string[];
};

export default function BillingIntelligence({
  heading,
  description,
  items,
}: BillingIntelligenceProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-5 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>

          <p className="font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
            {description}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 overflow-hidden rounded-[20px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item}
              className={`flex flex-col items-center px-8 py-10 text-center ${
                index % 2 === 0 ? "bg-teal-500/10" : "bg-white"
              }`}
            >
              <div className="mb-6 flex size-16 items-center justify-center rounded-full border-[3px] border-sky-500">
                <span className="text-3xl text-sky-500">✓</span>
              </div>

              <p className="font-manrope text-lg font-normal leading-8 text-heading">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}