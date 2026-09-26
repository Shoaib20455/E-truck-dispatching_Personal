import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPageSlugs, getPageBySlug } from "@/lib/payload-data";
import PageRenderer from "@/lib/page-blocks/PageRenderer";
import { createPageMetadata } from "@/lib/seo";

type CmsPageParams = Promise<{ slug: string[] }>;

function toPath(segments: string[]): string {
  return segments.join("/");
}

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();

  return slugs
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug: slug.split("/").filter(Boolean) }));
}

export async function generateMetadata({
  params,
}: {
  params: CmsPageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(toPath(slug));

  if (!page) {
    return { title: "Page Not Found" };
  }

  const title = page.metaTitle || page.title;

  return createPageMetadata({
    title,
    description: page.metaDescription || title,
    path: `/${toPath(slug)}`,
  });
}

/**
 * Catch-all route that serves CMS pages. Every slug that is not claimed by a more
 * specific route is looked up in the Pages collection and rendered from its blocks.
 */
export default async function CmsPage({ params }: { params: CmsPageParams }) {
  const { slug } = await params;
  const page = await getPageBySlug(toPath(slug));

  if (!page) {
    notFound();
  }

  return (
    <main>
      <PageRenderer blocks={page.blocks} />
    </main>
  );
}
