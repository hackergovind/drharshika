import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * /robots.txt — Optimized for Search & AEO (Answer Engine Optimization)
 *
 * Rules:
 * 1. Allow search engines & AI answer engines (Googlebot, Bingbot, GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot).
 * 2. Block pure AI scraping/training crawlers (Google-Extended, Applebot-Extended, Bytespider, CCBot, etc.).
 * 3. Disallow private directories (/api/, /dashboard/) for all bots.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Block AI training & web scrapers from harvesting content for training
      {
        userAgent: [
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
          "Bytespider",
          "CCBot",
          "Diffbot",
          "anthropic-ai",
          "cohere-ai",
          "MistralAI-Training",
          "meta-externalagent",
          "omgili",
          "PetalBot",
        ],
        disallow: ["/"],
      },
      // Explicitly allow AI Search, Answer Engines & Major Web Crawlers
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
        ],
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
      // Default rule for all other legitimate crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
