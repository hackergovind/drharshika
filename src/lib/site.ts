import type { Metadata } from "next";

/**
 * Single source of truth for the public site URL.
 *
 * Everything that has to be absolute — canonicals, Open Graph URLs, the
 * sitemap, robots.txt and the JSON-LD graph — reads it from here, so the
 * domain only ever has to change in one place.
 */
export const SITE_URL = "https://drharshika.in";

export const SITE_NAME = "Dr. Harshika Wellness";

export const SITE_TAGLINE = "Healing from Within, Naturally";

export const SITE_DESCRIPTION =
  "Expert homeopathic care for PCOS, thyroid, hormonal imbalance & joint pain by Dr. Harshika Singh, BHMS MD (Hom.). Online consultations across India.";

/**
 * Social preview image. Note the real dimensions: the asset is square
 * (1024x1024), so declaring 1200x630 made crawlers crop it badly.
 */
export const DEFAULT_OG_IMAGE = "/images/dr-harshika-og.png";
export const DEFAULT_OG_IMAGE_SIZE = { width: 1024, height: 1024 };

/** Absolute URL for a site path. `absoluteUrl("/packages")` → https://drharshika.in/packages */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

type PageMetaOptions = {
  /** Page title. The root layout appends " | Dr. Harshika Wellness". */
  title: string;
  description: string;
  /** Root-relative path, e.g. "/packages". Drives the canonical and og:url. */
  path: string;
  /** Open Graph type; use "article" for blog posts. */
  type?: "website" | "article";
  /** ISO date, only meaningful for type: "article". */
  publishedTime?: string;
  /** Keep the page out of search results (dashboard, thank-you screens). */
  noindex?: boolean;
};

/**
 * Builds a page's metadata: title, description, its own canonical, and
 * matching Open Graph / Twitter cards.
 *
 * Every page should use this. Without it a page inherits the root layout's
 * canonical, which tells search engines the page is a duplicate of the home
 * page and quietly drops it from the index.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  noindex = false,
}: PageMetaOptions): Metadata {
  const url = absoluteUrl(path);
  const image = {
    url: DEFAULT_OG_IMAGE,
    ...DEFAULT_OG_IMAGE_SIZE,
    alt: title,
  };

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          title,
          description,
          url,
          siteName: SITE_NAME,
          locale: "en_IN",
          type: "article",
          publishedTime,
          images: [image],
        }
      : {
          title,
          description,
          url,
          siteName: SITE_NAME,
          locale: "en_IN",
          type: "website",
          images: [image],
        };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
