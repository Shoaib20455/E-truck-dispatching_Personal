import type { Block } from "payload";

export const RevenueCTABlock: Block = {
  slug: "revenueCTA",
  labels: {
    singular: "Revenue CTA",
    plural: "Revenue CTAs",
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
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      label: "Background Image",
      required: true,
      admin: {
        description: "Sits behind the teal overlay. Landscape works best.",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "primaryButtonText",
          type: "text",
          required: true,
          label: "Primary Button Text",
        },
        {
          name: "primaryButtonHref",
          type: "text",
          required: true,
          label: "Primary Button Link",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "secondaryButtonText",
          type: "text",
          required: true,
          label: "Secondary Button Text",
        },
        {
          name: "secondaryButtonHref",
          type: "text",
          required: true,
          label: "Secondary Button Link",
        },
      ],
    },
  ],
};
