import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type SpecialtyDirectoryItem = {
  title: string;
  icon: string;
  iconAlt: string;
  highlighted?: boolean;
};

type SpecialtyDirectoryProps = {
  heading: string;
  specialties: SpecialtyDirectoryItem[];
};

export default function SpecialtyDirectory({
  heading,
  specialties,
}: SpecialtyDirectoryProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        <StaggerGroup stagger={0.065} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty) => (
            <StaggerItem
              key={specialty.title}
              preset="card"
              hover="premium"
              className={`flex min-h-44 flex-col items-center justify-center rounded-[10px] px-5 py-6 text-center shadow-[0px_10px_20px_rgba(0,0,0,0.07)] ${
                specialty.highlighted ? "bg-sky-500" : "bg-white"
              }`}
            >
              <img
                src={specialty.icon}
                alt={specialty.iconAlt}
                className={`mb-4 size-20 object-contain ${
                  specialty.highlighted ? "brightness-0 invert" : ""
                }`}
              />
              <h3
                className={`font-inter text-xl font-semibold leading-7 ${
                  specialty.highlighted ? "text-white" : "text-heading"
                }`}
              >
                {specialty.title}
              </h3>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
