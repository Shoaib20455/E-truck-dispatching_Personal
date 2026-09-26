import type { Block } from "payload";

export const RCMSolutionsBlock: Block = {
  slug: "rcmSolutions",
  labels: {
    singular: "RCM Solutions Grid",
    plural: "RCM Solutions Grids",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "services",
      type: "array",
      required: true,
      minRows: 1,
      label: "Solutions",
      labels: {
        singular: "Solution",
        plural: "Solutions",
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
          admin: {
            description: "Not shown by the Procedure variant.",
          },
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
                description: "Square icon, shown small and centered.",
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
          admin: {
            description: "Only used by the Procedure variant.",
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
          label: "Default (Tinted Cards With Text)",
          value: "default",
        },
        {
          label: "Procedure (White Cards, Title + Icon Only)",
          value: "procedure",
        },
      ],
    },
  ],
};
