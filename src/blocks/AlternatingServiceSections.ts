import type { Block } from "payload";

export const AlternatingServiceSectionsBlock: Block = {
  slug: "alternatingServices",
  labels: {
    singular: "Alternating Services Section",
    plural: "Alternating Services Sections",
  },
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      label: "Sections",
      labels: {
        singular: "Section",
        plural: "Sections",
      },
      admin: {
        description: "Image and text alternate sides automatically based on order.",
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
          name: "bullets",
          type: "array",
          label: "Bullets",
          labels: {
            singular: "Bullet",
            plural: "Bullets",
          },
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "footerText",
          type: "text",
          label: "Footer Text",
          admin: {
            description: "Optional closing line under the bullets.",
          },
        },
      ],
    },
  ],
};
