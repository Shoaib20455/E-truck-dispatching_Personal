import type { Block } from "payload";

export const ComplianceCommitmentSectionBlock: Block = {
  slug: "complianceCommitment",
  labels: {
    singular: "Compliance Commitment Section",
    plural: "Compliance Commitment Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "textarea",
      label: "Subtitle",
      admin: {
        description: "Optional line under the heading.",
      },
    },
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      label: "Commitments",
      labels: {
        singular: "Commitment",
        plural: "Commitments",
      },
      admin: {
        description: "Displayed in diamond cards, four per row.",
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
      name: "footerText",
      type: "text",
      label: "Footer Text",
      admin: {
        description: "Optional bold line under the cards.",
      },
    },
  ],
};
