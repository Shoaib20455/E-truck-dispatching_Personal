import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export type ServiceShowcaseItem = {
  title: string;
  description: string;
  squareImage: string;
  wideImage: string;
};

type ServicesShowcaseProps = {
  services: ServiceShowcaseItem[];
};

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

export default function ServicesShowcase({
  services,
}: ServicesShowcaseProps) {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        ease,
      }}
      className="bg-[#1a1a1a] px-4 py-[0.6875rem] text-white sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[22.875rem] flex-col gap-[clamp(0.25rem,1.282vw,1.25rem)] lg:max-w-[97.5rem]">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;

          return (
            <motion.article
              key={`${service.title}-${index}`}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={viewport}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              className={`grid grid-cols-1 gap-3 lg:aspect-[1560/350] lg:gap-x-[1.282%] lg:gap-y-0 ${
                reversed
                  ? "lg:grid-cols-[51.795%_23.205%_22.436%]"
                  : "lg:grid-cols-[22.436%_23.205%_51.795%]"
              }`}
            >
              <ServiceImage
                src={service.squareImage}
                alt={`${service.title} specialist`}
                className={
                  reversed ? "order-3" : "order-1"
                }
                sizes="22.436vw"
                animationDirection={
                  reversed ? "right" : "left"
                }
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewport}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease,
                }}
                whileHover={{
                  y: -4,
                }}
                className="order-2 flex flex-col justify-center bg-[#161616] bg-[radial-gradient(ellipse_at_center,#272727_0%,#161616_80%)] px-5 py-6 sm:px-7 sm:py-8 lg:px-[clamp(0.5rem,3.205vw,3.125rem)] lg:py-[clamp(0.25rem,2.5vw,2.4375rem)]"
              >
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    delay: 0.22,
                    ease,
                  }}
                  className="font-['Outfit'] text-xl font-semibold leading-tight lg:text-[clamp(0.275rem,1.41vw,1.375rem)]"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease,
                  }}
                  className="mt-4 max-w-[16.5625rem] font-['DM_Sans'] text-base leading-[1.45] text-white/90 lg:mt-[clamp(0.2rem,1.282vw,1.25rem)] lg:text-[clamp(0.2rem,1.026vw,1rem)]"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    delay: 0.38,
                    ease,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.025,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-5 w-fit lg:mt-[clamp(0.2rem,1.538vw,1.5rem)]"
                >
                  <Link
                    href="#contact"
                    className="inline-flex min-h-11 w-fit items-center bg-[#b34b0c] px-5 py-1 font-['Outfit'] text-base font-medium hover:bg-[#d45c13] lg:min-h-[clamp(0.5rem,2.821vw,2.75rem)] lg:px-[clamp(0.3rem,1.282vw,1.25rem)] lg:text-[clamp(0.2rem,1.154vw,1.125rem)]"
                  >
                    Read More
                  </Link>
                </motion.div>
              </motion.div>

              <ServiceImage
                src={service.wideImage}
                alt={`${service.title} truck`}
                className={
                  reversed ? "order-1" : "order-3"
                }
                sizes="51.795vw"
                animationDirection={
                  reversed ? "left" : "right"
                }
              />
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}

type ServiceImageProps = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  animationDirection: "left" | "right";
};

function ServiceImage({
  src,
  alt,
  className,
  sizes,
  animationDirection,
}: ServiceImageProps) {
  const initialX =
    animationDirection === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={viewport}
      transition={{
        duration: 0.7,
        ease,
      }}
      whileHover={{
        scale: 1.015,
      }}
      className={`relative aspect-[16/10] min-h-0 overflow-hidden bg-[#161616] lg:aspect-auto ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
      />
    </motion.div>
  );
}
