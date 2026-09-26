import type { Block } from "payload";

export const DenialCategoriesBlock: Block = {
  slug: "denialCategories",
  labels: {
    singular: "Denial Categories Section",
    plural: "Denial Categories Sections",
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
      label: "Description",
      admin: {
        description: "Optional line under the heading.",
      },
    },
    {
      name: "categories",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 7,
      label: "Categories",
      labels: {
        singular: "Category",
        plural: "Categories",
      },
      admin: {
        description: "Up to seven. The first four fill the top row, the rest the second row.",
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
          label: "Description",
        },
        {
          name: "highlighted",
          type: "checkbox",
          label: "Highlight",
        },
      ],
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "default",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Stats (No Descriptions)",
          value: "stats",
        },
      ],
    },
  ],
};
