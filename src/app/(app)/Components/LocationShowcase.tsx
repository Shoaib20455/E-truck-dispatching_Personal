import Image from "next/image";
import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type LocationItem = { title: string; image: string; imageAlt: string };
type LocationShowcaseProps = { heading: string; items: LocationItem[]; buttonText: string; columns?: 3 | 4 };

export default function LocationShowcase({ heading, items, buttonText, columns = 3 }: LocationShowcaseProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <AnimatedHeading text={heading} className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl" />
        </div>
        <StaggerGroup stagger={0.07} className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((item, index) => (
            <StaggerItem key={item.title} preset="card" hover="premium" className={`overflow-hidden rounded-[10px] bg-white ${index === 0 ? "border border-teal-500 shadow-[0px_10px_20px_rgba(0,0,0,0.10)]" : ""}`}>
              <Image src={item.image} alt={item.imageAlt} width={700} height={507} sizes={columns === 4 ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"} className="aspect-[1.38/1] w-full object-cover" />
              <div className={`px-5 py-5 text-center font-inter text-2xl font-semibold ${index === 0 ? "text-teal-500" : "text-sky-500"}`}>{item.title}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex rounded-[59px] bg-sky-500 px-7 py-2.5 font-manrope text-base leading-8 text-white">{buttonText}</a>
        </div>
      </div>
    </AnimatedSection>
  );
}
