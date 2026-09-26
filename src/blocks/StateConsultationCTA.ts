import type { Block } from "payload";

export const StateConsultationCTABlock: Block = {
  slug: "stateConsultationCTA",
  labels: {
    singular: "State Consultation CTA",
    plural: "State Consultation CTAs",
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
        description: "Full-bleed background. Shown at full strength when phone numbers are added.",
      },
    },
    {
      name: "phones",
      type: "array",
      label: "Phone Numbers",
      labels: {
        singular: "Phone Number",
        plural: "Phone Numbers",
      },
      admin: {
        description: "Optional. Each number becomes a tap-to-call button. Leave empty to hide them.",
      },
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          admin: {
            description: "Displayed as written, e.g. (800) 555-0123.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Lead Form",
      admin: {
        description: "The form is a visual shell only. Its field placeholders are fixed inside the component.",
      },
      fields: [
        {
          name: "formHeading",
          type: "text",
          required: true,
          label: "Form Heading",
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
