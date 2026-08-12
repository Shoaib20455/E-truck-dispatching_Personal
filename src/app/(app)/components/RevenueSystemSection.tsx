import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type RevenueSystemCard = {
  title: string;
  description: string;
  iconSrc?: string;
  imageSrc?: string;
  logoSrc?: string;
  iconAlt?: string;
  imageAlt?: string;
  logoAlt?: string;
};

type RevenueSystemCta = {
  heading: ReactNode;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
  backgroundAlt?: string;
};

type RevenueSystemSectionProps = {
  cards: RevenueSystemCard[];
  cta: RevenueSystemCta;
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
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease,
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const cardIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.65,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.45,
      ease,
    },
  },
};

const cardContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease,
    },
  },
};

const ctaContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.2,
    },
  },
};

const ctaItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

export default function RevenueSystemSection({
  cards,
  cta,
}: RevenueSystemSectionProps) {
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
        duration: 0.45,
        ease,
      }}
      className="bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[97.5rem] gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
        {/*
          The CTA remains first in the DOM so its H2 appears before
          the card H3 elements. Grid placement keeps it on the right
          side on desktop.
        */}
        <motion.article
          initial={{
            opacity: 0,
            x: 48,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={viewport}
          transition={{
            duration: 0.75,
            ease,
          }}
          whileHover={{
            y: -4,
            transition: {
              duration: 0.25,
              ease,
            },
          }}
          className="group/revenue-cta relative flex min-h-[26rem] overflow-hidden bg-[#171717] p-8 sm:min-h-[28.25rem] sm:p-10 lg:col-start-2 lg:row-start-1 lg:min-h-full lg:p-10 xl:p-12"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[-35%] z-20 w-[22%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#b34b0c]/30 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover/revenue-cta:left-[115%] group-hover/revenue-cta:opacity-100"
          />

          {cta.backgroundImage ? (
            <motion.div
              initial={{
                scale: 1.07,
                opacity: 0.65,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={viewport}
              transition={{
                duration: 1.1,
                ease,
              }}
              className="pointer-events-none absolute inset-0 transition-transform duration-700 group-hover/revenue-cta:scale-[1.025]"
            >
              <Image
                src={cta.backgroundImage}
                alt={cta.backgroundAlt || ""}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </motion.div>
          ) : null}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#171717]/70 via-[#171717]/55 to-[#171717]/20" />

          <motion.div
            variants={ctaContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative z-10 my-auto max-w-[32rem]"
          >
            <motion.h2
              variants={ctaItemVariants}
              className="font-['Outfit'] text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.5rem]"
            >
              {cta.heading}
            </motion.h2>

            <motion.p
              variants={ctaItemVariants}
              className="mt-6 max-w-[31rem] font-['DM_Sans'] text-base leading-[1.55] text-white/85"
            >
              {cta.description}
            </motion.p>

            <motion.div
              variants={ctaItemVariants}
              whileHover={{
                y: -3,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-7 w-fit"
            >
              <Link
                href={cta.buttonHref}
                className="inline-flex h-10 items-center justify-center bg-[#b34b0c] px-5 font-['Outfit'] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#cf5a13]"
              >
                {cta.buttonText}
              </Link>
            </motion.div>
          </motion.div>
        </motion.article>

        {/*
          Cards remain after the CTA in the DOM, but appear on
          the left side of the desktop layout.
        */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-5 sm:grid-cols-2 lg:col-start-1 lg:row-start-1 lg:h-full"
        >
          {cards.map((card, index) => {
            const iconPath =
              card.iconSrc || card.imageSrc || card.logoSrc || "";

            const iconAlt =
              card.iconAlt ||
              card.imageAlt ||
              card.logoAlt ||
              `${card.title} icon`;

            return (
              <motion.article
                key={`${card.title}-${index}`}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                    ease,
                  },
                }}
                className="group/revenue-card relative min-h-[13.5rem] overflow-hidden bg-[#171717] p-5 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#b34b0c] transition-transform duration-300 group-hover/revenue-card:scale-x-100"
                />

                <motion.span
                  variants={cardIconVariants}
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  transition={{
                    duration: 0.22,
                    ease,
                  }}
                  className="flex h-11 w-11 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]"
                >
                  {iconPath ? (
                    <Image
                      src={iconPath}
                      alt={iconAlt}
                      width={32}
                      height={32}
                      className="h-6 w-6 object-contain"
                    />
                  ) : (
                    <span className="text-2xl">✓</span>
                  )}
                </motion.span>

                <motion.h3
                  variants={cardContentVariants}
                  className="mt-5 min-h-[2.75rem] font-['Outfit'] text-lg font-semibold leading-[1.25] text-white"
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  variants={cardContentVariants}
                  className="mt-4 font-['DM_Sans'] text-sm leading-[1.55] text-white/75"
                >
                  {card.description}
                </motion.p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}