import type { Metadata } from "next";

/**
 * The live site's primary domain. Vercel redirects agie.ee → www.agie.ee,
 * so www is canonical. If the primary domain changes in Vercel
 * (Settings → Domains), change it here too.
 */
export const productionUrl = "https://www.agie.ee";

/**
 * Canonical site URL, used for SEO tags, social previews, sitemap and robots.
 *
 * Order of precedence:
 *  1. NEXT_PUBLIC_SITE_URL — env var override (e.g. for testing).
 *  2. productionUrl on any Vercel deployment. Previews also point their tags
 *     at production; that's fine because previews are noindex.
 *  3. localhost for local development.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL ? productionUrl : "http://localhost:3000")
).replace(/\/$/, "");

/** True only for the live production deployment (not previews or local dev). */
export const isProduction = process.env.VERCEL_ENV === "production";

export const site = {
  name: "Association of Ghanaians in Estonia",
  shortName: "A.G.I.E",
  legalName: "Eesti Ghanalaste Ühing MTÜ",
  description:
    "The Association of Ghanaians in Estonia (A.G.I.E) brings together Ghanaians living, studying and working across Estonia — community, culture, events and support.",
  locale: "en_GB",
  themeColor: "#15803d", // Tailwind green-700
  foundingDate: "2017-09",
  registrationCode: "80585799",
  city: "Tallinn",
  country: "EE",
};

/**
 * Per-page metadata with matching Open Graph / X (Twitter) tags and a
 * canonical URL. Page titles get " | A.G.I.E" appended by the root template.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | ${site.shortName}`;
  // A page-level `openGraph` replaces the root one entirely (it is not merged),
  // so the share image from app/opengraph-image.tsx must be repeated here.
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${site.name} (${site.shortName})`,
  };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: path,
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
