import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TYPE "public"."enum_posts_status" AS ENUM('draft','published');

    CREATE TABLE "users_sessions" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY,
      "created_at" timestamp(3) with time zone,
      "expires_at" timestamp(3) with time zone NOT NULL
    );

    CREATE TABLE "users" (
      "id" serial PRIMARY KEY,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "email" varchar NOT NULL,
      "reset_password_token" varchar,
      "reset_password_expiration" timestamp(3) with time zone,
      "salt" varchar,
      "hash" varchar,
      "login_attempts" numeric DEFAULT 0,
      "lock_until" timestamp(3) with time zone
    );

    CREATE TABLE "media" (
      "id" serial PRIMARY KEY,
      "alt" varchar NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "url" varchar,
      "thumbnail_u_r_l" varchar,
      "filename" varchar,
      "mime_type" varchar,
      "filesize" numeric,
      "width" numeric,
      "height" numeric,
      "focal_x" numeric,
      "focal_y" numeric,
      "sizes_thumbnail_url" varchar,
      "sizes_thumbnail_width" numeric,
      "sizes_thumbnail_height" numeric,
      "sizes_thumbnail_mime_type" varchar,
      "sizes_thumbnail_filesize" numeric,
      "sizes_thumbnail_filename" varchar,
      "sizes_card_url" varchar,
      "sizes_card_width" numeric,
      "sizes_card_height" numeric,
      "sizes_card_mime_type" varchar,
      "sizes_card_filesize" numeric,
      "sizes_card_filename" varchar,
      "sizes_article_url" varchar,
      "sizes_article_width" numeric,
      "sizes_article_height" numeric,
      "sizes_article_mime_type" varchar,
      "sizes_article_filesize" numeric,
      "sizes_article_filename" varchar,
      "sizes_hero_url" varchar,
      "sizes_hero_width" numeric,
      "sizes_hero_height" numeric,
      "sizes_hero_mime_type" varchar,
      "sizes_hero_filesize" numeric,
      "sizes_hero_filename" varchar
    );

    CREATE TABLE "categories" (
      "id" serial PRIMARY KEY,
      "name" varchar NOT NULL,
      "slug" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE "posts_faqs" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY,
      "question" varchar NOT NULL,
      "answer" jsonb NOT NULL
    );

    CREATE TABLE "posts" (
      "id" serial PRIMARY KEY,
      "title" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "author_id" integer REFERENCES "users"("id") ON DELETE SET NULL,
      "category_id" integer REFERENCES "categories"("id") ON DELETE SET NULL,
      "feature_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
      "content" jsonb,
      "meta_title" varchar,
      "meta_description" varchar,
      "focus_keyphrase" varchar,
      "json_schema" jsonb,
      "published_date" timestamp(3) with time zone,
      "status" "public"."enum_posts_status" DEFAULT 'draft',
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE "payload_kv" (
      "id" serial PRIMARY KEY,
      "key" varchar NOT NULL,
      "data" jsonb NOT NULL
    );

    CREATE TABLE "payload_locked_documents" (
      "id" serial PRIMARY KEY,
      "global_slug" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE "payload_locked_documents_rels" (
      "id" serial PRIMARY KEY,
      "order" integer,
      "parent_id" integer NOT NULL,
      "path" varchar NOT NULL,
      "users_id" integer,
      "media_id" integer,
      "categories_id" integer,
      "posts_id" integer
    );

    CREATE TABLE "payload_preferences" (
      "id" serial PRIMARY KEY,
      "key" varchar,
      "value" jsonb,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE "payload_preferences_rels" (
      "id" serial PRIMARY KEY,
      "order" integer,
      "parent_id" integer NOT NULL,
      "path" varchar NOT NULL,
      "users_id" integer
    );

    CREATE TABLE "payload_migrations" (
      "id" serial PRIMARY KEY,
      "name" varchar,
      "batch" numeric,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX "users_sessions_order_idx" ON "users_sessions" ("_order");
    CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" ("_parent_id");
    ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "users"("id") ON DELETE CASCADE;
    CREATE INDEX "users_updated_at_idx" ON "users" ("updated_at");
    CREATE INDEX "users_created_at_idx" ON "users" ("created_at");
    CREATE UNIQUE INDEX "users_email_idx" ON "users" ("email");
    CREATE INDEX "media_updated_at_idx" ON "media" ("updated_at");
    CREATE INDEX "media_created_at_idx" ON "media" ("created_at");
    CREATE UNIQUE INDEX "media_filename_idx" ON "media" ("filename");
    CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" ("sizes_thumbnail_filename");
    CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" ("sizes_card_filename");
    CREATE INDEX "media_sizes_article_sizes_article_filename_idx" ON "media" ("sizes_article_filename");
    CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" ("sizes_hero_filename");
    CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" ("slug");
    CREATE INDEX "categories_updated_at_idx" ON "categories" ("updated_at");
    CREATE INDEX "categories_created_at_idx" ON "categories" ("created_at");
    CREATE INDEX "posts_faqs_order_idx" ON "posts_faqs" ("_order");
    CREATE INDEX "posts_faqs_parent_id_idx" ON "posts_faqs" ("_parent_id");
    ALTER TABLE "posts_faqs" ADD CONSTRAINT "posts_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE CASCADE;
    CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" ("slug");
    CREATE INDEX "posts_author_idx" ON "posts" ("author_id");
    CREATE INDEX "posts_category_idx" ON "posts" ("category_id");
    CREATE INDEX "posts_feature_image_idx" ON "posts" ("feature_image_id");
    CREATE INDEX "posts_published_date_idx" ON "posts" ("published_date");
    CREATE INDEX "posts_status_idx" ON "posts" ("status");
    CREATE INDEX "posts_updated_at_idx" ON "posts" ("updated_at");
    CREATE INDEX "posts_created_at_idx" ON "posts" ("created_at");
    CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" ("key");
    CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" ("global_slug");
    CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" ("updated_at");
    CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" ("created_at");
    CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" ("order");
    CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" ("parent_id");
    CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" ("path");
    CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" ("users_id");
    CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" ("media_id");
    CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" ("categories_id");
    CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" ("posts_id");
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_locked_documents"("id") ON DELETE CASCADE;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE CASCADE;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE CASCADE;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE CASCADE;
    CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" ("key");
    CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" ("updated_at");
    CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
    CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
    CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
    CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
    CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" ("users_id");
    ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE CASCADE;
    ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE;
    CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" ("updated_at");
    CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE "payload_preferences_rels" CASCADE;
    DROP TABLE "payload_preferences" CASCADE;
    DROP TABLE "payload_locked_documents_rels" CASCADE;
    DROP TABLE "payload_locked_documents" CASCADE;
    DROP TABLE "payload_kv" CASCADE;
    DROP TABLE "posts_faqs" CASCADE;
    DROP TABLE "posts" CASCADE;
    DROP TABLE "media" CASCADE;
    DROP TABLE "categories" CASCADE;
    DROP TABLE "users_sessions" CASCADE;
    DROP TABLE "users" CASCADE;
    DROP TABLE "payload_migrations" CASCADE;
    DROP TYPE "public"."enum_posts_status";
  `)
}
