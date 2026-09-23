import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { getOrganizationSchema } from "@/lib/schemas/organization";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
  title: {
    default: "E Truck Dispatching | Professional Truck Dispatch Services",
    template: "%s | E Truck Dispatching",
  },
  description:
    "Professional truck dispatching and back-office support for owner-operators and small fleets across the United States.",
  applicationName: "E Truck Dispatching",
  authors: [{ name: "E Truck Dispatching" }],
  creator: "E Truck Dispatching",
  publisher: "E Truck Dispatching",
  keywords: [
    "truck dispatch services",
    "freight dispatch services",
    "dispatch services for owner operators",
    "truck load booking",
    "back office support for trucking",
    "E Truck Dispatching",
  ],
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
