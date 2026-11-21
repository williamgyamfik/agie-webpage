import type { MetadataRoute } from "next";
import { isProduction, siteUrl } from "@/lib/site";

// Served at /robots.txt. Only the production deployment may be indexed;
// Vercel preview deployments block crawlers to avoid duplicate content.
export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
