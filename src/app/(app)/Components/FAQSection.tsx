"use client";

import { useState } from "react";

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
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-[20px] bg-white px-6 md:px-8 ${
                  isOpen ? "py-6" : "py-5"
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
                        className={`font-inter text-lg font-semibold leading-7 text-heading md:text-xl ${
                          isOpen ? "mb-4" : ""
                        }`}
                      >
                        Q{index + 1}: {faq.question}
                      </h3>
                    </button>

                    {isOpen && (
                      <p className="font-manrope text-base font-normal leading-7 text-neutral-500 md:text-lg">
                        {faq.answer}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="shrink-0 text-2xl leading-none text-neutral-500"
                    aria-label={isOpen ? "Close answer" : "Open answer"}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}