"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  heading: string;
  faqs: FAQItem[];
  defaultOpenIndex?: number;
};

export default function FAQSection({
  heading,
  faqs,
  defaultOpenIndex = 0,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <AnimatedHeading
            text={heading}
            className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl"
          />
        </div>

        {/* FAQ LIST */}
        <StaggerGroup stagger={0.07} className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <StaggerItem
                key={faq.question}
                preset="card"
                hover="soft"
                layout
                className={`bg-white px-7 md:px-10 ${
                  isOpen ? "rounded-[30px] py-7" : "rounded-[20px] py-5"
                }`}
              >
                <div
                  className={`flex justify-between gap-6 ${
                    isOpen ? "items-start" : "items-center"
                  }`}
                >
                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left"
                      aria-expanded={isOpen}
                    >
                      <h3
                        className={`font-inter text-xl font-semibold leading-6 text-heading ${
                          isOpen ? "mb-4" : ""
                        }`}
                      >
                        Q{index + 1}: {faq.question}
                      </h3>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, filter: "blur(6px)" }}
                          animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                          exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                          transition={{
                            height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.22 },
                          }}
                          className="overflow-hidden"
                        >
                          <p className="font-inter text-lg font-normal leading-6 text-neutral-500">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="shrink-0 text-2xl leading-none text-neutral-500"
                    aria-label={isOpen ? "Close answer" : "Open answer"}
                    aria-expanded={isOpen}
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block"
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
