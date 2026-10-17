import {
  CalendarCheck,
  ClipboardList,
  Package,
  Repeat,
  type LucideIcon,
} from "lucide-react";
import ConsultationPackages from "@/components/ConsultationPackages";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Consultation Packages",
  description:
    "Medicine-inclusive online homeopathic consultation packages — 1, 3, 6 and 12 month care plans with prescribed medicines and standard courier delivery across India.",
  path: "/packages",
});

const steps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: CalendarCheck,
    title: "Book your consultation",
    body: "Choose the package that matches your health goals and book an online consultation slot. Consultations are held over video or phone.",
  },
  {
    icon: ClipboardList,
    title: "Detailed case-taking",
    body: "Your first consultation covers your health history, current symptoms, lifestyle and any reports you share, so the prescription is based on your individual case.",
  },
  {
    icon: Package,
    title: "Personalized plan and medicines",
    body: "A treatment plan is prepared for your case, and the prescribed medicines are dispatched to your address by standard courier delivery.",
  },
  {
    icon: Repeat,
    title: "Follow-ups and progress tracking",
    body: "Follow-up sessions are scheduled as per your plan to review progress and adjust the prescription when needed.",
  },
];

const packageFaqs: { question: string; answer: string }[] = [
  {
    question: "Are the packages available across India?",
    answer:
      "Yes. All consultations are online, so you can consult from anywhere in India. The prescribed medicines are dispatched by standard courier delivery to the address you provide.",
  },
  {
    question: "Are medicines and delivery included in the package price?",
    answer:
      "Yes. Each plan includes the consultation, the prescribed homeopathic medicines for the plan duration, and standard courier delivery, as listed on the individual plan. Quantities follow the dosage and duration advised for your case.",
  },
  {
    question: "Which duration should I choose — 1, 3, 6 or 12 months?",
    answer:
      "It depends on your condition and how long you have had it. Long-standing or chronic complaints are usually reviewed over a longer course, while a shorter plan can suit a recent or limited concern. If you are unsure, send a short summary of your case on WhatsApp and a suitable plan will be suggested.",
  },
  {
    question: "How are follow-up consultations scheduled?",
    answer:
      "Follow-ups are scheduled in advance as per your plan. Starter Care (1 month) includes two scheduled follow-up sessions, while the longer plans include monthly progress consultations.",
  },
  {
    question: "Can the price change from what is listed?",
    answer:
      "The listed prices are indicative and include the consultation, prescribed medicines and standard courier delivery as specified in each plan. Actual charges may vary slightly depending on the individual case, clinical requirements, dosage, quantity, treatment duration and delivery location. Any additional charges, if applicable, are communicated in advance and confirmed before payment.",
  },
  {
    question: "Is a cure guaranteed?",
    answer:
      "No. No treatment can be guaranteed, and homeopathy is no exception. The aim is to support your body's own healing with an individualized constitutional prescription. How quickly and how much you improve varies from person to person depending on the condition, its duration and how the body responds.",
  },
  {
    question: "Do the packages cover emergencies?",
    answer:
      "No. The packages cover planned online consultations, prescribed medicines and standard courier delivery only, and are not a substitute for emergency care. In an emergency, please contact your nearest hospital or emergency service immediately.",
  },
];

/** Lets Google surface the package questions as expandable answers. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: packageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-charcoal mb-4">
            Consultation <span className="gradient-text">Packages</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg text-balance">
            Medicine-inclusive care plans with consultation, prescribed
            medicines and standard courier delivery — choose the package that
            suits your health goals.
          </p>
        </div>
      </section>

      {/* Plans, assurance strip, WhatsApp enquiry and pricing disclaimer */}
      <ConsultationPackages showHeading={false} />

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-charcoal">
              How the <span className="gradient-text">Packages</span> Work
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="card-premium h-full p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 text-primary-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-heading text-2xl font-bold text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-charcoal">
                  {title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package-specific questions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-heading text-charcoal">
              Package <span className="gradient-text">Questions</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted mt-4 max-w-xl mx-auto text-balance">
              Common questions about what the packages include, how the
              medicines reach you, and what is not covered.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={packageFaqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
