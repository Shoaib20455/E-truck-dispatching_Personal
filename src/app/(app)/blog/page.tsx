import { Suspense } from "react";

import { getCategories, getPosts } from "@/lib/payload-data";
import { createPageMetadata } from "@/lib/seo";

import ServiceHero from "../Components/ServiceHero";
import {
  AnimatedHeading,
  AnimatedSection,
  StaggerGroup,
} from "../Components/animation/MotionElements";
import {
  BlogEmptyState,
  BlogListingSkeleton,
  BlogPagination,
  BlogPostCard,
  CategoryChips,
  toBlogCategories,
  toBlogPostCardDataList,
} from "./_components";

export const metadata = createPageMetadata({
  title: "Medical Billing Blog & Insights",
  description:
    "Medical billing, coding, denial, payer, compliance, and revenue-cycle guides from Avenue Billing Services.",
  path: "/blog",
});

const POSTS_PER_PAGE = 12;

export default function BlogListingPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Information"
        description="If you are interested in our services, want to know more or have got any question's, We would be glad to answer your query. Get in touch now to find out how we can skyrocket your practice growth."
        backgroundImage="/Medical Billing analysis/1_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <Suspense fallback={<BlogListingSkeleton />}>
        <BlogListingContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function BlogListingContent({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const rawPage = Number(resolvedSearchParams?.page);
  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

  const [postResult, categoryResult] = await Promise.all([
    getPosts(page, POSTS_PER_PAGE),
    getCategories(),
  ]);

  const categories = toBlogCategories(categoryResult.docs);
  const posts = toBlogPostCardDataList(postResult.docs);

  const totalPages = Math.max(1, postResult.totalPages || 1);
  const currentPage = Math.min(page, totalPages);

  return (
    <AnimatedSection
      preset="fade-up"
      className="w-full bg-cyan-50 py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div>
          <AnimatedHeading
            text="Read Latest News."
            className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl"
          />

          <CategoryChips categories={categories} />
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
          <BlogEmptyState
            heading="No articles published yet"
            message="New medical billing, coding, payer, and revenue-cycle articles will appear here once they are published."
          />
        )}

        {totalPages > 1 && (
          <BlogPagination
            basePath="/blog"
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </AnimatedSection>
  );
}
