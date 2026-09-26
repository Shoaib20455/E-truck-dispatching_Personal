import type { Block } from "payload";

export const ServiceHeroBlock: Block = {
  slug: "serviceHero",
  labels: {
    singular: "Service Hero",
    plural: "Service Heroes",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading (H1)",
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
      required: true,
      admin: {
        description: "Full-bleed background behind the gradient overlay. Landscape works best.",
      },
    },
    {
      name: "highlights",
      type: "array",
      required: true,
      minRows: 1,
      label: "Highlights",
      labels: {
        singular: "Highlight",
        plural: "Highlights",
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
      name: "reviews",
      type: "array",
      label: "Reviews",
      labels: {
        singular: "Review",
        plural: "Reviews",
      },
      admin: {
        description: "Optional. Up to four fit in a single row.",
      },
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Logo",
          admin: {
            description: "Optional. When empty, the text label is shown instead.",
          },
        },
        {
          name: "alt",
          type: "text",
          label: "Logo Alt Text",
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.logo),
          },
        },
        {
          name: "label",
          type: "text",
          admin: {
            description: "Fallback text rating, e.g. Trustpilot 4.8.",
          },
        },
        {
          name: "rating",
          type: "text",
          label: "Stars",
          admin: {
            description: "Optional. Any string, e.g. ★★★★★ or 4.8/5.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Lead Form",
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
          name: "organizationPlaceholder",
          type: "text",
          required: true,
          label: "Organization Placeholder",
        },
        {
          name: "buttonText",
          type: "text",
          required: true,
          label: "Button Text",
        },
      ],
    },
    {
      type: "collapsible",
      label: "Layout",
      fields: [
        {
          name: "variant",
          type: "select",
          defaultValue: "default",
          options: [
            {
              label: "Default",
              value: "default",
            },
            {
              label: "Compact",
              value: "compact",
            },
          ],
        },
      ],
    },
  ],
};
