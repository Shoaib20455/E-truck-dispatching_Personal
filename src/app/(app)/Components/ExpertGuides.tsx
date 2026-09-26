import Image from "next/image";
import AppLink from "./navigation/AppLink";
import { AnimatedSection, StaggerGroup, StaggerArticle } from "./animation/MotionElements";

type GuideItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

type ExpertGuidesProps = {
  heading: string;
  guides: GuideItem[];
  headingAlign?: "left" | "center";
  background?: "default" | "soft";
};

export default function ExpertGuides({
  heading,
  guides,
  headingAlign = "center",
  background = "default",
}: ExpertGuidesProps) {
  return (
    <AnimatedSection preset="fade-up"
      className={`w-full py-14 lg:py-20 ${
        background === "soft" ? "bg-accent/10" : "bg-cyan-50"
      }`}
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className={`mb-12 ${
            headingAlign === "center"
              ? "mx-auto max-w-4xl text-center"
              : "max-w-none text-left"
          }`}
        >
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <StaggerGroup stagger={0.08} className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <StaggerArticle key={`${guide.title}-${guide.image}`} preset="card" hover="lift" className="overflow-hidden rounded-[30px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.08)]">
              <Image src={guide.image} alt={guide.imageAlt} width={800} height={457} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="aspect-[1.75/1] w-full object-cover" />

              <div className="px-8 py-6">
                <h3 className="mb-5 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                  {guide.href ? (
                    <AppLink href={guide.href}>{guide.title}</AppLink>
                  ) : (
                    guide.title
                  )}
                </h3>

                <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                  {guide.description}
                </p>
              </div>
            </StaggerArticle>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
