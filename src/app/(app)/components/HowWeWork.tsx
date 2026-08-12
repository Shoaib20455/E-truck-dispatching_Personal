import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type WorkflowStep = {
  number?: string;
  title: string;
  description: string;
  includes?: string[];
  footer?: string;
};

type HowWeWorkProps = {
  heading?: ReactNode;
  image?: string;
  imageAlt?: string;
  backgroundImage?: string;
  steps?: WorkflowStep[];

  /**
   * Adds matching top and bottom background strips
   * without cropping the supplied background image.
   */
  blendBackgroundEdges?: boolean;
};

const defaultSteps: WorkflowStep[] = [
  {
    number: "1",
    title: "Onboarding and Dispatch Setup",
    description:
      "Your operating parameters are defined upfront — preferred lanes, home time schedule, equipment type, weight limits, and minimum rate per mile. These act as filters for every load sourced.",
  },
  {
    number: "2",
    title: "Dedicated Dispatcher Assignment",
    description:
      "A dispatcher is assigned with full context of your lanes, broker history, and rate expectations, creating continuity from day one.",
  },
  {
    number: "3",
    title: "Load Evaluation and Rate Negotiation",
    description:
      "Each load is assessed against real-time market data from platforms like DAT Solutions. Only freight meeting your approved rate floor and operational criteria is presented.",
  },
  {
    number: "4",
    title: "Load Monitoring and Documentation",
    description:
      "Your dispatcher monitors the load through delivery, coordinates broker updates, and organizes the required paperwork so each shipment moves through the workflow without avoidable delays.",
  },
  {
    number: "5",
    title: "Delivery Confirmation and Invoicing",
    description:
      "After delivery, the signed proof of delivery is reviewed with the rate confirmation and supporting documents before the completed invoice package is submitted for payment.",
  },
  {
    number: "6",
    title: "Performance Review and Route Planning",
    description:
      "Completed loads are reviewed against rate-per-mile targets, deadhead distance, preferred lanes, and scheduling requirements to improve the next load selection and maintain consistent operations.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const sectionViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -60px 0px",
} as const;

const cardViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -20px 0px",
} as const;

const contentVariants: Variants = {
  hidden: {
    x: 34,
    y: 18,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    y: 20,
    scale: 0.98,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease,
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
  hover: {
    y: -3,
    borderColor: "#B34B0C",
    transition: {
      duration: 0.22,
      ease,
    },
  },
};

const cardContentVariants: Variants = {
  hidden: {
    y: 12,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      ease,
    },
  },
};

const numberVariants: Variants = {
  hidden: {
    scale: 0.82,
    rotate: -5,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.48,
      ease,
    },
  },
  hover: {
    scale: 1.06,
    rotate: 2,
    transition: {
      duration: 0.2,
      ease,
    },
  },
};

export default function HowWeWork({
  heading = (
    <>
      How We Work
      <br />
      Our Dispatch Workflow
    </>
  ),
  image = "/Home/images/55_vector_5.webp",
  imageAlt = "Dispatcher handling freight boxes",
  backgroundImage = "/background-earthquake.png",
  steps = defaultSteps,
  blendBackgroundEdges = false,
}: HowWeWorkProps) {
  const hasDetailedSteps = steps.some((step) =>
    Boolean(step.includes?.length || step.footer),
  );

  return (
    <section
      className={`relative isolate overflow-hidden px-4 pb-14 pt-20 text-white sm:px-8 xl:px-[9.375vw] xl:pb-[clamp(2.5rem,3.125vw,3.75rem)] xl:pt-[clamp(5rem,7.03vw,8.4375rem)] [@media(min-width:1280px)_and_(max-width:1700px)]:pb-10 [@media(min-width:1280px)_and_(max-width:1700px)]:pt-20 ${
        blendBackgroundEdges
          ? "bg-[#1C1C1C] xl:min-h-[53.25rem] [@media(min-width:1280px)_and_(max-width:1700px)]:min-h-0"
          : "bg-[#161616]"
      }`}
    >
      {/* Background image */}
<div
  aria-hidden="true"
  className={`pointer-events-none absolute inset-x-0 z-0 overflow-hidden ${
    blendBackgroundEdges
      ? "bottom-12 top-12 sm:bottom-14 sm:top-14 xl:bottom-16 xl:top-16 [@media(min-width:1280px)_and_(max-width:1700px)]:bottom-0 [@media(min-width:1280px)_and_(max-width:1700px)]:top-10"
      : "inset-y-0"
  }`}
>
  <Image
    src={backgroundImage}
    alt=""
    fill
    priority
    sizes="100vw"
    aria-hidden="true"
    className="select-none object-fill"
  />
</div>

      <div className="relative z-10 mx-auto grid w-full max-w-[97.5rem] items-start gap-10 xl:grid-cols-[minmax(0,800fr)_minmax(0,729fr)] xl:gap-[clamp(1.125rem,1.615vw,1.9375rem)] [@media(min-width:1280px)_and_(max-width:1700px)]:gap-6">
        {/* Left illustration */}
        <motion.div
          initial={{
            x: -42,
            y: 24,
            scale: 0.97,
          }}
          whileInView={{
            x: 0,
            y: 0,
            scale: 1,
          }}
          viewport={sectionViewport}
          transition={{
            duration: 0.8,
            ease,
          }}
          className={`relative min-h-[20rem] sm:min-h-[26.875rem] xl:aspect-[800/742] xl:min-h-0 [@media(min-width:1280px)_and_(max-width:1700px)]:w-[90%] [@media(min-width:1280px)_and_(max-width:1700px)]:justify-self-start ${
            blendBackgroundEdges
              ? "xl:mt-0"
              : "xl:-mt-[clamp(3rem,4.17vw,5rem)]"
          }`}
        >
          {/* Orange E decoration */}
          <motion.div
            initial={{
              x: -48,
              scale: 0.94,
            }}
            whileInView={{
              x: 0,
              scale: 1,
            }}
            viewport={sectionViewport}
            transition={{
              duration: 0.85,
              ease,
            }}
            className="absolute left-0 top-0 h-[72.64%] w-[93.375%] xl:-left-[9.375vw]"
          >
            <Image
              src="/Vector 1.svg"
              alt=""
              fill
              unoptimized
              aria-hidden="true"
              sizes="(max-width: 1279px) 93vw, 39vw"
              className="object-fill"
            />
          </motion.div>

          {/* Foreground person */}
          <motion.div
            initial={{
              x: -20,
              y: 34,
              scale: 0.96,
            }}
            whileInView={{
              x: 0,
              y: 0,
              scale: 1,
            }}
            whileHover={{
              y: -5,
              scale: 1.015,
            }}
            viewport={sectionViewport}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease,
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 -translate-y-2 sm:-translate-y-3 xl:-translate-y-4 [@media(min-width:1280px)_and_(max-width:1700px)]:translate-y-1">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1279px) 100vw, 42vw"
                className="object-contain object-left-bottom"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right workflow content */}
        <div className="relative min-w-0">
          <motion.h2
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="max-w-[42rem] font-sans text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.375rem] xl:text-[clamp(2.125rem,2.5vw,3rem)] [@media(min-width:1280px)_and_(max-width:1700px)]:max-w-[38rem]"
          >
            {heading}
          </motion.h2>

          <div data-lenis-prevent className="mt-10 max-h-[28rem] w-full space-y-[clamp(0.75rem,1.04vw,1.25rem)] overflow-x-hidden overflow-y-auto overscroll-contain pr-[9.5%] [scrollbar-color:#B34B0C_#3F3F3F] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#B34B0C] [&::-webkit-scrollbar-track]:bg-[#3F3F3F] [&::-webkit-scrollbar]:w-[0.5625rem] xl:mt-[clamp(2.375rem,2.86vw,3.4375rem)] xl:max-h-[31.625rem] [@media(min-width:1280px)_and_(max-width:1700px)]:mt-6 [@media(min-width:1280px)_and_(max-width:1700px)]:max-h-[23.5rem] [@media(min-width:1280px)_and_(max-width:1700px)]:space-y-3 [@media(min-width:1280px)_and_(max-width:1700px)]:pr-5">
            {steps.map((step, index) => (
              <WorkflowCard
                key={`${step.title}-${index}`}
                step={step}
                index={index}
                detailed={hasDetailedSteps}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowCard({
  step,
  index,
  detailed,
}: {
  step: WorkflowStep;
  index: number;
  detailed: boolean;
}) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={cardViewport}
      transition={{
        delay: Math.min(index * 0.05, 0.25),
      }}
      className={`grid w-full min-w-0 min-h-[7.5rem] grid-cols-[4rem_minmax(0,1fr)] border border-[#3F3F3F] bg-[#1C1C1C] p-3 min-[23.4375rem]:grid-cols-[5.625rem_minmax(0,1fr)] sm:grid-cols-[6.875rem_minmax(0,1fr)] xl:grid-cols-[16.67%_minmax(0,1fr)] xl:p-[3%] [@media(min-width:1280px)_and_(max-width:1700px)]:p-[2.25%] ${
        detailed
          ? ""
          : index === 0
            ? "xl:min-h-[10rem] [@media(min-width:1280px)_and_(max-width:1700px)]:min-h-[7.75rem]"
            : "xl:aspect-[660/151] xl:min-h-0 [@media(min-width:1280px)_and_(max-width:1700px)]:aspect-auto [@media(min-width:1280px)_and_(max-width:1700px)]:min-h-[7rem]"
      }`}
    >
      <motion.div
        variants={numberVariants}
        className="flex aspect-square min-w-0 items-center justify-center self-center bg-[#B34B0C]/10"
      >
        <span className="font-sans text-[clamp(2.625rem,4.11vw,4.9375rem)] font-bold leading-none text-[#B34B0C]">
          {step.number ?? index + 1}
        </span>
      </motion.div>

      <motion.div
        variants={cardContentVariants}
        className="flex min-w-0 flex-col justify-center py-1 pl-[3%]"
      >
        <h3 className="break-words font-sans text-[clamp(0.875rem,1.15vw,1.375rem)] font-semibold leading-tight text-[#B34B0C]">
          {step.title}
        </h3>

        <p className="mt-[2%] max-w-[31.0625rem] break-words font-sans text-[clamp(0.625rem,0.84vw,1rem)] leading-[1.4] text-white/90">
          {step.description}
        </p>
      </motion.div>
    </motion.article>
  );
}