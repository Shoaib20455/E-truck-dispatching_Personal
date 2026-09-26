import { AnimatedHeading, AnimatedSection, HoverIcon, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type TestimonialItem = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  ratingImage: string;
  ratingAlt: string;
  quote: string;
};

type TestimonialsProps = {
  heading: string;
  testimonials: TestimonialItem[];
};

export default function Testimonials({
  heading,
  testimonials,
}: TestimonialsProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        {/* TESTIMONIALS GRID */}
        <StaggerGroup stagger={0.1} className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name} preset="card" hover="premium" className="flex flex-col items-center rounded-[10px] bg-white px-7 py-8 text-center">
              <HoverIcon className="mb-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                  className="size-16 rounded-full object-cover"
                />
              </HoverIcon>

              <h3 className="mb-2 font-manrope text-xl font-semibold leading-6 text-heading">
                {testimonial.name}
              </h3>

              <p className="mb-4 font-manrope text-lg font-normal leading-6 text-neutral-500">
                {testimonial.role}
              </p>

              <img
                src={testimonial.ratingImage}
                alt={testimonial.ratingAlt}
                className="mb-5 h-6 w-24 object-contain"
              />

              <p className="font-manrope text-lg font-normal leading-6 text-neutral-500">
                “{testimonial.quote}”
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}