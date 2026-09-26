import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Where } from "payload";
import { Suspense } from "react";

import { extractAllText } from "@/lib/extract-headings";
import {
  getPostBySlug,
  getPosts,
  getPublishedPostSlugs,
} from "@/lib/payload-data";
import { getArticleSchema } from "@/lib/schemas/article";
import { getFaqSchema } from "@/lib/schemas/faq";

import BlogDetailLayout from "../../Components/BlogDetailLayout";
import ExpertGuides from "../../Components/ExpertGuides";
import FAQSection from "../../Components/FAQSection";
import { FALLBACK_POST_DESCRIPTION, PostDate } from "../_components";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://avenuebillingservices.com";

const RELATED_POSTS_COUNT = 6;
const FALLBACK_POST_IMAGE = "/Home/49_rectangle_79.png";
const FALLBACK_AUTHOR_IMAGE =
  "/blog detail( basically slug)/11_ellipse_198.png";

const articleBodyClasses = [
  "font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg",
  "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-inter [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-9 [&_h2]:text-heading md:[&_h2]:text-3xl",
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-inter [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-8 [&_h3]:text-heading md:[&_h3]:text-2xl",
  "[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:font-inter [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-heading",
  "[&_p]:mt-4",
  "[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6",
  "[&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6",
  "[&_a]:text-primary-light [&_a]:underline [&_a]:underline-offset-4",
  "[&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic",
  "[&_strong]:font-semibold [&_strong]:text-heading",
  "[&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse",
  "[&_td]:border [&_td]:border-neutral-500/20 [&_td]:px-3 [&_td]:py-2",
  "[&_th]:border [&_th]:border-neutral-500/20 [&_th]:bg-accent/10 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold",
].join(" ");

type RichTextData = Parameters<typeof RichText>[0]["data"];

type ResolvedMedia = {
  url?: string | null;
  alt?: string | null;
  sizes?: {
    article?: { url?: string | null } | null;
    card?: { url?: string | null } | null;
  } | null;
};

function isRichText(value: unknown): value is RichTextData {
  return Boolean(
    value &&
      typeof value === "object" &&
      "root" in value &&
      (value as { root?: unknown }).root,
  );
}

function resolveMedia(value: unknown): ResolvedMedia | null {
  return value && typeof value === "object" ? (value as ResolvedMedia) : null;
}

function formatDate(value?: string | null) {
  if (!value) return "";

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    parsed,
  );
}

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();

  return slugs
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const media = resolveMedia(post.featureImage);
  const image = media?.sizes?.article?.url || media?.url || undefined;
  const title = post.metaTitle || post.title;
  const description =
    post.metaDescription ||
    extractAllText(post.content).slice(0, 160).trim() ||
    FALLBACK_POST_DESCRIPTION;
  const canonical = `/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "Avenue Billing Services",
      title,
      description,
      ...(post.publishedDate ? { publishedTime: post.publishedDate } : {}),
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
      ...(image
        ? { images: [{ url: image, alt: media?.alt || post.title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<BlogDetailSkeleton />}>
      <BlogDetailContent post={post} />
    </Suspense>
  );
}

async function BlogDetailContent({
  post,
}: {
  post: NonNullable<Awaited<ReturnType<typeof getPostBySlug>>>;
}) {
  const media = resolveMedia(post.featureImage);
  const featuredImage =
    media?.sizes?.article?.url || media?.url || FALLBACK_POST_IMAGE;
  const featuredImageAlt = media?.alt || post.title;

  const author =
    post.author && typeof post.author === "object" ? post.author : null;
  const authorImage = resolveMedia(author?.profileImage);
  const category =
    post.category && typeof post.category === "object" ? post.category : null;

  const articleSchema =
    post.jsonSchema ??
    getArticleSchema(post as unknown as Record<string, unknown>);
  const faqSchema = getFaqSchema(post.faqs);

  const faqs = (post.faqs ?? [])
    .filter((faq) => Boolean(faq?.question && isRichText(faq.answer)))
    .map((faq) => ({
      question: faq.question,
      answer: extractAllText(faq.answer),
    }));

  const relatedPosts = await getRelatedPosts(post.category, post.slug);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <BlogDetailLayout
        title={post.title}
        featuredImage={featuredImage}
        featuredImageAlt={featuredImageAlt}
        content={
          <>
            {post.publishedDate && (
              <div className="mb-6">
                <PostDate
                  date={formatDate(post.publishedDate)}
                  dateTime={post.publishedDate}
                />
              </div>
            )}
            {isRichText(post.content) ? (
              <RichText className={articleBodyClasses} data={post.content} />
            ) : null}
          </>
        }
        tableOfContentsLabel="Table of Content"
        consultation={{
          heading: "Schedule a Free Consultation",
          specialties: [
            "Cardiology",
            "Dermatology",
            "Pediatrics",
            "Primary Care",
          ],
          monthlyCollections: [
            "Under $25,000",
            "$25,000 - $50,000",
            "$50,000 - $100,000",
            "$100,000+",
          ],
          copy: {
            practiceNameLabel: "Practice Name *",
            practiceNamePlaceholder: "Full Name",
            specialtyLabel: "Select Your Specialty *",
            specialtyPlaceholder: "Select Specialty",
            nameLabel: "Name *",
            namePlaceholder: "Enter Full Name",
            phoneLabel: "Phone Number *",
            phonePlaceholder: "(000) 000-0000",
            emailLabel: "Email Address *",
            emailPlaceholder: "Your Email Address",
            monthlyCollectionLabel: "Monthly Collection *",
            monthlyCollectionPlaceholder: "Monthly Collection",
          },
          buttonText: "Book Consultation",
        }}
        author={{
          name: author?.name || "Avenue Billing Services",
          role: author?.bio || "Medical Billing Specialist",
          image: authorImage?.url || FALLBACK_AUTHOR_IMAGE,
          imageAlt: author?.name || "Avenue Billing Services",
          published: formatDate(post.publishedDate) || "—",
          updated: formatDate(post.updatedAt) || "—",
          publishedLabel: "Published",
          updatedLabel: "Updated",
        }}
      />

      {faqs.length > 0 && (
        <FAQSection
          heading={post.faqHeading || "Frequently Asked Questions"}
          faqs={faqs}
        />
      )}

      {relatedPosts.length > 0 && (
        <ExpertGuides
          heading="Read Latest News."
          headingAlign="left"
          background="soft"
          guides={relatedPosts.map((item) => ({
            title: item.title,
            description:
              item.metaDescription || FALLBACK_POST_DESCRIPTION,
            image:
              item.image?.sizes?.card?.url || item.image?.url || FALLBACK_POST_IMAGE,
            imageAlt: item.image?.alt || item.title,
            href: `/blog/${item.slug}`,
          }))}
        />
      )}

      {category?.slug && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Blog",
                  item: `${siteUrl}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: category.name,
                  item: `${siteUrl}/blog/category/${category.slug}`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: `${siteUrl}/blog/${post.slug}`,
                },
              ],
            }),
          }}
        />
      )}
    </main>
  );
}

type RelatedPostSource = {
  title: string;
  slug: string;
  metaDescription?: string | null;
  image?: ResolvedMedia | null;
};

async function getRelatedPosts(
  category: unknown,
  currentSlug: string,
): Promise<RelatedPostSource[]> {
  const categorySlug =
    category && typeof category === "object"
      ? (category as { slug?: string | null }).slug
      : null;

  const exclude: Where = { slug: { not_equals: currentSlug } };

  const where: Where = categorySlug
    ? { and: [exclude, { "category.slug": { equals: categorySlug } }] }
    : exclude;

  const result = await getPosts(1, RELATED_POSTS_COUNT, where);

  if (result.docs.length > 0 || !categorySlug) {
    return toRelatedPosts(result.docs);
  }

  const fallback = await getPosts(1, RELATED_POSTS_COUNT, exclude);

  return toRelatedPosts(fallback.docs);
}

function toRelatedPosts(docs: { title: string; slug: string; metaDescription?: string | null; featureImage?: unknown }[]) {
  return docs.map((item) => ({
    title: item.title,
    slug: item.slug,
    metaDescription: item.metaDescription,
    image: resolveMedia(item.featureImage),
  }));
}

function BlogDetailSkeleton() {
  return (
    <main>
      <div className="h-64 w-full animate-pulse bg-sky-100" />
      <div className="w-full bg-cyan-50 py-14 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-10 px-6 lg:px-8 xl:grid-cols-[minmax(0,986px)_minmax(320px,504px)] xl:gap-[30px] 2xl:px-0">
          <div className="min-w-0">
            <div className="aspect-[986/640] w-full animate-pulse rounded-[20px] bg-sky-100" />
            <div className="mt-12 space-y-4">
              <div className="h-4 w-40 animate-pulse rounded bg-sky-100" />
              <div className="h-9 w-4/5 animate-pulse rounded bg-sky-100" />
              <div className="h-4 w-full animate-pulse rounded bg-sky-100" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-sky-100" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-sky-100" />
            </div>
          </div>
          <div className="space-y-5">
            <div className="h-12 w-full animate-pulse rounded-[60px] bg-sky-100" />
            <div className="h-72 w-full animate-pulse rounded-[20px] bg-sky-100" />
            <div className="h-48 w-full animate-pulse rounded-[20px] bg-sky-100" />
          </div>
        </div>
      </div>
    </main>
  );
}
