import type { Block } from "payload";

export const SuccessNumbersBlock: Block = {
  slug: "successNumbers",
  labels: {
    singular: "Success Numbers Section",
    plural: "Success Numbers Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "columns",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 4,
      label: "Columns",
      labels: {
        singular: "Column",
        plural: "Columns",
      },
      admin: {
        description: "Up to four columns. Each column holds a group of label and value pairs.",
      },
      fields: [
        {
          name: "items",
          type: "array",
          required: true,
          minRows: 1,
          label: "Stats",
          labels: {
            singular: "Stat",
            plural: "Stats",
          },
          fields: [
            {
              name: "label",
              type: "text",
              required: true,
            },
            {
              name: "value",
              type: "text",
              required: true,
              admin: {
                description: "Highlighted figure, e.g. 98% or $4.2M.",
              },
            },
          ],
        },
      ],
    },
  ],
};
