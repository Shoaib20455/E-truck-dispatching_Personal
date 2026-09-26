"use client";

import * as motion from "motion/react-client";

import { fieldClass } from "./formStyles";
import HoneypotField from "./HoneypotField";
import { useEmailForm } from "./useEmailForm";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function DemoRequestForm() {
  const { status, message, handleSubmit, isSending } =
    useEmailForm("Request a Demo");

  return (
    <form
      aria-labelledby="demo-request-title"
      className="w-full max-w-[500px] justify-self-center self-start bg-[#171717]/60 p-5 backdrop-blur-[20.5px] lg:mt-[67px] lg:min-h-96 lg:justify-self-end lg:bg-[#171717]/20"
      onSubmit={handleSubmit}
    >
      <p
        id="demo-request-title"
        className="text-center text-3xl font-bold capitalize"
      >
        Request a demo
      </p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-2 block text-base">Full Name</span>

          <input
            className={fieldClass}
            name="name"
            placeholder="Enter full name"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-base">Number</span>

          <input
            className={fieldClass}
            name="phone"
            type="tel"
            placeholder="Your number"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-base">Email</span>

          <input
            className={fieldClass}
            name="email"
            type="email"
            placeholder="youremail@gmail.com"
            required
          />
        </label>

        <HoneypotField />

        <motion.button
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
            ease: smoothEase,
          }}
          className="h-11 w-full bg-[#b34b0c] text-lg font-medium transition hover:bg-[#cf5a13] disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Submit"}
        </motion.button>

        {message && (
          <p
            role="status"
            className={`text-center text-sm font-medium ${
              status === "success" ? "text-emerald-400" : "text-[#cf5a13]"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
