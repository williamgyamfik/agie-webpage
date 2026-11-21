import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavWrapper from "@/components/navbar/NavWrapper";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { isProduction, site, siteUrl } from "@/lib/site";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const defaultTitle = `${site.name} (${site.shortName})`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "Ghanaians in Estonia",
    "Ghana Estonia",
    "Ghanaian community Tallinn",
    "Ghanaian association",
    "Eesti Ghanalaste Ühing",
    "A.G.I.E",
    "Africans in Estonia",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  // Open Graph: Facebook, LinkedIn, WhatsApp, Slack, iMessage, etc.
  // The share image comes from app/opengraph-image.tsx.
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: defaultTitle,
    description: site.description,
  },
  // X (Twitter) uses the Open Graph image when no twitter:image is set.
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
  },
  // Keep Vercel preview deployments and local builds out of search results.
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <NavWrapper />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
