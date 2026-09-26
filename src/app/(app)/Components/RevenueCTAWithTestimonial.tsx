import AppLink from "./navigation/AppLink";
import { AnimatedSection } from "./animation/MotionElements";

type TestimonialData = {
  image: string;
  imageAlt: string;
  name: string;
  role: string;
  quote: string;
  ratingImage?: string;
  ratingAlt?: string;
};

type RevenueCTAWithTestimonialProps = {
  heading: string;
  description: string;

  backgroundImage: string;

  primaryButtonText: string;
  primaryButtonHref: string;

  secondaryButtonText: string;
  secondaryButtonHref: string;

  testimonial: TestimonialData;
};

export default function RevenueCTAWithTestimonial({
  heading,
  description,
  backgroundImage,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  testimonial,
}: RevenueCTAWithTestimonialProps) {
  return (
    <AnimatedSection preset="cta" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className="w-full overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        >
          <div className="w-full bg-gradient-to-b from-teal-500/85 to-teal-950/90 px-8 py-10 md:px-12 lg:px-16 lg:py-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              {/* LEFT */}
              <div className="text-white">
                <h2 className="mb-6 max-w-xl font-inter text-3xl font-semibold leading-tight md:text-4xl">
                  {heading}
                </h2>

                <p className="mb-7 max-w-xl font-manrope text-lg font-normal leading-8">
                  {description}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <AppLink
                    href={primaryButtonHref}
                    className="inline-flex rounded-[44px] bg-white px-7 py-2.5 font-manrope text-base font-normal leading-8 text-neutral-600"
                  >
                    {primaryButtonText}
                  </AppLink>

                  <AppLink
                    href={secondaryButtonHref}
                    className="inline-flex rounded-[44px] bg-sky-500 px-7 py-2.5 font-manrope text-base font-normal leading-8 text-white"
                  >
                    {secondaryButtonText}
                  </AppLink>
                </div>
              </div>

              {/* RIGHT TESTIMONIAL */}
              <div className="rounded-[10px] bg-white p-6 text-center md:p-8">
                <img
                  className="mx-auto -mt-14 mb-4 size-28 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                />

                <h3 className="mb-2 font-manrope text-xl font-semibold leading-6 text-heading">
                  {testimonial.name}
                </h3>

                <p className="mb-4 font-manrope text-lg font-normal leading-6 text-neutral-500">
                  {testimonial.role}
                </p>

                {testimonial.ratingImage && (
                  <img
                    className="mx-auto mb-5 h-6 w-24 object-contain"
                    src={testimonial.ratingImage}
                    alt={testimonial.ratingAlt || "5 star rating"}
                  />
                )}

                <p className="font-manrope text-lg font-normal leading-6 text-neutral-500">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}