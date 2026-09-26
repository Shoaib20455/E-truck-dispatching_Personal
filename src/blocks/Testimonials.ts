import type { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonials",
  labels: {
    singular: "Testimonials Section",
    plural: "Testimonials Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "testimonials",
      type: "array",
      required: true,
      minRows: 1,
      label: "Testimonials",
      labels: {
        singular: "Testimonial",
        plural: "Testimonials",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "role",
          type: "text",
          required: true,
          admin: {
            description: "Shown under the name, e.g. Practice Manager.",
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
              label: "Photo",
            },
            {
              name: "imageAlt",
              type: "text",
              label: "Photo Alt Text",
              admin: {
                description: "Falls back to the alt text of the selected media file.",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "ratingImage",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "Rating Image",
              admin: {
                description: "Wide star rating graphic, shown small under the role.",
              },
            },
            {
              name: "ratingAlt",
              type: "text",
              label: "Rating Alt Text",
              admin: {
                description: "e.g. Rated 5 out of 5.",
              },
            },
          ],
        },
        {
          name: "quote",
          type: "textarea",
          required: true,
          admin: {
            description: "Displayed with surrounding quotation marks.",
          },
        },
      ],
    },
  ],
};
