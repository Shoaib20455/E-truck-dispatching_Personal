import { AnimatedDiv, AnimatedHeading, AnimatedSection, ParallaxDiv, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type LogoItem = {
  image: string;
  alt: string;
};

type ConsultationCTAProps = {
  heading: string;
  description: string;
  backgroundImage?: string;

  formHeading: string;

  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  practicePlaceholder: string;

  buttonText: string;

  logos?: LogoItem[];
  variant?: "background" | "plain";
};

export default function ConsultationCTA({
  heading,
  description,
  backgroundImage,
  formHeading,
  namePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  practicePlaceholder,
  buttonText,
  logos,
  variant = "background",
}: ConsultationCTAProps) {
  const isPlain = variant === "plain";

  return (
    <AnimatedSection preset="cta" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className={
            isPlain
              ? "w-full"
              : "w-full overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat"
          }
          style={
            !isPlain && backgroundImage
              ? { backgroundImage: `url("${backgroundImage}")` }
              : undefined
          }
        >
          <div
            className={
              isPlain
                ? "w-full"
                : "w-full bg-teal-500/60 px-8 py-10 md:px-12 lg:px-16 lg:py-14"
            }
          >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              {/* LEFT CONTENT */}
              <AnimatedDiv preset="slide-left" className={isPlain ? "text-black" : "text-white"}>
                <AnimatedHeading
                  text={heading}
                  className="mb-6 font-inter text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
                />
                    </StaggerItem>

                <p
                  className={
                    isPlain
                      ? "font-manrope text-lg font-normal leading-8 text-neutral-500 md:text-2xl"
                      : "mb-7 font-manrope text-lg font-normal leading-8 md:text-xl lg:text-2xl"
                  }
                >
                  {description}
                </p>

                {logos && logos.length > 0 && (
                  <StaggerGroup stagger={0.06} className="flex flex-wrap justify-start gap-5">
                    {logos.map((logo) => (
                      <StaggerItem key={logo.image} preset="logo" hover="soft">
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        className="w-56 rounded-[10px] bg-white object-contain"
                      />
                    </StaggerItem>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                )}
              </AnimatedDiv>

              {/* FORM */}
              <ParallaxDiv distance={14}>
              <AnimatedDiv preset="slide-right"
                className={
                  isPlain
                    ? "rounded-[20px] bg-teal-500/10 p-7 backdrop-blur-[2.5px] md:p-10"
                    : "rounded-[16px] bg-indigo-50/50 p-6 backdrop-blur-[2.5px] md:p-8 lg:p-10"
                }
              >
                <h3 className="mb-8 text-center font-inter text-2xl font-semibold text-heading md:text-3xl">
                  {formHeading}
                </h3>

                <form>
                  <StaggerGroup stagger={0.06} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <StaggerItem preset="fade-up"><input
                      type="text"
                      name="name"
                      placeholder={namePlaceholder}
                      className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-neutral-500 outline-none"
                    />
                    </StaggerItem>

                    <StaggerItem preset="fade-up"><input
                      type="tel"
                      name="phone"
                      placeholder={phonePlaceholder}
                      className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-neutral-500 outline-none"
                    />
                    </StaggerItem>

                    <StaggerItem preset="fade-up"><input
                      type="email"
                      name="email"
                      placeholder={emailPlaceholder}
                      className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-neutral-500 outline-none"
                    />

                    <StaggerItem preset="fade-up"><input
                      type="text"
                      name="practice"
                      placeholder={practicePlaceholder}
                      className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-neutral-500 outline-none"
                    />
                  </StaggerGroup>

                  <StaggerItem preset="fade-up" hover="soft">
                  <button
                    type="submit"
                    className={`${isPlain ? "mt-8" : "mt-5"} w-full rounded-[36px] bg-sky-500 px-7 py-3 font-manrope text-base font-normal text-white`}
                  >
                    {buttonText}
                  </button>
                  </StaggerItem>
                </form>
              </AnimatedDiv>
              </ParallaxDiv>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
