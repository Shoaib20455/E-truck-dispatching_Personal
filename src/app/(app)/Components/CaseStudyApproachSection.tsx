export type CaseStudyApproachItem = {
  title: string;
  description: string;
};

type CaseStudyApproachSectionProps = {
  heading: string;
  introLines: string[];
  items: CaseStudyApproachItem[];
};

export default function CaseStudyApproachSection({
  heading,
  introLines,
  items,
}: CaseStudyApproachSectionProps) {
  return (
    <section className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <h2 className="text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
          {heading}
        </h2>

        <div className="mx-auto mt-6 max-w-[1255px] space-y-1 text-center font-manrope text-base leading-8 text-neutral-500 md:text-lg">
          {introLines.map((line) => <p key={line}>{line}</p>)}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-primary-light bg-white px-9 py-12 text-center"
            >
              <h3 className="font-inter text-2xl font-semibold leading-10 text-heading md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-6 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
