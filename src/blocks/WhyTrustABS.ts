import type { Block } from "payload";

export const WhyTrustABSBlock: Block = {
  slug: "whyTrustABS",
  labels: {
    singular: "Why Trust ABS",
    plural: "Why Trust ABS",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "Line breaks are preserved.",
      },
    },
    {
      name: "mainCardHeading",
      type: "text",
      required: true,
      label: "Highlighted Card Heading",
      admin: {
        description: "Rendered as the first, larger teal card.",
      },
    },
    {
      name: "cards",
      type: "array",
      required: true,
      minRows: 1,
      labels: {
        singular: "Card",
        plural: "Cards",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};
