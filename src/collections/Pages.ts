import type { CollectionConfig } from "payload";

import { pageBlocks } from "../blocks";
import { revalidateDeletedPage, revalidatePage } from "../lib/payload-revalidation";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    group: "Pages",
    components: {
      edit: {
        beforeDocumentControls: ["@/app/(payload)/admin/BackNavigationGuard#default"],
      },
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidateDeletedPage],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Page Title",
      admin: {
        description: "Internal label. Also used for the H1 when no hero block is placed first.",
      },
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      index: true,
      label: "URL Slug",
      admin: {
        position: "sidebar",
        description: "Path this page is served from, e.g. fleet-management.",
      },
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            // Only auto-generate slug on create, not on every keystroke during edit
            if (operation === "create" && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");
            }
            return data?.slug;
          },
        ],
      },
    },
    {
      name: "metaTitle",
      type: "text",
      label: "Meta Title",
      maxLength: 70,
      admin: {
        position: "sidebar",
        description: "Falls back to the page title.",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      label: "Meta Description",
      maxLength: 180,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: pageBlocks,
      label: "Page Sections",
      admin: {
        description: "Drag to reorder. The page renders these sections top to bottom.",
      },
    },
  ],
};
