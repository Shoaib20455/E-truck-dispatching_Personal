import Image from "next/image";
import { AnimatedDiv, AnimatedHeading, AnimatedSection, ParallaxDiv, StaggerGroup, StaggerItem } from "./animation/MotionElements";

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
    <AnimatedSection
      preset="fade"
      trigger="mount"
      className="relative isolate w-full overflow-hidden"
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-10 object-cover"
        aria-hidden="true"
      /
    >
      <div className="relative z-10 w-full bg-gradient-to-r from-[#0060A8]/80 via-[#04ADF1]/70 to-[#18CA96]/70">
        <div className="mx-auto w-full max-w-[1520px] px-6 py-12 lg:px-8 lg:py-14 2xl:px-0">
          <div className="grid grid-cols-1 items-start gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-16">
            {/* LEFT */}
            <AnimatedDiv preset="hero-left" trigger="mount" className="min-w-0">
              <div className="font-inter text-base font-black uppercase leading-8 tracking-[3.2px] text-white">
                {eyebrow}
              </div>

              <AnimatedHeading
                text={heading}
                level={1}
                trigger="mount"
                delay={0.08}
                stagger={0.035}
                className="mt-3 max-w-[733px] font-inter text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl"
              />

              <p className="mt-8 max-w-[632px] font-manrope text-base font-medium leading-8 text-white lg:text-lg">
                {description}
              </p>

              {/* REVIEWS */}
              <StaggerGroup trigger="mount" stagger={0.08} delayChildren={0.2} className="mt-8 grid max-w-[700px] grid-cols-2 gap-5 sm:grid-cols-4">
                {reviews.map((review) => (
                  <StaggerItem key={review.logo} preset="logo" hover="soft" className="flex min-h-[54px] items-center">
                    <img
                      src={review.logo}
                      alt={review.alt}
                      className="max-h-[46px] w-auto max-w-full object-contain"
                    />
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* STATS */}
              <StaggerGroup trigger="mount" stagger={0.09} delayChildren={0.28} className="mt-7 grid max-w-[820px] grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <StaggerItem key={stat.label} preset="stat" hover="premium" className="min-w-0 flex items-center gap-4 rounded-[10px] bg-[#EBF3FA]/90 px-5 py-4">
                    <img
                      src={stat.icon}
                      alt={stat.iconAlt}
                      className="size-14 shrink-0 object-contain"
                    />

                    <div className="min-w-0">
                      <div className="font-inter text-4xl font-bold leading-none text-primary-light">
                        {stat.value}
                      </div>

                      <div className="mt-1 font-inter text-base font-semibold leading-5 text-heading">
                        {stat.label}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </AnimatedDiv>

            {/* RIGHT FORM */}
            <ParallaxDiv distance={18} className="w-full max-w-[654px] xl:ml-auto">
              <AnimatedDiv preset="hero-right" delay={0.16} trigger="mount" className="w-full overflow-hidden rounded-[32px] bg-[#EBF3FA] px-7 pb-10 pt-8 shadow-[0px_25px_50px_-12px_rgba(0,96,168,0.10)] outline outline-1 outline-offset-[-1px] outline-[#419EFC]/20 backdrop-blur-lg sm:px-10 sm:pb-14 sm:pt-10 xl:ml-auto">
              <h2 className="text-center font-inter text-3xl font-semibold leading-9 text-heading">
                Talk to an Expert
              </h2>

              <form>
                <StaggerGroup
                  trigger="mount"
                  stagger={0.075}
                  delayChildren={0.28}
                  className="mt-8 flex flex-col gap-6"
                >
                  <StaggerItem preset="fade-up">
                    <FormField
                      label="FULL NAME"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                    />
                  </StaggerItem>

                  <StaggerItem preset="fade-up">
                    <FormField
                      label="EMAIL ADDRESS"
                      name="email"
                      type="email"
                      placeholder="john@clinic.com"
                    />
                  </StaggerItem>

                  <StaggerItem preset="fade-up">
                    <FormField
                      label="PHONE NUMBER"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                    />
                  </StaggerItem>

                  <StaggerItem preset="fade-up" hover="soft">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-5 font-inter text-lg font-bold leading-7 text-white transition-opacity hover:opacity-90"
                    >
                      Book a Free Consultation
                      <span aria-hidden="true" className="text-xl leading-none">
                        →
                      </span>
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
