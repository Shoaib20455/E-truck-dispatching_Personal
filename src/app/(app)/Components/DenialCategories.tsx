type DenialCategoryItem = {
  title: string
  description: string
  highlighted?: boolean
}

type DenialCategoriesProps = {
  heading: string
  description: string
  categories: DenialCategoryItem[]
}

export default function DenialCategories({
  heading,
  description,
  categories,
}: DenialCategoriesProps) {
  const firstRow = categories.slice(0, 4)
  const secondRow = categories.slice(4, 7)

  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-5 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>

          <p className="font-manrope text-base font-normal leading-7 text-neutral-500 md:text-lg">
            {description}
          </p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((item) => (
            <div
              key={item.title}
              className={`aspect-square flex items-center justify-center px-7 text-center shadow-[0px_10px_20px_rgba(0,0,0,0.08)] ${
                item.highlighted
                  ? "border border-teal-500 bg-teal-500/10"
                  : "border border-sky-300 bg-white"
              }`}
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              }}
            >
              <div>
                <h3 className="mb-3 font-inter text-xl font-semibold leading-tight text-sky-500 md:text-2xl">
                  {item.title}
                </h3>

                <p className="font-manrope text-sm font-normal leading-6 text-neutral-600 md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:-mt-8 lg:grid-cols-3 lg:px-[12.5%]">
          {secondRow.map((item) => (
            <div
              key={item.title}
              className="aspect-square flex items-center justify-center border border-sky-300 bg-white px-7 text-center shadow-[0px_10px_20px_rgba(0,0,0,0.08)]"
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              }}
            >
              <div>
                <h3 className="mb-3 font-inter text-xl font-semibold leading-tight text-sky-500 md:text-2xl">
                  {item.title}
                </h3>

                <p className="font-manrope text-sm font-normal leading-6 text-neutral-600 md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}