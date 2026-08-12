import { postgresAdapter } from "@payloadcms/db-postgres";
import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Posts } from "./collections/Posts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    avatar: {
      Component: "@/app/(payload)/admin/Dashboard#AdminAvatar",
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      views: {
        dashboard: {
          Component: "@/app/(payload)/admin/Dashboard",
        },
      },
    },
  },
  collections: [Users, Media, Categories, Posts],
  editor: lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,

    // Keeps the rich-text toolbar visible.
    FixedToolbarFeature(),

    // Adds table insertion and editing.
    EXPERIMENTAL_TableFeature(),
  ],
}),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  plugins: [
    ...(process.env.R2_BUCKET
      ? [
          s3Storage({
            collections: {
              media: true,
            },
            bucket: process.env.R2_BUCKET,
            config: {
              endpoint: process.env.R2_ENDPOINT || "",
              region: "auto",
              forcePathStyle: true,
              credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
              },
            },
          }),
        ]
      : []),
  ],
});
