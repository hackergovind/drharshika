import AboutContent from "@/components/AboutContent";
import { pageMeta } from "@/lib/site";

/**
 * Server wrapper: /about is a heavily animated client page, so it lives in
 * components/AboutContent.tsx. A "use client" page cannot export metadata,
 * which meant /about was inheriting the home page's title, description and
 * canonical (i.e. search engines were told it was a duplicate of the home
 * page) before this split.
 */
export const metadata = pageMeta({
  title: "About Dr. Harshika Singh",
  description:
    "Meet Dr. Harshika Singh, BHMS, MD (Hom.) — a homeopathic physician focused on hormonal health, thyroid care and musculoskeletal conditions, consulting online across India.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
