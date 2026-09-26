import type { Block } from "payload";

export const ComparisonTableBlock: Block = {
  slug: "comparisonTable",
  labels: {
    singular: "Comparison Table",
    plural: "Comparison Tables",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      admin: {
        description: "Optional. The table is shown on its own when empty.",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "featureHeading",
          type: "text",
          required: true,
          label: "First Column Heading",
        },
        {
          name: "avenueHeading",
          type: "text",
          required: true,
          label: "Second Column Heading",
        },
        {
          name: "comparisonHeading",
          type: "text",
          required: true,
          label: "Third Column Heading",
        },
      ],
    },
    {
      name: "rows",
      type: "array",
      required: true,
      minRows: 1,
      label: "Rows",
      labels: {
        singular: "Row",
        plural: "Rows",
      },
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
        },
        {
          name: "avenue",
          type: "text",
          required: true,
          label: "Second Column",
        },
        {
          name: "comparison",
          type: "text",
          required: true,
          label: "Third Column",
        },
      ],
    },
  ],
};
