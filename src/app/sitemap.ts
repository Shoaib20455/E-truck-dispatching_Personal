import { getPublishedPostSlugs } from "@/lib/payload-data";
import type { MetadataRoute } from "next";

const publicRoutes = [
  "",
  "/about-us",
  "/ar-followup",
  "/author",
  "/blog",
  "/carrier",
  "/case-study-listing",
  "/commercial-blog",
  "/contact-us",
  "/credentials-and-enrollment",
  "/denial-management",
  "/ehr-emr-support",
  "/glossary",
  "/medical-billing-analysis",
  "/medical-billing",
  "/medical-coding",
  "/privacy-policy",
  "/rcm-services-location",
  "/rcm",
  "/services-location",
  "/small-practices",
  "/speciality-city-location",
  "/speciality-country-location",
  "/speciality-detail",
  "/speciality-listing",
  "/speciality-state",
  "/state-detail",
  "/state-licensing",
  "/state-we-serve",
] as const;

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL || "https://avenuebillingservices.com"
  ).replace(/\/$/, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const postSlugs = await getPublishedPostSlugs();

  const pages: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
  }));

  const posts: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
