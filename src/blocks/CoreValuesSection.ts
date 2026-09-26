import type { Block } from "payload";

export const CoreValuesSectionBlock: Block = {
  slug: "coreValues",
  labels: {
    singular: "Core Values Section",
    plural: "Core Values Sections",
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
      name: "values",
      type: "array",
      required: true,
      minRows: 1,
      label: "Values",
      labels: {
        singular: "Value",
        plural: "Values",
      },
      admin: {
        description: "The first value is expanded by default.",
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
          label: "Description",
          admin: {
            description: "Only shown for the expanded value.",
          },
        },
      ],
    },
  ],
};
