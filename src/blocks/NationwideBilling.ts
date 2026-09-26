import type { Block } from "payload";

export const NationwideBillingBlock: Block = {
  slug: "nationwideBilling",
  labels: {
    singular: "Nationwide Billing",
    plural: "Nationwide Billing",
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
    },
    {
      name: "states",
      type: "array",
      required: true,
      minRows: 1,
      labels: {
        singular: "State",
        plural: "States",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          type: "row",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "State Graphic",
              admin: {
                description: "Square state icon or badge, shown small and centered.",
              },
            },
            {
              name: "imageAlt",
              type: "text",
              label: "State Graphic Alt Text",
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
        },
      ],
    },
  ],
};
