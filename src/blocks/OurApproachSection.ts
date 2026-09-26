import type { Block } from "payload";

export const OurApproachSectionBlock: Block = {
  slug: "ourApproach",
  labels: {
    singular: "Our Approach",
    plural: "Our Approach",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      labels: {
        singular: "Step",
        plural: "Steps",
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
      ],
    },
  ],
};
