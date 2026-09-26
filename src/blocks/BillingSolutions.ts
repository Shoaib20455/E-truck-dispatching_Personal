import type { Block } from "payload";

export const BillingSolutionsBlock: Block = {
  slug: "billingSolutions",
  labels: {
    singular: "Billing Solutions Grid",
    plural: "Billing Solutions Grids",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "solutions",
      type: "array",
      required: true,
      minRows: 1,
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
          type: "row",
          fields: [
            {
              name: "icon",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "Icon",
              admin: {
                description: "Square icon, shown small and centered.",
              },
            },
            {
              name: "iconAlt",
              type: "text",
              label: "Icon Alt Text",
              admin: {
                description: "Falls back to the alt text of the selected media file.",
              },
            },
          ],
        },
        {
          name: "highlighted",
          type: "checkbox",
          defaultValue: false,
          admin: {
            description: "Only used by the Default variant.",
          },
        },
      ],
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "default",
      options: [
        {
          label: "Default (Two Columns, White Cards)",
          value: "default",
        },
        {
          label: "Outsource (Three Columns, Outlined Cards)",
          value: "outsource",
        },
      ],
    },
  ],
};
