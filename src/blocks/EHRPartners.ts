import type { Block } from "payload";

export const EHRPartnersBlock: Block = {
  slug: "ehrPartners",
  labels: {
    singular: "EHR Partners Section",
    plural: "EHR Partners Sections",
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
      name: "partners",
      type: "array",
      required: true,
      minRows: 1,
      label: "Partner Logos",
      labels: {
        singular: "Partner Logo",
        plural: "Partner Logos",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "logo",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "Logo",
              admin: {
                description: "Wide logo, ideally on a transparent background.",
              },
            },
            {
              name: "alt",
              type: "text",
              label: "Logo Alt Text",
            },
          ],
        },
      ],
    },
    {
      name: "bottomText",
      type: "text",
      label: "Bottom Text",
      admin: {
        description: "Optional line under the logos.",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "buttonText",
          type: "text",
          label: "Button Text",
        },
        {
          name: "buttonHref",
          type: "text",
          label: "Button Link",
        },
      ],
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "default",
      options: [
        {
          label: "Default (Six Columns)",
          value: "default",
        },
        {
          label: "Compact (Five Columns)",
          value: "compact",
        },
      ],
    },
  ],
};
