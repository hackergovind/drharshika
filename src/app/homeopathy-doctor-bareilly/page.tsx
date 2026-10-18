import Link from "next/link";
import { pageMeta, SITE_URL } from "@/lib/site";
import {
  MapPin,
  Calendar,
  Phone,
  Clock,
  CheckCircle2,
  Shield,
  Award,
  ArrowRight,
  Heart,
  FileText,
  UserCheck,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata = pageMeta({
  title: "Best Homeopathy Doctor in Bareilly | Dr. Harshika Singh",
  description:
    "Looking for the best homeopathy doctor in Bareilly? Consult Dr. Harshika Singh, BHMS, MD (Hom.) for specialized treatment in PCOS, thyroid disorders, and joint pain.",
  path: "/homeopathy-doctor-bareilly",
});

const localJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/homeopathy-doctor-bareilly#doctor`,
      name: "Dr. Harshika Singh",
      jobTitle: "Senior Homeopathic Consultant",
      honorificSuffix: "BHMS, MD (Hom.)",
      url: `${SITE_URL}/homeopathy-doctor-bareilly`,
      telephone: "+91-9999999999",
      email: "drharshikawellness@gmail.com",
      medicalSpecialty: "Homeopathy",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bareilly",
        addressRegion: "Uttar Pradesh",
        postalCode: "243001",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Bareilly",
        },
        {
          "@type": "AdministrativeArea",
          name: "Rohilkhand Region, Uttar Pradesh",
        },
      ],
      description:
        "Top-rated homeopathic physician in Bareilly specializing in root-cause holistic treatment for PCOS/PCOD, thyroid disorders, arthritis, and chronic pain.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/homeopathy-doctor-bareilly#breadcrumb`,
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
          name: "Homeopathy Doctor in Bareilly",
          item: `${SITE_URL}/homeopathy-doctor-bareilly`,
        },
      ],
    },
  ],
};

const specialties = [
  {
    title: "PCOS & PCOD Treatment",
    desc: "Natural hormonal regulation without synthetic birth control or side effects. Helps restore regular menstrual cycles and ovulatory health.",
  },
  {
    title: "Thyroid Disorders (Hypo & Hyper)",
    desc: "Individualized constitutional remedies that stimulate natural thyroid hormone regulation and boost metabolic health.",
  },
  {
    title: "Joint Pain, Arthritis & Spondylosis",
    desc: "Effective homeopathic pain management for cervical spondylosis, knee osteo-arthritis, and rheumatoid mobility stiffness.",
  },
  {
    title: "Weight & Metabolic Well-being",
    desc: "Targeting root metabolic sluggishness, hormonal weight gain, and constitutional lifestyle guidance.",
  },
];

const highlights = [
  "Verified MD (Homoeopathy) Post-Graduate Physician",
  "Holistic root-cause treatment with zero side effects",
  "Convenient clinic consultations & online follow-ups across Bareilly",
  "Standard courier delivery of genuine German-standard homeopathic medicines",
];

export default function BareillyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localJsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Bareilly, Uttar Pradesh &amp; Pan-India Consultations</span>
          </div>
          <h1 className="font-heading text-charcoal text-3xl md:text-5xl leading-tight mb-6">
            Best Homeopathy Doctor in{" "}
            <span className="gradient-text">Bareilly</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 text-lg md:text-xl leading-relaxed text-balance">
            Consult <strong className="text-slate-800">Dr. Harshika Singh (BHMS, MD Hom.)</strong> —
            offering compassionate, evidence-based homeopathic healing for chronic hormonal,
            thyroid, and musculoskeletal conditions in Bareilly and surrounding regions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/book" className="btn-primary rounded-full">
              <span>Book Bareilly Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/packages" className="btn-secondary rounded-full">
              <span>View Packages &amp; Fees</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Trusted Healthcare in Bareilly</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-6">
                Why Patients in Bareilly Choose Dr. Harshika Singh
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                When dealing with long-standing health concerns like hormonal imbalance, thyroid
                dysfunction, or debilitating joint pain, temporary symptom suppression with painkillers
                often falls short. Dr. Harshika Singh approaches each patient constitutionally —
                evaluating clinical history, emotional stress, lifestyle factors, and physical vitality.
              </p>
              <ul className="space-y-3 mb-8">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-charcoal">
                    Dr. Harshika Singh
                  </h4>
                  <p className="text-xs text-slate-500">
                    BHMS, MD (Hom.) · Qualified Homeopathic Physician
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Overview Card */}
            <div className="card-premium p-8 lg:p-10">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Consultation Details for Bareilly Residents</span>
              </h3>

              <div className="space-y-5 text-sm text-slate-600">
                <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-800 block mb-0.5">Consultation Timings</strong>
                    <span>Monday to Saturday: 10:00 AM – 7:00 PM (By Prior Appointment)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-800 block mb-0.5">Location Coverage</strong>
                    <span>Civil Lines, Rajendra Nagar, DD Puram, Model Town, &amp; Greater Bareilly Region</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-800 block mb-0.5">Medicine Delivery</strong>
                    <span>Doorstep doorstep courier dispatch across all Bareilly pin codes within 24–48 hours.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-800 block mb-0.5">Case-Taking Process</strong>
                    <span>Detailed 30-45 minute initial case history analysis, report review, and personalized prescription.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link href="/book" className="btn-primary w-full justify-center rounded-xl">
                  <span>Schedule Your Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Treatment Specialties */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Key Health Conditions Treated
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 mt-4 text-sm md:text-base">
              Providing constitutional homeopathic care for chronic conditions with measurable recovery tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {specialties.map((item, i) => (
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

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
