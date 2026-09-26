import { AnimatedSection } from "./animation/MotionElements";

import Image from "next/image";

type CategoryItem = {
  label: string;
  href?: string;
};

type BlogPostItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

type BlogListingSectionProps = {
  heading: string;
  categories: CategoryItem[];
  posts: BlogPostItem[];
  currentPage: number;
  totalPages: number;
  categoriesAriaLabel: string;
  paginationAriaLabel: string;
  nextLabel: string;
};

export default function BlogListingSection({
  heading,
  categories,
  posts,
  currentPage,
  totalPages,
  categoriesAriaLabel,
  paginationAriaLabel,
  nextLabel,
}: BlogListingSectionProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div>
          <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
            {heading}
          </h2>

          <nav
            aria-label={categoriesAriaLabel}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            {categories.map((category) => (
              <a
                key={category.label}
                href={category.href ?? "#"}
                className="inline-flex min-h-12 items-center justify-center rounded-[80px] bg-primary-light px-7 py-2.5 font-manrope text-base font-normal leading-8 text-white transition-opacity hover:opacity-90"
              >
                {category.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-[30px] gap-y-[60px] md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title + "-" + index}
              className="overflow-hidden rounded-[30px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.08)]"
            >
              {post.href ? (
                <a href={post.href} className="block overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={486}
                    height={278}
                    className="aspect-[486/278] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </a>
              ) : (
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={486}
                  height={278}
                  className="aspect-[486/278] w-full object-cover"
                />
              )}

              <div className="px-6 py-5 sm:px-8 lg:px-10">
                <h3 className="font-inter text-2xl font-semibold leading-9 text-heading md:text-[30px]">
                  {post.href ? (
                    <a
                      href={post.href}
                      className="transition-colors hover:text-primary-light"
                    >
                      {post.title}
                    </a>
                  ) : (
                    post.title
                  )}
                </h3>

                <p className="mt-4 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <nav
          aria-label={paginationAriaLabel}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl"
        >
          {pages.map((page) =>
            page === currentPage ? (
              <span
                key={page}
                aria-current="page"
                className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-white"
              >
                {page}
              </span>
            ) : (
              <a
                key={page}
                href="#"
                className="inline-flex min-w-5 items-center justify-center transition-colors hover:text-primary-light"
              >
                {page}
              </a>
            ),
          )}

          <a
            href="#"
            className="ml-1 inline-flex items-center gap-2 transition-colors hover:text-primary-light"
          >
            <span>{nextLabel}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="size-5"
            >
              <path
                d="m9 5 7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>
    </AnimatedSection>
  );
}
