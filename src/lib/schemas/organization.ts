const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://avenuebillingservices.com";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Avenue Billing Services",
    url: siteUrl,
    logo: `${siteUrl}/Home/1_rectangle_40.png`,
    description:
      "Medical billing, coding, denial management, A/R management, credentialing, state licensing, and revenue cycle management services for healthcare practices across the United States.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-737-787-2147",
      email: "info@imedclaims.com",
      contactType: "customer support",
      areaServed: "US",
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "4309 Schubert",
      addressLocality: "Colleyville",
      addressRegion: "TX",
      postalCode: "76034",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [],
  };
}
