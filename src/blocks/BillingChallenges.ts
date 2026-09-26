import type { Block } from "payload";

export const BillingChallengesBlock: Block = {
  slug: "billingChallenges",
  labels: {
    singular: "Billing Challenges Section",
    plural: "Billing Challenges Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "challenges",
      type: "array",
      required: true,
      minRows: 1,
      label: "Challenges",
      labels: {
        singular: "Challenge",
        plural: "Challenges",
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
          type: "row",
          fields: [
            {
              name: "icon",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "Icon",
              admin: {
                description: "Square icon, ideally a transparent PNG or SVG.",
              },
            },
            {
              name: "iconAlt",
              type: "text",
              label: "Icon Alt Text",
            },
          ],
        },
      ],
    },
  ],
};
