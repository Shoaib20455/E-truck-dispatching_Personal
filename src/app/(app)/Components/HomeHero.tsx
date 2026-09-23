type StatItem = {
  value: string;
  label: string;
  icon: string;
  iconAlt: string;
};

type ReviewItem = {
  logo: string;
  alt: string;
};

type HomeHeroProps = {
  eyebrow: string;
  heading: string;
  description: string;
  backgroundImage: string;

  stats: StatItem[];

  reviews: ReviewItem[];
};

export default function HomeHero({
  eyebrow,
  heading,
  description,
  backgroundImage,
  stats,
  reviews,
}: HomeHeroProps) {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className="w-full bg-gradient-to-r from-[#0060A8]/80 via-[#04ADF1]/70 to-[#18CA96]/70">
        <div className="mx-auto w-full max-w-[1520px] px-6 py-12 lg:px-8 lg:py-14 2xl:px-0">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <div className="font-inter text-base font-black uppercase leading-8 tracking-[3.2px] text-white">
                {eyebrow}
              </div>

              <h1 className="mt-3 max-w-[733px] font-inter text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                {heading}
              </h1>

              <p className="mt-8 max-w-[632px] font-manrope text-base font-medium leading-8 text-white lg:text-lg">
                {description}
              </p>

              {/* REVIEWS */}
              <div className="mt-8 grid max-w-[700px] grid-cols-2 gap-5 sm:grid-cols-4">
                {reviews.map((review) => (
                  <div
                    key={review.logo}
                    className="flex min-h-[54px] items-center"
                  >
                    <img
                      src={review.logo}
                      alt={review.alt}
                      className="max-h-[46px] w-auto max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* STATS */}
              <div className="mt-7 grid max-w-[820px] grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 rounded-[10px] bg-[#EBF3FA]/90 px-5 py-4"
                  >
                    <img
                      src={stat.icon}
                      alt={stat.iconAlt}
                      className="size-14 shrink-0 object-contain"
                    />

                    <div>
                      <div className="font-inter text-4xl font-bold leading-none text-primary-light">
                        {stat.value}
                      </div>

                      <div className="mt-1 font-inter text-base font-semibold leading-5 text-heading">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full max-w-[654px] overflow-hidden rounded-[32px] bg-[#EBF3FA] px-7 pb-10 pt-8 shadow-[0px_25px_50px_-12px_rgba(0,96,168,0.10)] outline outline-1 outline-offset-[-1px] outline-[#419EFC]/20 backdrop-blur-lg sm:px-10 sm:pb-14 sm:pt-10 lg:ml-auto">
              <h2 className="text-center font-inter text-3xl font-semibold leading-9 text-heading">
                Talk to an Expert
              </h2>

              <form className="mt-8 flex flex-col gap-6">
                <FormField
                  label="FULL NAME"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                />

                <FormField
                  label="EMAIL ADDRESS"
                  name="email"
                  type="email"
                  placeholder="john@clinic.com"
                />

                <FormField
                  label="PHONE NUMBER"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-5 font-inter text-lg font-bold leading-7 text-white transition-opacity hover:opacity-90"
                >
                  Book a Free Consultation
                  <span aria-hidden="true" className="text-xl leading-none">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-inter text-xs font-semibold uppercase leading-4 tracking-wider text-gray-500">
        {label}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-white px-5 py-4 font-inter text-base font-normal text-gray-500 outline outline-1 outline-offset-[-1px] outline-black/30 placeholder:text-gray-500 focus:outline-primary-light"
      />
    </label>
  );
}