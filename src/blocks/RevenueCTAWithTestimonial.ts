import type { Block } from "payload";

export const RevenueCTAWithTestimonialBlock: Block = {
  slug: "revenueCTAWithTestimonial",
  labels: {
    singular: "Revenue CTA With Testimonial",
    plural: "Revenue CTAs With Testimonials",
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
        description: "Sits behind the teal gradient. Landscape works best.",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "primaryButtonText",
          type: "text",
          required: true,
          label: "Primary Button Text",
        },
        {
          name: "primaryButtonHref",
          type: "text",
          required: true,
          label: "Primary Button Link",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "secondaryButtonText",
          type: "text",
          required: true,
          label: "Secondary Button Text",
        },
        {
          name: "secondaryButtonHref",
          type: "text",
          required: true,
          label: "Secondary Button Link",
        },
      ],
    },
    {
      type: "group",
      name: "testimonial",
      label: "Testimonial",
      fields: [
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
          name: "quote",
          type: "textarea",
          required: true,
        },
        {
          type: "row",
          fields: [
            {
              name: "ratingImage",
              type: "upload",
              relationTo: "media",
              label: "Rating Image",
              admin: {
                description: "Optional. Wide star rating graphic, shown small under the role.",
              },
            },
            {
              name: "ratingAlt",
              type: "text",
              label: "Rating Alt Text",
            },
          ],
        },
      ],
    },
  ],
};
