import { AnimatedSection } from "./animation/MotionElements";

type SpecialtyDenialItem = {
  title: string;
  description: string;
  subheading: string;
  details: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
};

type SpecialtyDenialSectionsProps = {
  items: SpecialtyDenialItem[];
};

export default function SpecialtyDenialSections({
  items,
}: SpecialtyDenialSectionsProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] space-y-14 px-6 lg:space-y-20 lg:px-8 2xl:px-0">
        {items.map((item, index) => {
          const imageFirst = index % 2 === 1;

          return (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <h2 className="mb-5 font-inter text-3xl font-semibold leading-tight text-neutral-600 md:text-4xl lg:text-5xl">
                  {item.title}
                </h2>

                <p className="mb-6 whitespace-pre-line font-manrope text-lg font-normal leading-8 text-neutral-500">
                  {item.description}
                </p>

                <h3 className="mb-3 font-inter text-lg font-semibold leading-6 text-neutral-600">
                  {item.subheading}
                </h3>

                <p className="mb-6 whitespace-pre-line font-manrope text-lg font-normal leading-8 text-neutral-500">
                  {item.details}
                </p>

                <a
                  href={item.buttonHref}
                  className="inline-flex rounded-[44px] bg-sky-500 px-7 py-2.5 font-manrope text-base font-normal leading-8 text-white"
                >
                  {item.buttonText}
                </a>
              </div>

              <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
