import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import JsonLd from "../../components/JsonLd";
import { getArticleSchema } from "@/lib/schemas/article";
import { getFaqSchema } from "@/lib/schemas/faq";
import { extractAllText } from "@/lib/extract-headings";

import type { Post } from "@/payload-types";
import HeroSection from "../../components/HeroSection";
import FAQSection from "../../components/FAQs";
import VisionFormSection from "../../components/VisionFormSection";
import { getPostBySlug, getPublishedPostSlugs } from "@/lib/payload-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etruckdispatchservices.us";

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || "",
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

function isRichText(value: unknown): value is SerializedEditorState {
  return Boolean(
    value &&
      typeof value === "object" &&
      "root" in value &&
      (value as { root?: unknown }).root,
  );
}

type PostFaq = NonNullable<Post["faqs"]>[number];
type BlogFaq = Omit<PostFaq, "answer"> & { answer: SerializedEditorState };

const formFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Suspense fallback={<BlogDetailSkeleton />}>
      <BlogDetailContent slug={slug} />
    </Suspense>
  );
}

async function BlogDetailContent({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const featureImage =
    post.featureImage && typeof post.featureImage === "object"
      ? (post.featureImage as unknown as Record<string, unknown>)
      : null;
  const featureImageSizes =
    featureImage?.sizes && typeof featureImage.sizes === "object"
      ? (featureImage.sizes as Record<string, unknown>)
      : null;
  const articleImage =
    featureImageSizes?.article && typeof featureImageSizes.article === "object"
      ? (featureImageSizes.article as Record<string, unknown>)
      : null;
  const featureImageUrl =
    (articleImage?.url as string) || (featureImage?.url as string) || "/Blog/images/1_rectangle_1450.webp";
  const featureImageAlt = (featureImage?.alt as string) || post.title;

  const content = isRichText(post.content) ? post.content : null;

  const formattedFaqs = (post.faqs ?? [])
    .filter((faq) => Boolean(faq?.question && isRichText(faq.answer)))
    .map((faq) => {
      const faqId = faq.question
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      return {
        question: faq.question,
        answer: extractAllText(faq.answer),
        id: `faq-${faqId}`,
      };
    });

  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.jsonSchema ?? getArticleSchema(post)),
        }}
      />
      {(() => {
        const faqSchema = getFaqSchema(post.faqs);
        return faqSchema ? <JsonLd data={faqSchema} /> : null;
      })()}

      <HeroSection
        h1={
          <>
            Guides & Dispatch
            <span className="block">Insights</span>
          </>
        }
        paragraphs={[
          "Step-by-step resources designed to help owner-operators and fleets improve load selection, increase revenue per mile, and stay compliant on every run.",
        ]}
        backgroundImage="/Blog Single Page/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />

      <section className="bg-[#1c1c1c] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[904px] sm:w-[calc(100%-64px)]">
          <p className="text-center font-['Outfit'] text-sm font-semibold uppercase tracking-[0.18em] text-[#b34b0c]">
            {featureImageAlt}
          </p>
          <h2 className="mt-3 text-center font-['Outfit'] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h2>

          {/* Author Byline */}
          {post.author && typeof post.author === "object" && post.author !== null ? (
            <div className="flex items-center justify-center space-x-3 mb-6">
              {post.author.profileImage && typeof post.author.profileImage === "object" && post.author.profileImage !== null && post.author.profileImage.url ? (
                <Image
                  src={post.author.profileImage.url}
                  alt={`${post.author.name}'s profile`}
                  width={40}
                  height={40}
                  className="rounded-full"
                  priority
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  {post.author.name?.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="text-left">
                <p className="font-['Outfit'] text-[16px] font-medium text-white">
                  {post.author.name}
                </p>
                {post.author.bio && (
                  <p className="text-xs text-gray-400">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          ) : null}

          <div className="mx-auto mt-8 aspect-[2/1] w-full max-w-[820px] overflow-hidden rounded-2xl bg-[#161616]">
            {featureImageUrl ? (
              <img
                src={featureImageUrl}
                alt={featureImageAlt}
                className="h-full w-full object-contain"
              />
            ) : null}
          </div>

          {content && (
            <article className="prose prose-invert mx-auto mt-10 max-w-none font-['DM_Sans'] text-base leading-7 text-white/85 sm:text-lg sm:leading-8 [&_a]:text-[#d95408] [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#b34b0c] [&_blockquote]:pl-5 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:font-['Outfit'] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-white [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-['Outfit'] [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-tight [&_h3]:text-white [&_li]:mb-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-7 [&_p]:mb-4 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-7 [&_strong]:font-semibold [&_strong]:text-white [&_table]:my-5 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-[5px] [&_table]:border [&_table]:border-white/10 [&_td]:border [&_td]:border-white/10 [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_th]:border [&_th]:border-white/10 [&_th]:bg-white/5 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold">
              <RichText data={content} />
            </article>
          )}
        </div>
      </section>

      {formattedFaqs.length > 0 && (
        <FAQSection
          heading={post.faqHeading || "Frequently Asked Questions"}
          description="Get answers about trucking bookkeeping, freight invoicing, payroll, IFTA reporting, tax preparation, and financial management."
          image="/Accounting/images/37_rectangle_1441.webp"
          imageAlt="Accounting professional managing trucking financial records"
          faqs={formattedFaqs}
        />
      )}

      <VisionFormSection
        heading={
          <>
            <span className="block whitespace-nowrap">Get Real Dispatch</span>
            <span className="block whitespace-nowrap">
              Support That Drives{" "}
            </span>
            <span className="block">Revenue</span>
          </>
        }
        paragraphs={[
          "From load booking to paperwork and compliance, we handle everything so you can focus on driving and scaling your business.",
        ]}
        fields={formFields}
      />
    </main>
  );
}

function extractPlainText(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const obj = node as Record<string, unknown>;
  if (typeof obj.text === "string") return obj.text;
  if (Array.isArray(obj.children)) {
    return obj.children.map((child) => extractPlainText(child)).join("");
  }
  return "";
}

function BlogDetailSkeleton() {
  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <div className="min-h-[600px] animate-pulse bg-[#1a1a1a]" />
      <div className="mx-auto w-[calc(100%-40px)] max-w-[904px] py-16 sm:w-[calc(100%-64px)]">
        <div className="mx-auto h-10 w-72 animate-pulse rounded bg-[#1a1a1a]" />
        <div className="mx-auto mt-6 h-12 w-3/4 animate-pulse rounded bg-[#1a1a1a]" />
        <div className="mt-8 aspect-[2/1] w-full animate-pulse rounded-2xl bg-[#1a1a1a]" />
        <div className="mt-10 space-y-4">
          <div className="h-5 w-full animate-pulse rounded bg-[#1a1a1a]" />
          <div className="h-5 w-11/12 animate-pulse rounded bg-[#1a1a1a]" />
          <div className="h-5 w-10/12 animate-pulse rounded bg-[#1a1a1a]" />
        </div>
      </div>
    </main>
  );
}
