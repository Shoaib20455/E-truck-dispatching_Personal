import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type Audience = {
  title: string;
  image: string;
};

type Props = {
  audiences?: Audience[];
  heading?: ReactNode;
  benefits?: string[];
  showAudiences?: boolean;
  variant?: "default" | "audiences-only";
  headingWidth?: "default" | "wide";
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Shared heading animation
|--------------------------------------------------------------------------
*/

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Audience grid
|--------------------------------------------------------------------------
*/

const audiencesGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const audienceCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

const audienceImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const audienceTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Benefits grid
|--------------------------------------------------------------------------
*/

const benefitsGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const benefitCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.52,
      ease: smoothEase,
    },
  },
};

export default function AudienceBenefitsSection({
  audiences = [],
  heading,
  benefits = [],
  showAudiences = true,
  variant = "default",
  headingWidth = "default",
}: Props) {
  const hasAudiences = showAudiences && audiences.length > 0;
  const isAudiencesOnly = variant === "audiences-only";

  const hasHeading =
    typeof heading === "string"
      ? heading.trim().length > 0
      : heading !== null && heading !== undefined && heading !== false;

  const defaultHeadingWidthClass =
    headingWidth === "wide" ? "max-w-[60rem]" : "max-w-[42rem]";

  const audiencesOnlyHeadingWidthClass =
    headingWidth === "wide" ? "max-w-[60rem]" : "max-w-[30rem]";

  /*
  |--------------------------------------------------------------------------
  | Audiences-only variant
  |--------------------------------------------------------------------------
  */

  if (isAudiencesOnly) {
    return (
      <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-16 text-white sm:w-[calc(100%-64px)] lg:py-20">
        {hasHeading ? (
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.6,
              margin: "0px 0px -50px 0px",
            }}
            className={`${audiencesOnlyHeadingWidthClass} mx-auto text-center font-['Outfit'] text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]`}
          >
            {heading}
          </motion.h2>
        ) : null}

        {hasAudiences ? (
          <motion.div
            variants={audiencesGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className={`grid gap-5 sm:grid-cols-2 xl:grid-cols-4 ${
              hasHeading ? "mt-12" : ""
            }`}
          >
            {audiences.map(({ title, image }, index) => (
              <motion.article
                key={`${title}-${index}`}
                variants={audienceCardVariants}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.2,
                    ease: smoothEase,
                  },
                }}
                className="overflow-hidden bg-[#171717]"
              >
                <motion.div
                  variants={audienceImageVariants}
                  className="relative h-[13rem] sm:h-[14rem]"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain object-center"
                  />
                </motion.div>

                <motion.h3
                  variants={audienceTitleVariants}
                  className="px-5 pb-5 pt-2 font-['Outfit'] text-base font-semibold leading-[1.3] text-white sm:text-lg"
                >
                  {title}
                </motion.h3>
              </motion.article>
            ))}
          </motion.div>
        ) : null}
      </section>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Default variant
  |--------------------------------------------------------------------------
  */

  return (
    <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-20 sm:w-[calc(100%-64px)]">
      {hasAudiences ? (
        <motion.div
          variants={audiencesGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {audiences.map(({ title, image }, index) => (
            <motion.article
              key={`${title}-${index}`}
              variants={audienceCardVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                  ease: smoothEase,
                },
              }}
              className="overflow-hidden bg-[#171717] pt-4"
            >
              <motion.div
                variants={audienceImageVariants}
                className="relative h-56"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="320px"
                  className="object-contain"
                />
              </motion.div>

              <motion.h3
                variants={audienceTitleVariants}
                className="p-5 pt-3 text-xl font-semibold"
              >
                {title}
              </motion.h3>
            </motion.article>
          ))}
        </motion.div>
      ) : null}

      {hasHeading ? (
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.6,
            margin: "0px 0px -50px 0px",
          }}
          className={`${
            hasAudiences ? "mt-20" : ""
          } ${defaultHeadingWidthClass} mx-auto text-center font-['Outfit'] text-4xl font-bold leading-[1.15] text-white sm:text-5xl`}
        >
          {heading}
        </motion.h2>
      ) : null}

      {benefits.length > 0 ? (
        <motion.div
          variants={benefitsGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className={`grid gap-7 sm:grid-cols-2 lg:grid-cols-5 ${
            hasHeading ? "mt-12" : hasAudiences ? "mt-20" : ""
          }`}
        >
          {benefits.map((reason, index) => (
            <motion.p
              key={`${reason}-${index}`}
              variants={benefitCardVariants}
              whileHover={{
                y: -4,
                scale: 1.01,
                transition: {
                  duration: 0.2,
                  ease: smoothEase,
                },
              }}
              className="flex min-h-36 items-center justify-center bg-[#171717] p-6 text-center text-lg"
            >
              {reason}
            </motion.p>
          ))}
        </motion.div>
      ) : null}
    </section>
  );
}