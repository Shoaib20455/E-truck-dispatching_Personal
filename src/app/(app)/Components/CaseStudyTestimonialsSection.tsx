import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerArticle } from "./animation/MotionElements";

export type CaseStudyTestimonial = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
};

type CaseStudyTestimonialsSectionProps = {
  heading: string;
  testimonials: CaseStudyTestimonial[];
};

export default function CaseStudyTestimonialsSection({
  heading,
  testimonials,
}: CaseStudyTestimonialsSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1920px]">
        <AnimatedHeading
          text={heading}
          className="mx-auto max-w-[760px] px-6 text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl"
        />

        <StaggerGroup stagger={0.075} className="mt-12 grid grid-cols-1 gap-5 px-6 md:grid-cols-2 xl:grid-cols-5 xl:px-0">
          {testimonials.map((testimonial, index) => (
            <StaggerArticle key={testimonial.name} preset={index % 2 === 0 ? "tile-left" : "tile-right"} hover="lift" className="rounded-[10px] bg-white px-7 py-10 text-center">
              <h3 className="font-manrope text-xl font-semibold leading-6 text-heading">{testimonial.name}</h3>
              <p className="mt-2 font-manrope text-lg leading-6 text-neutral-500">{testimonial.role}</p>
              <div className="mt-4 text-xl tracking-[2px] text-amber-400">
                {"★".repeat(testimonial.rating ?? 5)}
              </div>
              <p className="mt-5 font-manrope text-base leading-6 text-neutral-500 md:text-lg">“{testimonial.quote}”</p>
            </StaggerArticle>
          ))}
        </StaggerGroup>

        <div className="mt-8 flex justify-center gap-2">
          <span className="size-3 rounded-full border border-black bg-primary-light" />
          <span className="size-3 rounded-full border border-black bg-white" />
          <span className="size-3 rounded-full border border-black bg-white" />
        </div>
      </div>
    </AnimatedSection>
  );
}
