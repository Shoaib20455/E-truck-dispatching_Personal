import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "users" ADD COLUMN "name" varchar NOT NULL DEFAULT '';
    ALTER TABLE "users" ALTER COLUMN "name" DROP DEFAULT;
    ALTER TABLE "users" ADD COLUMN "profile_image_id" integer;
    CREATE INDEX "users_profile_image_idx" ON "users" ("profile_image_id");
    ALTER TABLE "users" ADD CONSTRAINT "users_profile_image_id_fk" FOREIGN KEY ("profile_image_id") REFERENCES "media"("id") ON DELETE SET NULL;
  `)
}

export async function down({ db, payload }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "users" DROP CONSTRAINT IF EXISTS "users_profile_image_id_fk";
    DROP INDEX IF EXISTS "users_profile_image_idx";
    ALTER TABLE "users" DROP COLUMN IF EXISTS "profile_image_id";
    ALTER TABLE "users" DROP COLUMN IF EXISTS "name";
  `)
}
