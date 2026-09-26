import Image from "next/image";
import { AnimatedSection } from "./animation/MotionElements";

type ReviewItem = { label: string; rating: string };
type StateServiceHeroProps = {
  eyebrow: string;
  heading: string;
  description: string;
  servedText: string;
  backgroundImage: string;
  formHeading: string;
  reviews: ReviewItem[];
};

export default function StateServiceHero({
  eyebrow, heading, description, servedText, backgroundImage, formHeading, reviews,
}: StateServiceHeroProps) {
  return (
    <AnimatedSection preset="fade-up" trigger="mount" className="relative isolate w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-10 object-cover"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full bg-gradient-to-r from-sky-500/80 via-cyan-500/70 to-teal-500/70 backdrop-blur-[2px]">
        <div className="mx-auto max-w-[1520px] px-6 py-12 lg:px-8 lg:py-16 2xl:px-0">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.8fr] lg:gap-16">
            <div className="text-white">
              <div className="mb-4 font-inter text-sm font-black uppercase tracking-[0.2em] text-zinc-800 md:text-base">{eyebrow}</div>
              <h1 className="mb-6 max-w-3xl font-inter text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">{heading}</h1>
              <p className="mb-6 max-w-2xl font-manrope text-lg font-medium leading-8">{description}</p>
              <p className="mb-6 font-manrope text-lg font-bold">{servedText}</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {reviews.map((review) => (
                  <div key={review.label} className="text-center">
                    <div className="font-inter text-base font-semibold text-zinc-800">{review.label}</div>
                    <div className="text-lg tracking-tight text-amber-400">{review.rating}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-sky-500/20 bg-blue-50/90 p-6 shadow-[0px_25px_50px_-12px_rgba(0,96,168,0.10)] backdrop-blur-lg md:p-8">
              <h2 className="mb-7 text-center font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">{formHeading}</h2>
              <form className="space-y-4">
                {[
                  ["FULL NAME", "John Doe", "text"],
                  ["EMAIL ADDRESS", "john@clinic.com", "email"],
                  ["PHONE NUMBER", "(555) 000-0000", "tel"],
                ].map(([label, placeholder, type]) => (
                  <label key={label} className="block">
                    <span className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</span>
                    <input type={type} placeholder={placeholder} className="w-full rounded-2xl border border-black/30 bg-white px-5 py-4 font-inter text-base text-gray-500 outline-none" />
                  </label>
                ))}
                <button type="submit" className="w-full rounded-2xl bg-teal-500 px-6 py-4 font-inter text-lg font-bold text-white">Book a Free Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
