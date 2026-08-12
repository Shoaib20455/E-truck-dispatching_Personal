import type { Post } from "@/payload-types";

type BlogFaq = { question: string; answer: unknown };

function extractTextFromRichText(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const obj = node as Record<string, unknown>;
  if (typeof obj.text === "string") return obj.text;
  if (Array.isArray(obj.children)) {
    return obj.children.map((c) => extractTextFromRichText(c)).join("");
  }
  return "";
}

function isRichText(value: unknown): boolean {
  return Boolean(
    value &&
      typeof value === "object" &&
      "root" in value &&
      (value as { root?: unknown }).root,
  );
}

export function getFaqSchema(faqs: Post["faqs"]) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  const validFaqs = faqs.filter(
    (faq) => Boolean(faq?.question && isRichText(faq.answer)),
  ) as BlogFaq[];

  if (validFaqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: extractTextFromRichText(faq.answer),
      },
    })),
  };
}
