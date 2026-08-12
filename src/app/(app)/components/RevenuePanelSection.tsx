import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type Props = {
  heading: string;
  description?: string;
  groups: RevenueGroup[];
  image: string;
  backgroundImage: string;
};

export type RevenueGroup = {
  title: string;
  intro: string[];
  items?: string[];
  footer?: string;
};

const desktopCardLayout = [
  "md:min-h-[27.375rem] md:w-full",
  "md:min-h-[25.625rem] md:w-full",
  "md:min-h-[23.75rem] md:w-full",
];


const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -70px 0px",
} as const;

const headingBlockVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -38,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08,
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.14,
      staggerChildren: 0.11,
    },
  },
};

const headingItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: smoothEase,
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.14,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.16,
      staggerChildren: 0.09,
    },
  },
};

const cardTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

const introContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -14,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },
};

const bulletVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: smoothEase,
    },
  },
};

const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

const decorativeBackgroundVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: smoothEase,
    },
  },
};

const foregroundImageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 85,
    y: 20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.18,
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

export default function RevenuePanelSection({
  heading,
  description,
  groups,
  image,
  backgroundImage,
}: Props) {
  return (
    <section className="mx-auto my-6 w-[calc(100%-2.5rem)] max-w-[97.5rem] overflow-hidden bg-[#171717] text-white sm:w-[calc(100%-4rem)] 2xl:relative 2xl:h-[calc(var(--rp-height)*var(--rp))] 2xl:[--rp:min(calc((100vw-4rem)/97.5rem),1)] 2xl:[--rp-height:49rem]">
      {/* One responsive layout: the same DOM is used at every breakpoint. */}
      <div className="relative px-[1.75rem] py-[2.5rem] sm:px-[3rem] sm:py-[3rem] 2xl:h-[var(--rp-height)] 2xl:w-[97.5rem] 2xl:origin-top-left 2xl:scale-[var(--rp)] 2xl:p-0">
        {/* Heading and cards */}
        <div className="relative z-[4] 2xl:absolute 2xl:left-[3.125rem] 2xl:top-[3.125rem] 2xl:w-[58.75rem]">
          <motion.div
            variants={headingBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="2xl:min-h-[7.75rem]"
          >
            <motion.h2
              variants={headingItemVariants}
              className="text-[2.125rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[2.75rem] md:text-[3rem] md:leading-[1.02] 2xl:w-[56.4375rem]"
            >
              {heading}
            </motion.h2>

            {description ? (
              <motion.p
                variants={headingItemVariants}
                className="mt-[1.75rem] max-w-[49rem] text-[1rem] leading-[1.55] text-white/85 sm:text-[1.125rem] 2xl:mt-[0.875rem] 2xl:w-[49.0625rem] 2xl:max-w-none"
              >
                {description}
              </motion.p>
            ) : null}
          </motion.div>

         <motion.div
  variants={cardsContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOptions}
  className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-3 2xl:mt-[1.75rem] 2xl:grid-cols-[repeat(3,18.75rem)] 2xl:items-end 2xl:gap-[1.25rem]"
>
  {groups.map((group, index) => (
    <motion.article
      key={`${group.title}-${index}`}
      variants={cardVariants}
      whileHover={{
        y: -7,
        transition: {
          duration: 0.22,
          ease: smoothEase,
        },
      }}
      className={`w-full overflow-hidden border-[0.0625rem] border-neutral-700 bg-[#171717] p-[1.5rem] md:h-auto md:min-w-0 md:self-end md:px-[1.25rem] md:pb-[1.5rem] md:pt-[1.875rem] ${
        desktopCardLayout[index] ?? "md:w-full"
      }`}
    >
      <RevenueCardContent group={group} />
    </motion.article>
  ))}
</motion.div>
        </div>

        {/* Decorative background and truck image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
            margin: "0px 0px -50px 0px",
          }}
          className="relative mt-[2.5rem] h-[18rem] w-full sm:h-[24rem] 2xl:absolute 2xl:left-[50.875rem] 2xl:top-[3.75rem] 2xl:z-[1] 2xl:mt-0 2xl:h-[33.6875rem] 2xl:w-[57.75rem]"
        >
          <motion.div
            variants={decorativeBackgroundVariants}
            className="absolute inset-0 2xl:inset-auto 2xl:left-0 2xl:top-0 2xl:h-[33.6875rem] 2xl:w-[46.652rem]"
          >
            <Image
              src={backgroundImage}
              alt=""
              fill
              sizes="(min-width: 768px) 46.652rem, 100vw"
              className="object-contain object-right-bottom md:object-right-top"
              unoptimized
            />
          </motion.div>

          <motion.div
            variants={foregroundImageVariants}
            className="absolute inset-0 z-[2] 2xl:inset-auto 2xl:left-[11rem] 2xl:top-[6.875rem] 2xl:h-[23.125rem] 2xl:w-[46.75rem]"
          >
            <Image
              src={image}
              alt="Dispatch revenue planning"
              fill
              sizes="(min-width: 768px) 46.75rem, 100vw"
              className="object-contain object-right-bottom md:object-left-bottom"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function RevenueCardContent({ group }: { group: RevenueGroup }) {
  return (
    <>
      <motion.h3
        variants={cardTitleVariants}
        className="text-[1.25rem] font-semibold leading-[1.3] md:text-[1.375rem] md:leading-[1.15]"
      >
        {group.title}
      </motion.h3>

      <motion.div
        variants={introContainerVariants}
        className="mt-[1.25rem] space-y-[0.5rem] text-[0.875rem] leading-[1.45] text-white/80 md:text-[1rem] md:leading-[1.25]"
      >
        {group.intro.map((paragraph, index) => (
          <motion.p key={`${paragraph}-${index}`} variants={paragraphVariants}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      {group.items?.length ? (
        <motion.ul
          variants={listVariants}
          className="mt-[1rem] space-y-[0.75rem] md:mt-[0.875rem] md:space-y-[0.625rem]"
        >
          {group.items.map((item, index) => (
            <motion.li
              key={`${item}-${index}`}
              variants={listItemVariants}
              className="flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.45] text-white/80 md:leading-[1.3]"
            >
              <motion.span
                variants={bulletVariants}
                aria-hidden="true"
                className="mt-[0.45rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]"
              />

              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      ) : null}

      {group.footer ? (
        <motion.p
          variants={footerVariants}
          className="mt-[1rem] text-[0.875rem] leading-[1.45] text-white/80 md:mt-[1.25rem] md:text-[1rem] md:leading-[1.25]"
        >
          {group.footer}
        </motion.p>
      ) : null}
    </>
  );
}
