import type { Block } from "payload";

export const ExpertiseCardGridBlock: Block = {
  slug: "expertiseCards",
  labels: {
    singular: "Expertise Card Grid",
    plural: "Expertise Card Grids",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "cards",
      type: "array",
      required: true,
      minRows: 1,
      label: "Cards",
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
          name: "code",
          type: "text",
          required: true,
          label: "Code",
          admin: {
            description: "Short reference shown under the title, e.g. A/R or CPT.",
          },
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "highlighted",
          type: "checkbox",
          label: "Highlight",
        },
      ],
    },
  ],
};
