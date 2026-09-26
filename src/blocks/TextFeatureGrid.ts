import type { Block } from "payload";

export const TextFeatureGridBlock: Block = {
  slug: "textFeatureGrid",
  labels: {
    singular: "Text Feature Grid",
    plural: "Text Feature Grids",
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
        {
          name: "highlighted",
          type: "checkbox",
          label: "Highlight",
        },
      ],
    },
  ],
};
