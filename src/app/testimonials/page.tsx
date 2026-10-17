import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { testimonials } from "@/lib/utils";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Patient Testimonials",
  description:
    "Read real testimonials from patients who found healing through Dr. Harshika's homeopathic care for PCOS, thyroid, joint pain, and more.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-charcoal mb-4">
            Patient <span className="gradient-text">Testimonials</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg text-balance">
            Real stories from real patients whose lives have been transformed
            through Dr. Harshika&apos;s compassionate homeopathic care.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-14">
            {[
              { value: "1000+", label: "Happy Patients" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "4.9/5", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 card-premium">
                <p className="text-2xl lg:text-3xl font-heading font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={i}
              />
            ))}
          </div>

          {/* Share Your Story */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 lg:p-12 border border-primary/10">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              Share Your Healing Story
            </h3>
            <p className="text-muted text-sm max-w-lg mx-auto mb-6">
              If Dr. Harshika&apos;s treatment has helped you, we&apos;d love to hear
              your story. Your experience can inspire others to begin their
              healing journey.
            </p>
            <a
              href="mailto:drharshikawellness@gmail.com?subject=My Healing Story"
              className="btn-primary"
            >
              <span>Share Your Story</span>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
