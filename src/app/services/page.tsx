import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/utils";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Homeopathic Treatments for PCOS, Thyroid & Joint Pain",
  description:
    "Specialized homeopathic treatments for PCOS/PCOD, thyroid disorders, hormonal imbalance, arthritis, and joint pain by Dr. Harshika Singh. Online consultations across India.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-charcoal mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg text-balance">
            Comprehensive homeopathic care for hormonal and musculoskeletal
            health. Each treatment plan is individually crafted based on your
            unique constitution and symptoms.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 border border-primary/10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                  How Homeopathic Treatment Works
                </h3>
                <div className="space-y-3 text-sm text-muted leading-relaxed">
                  <p>
                    Homeopathic treatment is fundamentally different from
                    conventional medicine. Rather than suppressing symptoms,
                    it stimulates your body&apos;s own healing mechanisms to restore
                    balance and health from within.
                  </p>
                  <p>
                    Dr. Harshika selects remedies based on the totality of your
                    symptoms — physical, mental, and emotional — ensuring a
                    truly personalized approach. This constitutional method
                    leads to deep, lasting improvement rather than temporary
                    relief.
                  </p>
                  <p>
                    Treatment duration varies based on the condition&apos;s severity
                    and chronicity, but most patients notice meaningful
                    improvement within the first few weeks of treatment.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Initial consultation: 30-45 minutes of detailed case-taking",
                    "Comprehensive analysis of your health history and symptoms",
                    "Individualized constitutional remedy selection",
                    "Medicines couriered to your doorstep anywhere in India",
                    "Regular follow-ups every 2-4 weeks to track progress",
                    "Dietary and lifestyle guidance complementing your treatment",
                    "Gradual, sustainable improvement in your overall health",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
