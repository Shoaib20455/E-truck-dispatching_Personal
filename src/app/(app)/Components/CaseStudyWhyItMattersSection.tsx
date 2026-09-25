import Image from "next/image";

type CaseStudyWhyItMattersSectionProps = {
  heading: string;
  paragraphs: string[];
  servicesHeading: string;
  servicesDescription: string;
  image: string;
  imageAlt: string;
};

export default function CaseStudyWhyItMattersSection({
  heading,
  paragraphs,
  servicesHeading,
  servicesDescription,
  image,
  imageAlt,
}: CaseStudyWhyItMattersSectionProps) {
  return (
    <section className="w-full bg-cyan-50 pb-20 pt-12 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 2xl:px-0">
        <Image
          src={image}
          alt={imageAlt}
          width={672}
          height={665}
          className="h-auto w-full rounded-[20px] object-cover"
        />

        <div>
          <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
            {heading}
          </h2>

          <div className="mt-6 space-y-4 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-7 font-inter text-xl font-semibold leading-9 text-heading">
            {servicesHeading}
          </h3>
          <p className="mt-3 font-manrope text-base leading-9 text-neutral-500 md:text-lg">
            {servicesDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
