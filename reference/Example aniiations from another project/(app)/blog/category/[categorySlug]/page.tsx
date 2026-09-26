import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { getAllCategorySlugs, getCategories, getCategoryBySlug, getPostsByCategory } from "@/lib/payload-data";

import LeadCaptureForm from "../../../components/LeadCaptureForm";
import HeroSection from "../../../components/HeroSection";
import VisionFormSection from "../../../components/VisionFormSection";
import { BlogPagination, BlogPostCard, CategoryChips, type BlogCategory, type BlogPostCardData } from "../../_components";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://boxtruckdispatchservices.us";

const formFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs();
  return slugs.map((categorySlug) => ({ categorySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: `${category.name} — Blog`,
    description: `Browse all ${category.name} blog posts with box truck dispatch guides, load selection tips, and industry insights.`,
    alternates: { canonical: `${siteUrl}/blog/category/${category.slug}` },
    openGraph: {
      title: `${category.name} — Blog`,
      description: `Browse all ${category.name} blog posts with box truck dispatch guides, load selection tips, and industry insights.`,
      url: `${siteUrl}/blog/category/${category.slug}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const [{ categorySlug }, resolved] = await Promise.all([params, searchParams]);
  const rawPage = Number(resolved?.page);
  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

  const category = await getCategoryBySlug(categorySlug);
  if (!category || !category.slug) notFound();

  return (
    <div className="bg-[#1c1c1c] pb-20">
      <HeroSection
        h1={
          <>
            Guides & Dispatch
            <span className="block">Insights</span>
          </>
        }
        fixedTitle="Guides & Dispatch"
        typingTitles={[
          "Insights",
          "Strategies",
          "Resources",
          "Carrier Growth Tips",
        ]}
        paragraphs={[
          "Step-by-step resources designed to help owner-operators and fleets improve load selection, increase revenue per mile, and stay compliant on every run.",
        ]}
        backgroundImage="/Blog/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />

      <Suspense fallback={<CategorySkeleton />}>
        <CategoryContent categorySlug={categorySlug} page={page} category={category} />
      </Suspense>

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
    </div>
  );
}

async function CategoryContent({
  categorySlug,
  page,
  category,
}: {
  categorySlug: string;
  page: number;
  category: { name: string; slug?: string | null | undefined };
}) {
  const [postResult, categoryResult] = await Promise.all([
    getPostsByCategory(categorySlug, page, 12),
    getCategories(),
  ]);
  const categories: BlogCategory[] = categoryResult.docs.length
    ? categoryResult.docs.map(({ name, slug }) => ({ name, slug }))
    : [];
  const totalPages = Math.max(1, postResult.totalPages || 1);
  const currentPage = Math.min(page, totalPages);
  const posts: BlogPostCardData[] = postResult.docs.length
    ? postResult.docs.map((post) => {
        const media = post.featureImage && typeof post.featureImage === "object" ? post.featureImage : null;
        return {
          title: post.title,
          description: post.metaDescription || "Read the latest dispatch insights for owner-operators and fleets.",
          date: post.publishedDate ? new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(post.publishedDate)) : "",
          image: media?.sizes?.article?.url || media?.url || "/Images/Rectangle 249-2x.webp",
          href: `/blog/${post.slug}`,
        };
      })
    : [];

  return (
    <>
      <section className="mx-auto mt-20 w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)] pb-16 lg:pb-20">
        <h2 className="text-center font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-white lg:text-[48px] lg:leading-[58px]">
          {category.name}
        </h2>

        <CategoryChips categories={categories} activeSlug={category.slug} />

        <div className="mt-14 grid gap-x-5 gap-y-[70px] sm:grid-cols-2 md:grid-cols-3">
          {posts.length ? (
            posts.map((post, index) => (
              <BlogPostCard key={`${post.href}-${index}`} post={post} />
            ))
          ) : (
            <p className="col-span-full text-center font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white/70">
              No posts in this category yet.
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <BlogPagination
            basePath={`/blog/category/${category.slug}`}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </section>
    </>
  );
}

function CategorySkeleton() {
  return (
    <section className="mx-auto mt-20 w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)] animate-pulse">
      <div className="mx-auto h-12 w-80 rounded bg-gray-700" />
      <div className="mt-8 flex justify-center gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 w-32 rounded bg-gray-700" />
        ))}
      </div>
      <div className="mt-14 grid gap-x-5 gap-y-[70px] sm:grid-cols-2 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="overflow-hidden rounded-[10px]">
            <div className="aspect-[50/33] rounded-[10px] bg-gray-700" />
            <div className="pt-5 space-y-3">
              <div className="h-4 w-24 rounded bg-gray-700" />
              <div className="h-6 w-3/4 rounded bg-gray-700" />
              <div className="h-4 w-full rounded bg-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}