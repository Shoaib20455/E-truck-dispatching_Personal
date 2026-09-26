"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type TargetAndTransition,
  type Variants,
} from "motion/react";

const revealEase = [0.16, 1, 0.3, 1] as [number, number, number, number];
const softEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const defaultViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -8% 0px",
} as const;

export type RevealPreset =
  | "fade"
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "hero-left"
  | "hero-right"
  | "cta"
  | "card"
  | "logo"
  | "stat"
  | "step-left"
  | "step-right";

type PresetDefinition = {
  hidden: Record<string, number | string>;
  visible: Record<string, number | string>;
  duration: number;
  spring?: boolean;
};

const presets: Record<RevealPreset, PresetDefinition> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    duration: 0.55,
  },
  "fade-up": {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    duration: 0.72,
  },
  "slide-left": {
    hidden: { opacity: 0, x: -48, y: 10, filter: "blur(7px)" },
    visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    duration: 0.78,
  },
  "slide-right": {
    hidden: { opacity: 0, x: 48, y: 10, filter: "blur(7px)" },
    visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    duration: 0.78,
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94, y: 18, filter: "blur(6px)" },
    visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
    duration: 0.72,
    spring: true,
  },
  "hero-left": {
    hidden: { opacity: 0, x: -42, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    duration: 0.86,
  },
  "hero-right": {
    hidden: { opacity: 0, x: 52, y: 14, scale: 0.965, filter: "blur(9px)" },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
    duration: 0.9,
    spring: true,
  },
  cta: {
    hidden: { opacity: 0, y: 32, scale: 0.965, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    duration: 0.76,
    spring: true,
  },
  card: {
    hidden: { opacity: 0, y: 30, scale: 0.97, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    duration: 0.62,
    spring: true,
  },
  logo: {
    hidden: { opacity: 0, y: 16, scale: 0.9, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    duration: 0.48,
    spring: true,
  },
  stat: {
    hidden: { opacity: 0, y: 24, scale: 0.95, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    duration: 0.56,
    spring: true,
  },
  "step-left": {
    hidden: { opacity: 0, x: -36, y: 12, filter: "blur(5px)" },
    visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    duration: 0.6,
    spring: true,
  },
  "step-right": {
    hidden: { opacity: 0, x: 36, y: 12, filter: "blur(5px)" },
    visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    duration: 0.6,
    spring: true,
  },
};

function variantsFor(preset: RevealPreset, delay = 0): Variants {
  const definition = presets[preset];

  return {
    hidden: definition.hidden,
    visible: {
      ...definition.visible,
      transition: definition.spring
        ? {
            type: "spring",
            stiffness: 210,
            damping: 24,
            mass: 0.75,
            delay,
          }
        : {
            duration: definition.duration,
            delay,
            ease: revealEase,
          },
    },
  };
}

type Trigger = "view" | "mount";

type RevealOptions = {
  preset?: RevealPreset;
  delay?: number;
  trigger?: Trigger;
  amount?: number;
};

type BaseProps = RevealOptions & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

function triggerProps(trigger: Trigger, amount: number) {
  return trigger === "mount"
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { ...defaultViewport, amount },
      };
}

export function AnimatedSection({
  children,
  className,
  style,
  preset = "fade-up",
  delay = 0,
  trigger = "view",
  amount = defaultViewport.amount,
}: BaseProps) {
  return (
    <motion.section
      className={className}
      style={style}
      variants={variantsFor(preset, delay)}
      initial="hidden"
      {...triggerProps(trigger, amount)}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedDiv({
  children,
  className,
  style,
  preset = "fade-up",
  delay = 0,
  trigger = "view",
  amount = defaultViewport.amount,
}: BaseProps) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={variantsFor(preset, delay)}
      initial="hidden"
      {...triggerProps(trigger, amount)}
    >
      {children}
    </motion.div>
  );
}

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  level?: 1 | 2 | 3;
  trigger?: Trigger;
  delay?: number;
  stagger?: number;
};

export function AnimatedHeading({
  text,
  className,
  level = 2,
  trigger = "view",
  delay = 0,
  stagger = 0.045,
}: AnimatedHeadingProps) {
  const words = text.trim().split(/\s+/);
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };
  const word: Variants = {
    hidden: {
      opacity: 0,
      y: "115%",
      rotateX: -16,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.68,
        ease: revealEase,
      },
    },
  };

  const content = words.map((item, index) => (
    <span key={`${item}-${index}`}>
      <span className="inline-block overflow-hidden align-bottom">
        <motion.span
          className="inline-block origin-bottom will-change-transform"
          variants={word}
        >
          {item}
        </motion.span>
      </span>
      {index < words.length - 1 ? " " : null}
    </span>
  ));

  const props = {
    className,
    variants: container,
    initial: "hidden" as const,
    ...triggerProps(trigger, 0.15),
  };

  if (level === 1) {
    return <motion.h1 {...props}>{content}</motion.h1>;
  }

  if (level === 3) {
    return <motion.h3 {...props}>{content}</motion.h3>;
  }

  return <motion.h2 {...props}>{content}</motion.h2>;
}

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  trigger?: Trigger;
  delay?: number;
  amount?: number;
};

export function ImageReveal({
  children,
  className,
  trigger = "view",
  delay = 0,
  amount = 0.18,
}: ImageRevealProps) {
  const outerVariants: Variants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0 0 18% 0 round 20px)",
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0 round 20px)",
      transition: {
        duration: 0.9,
        delay,
        ease: revealEase,
      },
    },
  };

  const innerVariants: Variants = {
    hidden: {
      scale: 1.09,
      y: 18,
      filter: "blur(5px)",
    },
    visible: {
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.05,
        delay,
        ease: revealEase,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      variants={outerVariants}
      initial="hidden"
      {...triggerProps(trigger, amount)}
    >
      <motion.div variants={innerVariants} className="h-full w-full">
        {children}
      </motion.div>
    </motion.div>
  );
}

type ParallaxDivProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
};

export function ParallaxDiv({
  children,
  className,
  distance = 28,
}: ParallaxDivProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [distance, 0, -distance],
  );
  const y = useSpring(rawY, {
    stiffness: 120,
    damping: 24,
    mass: 0.45,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={shouldReduceMotion ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}

type HoverIconProps = {
  children: ReactNode;
  className?: string;
};

export function HoverIcon({ children, className }: HoverIconProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.1,
        rotate: -4,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 20,
        mass: 0.45,
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  trigger?: Trigger;
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.065,
  delayChildren = 0.06,
  amount = defaultViewport.amount,
  trigger = "view",
}: StaggerGroupProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      {...triggerProps(trigger, amount)}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  preset?: RevealPreset;
  hover?: "lift" | "soft" | "premium" | "none";
  layout?: boolean;
};

function hoverTarget(
  hover: StaggerItemProps["hover"],
): TargetAndTransition | undefined {
  if (hover === "premium") {
    return {
      y: -8,
      scale: 1.016,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 22,
        mass: 0.55,
      },
    };
  }

  if (hover === "lift") {
    return {
      y: -6,
      scale: 1.012,
      transition: {
        type: "spring",
        stiffness: 320,
        damping: 23,
        mass: 0.5,
      },
    };
  }

  if (hover === "soft") {
    return {
      scale: 1.035,
      transition: {
        duration: 0.22,
        ease: softEase,
      },
    };
  }

  return undefined;
}

export function StaggerItem({
  children,
  className,
  style,
  preset = "card",
  hover = "none",
  layout = false,
}: StaggerItemProps) {
  return (
    <motion.div
      layout={layout}
      className={className}
      style={style}
      variants={variantsFor(preset)}
      whileHover={hoverTarget(hover)}
      transition={
        layout
          ? {
              layout: {
                type: "spring",
                stiffness: 260,
                damping: 28,
              },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}

export function StaggerArticle({
  children,
  className,
  style,
  preset = "card",
  hover = "none",
  layout = false,
}: StaggerItemProps) {
  return (
    <motion.article
      layout={layout}
      className={className}
      style={style}
      variants={variantsFor(preset)}
      whileHover={hoverTarget(hover)}
      transition={
        layout
          ? {
              layout: {
                type: "spring",
                stiffness: 260,
                damping: 28,
              },
            }
          : undefined
      }
    >
      {children}
    </motion.article>
  );
}
