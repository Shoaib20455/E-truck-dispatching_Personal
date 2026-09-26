import { AnimatedSection } from "./animation/MotionElements";

type LocationItem = { title: string; image: string; imageAlt: string };
type LocationShowcaseProps = { heading: string; items: LocationItem[]; buttonText: string; columns?: 3 | 4 };

export default function LocationShowcase({ heading, items, buttonText, columns = 3 }: LocationShowcaseProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">{heading}</h2>
        </div>
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((item, index) => (
            <div key={item.title} className={`overflow-hidden rounded-[10px] bg-white ${index === 0 ? "border border-teal-500 shadow-[0px_10px_20px_rgba(0,0,0,0.10)]" : ""}`}>
              <img src={item.image} alt={item.imageAlt} className="aspect-[1.38/1] w-full object-cover" />
              <div className={`px-5 py-5 text-center font-inter text-2xl font-semibold ${index === 0 ? "text-teal-500" : "text-sky-500"}`}>{item.title}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex rounded-[59px] bg-sky-500 px-7 py-2.5 font-manrope text-base leading-8 text-white">{buttonText}</a>
        </div>
      </div>
    </AnimatedSection>
  );
}
