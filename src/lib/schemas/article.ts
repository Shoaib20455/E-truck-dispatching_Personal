import { extractAllText } from "@/lib/extract-headings";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://avenuebillingservices.com";

type PostAuthor = { name?: string; email?: string };
type PostCategory = { name?: string; slug?: string };
type PostFeatureImage = {
  url?: string;
  alt?: string;
  sizes?: { article?: { url?: string } };
};

export function getArticleSchema(post: Record<string, unknown>) {
  const author =
    post.author && typeof post.author === "object"
      ? (post.author as unknown as PostAuthor)
      : null;
  const category =
    post.category && typeof post.category === "object"
      ? (post.category as unknown as PostCategory)
      : null;
  const featureImage =
    post.featureImage && typeof post.featureImage === "object"
      ? (post.featureImage as unknown as PostFeatureImage)
      : null;

  const articleImage =
    featureImage?.sizes?.article?.url || featureImage?.url || undefined;
  const authorName =
    author?.name || author?.email || "Avenue Billing Services";
  const categoryName = category?.name || undefined;

  const description =
    post.metaDescription ||
    extractAllText(post.content).slice(0, 160).trim() ||
    undefined;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Avenue Billing Services",
      url: siteUrl || undefined,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl ? `${siteUrl}/blog/${post.slug}` : `/blog/${post.slug}`,
    },
    url: siteUrl ? `${siteUrl}/blog/${post.slug}` : `/blog/${post.slug}`,
  };

  if (articleImage) {
    schema.image = articleImage;
  }

  if (post.publishedDate) {
    schema.datePublished = post.publishedDate;
  }

  if (post.updatedAt) {
    schema.dateModified = post.updatedAt;
  }

  if (categoryName) {
    schema.articleSection = categoryName;
  }

  return schema;
}
