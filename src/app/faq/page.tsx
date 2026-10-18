import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import { faqs } from "@/lib/utils";
import { pageMeta } from "@/lib/site";
import { HelpCircle, ArrowRight } from "lucide-react";

export const metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Find clear answers to common questions about homeopathic consultations, treatment timelines, medicine safety, and online appointments across India.",
  path: "/faq",
});

/** Lets Google surface these as expandable answers in the results. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-charcoal mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg text-balance">
            Everything you need to know about homeopathic treatment and
            Dr. Harshika&apos;s practice. Can&apos;t find your answer? Get in touch.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* FAQ Accordion */}
            <div className="lg:col-span-2">
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 space-y-6">
                <div className="card-premium p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-muted mb-6">
                    We&apos;re here to help. Reach out and we&apos;ll respond within
                    24 hours.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="card-premium p-8">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { href: "/services", label: "Our Services" },
                      { href: "/about", label: "About Dr. Harshika" },
                      { href: "/book", label: "Book Consultation" },
                      { href: "/testimonials", label: "Patient Stories" },
                    ].map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors group"
                        >
                          <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
