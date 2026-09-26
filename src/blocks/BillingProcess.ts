import type { Block } from "payload";

export const BillingProcessBlock: Block = {
  slug: "billingProcess",
  labels: {
    singular: "Billing Process Section",
    plural: "Billing Process Sections",
  },
  fields: [
    {
      name: "heading",
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
          label: "Image",
        },
        {
          name: "imageAlt",
          type: "text",
          label: "Image Alt Text",
          admin: {
            description: "Falls back to the alt text of the selected media file.",
          },
        },
      ],
    },
    {
      name: "steps",
      type: "array",
      required: true,
      minRows: 1,
      label: "Steps",
      labels: {
        singular: "Step",
        plural: "Steps",
      },
      fields: [
        {
          name: "number",
          type: "text",
          required: true,
          label: "Number",
          admin: {
            description: "Displayed large beside the step, e.g. 01.",
          },
        },
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
