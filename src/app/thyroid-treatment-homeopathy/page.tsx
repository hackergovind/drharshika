import Link from "next/link";
import { pageMeta, SITE_URL } from "@/lib/site";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Shield,
  ArrowRight,
  Heart,
  Activity,
  Award,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMeta({
  title: "Best Homeopathic Doctor for Thyroid in India",
  description:
    "Consult Dr. Harshika Singh, BHMS, MD (Hom.) for natural homeopathic treatment of Hypothyroidism, Hyperthyroidism & Hashimoto's. Online doctor consultations across India.",
  path: "/thyroid-treatment-homeopathy",
});

const thyroidJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${SITE_URL}/thyroid-treatment-homeopathy#webpage`,
      name: "Homeopathic Treatment for Thyroid Disorders in India",
      url: `${SITE_URL}/thyroid-treatment-homeopathy`,
      description:
        "Specialized homeopathic care for Hypothyroidism, elevated TSH levels, weight struggles, and hormonal fatigue by Dr. Harshika Singh.",
      about: {
        "@type": "MedicalCondition",
        name: "Thyroid Disorders (Hypothyroidism & Hyperthyroidism)",
        possibleTreatment: [
          {
            "@type": "MedicalTherapy",
            name: "Constitutional Homeopathy",
          },
        ],
      },
      author: {
        "@type": "Person",
        "@id": `${SITE_URL}/#doctor`,
        name: "Dr. Harshika Singh",
        jobTitle: "Homeopathic Physician",
        honorificSuffix: "BHMS, MD (Hom.)",
        url: `${SITE_URL}/about`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/thyroid-treatment-homeopathy#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Thyroid Homeopathy Treatment",
          item: `${SITE_URL}/thyroid-treatment-homeopathy`,
        },
      ],
    },
  ],
};

const thyroidConditions = [
  {
    title: "Hypothyroidism (Underactive Thyroid)",
    desc: "Elevated TSH levels, persistent lethargy, unexplained weight gain, chronic constipation, and sensitivity to cold.",
  },
  {
    title: "Hashimoto's Autoimmune Thyroiditis",
    desc: "Targeting underlying immune system overactivity to reduce thyroid antibody attacks and support glandular preservation.",
  },
  {
    title: "Hyperthyroidism & Rapid Metabolism",
    desc: "Balancing excessive thyroid hormone secretion, tremors, palpitations, anxiety, and sudden weight loss.",
  },
  {
    title: "Thyroid-Induced Hair Fall & Mood Swings",
    desc: "Gentle natural remedies to restore hair follicular vitality, hormonal equilibrium, and emotional stability.",
  },
];

export default function ThyroidTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thyroidJsonLd) }}
      />

      {/* Hero */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Targeting Metabolic &amp; Glandular Health · Pan-India Consultations</span>
          </div>

          <h1 className="font-heading text-charcoal text-3xl md:text-5xl leading-tight mb-6">
            Best Homeopathic Doctor for{" "}
            <span className="gradient-text">Thyroid in India</span>
          </h1>
          <div className="section-divider" />

          <p className="text-muted mt-6 text-lg md:text-xl leading-relaxed text-balance">
            Consult <strong className="text-slate-800">Dr. Harshika Singh, BHMS, MD (Hom.)</strong> —
            addressing thyroid dysfunction from within by stimulating your gland&apos;s natural regulation
            mechanisms without lifelong drug dependency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/book" className="btn-primary rounded-full">
              <span>Book Online Thyroid Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/packages" className="btn-secondary rounded-full">
              <span>View Packages &amp; Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Approach */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Restorative Glandular Care</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-6">
                How Homeopathy Helps Normalize Thyroid Function Naturally
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  While conventional levothyroxine provides external hormone substitution, it does not heal the sluggish
                  thyroid gland itself. Patients often find their doses continuously increasing over the years while fatigue,
                  brain fog, and stubborn weight gain persist.
                </p>
                <p>
                  Homeopathy stimulates your body&apos;s innate regulatory axis (hypothalamus-pituitary-thyroid). By addressing
                  emotional stressors, metabolic blocks, and immune balance, constitutional remedies support the thyroid gland
                  to function at its optimal physiological potential.
                </p>
                <p className="text-sm font-medium text-emerald-900 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  ⚠️ Note: Homeopathic care is complementary. You should never stop or alter prescribed allopathic
                  thyroid medicines abruptly without your clinician&apos;s guidance.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Safe to take alongside existing allopathy",
                  "Helps stabilize fluctuating TSH levels",
                  "Restores natural energy & metabolism",
                  "Pan-India courier delivery of medicines",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Card */}
            <div className="card-premium p-8 lg:p-10">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span>What to Expect in Online Consultation</span>
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Thyroid Report Evaluation",
                    desc: "Review of your recent TSH, Free T3, Free T4, and Anti-TPO antibody blood tests alongside your clinical symptom timeline.",
                  },
                  {
                    step: "02",
                    title: "Constitutional Profiling",
                    desc: "Understanding cold/heat sensitivity, metabolic rate, emotional disposition, and sleep patterns to pick the exact simillimum remedy.",
                  },
                  {
                    step: "03",
                    title: "Safe Dispatch Across India",
                    desc: "High-grade homoeopathic remedies prepared under clinical standards dispatched via express courier to your home.",
                  },
                  {
                    step: "04",
                    title: "Periodic TSH Tracking",
                    desc: "Scheduled follow-up consultations to observe physiological improvements and review repeat thyroid panel tests.",
                  },
                ].map((flow, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg flex-shrink-0">
                      {flow.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal mb-1">{flow.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{flow.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link href="/book" className="btn-primary w-full justify-center rounded-xl">
                  <span>Consult Dr. Harshika Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Thyroid Conditions Covered
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              Personalized constitutional care tailored to your specific hormonal balance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {thyroidConditions.map((item, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
