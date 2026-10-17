import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * /robots.txt — generated from SITE_URL so the Sitemap line can never drift
 * away from the domain. (There used to be a static public/robots.txt that
 * still pointed at the old *.vercel.app host.)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
      {
        // Answer engines are welcome on the public pages.
        userAgent: ["GPTBot", "Claude-Web", "Googlebot"],
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
