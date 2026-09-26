import type { Block } from "payload";

export const ConsultationCTABlock: Block = {
  slug: "consultationCTA",
  labels: {
    singular: "Consultation CTA",
    plural: "Consultation CTAs",
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
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== "plain",
        description: "Sits behind the teal overlay. Only used by the Background variant.",
      },
    },
    {
      name: "logos",
      type: "array",
      label: "Logos",
      labels: {
        singular: "Logo",
        plural: "Logos",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "Image",
              admin: {
                description: "Wide logo, ideally on a white or transparent background.",
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
      name: "variant",
      type: "select",
      defaultValue: "background",
      options: [
        {
          label: "Background (Teal Overlay)",
          value: "background",
        },
        {
          label: "Plain (No Background)",
          value: "plain",
        },
      ],
    },
    {
      type: "collapsible",
      label: "Lead Form",
      admin: {
        description: "The form is a visual shell only, matching the existing components on the site.",
      },
      fields: [
        {
          name: "formHeading",
          type: "text",
          required: true,
          label: "Form Heading",
        },
        {
          name: "namePlaceholder",
          type: "text",
          required: true,
          label: "Name Placeholder",
        },
        {
          name: "phonePlaceholder",
          type: "text",
          required: true,
          label: "Phone Placeholder",
        },
        {
          name: "emailPlaceholder",
          type: "text",
          required: true,
          label: "Email Placeholder",
        },
        {
          name: "practicePlaceholder",
          type: "text",
          required: true,
          label: "Practice Placeholder",
        },
        {
          name: "buttonText",
          type: "text",
          required: true,
          label: "Button Text",
        },
      ],
    },
  ],
};
