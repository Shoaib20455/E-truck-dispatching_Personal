import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { getOrganizationSchema } from "@/lib/schemas/organization";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MotionProvider from "./Components/animation/MotionProvider";
import LenisProvider from "./Components/animation/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://avenuebillingservices.com",
  ),
  title: {
    default: "Avenue Billing Services | Medical Billing & RCM Services",
    template: "%s | Avenue Billing Services",
  },
  description:
    "Medical billing, coding, denial management, A/R management, credentialing, state licensing, and revenue cycle management services for healthcare practices across the United States.",
  applicationName: "Avenue Billing Services",
  authors: [{ name: "Avenue Billing Services" }],
  creator: "Avenue Billing Services",
  publisher: "Avenue Billing Services",
  keywords: [
    "medical billing services",
    "revenue cycle management",
    "medical coding",
    "denial management",
    "accounts receivable management",
    "provider credentialing",
    "state licensing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Avenue Billing Services",
    title: "Avenue Billing Services | Medical Billing & RCM Services",
    description:
      "Medical billing and revenue cycle management services for healthcare practices across the United States.",
    images: [
      {
        url: "/Home/1_rectangle_40.png",
        alt: "Avenue Billing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenue Billing Services | Medical Billing & RCM Services",
    description:
      "Medical billing and revenue cycle management services for healthcare practices across the United States.",
    images: ["/Home/1_rectangle_40.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full overflow-x-hidden bg-bg-main text-text"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <MotionProvider>
          <LenisProvider>
            <Navbar />
            {children}
            <Footer />
          </LenisProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
