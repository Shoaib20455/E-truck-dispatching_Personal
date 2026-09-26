"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

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
  hidden: Record<string, number>;
  visible: Record<string, number>;
  duration: number;
};

const presets: Record<RevealPreset, PresetDefinition> = {
  fade: {
    hidden: { opacity: 0.35 },
    visible: { opacity: 1 },
    duration: 0.5,
  },
  "fade-up": {
    hidden: { opacity: 0.25, y: 24 },
    visible: { opacity: 1, y: 0 },
    duration: 0.58,
  },
  "slide-left": {
    hidden: { opacity: 0.25, x: -34, y: 8 },
    visible: { opacity: 1, x: 0, y: 0 },
    duration: 0.68,
  },
  "slide-right": {
    hidden: { opacity: 0.25, x: 34, y: 8 },
    visible: { opacity: 1, x: 0, y: 0 },
    duration: 0.68,
  },
  scale: {
    hidden: { opacity: 0.3, scale: 0.97, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0 },
    duration: 0.62,
  },
  "hero-left": {
    hidden: { opacity: 0, x: -26, y: 24 },
    visible: { opacity: 1, x: 0, y: 0 },
    duration: 0.72,
  },
  "hero-right": {
    hidden: { opacity: 0, x: 28, scale: 0.985 },
    visible: { opacity: 1, x: 0, scale: 1 },
    duration: 0.76,
  },
  cta: {
    hidden: { opacity: 0.25, y: 20, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
    duration: 0.62,
  },
  card: {
    hidden: { opacity: 0.25, y: 24, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
    duration: 0.54,
  },
  logo: {
    hidden: { opacity: 0.25, y: 12, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    duration: 0.42,
  },
  stat: {
    hidden: { opacity: 0.25, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    duration: 0.5,
  },
  "step-left": {
    hidden: { opacity: 0.2, x: -28, y: 10 },
    visible: { opacity: 1, x: 0, y: 0 },
    duration: 0.52,
  },
  "step-right": {
    hidden: { opacity: 0.2, x: 28, y: 10 },
    visible: { opacity: 1, x: 0, y: 0 },
    duration: 0.52,
  },
};

function variantsFor(preset: RevealPreset, delay = 0): Variants {
  const definition = presets[preset];

  return {
    hidden: definition.hidden,
    visible: {
      ...definition.visible,
      transition: {
        duration: definition.duration,
        delay,
        ease: easeOut,
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

export function AnimatedSection({
  children,
  className,
  style,
  preset = "fade-up",
  delay = 0,
  trigger = "view",
  amount = defaultViewport.amount,
}: BaseProps) {
  const variants = variantsFor(preset, delay);
  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { ...defaultViewport, amount },
        };

  return (
    <motion.section
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      {...triggerProps}
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
  const variants = variantsFor(preset, delay);
  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { ...defaultViewport, amount },
        };

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      {...triggerProps}
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
  stagger = 0.07,
  delayChildren = 0.05,
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

  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { ...defaultViewport, amount },
        };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      {...triggerProps}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  preset?: RevealPreset;
  hover?: "lift" | "soft" | "none";
};

function hoverTarget(hover: StaggerItemProps["hover"]) {
  if (hover === "lift") {
    return {
      y: -5,
      scale: 1.01,
      transition: { duration: 0.2, ease: easeOut },
    };
  }

  if (hover === "soft") {
    return {
      scale: 1.025,
      transition: { duration: 0.2, ease: easeOut },
    };
  }

  return undefined;
}

export function StaggerItem({
  children,
  className,
  preset = "card",
  hover = "none",
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={variantsFor(preset)}
      whileHover={hoverTarget(hover)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerArticle({
  children,
  className,
  preset = "card",
  hover = "none",
}: StaggerItemProps) {
  return (
    <motion.article
      className={className}
      variants={variantsFor(preset)}
      whileHover={hoverTarget(hover)}
    >
      {children}
    </motion.article>
  );
}
