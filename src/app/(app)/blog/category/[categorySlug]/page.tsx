import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import {
  getAllCategorySlugs,
  getCategories,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/lib/payload-data";

import ServiceHero from "../../../Components/ServiceHero";
import {
  AnimatedHeading,
  AnimatedSection,
  StaggerGroup,
} from "../../../Components/animation/MotionElements";
import {
  BlogPagination,
  BlogPostCard,
  CategoryChips,
  type BlogCategory,
  type BlogPostCardData,
} from "../../_components";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://avenuebillingservices.com";

export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs();

  return slugs
    .filter((categorySlug): categorySlug is string => Boolean(categorySlug))
    .map((categorySlug) => ({ categorySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug);

  if (!category?.slug) {
    return {};
  }

  const title = `${category.name} Medical Billing Articles`;
  const description = `Browse ${category.name} medical billing articles, coding guidance, payer insights, denial-management resources, and revenue-cycle updates from Avenue Billing Services.`;
  const canonical = `/blog/category/${category.slug}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Avenue Billing Services",
      title,
      description,
      images: [
        {
          url: "/Home/1_rectangle_40.png",
          alt: "Avenue Billing Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/Home/1_rectangle_40.png"],
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
  const [{ categorySlug }, resolvedSearchParams] = await Promise.all([
    params,
    searchParams,
  ]);

  const rawPage = Number(resolvedSearchParams?.page);
  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

  const category = await getCategoryBySlug(categorySlug);

  if (!category?.slug) {
    notFound();
  }

  return (
    <main>
      <ServiceHero
        variant="compact"
        heading={`${category.name} Insights`}
        description="Explore practical medical billing guidance, payer updates, coding resources, denial-management strategies, and revenue-cycle insights for healthcare practices."
        backgroundImage="/Medical Billing analysis/1_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <Suspense fallback={<CategorySkeleton />}>
        <CategoryContent
          categorySlug={categorySlug}
          page={page}
          category={{
            name: category.name,
            slug: category.slug,
          }}
        />
      </Suspense>
    </main>
  );
}

async function CategoryContent({
  categorySlug,
  page,
  category,
}: {
  categorySlug: string;
  page: number;
  category: {
    name: string;
    slug: string;
  };
}) {
  const [postResult, categoryResult] = await Promise.all([
    getPostsByCategory(categorySlug, page, 12),
    getCategories(),
  ]);

  const categories: BlogCategory[] = categoryResult.docs
    .filter(
      (item): item is typeof item & { name: string; slug: string } =>
        Boolean(item.name && item.slug),
    )
    .map(({ name, slug }) => ({
      name,
      slug,
    }));

  const totalPages = Math.max(1, postResult.totalPages || 1);
  const currentPage = Math.min(page, totalPages);

  const posts: BlogPostCardData[] = postResult.docs.map((post) => {
    const media =
      post.featureImage && typeof post.featureImage === "object"
        ? post.featureImage
        : null;

    return {
      title: post.title,
      description:
        post.metaDescription ||
        "Read medical billing, coding, payer, denial-management, and revenue-cycle insights from Avenue Billing Services.",
      date: post.publishedDate
        ? new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
          }).format(new Date(post.publishedDate))
        : "",
      image:
        media?.sizes?.article?.url ||
        media?.sizes?.card?.url ||
        media?.url ||
        "/Home/49_rectangle_79.png",
      imageAlt: media?.alt || post.title,
      href: `/blog/${post.slug}`,
    };
  });

  return (
    <AnimatedSection
      preset="fade-up"
      className="w-full bg-cyan-50 py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div>
          <AnimatedHeading
            text={`${category.name} Articles`}
            className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl"
          />

          <CategoryChips
            categories={categories}
            activeSlug={category.slug}
          />
        </div>

        {posts.length > 0 ? (
          <StaggerGroup
            stagger={0.08}
            className="mt-14 grid grid-cols-1 gap-x-[30px] gap-y-[60px] md:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post, index) => (
              <BlogPostCard
                key={`${post.href}-${index}`}
                post={post}
                index={index}
              />
            ))}
          </StaggerGroup>
        ) : (
          <div className="mt-14 rounded-[30px] bg-white px-8 py-14 text-center shadow-[0px_10px_20px_rgba(0,0,0,0.06)]">
            <h2 className="font-inter text-2xl font-semibold text-heading md:text-3xl">
              No articles published yet
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-manrope text-base leading-8 text-neutral-500 md:text-lg">
              New articles in this category will appear here once they are
              published.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <BlogPagination
            basePath={`/blog/category/${category.slug}`}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </AnimatedSection>
  );
}

function CategorySkeleton() {
  return (
    <section className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="h-12 w-72 animate-pulse rounded-[10px] bg-sky-100" />

        <div className="mt-6 flex flex-wrap gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-12 w-32 animate-pulse rounded-[80px] bg-sky-100"
            />
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-[30px] gap-y-[60px] md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-[30px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="aspect-[486/278] animate-pulse bg-sky-100" />
              <div className="space-y-4 px-8 py-6">
                <div className="h-4 w-24 animate-pulse rounded bg-sky-100" />
                <div className="h-8 w-4/5 animate-pulse rounded bg-sky-100" />
                <div className="h-4 w-full animate-pulse rounded bg-sky-100" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-sky-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
