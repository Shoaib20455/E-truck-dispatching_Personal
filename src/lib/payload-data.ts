import "server-only";

import { unstable_cache } from "next/cache";
import configPromise from "@payload-config";
import { getPayload, type PaginatedDocs, type Where } from "payload";

function getPublishedWhere(): Where {
  return {
    and: [
      { status: { equals: "published" as const } },
      {
        or: [
          { publishedDate: { exists: false } },
          { publishedDate: { less_than: new Date().toISOString() } },
        ],
      },
    ],
  };
}

async function fetchPosts(page: number, limit: number, where?: Where) {
  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.find({
      collection: "posts",
      depth: 1,
      limit,
      page,
      pagination: true,
      sort: "-publishedDate",
      where: where ? { and: [getPublishedWhere(), where] } : getPublishedWhere(),
      select: {
        title: true,
        slug: true,
        featureImage: true,
        publishedDate: true,
        metaDescription: true,
        category: true,
      },
    });
  } catch {
    return { docs: [], totalDocs: 0, limit, page, totalPages: 0, hasPrevPage: false, hasNextPage: false, prevPage: null, nextPage: null, pagingCounter: 0 } as unknown as PaginatedDocs;
  }
}

export const getPosts = unstable_cache(fetchPosts, ["posts"], {
  revalidate: 60,
  tags: ["posts"],
});

async function fetchPostsByCategory(categorySlug: string, page: number, limit: number) {
  return fetchPosts(page, limit, { "category.slug": { equals: categorySlug } });
}

export const getPostsByCategory = unstable_cache(fetchPostsByCategory, ["posts-by-category"], {
  revalidate: 60,
  tags: ["posts", "categories"],
});

async function fetchPostBySlug(slug: string) {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      depth: 2,
      limit: 1,
      pagination: false,
      where: {
        and: [getPublishedWhere(), { slug: { equals: slug } }],
      },
      select: {
        title: true,
        slug: true,
        author: true,
        category: true,
        featureImage: true,
        content: true,
        faqs: true,
        faqHeading: true,
        metaTitle: true,
        metaDescription: true,
        jsonSchema: true,
        publishedDate: true,
        updatedAt: true,
      },
    });

    const post = result.docs[0] ?? null;
    if (post) return post;
  } catch {
    // DB unavailable
  }

  return null;
}

export const getPostBySlug = unstable_cache(fetchPostBySlug, ["post"], {
  revalidate: 60,
  tags: ["posts"],
});

async function fetchPublishedPostSlugs() {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      depth: 0,
      limit: 1000,
      pagination: false,
      where: getPublishedWhere(),
      select: { slug: true },
    });

    return result.docs.map(({ slug }) => slug);
  } catch {
    return [];
  }
}

export const getPublishedPostSlugs = unstable_cache(fetchPublishedPostSlugs, ["post-slugs"], {
  revalidate: 3600,
  tags: ["posts"],
});

async function fetchCategories() {
  try {
    const payload = await getPayload({ config: configPromise });
    return await payload.find({
      collection: "categories",
      depth: 0,
      limit: 100,
      pagination: false,
      sort: "name",
      select: { name: true, slug: true },
    });
  } catch {
    return { docs: [], totalDocs: 0 } as unknown as PaginatedDocs;
  }
}

export const getCategories = unstable_cache(fetchCategories, ["categories"], {
  revalidate: 86400,
  tags: ["categories", "posts"],
});

async function fetchCategoryBySlug(slug: string) {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "categories",
      depth: 0,
      limit: 1,
      pagination: false,
      where: { slug: { equals: slug } },
      select: { name: true, slug: true },
    });

    return result.docs[0] ?? null;
  } catch {
    return null;
  }
}

export const getCategoryBySlug = unstable_cache(fetchCategoryBySlug, ["category-by-slug"], {
  revalidate: 86400,
  tags: ["categories"],
});

async function fetchAllCategorySlugs() {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "categories",
      depth: 0,
      limit: 100,
      pagination: false,
      select: { slug: true },
    });

    return result.docs.map(({ slug }) => slug);
  } catch {
    return [];
  }
}

export const getAllCategorySlugs = unstable_cache(fetchAllCategorySlugs, ["category-slugs"], {
  revalidate: 86400,
  tags: ["categories"],
});
