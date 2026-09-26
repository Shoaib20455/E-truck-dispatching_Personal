import Image from "next/image";

import {
  StaggerArticle,
  StaggerGroup,
  StaggerItem,
} from "../Components/animation/MotionElements";
import AppLink from "../Components/navigation/AppLink";

export type BlogCategory = {
  name: string;
  slug: string;
};

export type BlogPostCardData = {
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt?: string;
  href: string;
};

const chipClasses = (active: boolean) =>
  `inline-flex min-h-12 items-center justify-center rounded-[80px] px-7 py-2.5 font-manrope text-base font-normal leading-8 text-white transition-[background-color,transform,opacity] duration-200 ${
    active
      ? "bg-accent"
      : "bg-primary-light hover:bg-sky-500"
  }`;

export function CategoryChips({
  categories,
  activeSlug,
}: {
  categories: BlogCategory[];
  activeSlug?: string | null;
}) {
  const allActive = !activeSlug;

  return (
    <StaggerGroup
      stagger={0.05}
      className="mt-6 flex flex-wrap items-center gap-3"
    >
      <StaggerItem preset="pill-left" hover="soft">
        <AppLink
          href="/blog"
          aria-current={allActive ? "page" : undefined}
          className={chipClasses(allActive)}
        >
          All Posts
        </AppLink>
      </StaggerItem>

      {categories.map((category, index) => {
        const active = category.slug === activeSlug;

        return (
          <StaggerItem
            key={category.slug}
            preset={index % 2 === 0 ? "pill-left" : "pill-right"}
            hover="soft"
          >
            <AppLink
              href={`/blog/category/${category.slug}`}
              aria-current={active ? "page" : undefined}
              className={chipClasses(active)}
            >
              {category.name}
            </AppLink>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}

export function BlogPostCard({
  post,
  index = 0,
}: {
  post: BlogPostCardData;
  index?: number;
}) {
  return (
    <StaggerArticle
      preset={index % 2 === 0 ? "tile-left" : "tile-right"}
      hover="premium"
      className="group overflow-hidden rounded-[30px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.08)]"
    >
      <AppLink href={post.href} className="block overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          width={486}
          height={278}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="aspect-[486/278] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
      </AppLink>

      <div className="px-6 py-6 sm:px-8 lg:px-10">
        {post.date && <PostDate date={post.date} />}

        <h3 className="mt-3 font-inter text-2xl font-semibold leading-9 text-heading md:text-[30px]">
          <AppLink
            href={post.href}
            className="transition-colors duration-200 hover:text-primary-light"
          >
            {post.title}
          </AppLink>
        </h3>

        <p className="mt-4 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
          {post.description}
        </p>
      </div>
    </StaggerArticle>
  );
}

export function BlogPagination({
  basePath,
  currentPage,
  totalPages,
}: {
  basePath: string;
  currentPage: number;
  totalPages: number;
}) {
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const pageHref = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <nav
      className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl"
      aria-label="Blog pagination"
    >
      {currentPage > 1 && (
        <AppLink
          href={pageHref(currentPage - 1)}
          className="inline-flex items-center gap-2 transition-colors hover:text-primary-light"
          aria-label="Previous page"
        >
          <ArrowLeftIcon />
          <span>Prev</span>
        </AppLink>
      )}

      {pageNumbers.map((item) =>
        typeof item === "number" ? (
          item === currentPage ? (
            <span
              key={item}
              aria-current="page"
              className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-white"
            >
              {item}
            </span>
          ) : (
            <AppLink
              key={item}
              href={pageHref(item)}
              className="inline-flex min-w-5 items-center justify-center transition-colors hover:text-primary-light"
            >
              {item}
            </AppLink>
          )
        ) : (
          <span key={item} aria-hidden="true">
            &hellip;
          </span>
        ),
      )}

      {currentPage < totalPages && (
        <AppLink
          href={pageHref(currentPage + 1)}
          className="ml-1 inline-flex items-center gap-2 transition-colors hover:text-primary-light"
          aria-label="Next page"
        >
          <span>Next</span>
          <ArrowRightIcon />
        </AppLink>
      )}
    </nav>
  );
}

export function PostDate({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-2 font-manrope text-sm font-semibold leading-5 text-neutral-500">
      <span
        aria-hidden="true"
        className="size-2 shrink-0 rounded-full bg-accent"
      />
      <time>{date}</time>
    </div>
  );
}

function getPageNumbers(
  currentPage: number,
  totalPages: number,
): Array<number | "ellipsis-start" | "ellipsis-end"> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages: Array<number | "ellipsis-start" | "ellipsis-end"> = [1];

  if (currentPage > 3) {
    pages.push("ellipsis-start");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (currentPage < totalPages - 2) {
    pages.push("ellipsis-end");
  }

  pages.push(totalPages);
  return pages;
}

function ArrowLeftIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
