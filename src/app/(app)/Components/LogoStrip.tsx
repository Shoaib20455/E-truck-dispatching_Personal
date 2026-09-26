import { AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type LogoStripItem = {
  image: string;
  alt: string;
};

type LogoStripProps = {
  logos: LogoStripItem[];
};

export default function LogoStrip({ logos }: LogoStripProps) {
  return (
    <AnimatedSection preset="fade" className="w-full bg-cyan-50 py-8 lg:py-10">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <StaggerGroup stagger={0.05} className="flex flex-wrap items-center justify-center gap-4">
          {logos.map((logo) => (
            <StaggerItem key={logo.alt} preset="logo" hover="soft" className="flex min-h-16 min-w-[150px] items-center justify-center rounded-[10px] bg-teal-500/10 px-6 py-3">
              <img
                src={logo.image}
                alt={logo.alt}
                className="max-h-10 max-w-[170px] object-contain"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
