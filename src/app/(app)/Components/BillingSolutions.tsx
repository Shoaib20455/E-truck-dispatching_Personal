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
};

export default function BillingSolutions({
  heading,
  solutions,
}: BillingSolutionsProps) {
  return (
    <section className="w-full bg-teal-500/10 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mb-12 text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        {/* SOLUTIONS GRID */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className={`rounded-[30px] p-7 md:p-8 ${
                solution.highlighted
                  ? "border border-teal-500 bg-teal-500/10 shadow-[0px_10px_20px_rgba(0,0,0,0.07)]"
                  : "bg-white"
              }`}
            >
              <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-sky-500">
                <img
                  src={solution.icon}
                  alt={solution.iconAlt}
                  className="size-16 object-contain"
                />
              </div>

              <h3 className="mb-5 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                {solution.title}
              </h3>

              <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}