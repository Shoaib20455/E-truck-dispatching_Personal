import type { Block } from "payload";

export const FAQSectionBlock: Block = {
  slug: "faqSection",
  labels: {
    singular: "FAQ Section",
    plural: "FAQ Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "faqs",
      type: "array",
      required: true,
      minRows: 1,
      label: "Questions",
      labels: {
        singular: "Question",
        plural: "Questions",
      },
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
          admin: {
            description: "Plain text. Line breaks are preserved.",
          },
        },
      ],
    },
    {
      name: "defaultOpenIndex",
      type: "number",
      defaultValue: 0,
      min: 0,
      label: "Open Question By Default",
      admin: {
        description: "Zero-based index of the question shown expanded. Use -1 to keep all closed.",
      },
    },
  ],
};
