import { AnimatedSection } from "./animation/MotionElements";

type RegionItem = { title: string; description: string };
type StateRegionsProps = {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  regions: RegionItem[];
};

export default function StateRegions({ heading, description, image, imageAlt, regions }: StateRegionsProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <img src={image} alt={imageAlt} className="w-full rounded-[20px] object-cover shadow-[0px_10px_20px_rgba(0,0,0,0.08)]" />
          <div>
            <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">{heading}</h2>
            <p className="mb-7 font-manrope text-lg leading-8 text-neutral-500">{description}</p>
            <div className="space-y-5">
              {regions.map((region) => (
                <div key={region.title}>
                  <h3 className="font-inter text-xl font-semibold text-heading">{region.title}</h3>
                  <p className="font-manrope text-base leading-8 text-neutral-500">{region.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
