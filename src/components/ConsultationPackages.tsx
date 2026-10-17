"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Check,
  HeartPulse,
  ShieldPlus,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Plan = {
  icon: LucideIcon;
  name: string;
  duration: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    icon: Activity,
    name: "Starter Care",
    duration: "1 Month",
    price: "1099",
    features: [
      "Initial Detailed Consultation",
      "Customized Diet Plan",
      "2 Follow-up Sessions",
      "Basic Chat Support",
    ],
    cta: "Book 1 Month Plan",
    highlight: false,
  },
  {
    icon: HeartPulse,
    name: "Advanced Care",
    duration: "6 Months",
    price: "5099",
    features: [
      "Everything in Starter Care",
      "Monthly Progress Consultations",
      "Unlimited Chat Support",
      "Priority Booking",
    ],
    cta: "Get 6 Months Plan",
    highlight: true,
  },
  {
    icon: ShieldPlus,
    name: "Complete Wellness",
    duration: "1 Year",
    price: "9999",
    features: [
      "Everything in Advanced Care",
      "Bi-weekly Check-ins",
      "24/7 Priority Support",
      "Comprehensive Health Reports",
    ],
    cta: "Get 1 Year Plan",
    highlight: false,
  },
];

export default function ConsultationPackages() {
  return (
    <section
      id="consultation-packages"
      className="section-padding relative overflow-hidden bg-ivory"
    >
      {/* Soft colour glows — these sit behind the frosted cards so the
          backdrop blur actually has something to pick up. Built from radial
          gradients rather than filter:blur() so they never fight with the
          cards' backdrop-filter during compositing. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(74,124,89,0.16),transparent_70%)]" />
        <div className="absolute -right-32 top-1/4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,168,83,0.18),transparent_70%)]" />
        <div className="absolute -bottom-32 left-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(193,119,103,0.14),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-heading text-charcoal">
            Consultation <span className="gradient-text">Packages</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-600 mt-4 max-w-xl mx-auto text-balance">
            Fixed-duration care plans — no subscriptions, no hidden charges.
            Pick the journey that suits your health goals.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const highlight = Boolean(plan.highlight);

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative ${highlight ? "z-10" : "z-0"}`}
              >
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-7 backdrop-blur-xl transition-all duration-300 lg:p-8 ${
                    highlight
                      ? "border-white/15 bg-gradient-to-br from-primary/95 via-primary-dark/95 to-primary-800/95 text-white shadow-[0_24px_60px_-12px_rgba(74,124,89,0.45)] lg:scale-[1.04]"
                      : "border-white/70 bg-white/60 shadow-lg hover:-translate-y-1.5 hover:border-primary/15 hover:bg-white/80 hover:shadow-xl"
                  }`}
                >
                  {highlight && (
                    <span className="absolute -top-3 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-tertiary to-tertiary-dark px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </span>
                  )}

                  {/* Icon + duration */}
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border ${
                        highlight
                          ? "border-white/20 bg-white/15 text-white"
                          : "border-primary-100 bg-primary-50 text-primary-700"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                        highlight
                          ? "border-white/20 bg-white/15 text-primary-50"
                          : "border-primary-100 bg-primary-50 text-primary-700"
                      }`}
                    >
                      {plan.duration}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold">{plan.name}</h3>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-lg font-semibold">₹</span>
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  <div
                    className={`my-6 h-px w-full ${
                      highlight ? "bg-white/15" : "bg-slate-200/70"
                    }`}
                  />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${
                            highlight
                              ? "border-white/20 bg-white/15 text-white"
                              : "border-emerald-200 bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span
                          className={`text-sm leading-relaxed ${
                            highlight ? "text-primary-50" : "text-slate-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/book"
                    className={`mt-8 w-full justify-center ${
                      highlight ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
