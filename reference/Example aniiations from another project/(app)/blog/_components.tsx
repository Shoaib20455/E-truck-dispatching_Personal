import Image from "next/image";
import Link from "next/link";

export type BlogCategory = { name: string; slug: string };

export type BlogPostCardData = {
  title: string;
  description: string;
  date: string;
  image: string;
  href: string;
};

const chipClasses = (active: boolean) =>
  `inline-flex min-h-10 items-center justify-center px-5 py-2.5 font-[family-name:var(--font-outfit)] text-sm font-semibold transition-colors sm:text-base ${
    active ? "bg-[#cf5a13] text-white" : "bg-[#b34b0c] text-white hover:bg-[#cf5a13]"
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
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
      <Link
        href="/blog"
        scroll={false}
        aria-current={allActive ? "page" : undefined}
        className={chipClasses(allActive)}
      >
        All Posts
      </Link>
      {categories.map((category) => {
        const active = category.slug === activeSlug;
        return (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            scroll={false}
            aria-current={active ? "page" : undefined}
            className={chipClasses(active)}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}

export function BlogPostCard({ post }: { post: BlogPostCardData }) {
  return (
    <article className="group min-w-0">
      <Link href={post.href} className="block no-underline">
        <div className="relative aspect-[500/330] w-full overflow-hidden bg-[#171717]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1280px) 500px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
          />
        </div>

        <div className="mt-5 flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-sm leading-4 text-white/80">
          <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[#b34b0c]" />
          <time>{post.date}</time>
        </div>

        <h3 className="mt-3 max-w-[24rem] font-[family-name:var(--font-outfit)] text-xl font-semibold leading-8 text-white transition-colors group-hover:text-[#cf5a13]">
          {post.title}
        </h3>

        <p className="mt-3 max-w-[30rem] font-[family-name:var(--font-dm-sans)] text-base leading-6 text-white/80">
          {post.description}
        </p>
      </Link>
    </article>
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
  const pageHref = (page: number) => (page === 1 ? basePath : `${basePath}?page=${page}`);

  return (
    <nav
      className="mt-16 flex flex-wrap items-center justify-center gap-4 font-[family-name:var(--font-outfit)] text-[24px] font-semibold text-[#012F42]"
      aria-label="Blog pagination"
    >
      {currentPage > 1 && (
        <Link
          href={pageHref(currentPage - 1)}
          className="inline-flex items-center gap-2 text-[#012F42] no-underline transition-colors hover:text-[#FE8F02]"
          aria-label="Previous page"
        >
          <ArrowLeftIcon />
          Prev
        </Link>
      )}
      {pageNumbers.map((item) =>
        typeof item === "number" ? (
          item === currentPage ? (
            <span
              key={item}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FE8F02] text-[30px] leading-none text-white"
              aria-current="page"
            >
              {item}
            </span>
          ) : (
            <Link
              key={item}
              href={pageHref(item)}
              className="text-[#012F42] no-underline transition-colors hover:text-[#FE8F02]"
            >
              {item}
            </Link>
          )
        ) : (
          <span key={item} className="text-[#012F42]" aria-hidden="true">
            &hellip;
          </span>
        ),
      )}
      {currentPage < totalPages && (
        <Link
          href={pageHref(currentPage + 1)}
          className="inline-flex items-center gap-2 text-[#012F42] no-underline transition-colors hover:text-[#FE8F02]"
        >
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </nav>
  );
}

export function PostDate({ date }: { date: string }) {
  return (
    <div className="mt-7 flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-[14px] leading-4 text-[#FE8F02]">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FE8F02]" />
      {date}
    </div>
  );
}

function getPageNumbers(
  currentPage: number,
  totalPages: number,
): Array<number | "ellipsis-start" | "ellipsis-end"> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: Array<number | "ellipsis-start" | "ellipsis-end"> = [1];

  if (currentPage > 3) {
    pages.push("ellipsis-start");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  for (let i = start; i <= end; i += 1) {
    pages.push(i);
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
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
