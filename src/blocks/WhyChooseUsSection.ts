import type { Block } from "payload";

export const WhyChooseUsSectionBlock: Block = {
  slug: "whyChooseUs",
  labels: {
    singular: "Why Choose Us Grid",
    plural: "Why Choose Us Grids",
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
      labels: {
        singular: "Item",
        plural: "Items",
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
