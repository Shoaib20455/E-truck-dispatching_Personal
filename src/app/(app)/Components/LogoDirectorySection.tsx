import { AnimatedSection } from "./animation/MotionElements";

type LogoItem = {
  image: string;
  alt: string;
};

type LogoDirectorySectionProps = {
  heading: string;
  logos: LogoItem[];
};

export default function LogoDirectorySection({
  heading,
  logos,
}: LogoDirectorySectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-10 lg:py-14">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <h2 className="mb-10 text-center font-inter text-3xl font-semibold leading-tight text-zinc-700 md:text-4xl lg:text-5xl">
          {heading}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {logos.map((logo, index) => (
            <div
              key={`${logo.image}-${index}`}
              className="flex min-h-20 items-center justify-center rounded-[10px] border border-sky-500 bg-white px-4 py-3 shadow-[0px_10px_20px_rgba(0,0,0,0.08)]"
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
