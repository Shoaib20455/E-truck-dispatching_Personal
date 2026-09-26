import { AnimatedSection } from "./animation/MotionElements";

type HeroMetric = {
  value: string;
  label: string;
  icon: string;
  iconAlt: string;
};

type StateDetailHeroProps = {
  eyebrow: string;
  heading: string;
  description: string;
  servedText: string;
  backgroundImage: string;
  formHeading: string;
  metrics: HeroMetric[];
};

export default function StateDetailHero({
  eyebrow,
  heading,
  description,
  servedText,
  backgroundImage,
  formHeading,
  metrics,
}: StateDetailHeroProps) {
  return (
    <AnimatedSection preset="fade-up" trigger="mount"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="w-full bg-gradient-to-r from-sky-500/85 via-cyan-500/75 to-teal-500/75 backdrop-blur-[2px]">
        <div className="mx-auto max-w-[1520px] px-6 py-12 lg:px-8 lg:py-16 2xl:px-0">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.8fr] lg:gap-16">
            <div className="text-white">
              <p className="mb-3 font-inter text-sm font-black uppercase tracking-[0.2em] text-white/95 md:text-base">
                {eyebrow}
              </p>

              <h1 className="mb-6 max-w-3xl font-inter text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                {heading}
              </h1>

              <p className="mb-7 max-w-3xl font-manrope text-lg font-medium leading-8 md:text-xl">
                {description}
              </p>

              <p className="mb-8 font-manrope text-lg font-bold">
                {servedText}
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center gap-4 rounded-[10px] bg-blue-50/90 px-5 py-4 text-zinc-700 backdrop-blur-sm"
                  >
                    <img
                      src={metric.icon}
                      alt={metric.iconAlt}
                      className="size-14 shrink-0 object-contain"
                    />
                    <div>
                      <div className="font-inter text-3xl font-bold leading-none text-sky-500 md:text-4xl">
                        {metric.value}
                      </div>
                      <div className="mt-2 font-inter text-sm font-semibold leading-5 md:text-base">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-sky-500/20 bg-blue-50/90 p-6 shadow-[0px_25px_50px_-12px_rgba(0,96,168,0.10)] backdrop-blur-lg md:p-8 lg:p-10">
              <h2 className="mb-7 text-center font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                {formHeading}
              </h2>

              <form className="space-y-4">
                {[
                  ["FULL NAME", "John Doe", "text"],
                  ["EMAIL ADDRESS", "john@clinic.com", "email"],
                  ["PHONE NUMBER", "(555) 000-0000", "tel"],
                ].map(([label, placeholder, type]) => (
                  <label key={label} className="block">
                    <span className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {label}
                    </span>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full rounded-2xl border border-black/30 bg-white px-5 py-4 font-inter text-base text-gray-500 outline-none"
                    />
                  </label>
                ))}

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-teal-500 px-6 py-4 font-inter text-lg font-bold text-white"
                >
                  Book a Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
