type StateItem = {
  name: string;
  image: string;
  imageAlt: string;
  highlighted?: boolean;
};

type NationwideBillingProps = {
  heading: string;
  description: string;
  states: StateItem[];
};

export default function NationwideBilling({
  heading,
  description,
  states,
}: NationwideBillingProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* TOP CONTENT */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>
          </div>

          <div>
            <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
              {description}
            </p>
          </div>
        </div>

        {/* STATES GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((state) => (
            <div
              key={state.name}
              className={`flex flex-col items-center rounded-[10px] px-6 py-6 text-center ${
                state.highlighted
                  ? "border border-teal-500 bg-teal-500/10 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)]"
                  : "bg-white"
              }`}
            >
              <img
                src={state.image}
                alt={state.imageAlt}
                className="mb-4 size-20 object-contain"
              />

              <div className="font-inter text-xl font-semibold leading-9 text-heading">
                {state.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}