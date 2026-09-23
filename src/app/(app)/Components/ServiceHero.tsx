type HighlightItem = {
  text: string;
  strongParts?: string[];
};

type ReviewItem = {
  logo?: string;
  alt?: string;
  label?: string;
  rating?: string;
};

type ServiceHeroProps = {
  heading: string;
  description: string;
  backgroundImage: string;

  highlights: HighlightItem[];

  reviews: ReviewItem[];

  formHeading: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  organizationPlaceholder: string;
  buttonText: string;
};

export default function ServiceHero({
  heading,
  description,
  backgroundImage,
  highlights,
  reviews,
  formHeading,
  namePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  organizationPlaceholder,
  buttonText,
}: ServiceHeroProps) {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className="w-full bg-gradient-to-r from-sky-500/80 via-cyan-500/70 to-teal-500/70 backdrop-blur-[2px]">
        <div className="mx-auto max-w-[1520px] px-6 py-12 lg:px-8 lg:py-16 2xl:px-0">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.5fr_0.75fr] lg:gap-16">
            
            {/* LEFT CONTENT */}
            <div className="text-white">
              <h1 className="mb-6 font-inter text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                {heading}
              </h1>

              <p className="mb-3 font-manrope text-lg font-medium leading-8 md:text-xl">
                {description}
              </p>

              <ul className="mb-8 space-y-4 font-manrope text-lg font-medium leading-8 md:text-xl">
                {highlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span>•</span>

                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* REVIEW LOGOS */}
              <div className="grid grid-cols-2 items-end gap-6 sm:grid-cols-4">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                  >
                    {review.logo ? (
                      <img
                        src={review.logo}
                        alt={review.alt || ""}
                        className="mb-1 max-h-10 object-contain"
                      />
                    ) : (
                      <div className="mb-1 font-inter text-2xl font-semibold text-zinc-800">
                        {review.label}
                      </div>
                    )}

                    {review.rating && (
                      <div className="text-xl tracking-tight text-amber-400">
                        {review.rating}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-[14px] border border-sky-500 bg-indigo-50/50 p-7 backdrop-blur-[2.5px] md:p-8">
              <h2 className="mb-7 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                {formHeading}
              </h2>

              <form className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder={namePlaceholder}
                  className="w-full rounded-[10px] border border-sky-500 bg-white px-5 py-3 font-manrope text-base text-neutral-500 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder={phonePlaceholder}
                  className="w-full rounded-[10px] border border-sky-500 bg-white px-5 py-3 font-manrope text-base text-neutral-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  className="w-full rounded-[10px] border border-sky-500 bg-white px-5 py-3 font-manrope text-base text-neutral-500 outline-none"
                />

                <input
                  type="text"
                  name="organization"
                  placeholder={organizationPlaceholder}
                  className="w-full rounded-[10px] border border-sky-500 bg-white px-5 py-3 font-manrope text-base text-neutral-500 outline-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-[58px] bg-sky-500 px-7 py-3 font-manrope text-lg font-normal text-white"
                >
                  {buttonText}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}