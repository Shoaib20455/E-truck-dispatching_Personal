type GuideItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

type ExpertGuidesProps = {
  heading: string;
  guides: GuideItem[];
};

export default function ExpertGuides({
  heading,
  guides,
}: ExpertGuidesProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={`${guide.title}-${guide.image}`}
              className="overflow-hidden rounded-[30px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.08)]"
            >
              <img
                src={guide.image}
                alt={guide.imageAlt}
                className="aspect-[1.75/1] w-full object-cover"
              />

              <div className="px-8 py-6">
                <h3 className="mb-5 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                  {guide.href ? (
                    <a href={guide.href}>{guide.title}</a>
                  ) : (
                    guide.title
                  )}
                </h3>

                <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                  {guide.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}