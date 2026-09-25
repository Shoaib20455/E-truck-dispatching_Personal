type StateTestimonial = {
  name: string;
  role: string;
  quote: string;
  ratingImage: string;
  ratingAlt: string;
};

type StateTestimonialsProps = {
  heading: string;
  testimonials: StateTestimonial[];
};

export default function StateTestimonials({
  heading,
  testimonials,
}: StateTestimonialsProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[10px] bg-white px-6 py-8 text-center"
            >
              <h3 className="mb-2 font-manrope text-xl font-semibold leading-6 text-heading">
                {item.name}
              </h3>
              <p className="mb-4 font-manrope text-base leading-6 text-neutral-500">
                {item.role}
              </p>
              <img
                src={item.ratingImage}
                alt={item.ratingAlt}
                className="mx-auto mb-5 h-6 w-24 object-contain"
              />
              <p className="font-manrope text-base leading-6 text-neutral-500">
                “{item.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
