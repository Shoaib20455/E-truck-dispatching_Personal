const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://boxtruckdispatchservices.us";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Box Truck Dispatching",
    url: siteUrl || undefined,
    logo: siteUrl ? `${siteUrl}/logo.png` : undefined,
    description:
      "Box truck dispatch services for owner operators and fleets, including load booking, rate negotiation, paperwork support, and route planning.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1 (443) 251-4244",
      email: "info@boxtruckdispatchservices.us",
      contactType: "customer support",
      areaServed: "US",
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1250 Logistics Parkway, Suite 400",
      addressLocality: "Columbus",
      addressRegion: "OH",
      postalCode: "43215",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [],
  };
}
