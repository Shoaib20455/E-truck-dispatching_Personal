type StatItem = {
  label: string;
  value: string;
};

type StatColumn = {
  items: StatItem[];
};

type SuccessNumbersProps = {
  heading: string;
  columns: StatColumn[];
};

export default function SuccessNumbers({
  heading,
  columns,
}: SuccessNumbersProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-16">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mb-12 text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={
                columnIndex < columns.length - 1
                  ? "lg:border-r-2 lg:border-teal-500 lg:px-12 first:lg:pl-0"
                  : "lg:pl-12"
              }
            >
              <div className="space-y-10">
                {column.items.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 font-inter text-base font-semibold leading-6 text-heading lg:text-lg">
                      {item.label}
                    </div>

                    <div className="font-inter text-2xl font-bold leading-10 text-sky-500 lg:text-3xl">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}