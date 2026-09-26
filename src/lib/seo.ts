import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Avenue Billing Services",
      title,
      description,
      images: [
        {
          url: "/Home/1_rectangle_40.png",
          alt: "Avenue Billing Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/Home/1_rectangle_40.png"],
    },
  };
}
