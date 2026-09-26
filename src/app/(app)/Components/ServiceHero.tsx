import { AnimatedDiv, AnimatedHeading, AnimatedSection, ParallaxDiv, StaggerGroup, StaggerItem } from "./animation/MotionElements";

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

  reviews?: ReviewItem[];

  formHeading: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  organizationPlaceholder: string;
  buttonText: string;

  variant?: "default" | "compact";
};

export default function ServiceHero({
  heading,
  description,
  backgroundImage,
  highlights,
  reviews = [],
  formHeading,
  namePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  organizationPlaceholder,
  buttonText,
  variant = "default",
}: ServiceHeroProps) {
  const isCompact = variant === "compact";

  return (
    <AnimatedSection
      preset="fade"
      trigger="mount"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div
        className={
          isCompact
            ? "w-full bg-gradient-to-r from-sky-500/75 to-teal-500/75 backdrop-blur-[2px]"
            : "w-full bg-gradient-to-r from-sky-500/80 via-cyan-500/70 to-teal-500/70 backdrop-blur-[2px]"
        }
      >
        <div className="mx-auto max-w-[1520px] px-6 py-12 lg:px-8 lg:py-16 2xl:px-0">
          <div
            className={`grid grid-cols-1 gap-10 lg:gap-16 ${
              isCompact
                ? "items-center lg:grid-cols-[1.05fr_0.95fr]"
                : "items-start lg:grid-cols-[1.5fr_0.75fr]"
            }`}
          >
            {/* LEFT CONTENT */}
            <AnimatedDiv preset="hero-left" trigger="mount" className="text-white">
              <AnimatedHeading
                text={heading}
                level={1}
                trigger="mount"
                delay={0.06}
                stagger={0.035}
                className="mb-6 font-inter text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
              />

              <p
                className={`font-manrope text-lg font-medium leading-8 ${
                  isCompact ? "mb-7" : "mb-3 md:text-xl"
                }`}
              >
                {description}
              </p>

              <StaggerGroup
                trigger="mount"
                stagger={0.07}
                delayChildren={0.18}
                className={
                  isCompact
                    ? "grid grid-cols-1 gap-x-10 gap-y-4 font-manrope text-lg font-medium text-zinc-100 sm:grid-cols-2"
                    : "mb-8 space-y-4 font-manrope text-lg font-medium leading-8 text-white md:text-xl"
                }
              >
                {highlights.map((item, index) => (
                  <StaggerItem key={index} preset="step-left" hover="soft" className="flex items-start gap-3">
                    <span>{isCompact ? "✓" : "•"}</span>
                    <span>{item.text}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {reviews.length > 0 && (
                <div className="mt-8 grid grid-cols-2 items-end gap-6 sm:grid-cols-4">
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
              )}
            </AnimatedDiv>

            {/* RIGHT FORM */}
            <ParallaxDiv distance={16}>
              <AnimatedDiv preset="hero-right" delay={0.16} trigger="mount" className="rounded-[14px] border border-sky-500 bg-indigo-50/50 p-7 backdrop-blur-[2.5px] md:p-8">
              <h2
                className={`mb-7 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl ${
                  isCompact ? "text-center" : ""
                }`}
              >
                {formHeading}
              </h2>

              <form>
                <StaggerGroup
                  trigger="mount"
                  stagger={0.07}
                  delayChildren={0.24}
                  className={
                    isCompact
                      ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
                      : "space-y-5"
                  }
                >
                  <StaggerItem preset="fade-up">
                    <input
                      type="text"
                      name="name"
                      placeholder={namePlaceholder}
                      className="w-full rounded-[10px] border border-sky-500 bg-white px-5 py-3 font-manrope text-base text-neutral-500 outline-none"
                    />
                  </StaggerItem>

                  <StaggerItem preset="fade-up">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={phonePlaceholder}
                      className="w-full rounded-[10px] border border-sky-500 bg-white px-5 py-3 font-manrope text-base text-neutral-500 outline-none"
                    />
                  </StaggerItem>

                  <StaggerItem preset="fade-up">
                    <input
                      type="email"
                      name="email"
                      placeholder={emailPlaceholder}
                      className="w-full rounded-[10px] border border-sky-500 bg-white px-5 py-3 font-manrope text-base text-neutral-500 outline-none"
                    />
                  </StaggerItem>

                  <StaggerItem preset="fade-up">
                    <input
                      type="text"
                      name="organization"
                      placeholder={organizationPlaceholder}
                      className="w-full rounded-[10px] border border-sky-500 bg-white px-5 py-3 font-manrope text-base text-neutral-500 outline-none"
                    />
                  </StaggerItem>
                </StaggerGroup>

                <StaggerGroup
                  trigger="mount"
                  delayChildren={0.52}
                  stagger={0}
                  className="w-full"
                >
                  <StaggerItem preset="fade-up" hover="soft" className="w-full">
                    <button
                      type="submit"
                      className="mt-5 w-full rounded-[58px] bg-sky-500 px-7 py-3 font-manrope text-lg font-normal text-white"
                    >
                      {buttonText}
                    </button>
                  </StaggerItem>
                </StaggerGroup>
              </form>
              </AnimatedDiv>
            </ParallaxDiv>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
