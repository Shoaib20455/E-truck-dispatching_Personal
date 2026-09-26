import type { Block } from "payload";

export const SoftwarePartnersBlock: Block = {
  slug: "softwarePartners",
  labels: {
    singular: "Software Partners",
    plural: "Software Partners",
  },
  fields: [
    {
      name: "partners",
      type: "array",
      required: true,
      minRows: 1,
      label: "Software Partners",
      labels: {
        singular: "Partner",
        plural: "Partners",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Partner Name",
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Partner Logo",
          admin: {
            description: "Wide logo works best. The existing component keeps logos at a consistent visual height.",
          },
        },
        {
          name: "alt",
          type: "text",
          label: "Logo Alt Text",
          admin: {
            description: "Falls back to the selected media alt text, then the partner name.",
          },
        },
      ],
    },
  ],
};
