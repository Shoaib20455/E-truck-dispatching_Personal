import Image from "next/image";
import { AnimatedDiv, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type AlternatingServiceItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  footerText?: string;
};

type AlternatingServiceSectionsProps = {
  items: AlternatingServiceItem[];
};

export default function AlternatingServiceSections({
  items,
}: AlternatingServiceSectionsProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] space-y-14 px-6 lg:space-y-20 lg:px-8 2xl:px-0">
        {items.map((item, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <AnimatedDiv key={item.title} preset={imageFirst ? "slide-left" : "slide-right"} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                <Image src={item.image} alt={item.imageAlt} width={900} height={650} sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full rounded-[20px] object-cover shadow-[0px_10px_20px_rgba(0,0,0,0.10)]" />
              </div>

              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <h2 className="mb-4 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl lg:text-4xl">
                  {item.title}
                </h2>

                <p className="mb-6 font-manrope text-lg leading-8 text-neutral-500">
                  {item.description}
                </p>

                <StaggerGroup stagger={0.06} className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <StaggerItem key={bullet} preset="step-left" className="flex items-start gap-3 font-manrope text-base font-semibold leading-7 text-heading">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-sky-500" />
                      <span>{bullet}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>

                {item.footerText && (
                  <p className="mt-6 font-manrope text-lg leading-8 text-zinc-700">
                    {item.footerText}
                  </p>
                )}
              </div>
            </AnimatedDiv>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
