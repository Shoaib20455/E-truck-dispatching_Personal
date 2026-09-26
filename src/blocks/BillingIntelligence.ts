import type { Block } from "payload";

export const BillingIntelligenceBlock: Block = {
  slug: "billingIntelligence",
  labels: {
    singular: "Billing Intelligence",
    plural: "Billing Intelligence",
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
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      label: "Checklist Items",
      labels: {
        singular: "Item",
        plural: "Items",
      },
      admin: {
        description: "Each item is rendered in a tile with a checkmark.",
      },
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
