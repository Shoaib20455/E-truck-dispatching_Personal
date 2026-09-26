import type { Block } from "payload";

export const RevenueLossReasonsBlock: Block = {
  slug: "revenueLossReasons",
  labels: {
    singular: "Revenue Loss Reasons",
    plural: "Revenue Loss Reasons",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "descriptionOne",
      type: "textarea",
      required: true,
      label: "Intro Paragraph",
    },
    {
      name: "descriptionTwo",
      type: "textarea",
      required: true,
      label: "Second Paragraph",
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
      name: "cards",
      type: "array",
      required: true,
      minRows: 1,
      label: "Reason Cards",
      labels: {
        singular: "Reason Card",
        plural: "Reason Cards",
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
                description: "Square icon, shown small and centered inside the blue circle.",
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
        },
      ],
    },
  ],
};
