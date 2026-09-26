import type { Block } from "payload";

export const WhyWorkWithUsSectionBlock: Block = {
  slug: "whyWorkWithUs",
  labels: {
    singular: "Why Work With Us",
    plural: "Why Work With Us",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      admin: {
        description: "Optional. Shown under the heading.",
      },
    },
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      labels: {
        singular: "Item",
        plural: "Items",
      },
      admin: {
        description: "Each item is rendered as a pill-shaped card.",
      },
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "footerText",
      type: "text",
      admin: {
        description: "Optional. Shown centered under the items.",
      },
    },
  ],
};
