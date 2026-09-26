import type { Block } from "payload";

export const AboutUsCTASectionBlock: Block = {
  slug: "aboutUsCTA",
  labels: {
    singular: "About Us CTA Section",
    plural: "About Us CTA Sections",
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
      required: true,
      label: "Background Image",
      admin: {
        description: "Sits behind the teal panel. Landscape works best.",
      },
    },
    {
      name: "doctorImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Person Image",
      admin: {
        description: "Cut-out portrait shown overlapping the bottom right corner. A person with a transparent background works best.",
      },
    },
    {
      name: "doctorImageAlt",
      type: "text",
      label: "Person Image Alt Text",
      admin: {
        description: "Falls back to the alt text of the selected media file.",
      },
    },
    {
      name: "buttons",
      type: "array",
      required: true,
      minRows: 1,
      label: "Buttons",
      labels: {
        singular: "Button",
        plural: "Buttons",
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "Link",
        },
        {
          name: "variant",
          type: "select",
          defaultValue: "primary",
          options: [
            {
              label: "Primary (Filled)",
              value: "primary",
            },
            {
              label: "Secondary (White)",
              value: "secondary",
            },
          ],
        },
      ],
    },
  ],
};
