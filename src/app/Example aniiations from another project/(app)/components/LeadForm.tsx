"use client";

import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

import HoneypotField from "./HoneypotField";
import { useEmailForm } from "./useEmailForm";

const ease = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
  hidden: {
    opacity: 0.25,
    y: 22,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.52,
      ease,
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0.25,
    x: 58,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.42,
      duration: 0.75,
      ease,
      delayChildren: 0.18,
      staggerChildren: 0.09,
    },
  },
};

function FormField({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <motion.label
      variants={itemVariants}
      className="block text-[0.6875rem] font-semibold"
    >
      {label}

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-1.5 min-h-10 w-full border-0 bg-[#1f1f1f] px-3 py-2 text-[0.625rem] font-normal text-white outline-none transition-[box-shadow,background-color] placeholder:text-white/30 focus:bg-[#232323] focus:ring-1 focus:ring-[#d95408]"
      />
    </motion.label>
  );
}

export default function LeadForm() {
  const { status, message, handleSubmit, isSending } =
    useEmailForm("Homepage Hero");

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="relative z-30 mx-4 mb-8 space-y-4 bg-[#191919] p-4 shadow-2xl min-[23.4375rem]:mx-5 min-[23.4375rem]:p-5 sm:mx-8 sm:p-6 lg:absolute lg:bottom-5 lg:right-16 lg:mb-0 lg:w-[25rem] lg:p-6 xl:right-[5.375rem]"
    >
      <motion.span
        variants={{
          hidden: {
            scaleX: 0,
          },
          visible: {
            scaleX: 1,
            transition: {
              delay: 0.1,
              duration: 0.7,
              ease,
            },
          },
        }}
        aria-hidden="true"
        className="absolute left-0 top-0 h-[3px] w-full origin-left bg-[#d95408]"
      />

      <FormField
        label="Full Name"
        name="fullName"
        type="text"
        placeholder="Enter Full Name"
      />

      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="+1(000) 123-1234"
      />

      <FormField
        label="Email Address"
        name="email"
        type="email"
        placeholder="email@gmail.com"
      />

      <HoneypotField />

      <motion.button
        variants={itemVariants}
        whileHover={{
          y: -3,
          scale: 1.015,
          boxShadow: "0 12px 28px rgba(217, 84, 8, 0.3)",
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.2,
          ease,
        }}
        type="submit"
        disabled={isSending}
        className="min-h-10 w-full bg-[#d95408] px-3 py-2 text-[0.6875rem] font-bold transition-colors hover:bg-[#f26718] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? "Sending..." : "Get Started Now"}
      </motion.button>

      {message && (
        <p
          role="status"
          className={`text-center text-[0.6875rem] font-semibold ${
            status === "success" ? "text-emerald-400" : "text-[#d95408]"
          }`}
        >
          {message}
        </p>
      )}
    </motion.form>
  );
}
