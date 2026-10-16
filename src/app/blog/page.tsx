import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Health Articles",
  description:
    "Read expert articles on homeopathy, PCOS, thyroid health, joint pain, and natural wellness by Dr. Harshika Singh.",
};

export default function BlogPage() {
  return (
    <>
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-charcoal mb-4">
            Health <span className="gradient-text">Articles</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg text-balance">
            Expert insights on homeopathy, hormonal health, musculoskeletal
            wellness, and natural healing from Dr. Harshika Singh.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {["All", "Hormonal Health", "Thyroid Health", "Musculoskeletal Health", "Women's Health", "Homeopathy"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat === "All"
                      ? "bg-primary text-white"
                      : "bg-white border border-primary/15 text-muted hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 border border-primary/10 text-center">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              Stay Updated with Health Tips
            </h3>
            <p className="text-muted text-sm mb-6 max-w-md mx-auto">
              Follow Dr. Harshika on social media for regular health tips,
              homeopathic insights, and wellness advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/drharshikahomeopathy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Follow on Instagram
              </a>
              <a
                href="https://www.facebook.com/share/18qw5FdxED/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
