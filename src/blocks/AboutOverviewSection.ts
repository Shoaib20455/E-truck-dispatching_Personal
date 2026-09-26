import type { Block } from "payload";

export const AboutOverviewSectionBlock: Block = {
  slug: "aboutOverview",
  labels: {
    singular: "About Overview Section",
    plural: "About Overview Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading (H2)",
    },
    {
      name: "intro",
      type: "textarea",
      required: true,
      label: "Intro",
      admin: {
        description: "Shown in the tinted panel next to the heading. Line breaks are preserved.",
      },
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
      name: "points",
      type: "array",
      required: true,
      minRows: 1,
      label: "Points",
      labels: {
        singular: "Point",
        plural: "Points",
      },
      admin: {
        description: "Short statements listed beside the image.",
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
      name: "story",
      type: "textarea",
      required: true,
      label: "Story",
      admin: {
        description: "Long-form column on the right.",
      },
    },
  ],
};
