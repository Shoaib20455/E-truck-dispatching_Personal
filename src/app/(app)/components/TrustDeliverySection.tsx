import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type TrustDeliveryCard = {
  text: ReactNode;
  image: string;
  imageAlt?: string;
};

type TrustDeliverySectionProps = {
  heading: ReactNode;
  cards: TrustDeliveryCard[];
};

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -70px 0px",
} as const;

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.975,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease,
      staggerChildren: 0.09,
      delayChildren: 0.18,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0.7,
    scale: 1.12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease,
    },
  },
  hover: {
    scale: 1.065,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

const accentVariants: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

export default function TrustDeliverySection({
  heading,
  cards,
}: TrustDeliverySectionProps) {
  if (!cards || cards.length === 0) {
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
        duration: 0.5,
        ease,
      }}
      className="overflow-hidden bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[97.5rem]">
        <motion.h2
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mx-auto max-w-[46rem] text-center font-['Outfit'] text-3xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]"
        >
          {heading}
        </motion.h2>

        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {cards.map((card, index) => (
            <motion.article
              key={`${card.image}-${index}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={viewport}
              className="group/trust-card relative min-h-[22rem] overflow-hidden border border-white/[0.06] bg-[#171717] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(0,0,0,0.35)]"
            >
              <motion.div
                variants={imageVariants}
                className="absolute inset-0"
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt || "Dispatch support image"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10 transition-colors duration-500 group-hover/trust-card:from-black group-hover/trust-card:via-black/50" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#b34b0c]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/trust-card:opacity-100" />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-[-45%] z-10 w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-[1px] transition-all duration-700 ease-out group-hover/trust-card:left-[120%] group-hover/trust-card:opacity-100"
              />

              <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-7 sm:px-6 sm:pb-8">
                <motion.span
                  variants={accentVariants}
                  aria-hidden="true"
                  className="mb-4 block h-[3px] w-10 origin-left bg-[#b34b0c] transition-[width] duration-300 group-hover/trust-card:w-16"
                />

                <motion.p
                  variants={textVariants}
                  className="min-h-[3.25rem] max-w-[17rem] font-['Outfit'] text-[1rem] font-semibold leading-[1.3] text-white sm:text-[1.125rem]"
                >
                  {card.text}
                </motion.p>
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px origin-left scale-x-0 bg-[#b34b0c] transition-transform duration-500 group-hover/trust-card:scale-x-100"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}