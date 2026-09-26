import Image from "next/image";
import AppLink from "./navigation/AppLink";
import { AnimatedSection } from "./animation/MotionElements";

type CertificationCTAProps = {
  heading: string;
  description: string;

  backgroundImage: string;

  certificationImage: string;
  certificationImageAlt: string;

  buttonText: string;
  buttonHref: string;
};

export default function CertificationCTA({
  heading,
  description,
  backgroundImage,
  certificationImage,
  certificationImageAlt,
  buttonText,
  buttonHref,
}: CertificationCTAProps) {
  return (
    <AnimatedSection preset="cta" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className="w-full overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        >
          <div className="w-full bg-gradient-to-b from-teal-500/90 to-teal-950/95 px-8 py-10 md:px-12 lg:px-16 lg:py-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

              {/* LEFT */}
              <div className="text-white">
                <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                  {heading}
                </h2>

                <p className="mb-7 font-manrope text-lg font-normal leading-8 md:text-xl lg:text-2xl">
                  {description}
                </p>

                <AppLink
                  href={buttonHref}
                  className="inline-flex rounded-[58px] bg-sky-500 px-7 py-2.5 font-manrope text-lg font-normal leading-8 text-white"
                >
                  {buttonText}
                </AppLink>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center lg:justify-end">
                <Image src={certificationImage} alt={certificationImageAlt} width={900} height={650} sizes="(min-width: 1024px) 40vw, 100vw" className="h-auto w-full max-w-[603px] object-contain" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}