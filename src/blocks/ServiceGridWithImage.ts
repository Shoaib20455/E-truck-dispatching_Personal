import type { Block } from "payload";

export const ServiceGridWithImageBlock: Block = {
  slug: "serviceGridWithImage",
  labels: {
    singular: "Service Grid With Image",
    plural: "Service Grids With Image",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Image",
      admin: {
        description: "Shown beside the list. A portrait or square image works best.",
      },
    },
    {
      name: "imageAlt",
      type: "text",
      label: "Image Alt Text",
      admin: {
        description: "Falls back to the alt text of the selected media file.",
      },
    },
    {
      name: "services",
      type: "array",
      required: true,
      minRows: 1,
      label: "Services",
      labels: {
        singular: "Service",
        plural: "Services",
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
          name: "highlighted",
          type: "checkbox",
          label: "Highlight",
          admin: {
            description: "Highlights this item with an accent border and badge.",
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
          label: "Default (Two Columns)",
          value: "default",
        },
        {
          label: "Compact (Four Columns)",
          value: "compact",
        },
      ],
    },
  ],
};
