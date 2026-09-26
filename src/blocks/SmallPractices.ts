import type { Block } from "payload";

export const SmallPracticesBlock: Block = {
  slug: "smallPractices",
  labels: {
    singular: "Small Practices Section",
    plural: "Small Practices Sections",
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
      name: "supportHeading",
      type: "text",
      required: true,
      label: "Support Heading",
    },
    {
      name: "supportItems",
      type: "array",
      required: true,
      minRows: 1,
      label: "Support Items",
      labels: {
        singular: "Support Item",
        plural: "Support Items",
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
      type: "collapsible",
      label: "Highlight Card",
      fields: [
        {
          name: "cardHeading",
          type: "text",
          required: true,
          label: "Card Heading",
        },
        {
          name: "cardDescription",
          type: "textarea",
          required: true,
          label: "Card Description",
        },
        {
          type: "row",
          fields: [
            {
              name: "cardLinkText",
              type: "text",
              required: true,
              label: "Card Link Text",
            },
            {
              name: "cardLinkHref",
              type: "text",
              required: true,
              label: "Card Link",
            },
          ],
        },
      ],
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
  ],
};
