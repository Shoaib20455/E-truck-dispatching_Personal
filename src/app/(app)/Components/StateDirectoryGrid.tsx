type StateCard = {
  name: string;
  abbreviation: string;
  image: string;
  imageAlt?: string;
};

type StateDirectoryGridProps = {
  heading: string;
  states: StateCard[];
  pinIcon: string;
};

export default function StateDirectoryGrid({
  heading,
  states,
  pinIcon,
}: StateDirectoryGridProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mb-12 text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((state) => (
            <article
              key={state.name}
              className="overflow-hidden rounded-[10px] bg-white p-3 shadow-[0px_10px_20px_rgba(0,0,0,0.10)]"
            >
              <img
                src={state.image}
                alt={state.imageAlt || state.name}
                className="aspect-[329/239] w-full rounded-[10px] object-cover"
              />

              <div className="flex items-start gap-3 px-1 pb-2 pt-4">
                <img
                  src={pinIcon}
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 size-8 shrink-0 object-contain"
                />

                <div>
                  <h3 className="font-inter text-xl font-semibold leading-6 text-heading md:text-2xl">
                    {state.name}
                  </h3>
                  <p className="mt-2 font-manrope text-base leading-6 text-zinc-700">
                    {state.abbreviation}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
