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
  FileText,
  Activity,
  Award,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMeta({
  title: "Best Homeopathic Doctor for PCOS & PCOD in India",
  description:
    "Consult Dr. Harshika Singh, BHMS, MD (Hom.) — specialist in natural, root-cause homeopathic treatment for PCOS/PCOD, irregular periods & hormonal balance. Online consultations across India.",
  path: "/pcos-treatment-homeopathy",
});

const pcosJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${SITE_URL}/pcos-treatment-homeopathy#webpage`,
      name: "Homeopathic Treatment for PCOS & PCOD in India",
      url: `${SITE_URL}/pcos-treatment-homeopathy`,
      description:
        "Comprehensive homeopathic management and online consultation for PCOS, PCOD, hormonal acne, weight gain, and menstrual irregularities.",
      about: {
        "@type": "MedicalCondition",
        name: "Polycystic Ovary Syndrome (PCOS/PCOD)",
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
      "@id": `${SITE_URL}/pcos-treatment-homeopathy#breadcrumb`,
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
          name: "PCOS Homeopathy Treatment",
          item: `${SITE_URL}/pcos-treatment-homeopathy`,
        },
      ],
    },
  ],
};

const symptomsTreated = [
  {
    title: "Irregular or Absent Cycles",
    desc: "Restoring regular ovulatory cycles naturally without synthetic birth control or hormone pills.",
  },
  {
    title: "Hormonal Acne & Facial Hair (Hirsutism)",
    desc: "Addressing excess androgen production from within to clear persistent cystic acne and regulate hair growth.",
  },
  {
    title: "Metabolic Weight Gain & Insulin Resistance",
    desc: "Rebalancing hormonal pathways that trigger belly fat, sugar cravings, and sluggish metabolism.",
  },
  {
    title: "Hair Thinning & Scalp Fall",
    desc: "Targeting systemic DHT sensitivity and hormonal imbalance to restore scalp health and density.",
  },
];

export default function PcosTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pcosJsonLd) }}
      />

      {/* Hero */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Root-Cause Hormonal Health · Pan-India Online Consultations</span>
          </div>

          <h1 className="font-heading text-charcoal text-3xl md:text-5xl leading-tight mb-6">
            Best Homeopathic Doctor for{" "}
            <span className="gradient-text">PCOS &amp; PCOD in India</span>
          </h1>
          <div className="section-divider" />

          <p className="text-muted mt-6 text-lg md:text-xl leading-relaxed text-balance">
            Consult <strong className="text-slate-800">Dr. Harshika Singh, BHMS, MD (Hom.)</strong> —
            offering compassionate, constitutional homeopathic care to treat the root causes of PCOS:
            insulin resistance, androgen excess, and hormonal irregularities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/book" className="btn-primary rounded-full">
              <span>Book Online PCOS Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/packages" className="btn-secondary rounded-full">
              <span>View Consultation Plans</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Approach */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Evidence-Guided Constitutional Care</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-6">
                Why Homeopathy for PCOS Works Beyond Temporary Hormone Pills
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Conventional protocols often prescribe oral contraceptive pills to force artificial withdrawal bleeding.
                  While this masks the symptom, the underlying hormonal imbalance, insulin resistance, and ovulatory
                  dysfunction remain untouched once medication stops.
                </p>
                <p>
                  At <strong>Dr. Harshika Wellness</strong>, we take a constitutional approach. Homeopathic remedies
                  stimulate your body&apos;s own endocrine system to naturally restore hormonal balance, support healthy ovulation,
                  and alleviate acne, hirsutism, and mood fluctuations without synthetic hormones or dependence.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "100% natural with zero hormonal side effects",
                  "Treats root cause, not just monthly bleeding",
                  "Convenient video/phone consultation from home",
                  "Prescribed medicines couriered across India",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Flow Card */}
            <div className="card-premium p-8 lg:p-10">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span>Our 4-Step Online PCOS Care Process</span>
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "In-Depth Case Analysis",
                    desc: "Detailed 30-45 minute video consultation covering your menstrual history, ultrasound reports, hormonal panel, stress levels, and lifestyle.",
                  },
                  {
                    step: "02",
                    title: "Constitutional Prescription",
                    desc: "Selecting individualized, German-standard homeopathic remedies tailored specifically to your hormonal profile and constitution.",
                  },
                  {
                    step: "03",
                    title: "Doorstep Medicine Delivery",
                    desc: "Safely packaged medicines couriered directly to your doorstep anywhere in India with clear dosage instructions.",
                  },
                  {
                    step: "04",
                    title: "Scheduled Follow-ups & Monitoring",
                    desc: "Regular progress reviews to track cycle regularity, symptom reduction, and adjust remedies as your endocrine health restores.",
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
                  <span>Start Your PCOS Recovery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              PCOS / PCOD Symptoms We Successfully Address
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              Each symptom reflects an underlying hormonal trigger. Our treatment is tailored to your unique totality of symptoms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {symptomsTreated.map((item, i) => (
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
