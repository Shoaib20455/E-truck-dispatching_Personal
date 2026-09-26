import type { Block } from "payload";

export const SimpleFeatureCardsBlock: Block = {
  slug: "simpleFeatureCards",
  labels: {
    singular: "Simple Feature Cards",
    plural: "Simple Feature Cards",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      label: "Features",
      labels: {
        singular: "Feature",
        plural: "Features",
      },
      admin: {
        description: "Cards are laid out in a responsive grid that widens as the list grows.",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
