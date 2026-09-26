"use client";

import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

import HoneypotField from "./HoneypotField";
import { useEmailForm } from "./useEmailForm";

type VisionFormSectionProps = {
  heading: ReactNode;
  paragraphs: string[];
  fields: string[][];
  id?: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Whole section
|--------------------------------------------------------------------------
*/

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Left-side content
|--------------------------------------------------------------------------
*/

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.1,
      staggerChildren: 0.11,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Form and fields
|--------------------------------------------------------------------------
*/

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.18,
      staggerChildren: 0.07,
    },
  },
};

const fieldVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
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

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

export default function VisionFormSection({
  heading,
  paragraphs,
  fields,
  id,
}: VisionFormSectionProps) {
  const { status, message, handleSubmit, isSending } =
    useEmailForm("Get Started Now");

  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="mx-auto mb-[5rem] w-[calc(100%-2.5rem)] max-w-[97.5rem] overflow-hidden bg-[#161616] text-white sm:w-[calc(100%-4rem)] xl:min-h-[33.4375rem]"
    >
      <div className="grid gap-[3rem] px-[1.75rem] py-[2.5rem] sm:px-[3rem] sm:py-[3rem] xl:grid-cols-[minmax(24rem,28rem)_minmax(0,48.1875rem)] xl:items-center xl:justify-between xl:px-[clamp(3rem,6.41vw,6.25rem)] xl:py-[3.125rem]">
        {/* Vision content */}
        <motion.div
          variants={contentVariants}
          className="min-w-0 max-w-[28rem]"
        >
          <motion.h2
            variants={headingVariants}
            className="font-bold leading-[1.08] text-[clamp(2.25rem,3.2vw,3rem)] xl:whitespace-nowrap [@media(min-width:1280px)_and_(max-width:1700px)]:text-[2.5rem]"
          >
            {heading}
          </motion.h2>

          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={`${paragraph}-${index}`}
              variants={paragraphVariants}
              className={`${
                index === 0 ? "mt-[2rem]" : "mt-[1.5rem]"
              } text-[1.125rem] leading-[1.55] text-white/75`}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          variants={formVariants}
          onSubmit={handleSubmit}
          className="mt-[2.5rem] grid w-full gap-x-[2.0625rem] gap-y-[1.25rem] bg-[#1c1c1c] p-[1.5rem] sm:grid-cols-2 sm:p-[2.5rem] xl:mt-0 xl:min-h-[24.875rem] xl:px-[3.125rem] xl:py-[2.4375rem]"
        >
          {fields.map(([label, placeholder, type], index) => {
            const fieldId = `vision-form-field-${index}`;

            return (
              <motion.label
                key={`${label}-${index}`}
                variants={fieldVariants}
                htmlFor={fieldId}
                className="min-w-0"
              >
                <span className="mb-[0.75rem] block text-[1rem] font-medium text-white">
                  {label}
                </span>

                <input
                  id={fieldId}
                  name={label
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}
                  className="h-[2.75rem] w-full min-w-0 bg-[#161616] px-[1.25rem] text-[0.875rem] text-white outline-none placeholder:text-white/50 focus:ring-1 focus:ring-[#b34b0c]"
                  type={type || "text"}
                  placeholder={placeholder}
                />
              </motion.label>
            );
          })}

        <HoneypotField />

        <motion.button
          variants={buttonVariants}
          whileHover={{
            y: -2,
            scale: 1.01,
            transition: {
              duration: 0.2,
              ease: smoothEase,
            },
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="h-[2.75rem] bg-[#b34b0c] text-[1.125rem] font-medium capitalize text-white hover:bg-[#cf5a13] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Get Started Now"}
        </motion.button>

        {message && (
          <p
            role="status"
            className={`text-center text-sm font-medium sm:col-span-2 ${
              status === "success" ? "text-emerald-400" : "text-[#cf5a13]"
            }`}
          >
            {message}
          </p>
        )}
      </motion.form>
    </div>
  </motion.section>
);
}

