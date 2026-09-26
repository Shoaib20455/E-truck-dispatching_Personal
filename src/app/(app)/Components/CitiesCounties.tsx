import Image from "next/image";
import { AnimatedHeading, AnimatedSection, ImageReveal, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type LocationList = {
  title: string;
  icon: string;
  iconAlt: string;
  items: string[];
};

type CitiesCountiesProps = {
  heading: string;

  leftList: LocationList;
  rightList: LocationList;

  mapImage: string;
  mapAlt: string;
};

export default function CitiesCounties({
  heading,
  leftList,
  rightList,
  mapImage,
  mapAlt,
}: CitiesCountiesProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          
          {/* LEFT LIST */}
          <StaggerGroup stagger={0.07}><StaggerItem preset="slide-left" hover="soft"><LocationCard {...leftList} /></StaggerItem></StaggerGroup>

          {/* MAP */}
          <ImageReveal className="flex items-center justify-center overflow-hidden rounded-[20px] bg-teal-100">
            <Image src={mapImage} alt={mapAlt} width={800} height={700} sizes="(min-width: 1024px) 34vw, 100vw" className="h-auto w-full object-contain" />
          </ImageReveal>

          {/* RIGHT LIST */}
          <StaggerGroup stagger={0.07}><StaggerItem preset="slide-right" hover="soft"><LocationCard {...rightList} bordered /></StaggerItem></StaggerGroup>
        </div>
      </div>
    </AnimatedSection>
  );
}

function LocationCard({
  title,
  icon,
  iconAlt,
  items,
  bordered = false,
}: LocationList & {
  bordered?: boolean;
}) {
  return (
    <div
      className={`rounded-[20px] bg-white p-6 ${
        bordered ? "border border-neutral-200" : ""
      }`}
    >
      <div className="mb-4 flex items-center gap-5">
        <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-sky-500">
          <img
            src={icon}
            alt={iconAlt}
            className="size-16 object-contain"
          />
        </div>

        <h3 className="font-inter text-2xl font-semibold text-heading md:text-3xl">
          {title}
        </h3>
      </div>

      <div className="divide-y divide-neutral-200">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="py-4 font-inter text-xl font-semibold text-sky-500 last:pb-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}