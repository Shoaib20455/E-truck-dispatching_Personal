import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://avenuebillingservices.com";

const staticRoutes = [
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
  }));
}
