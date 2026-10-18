"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Bone,
  Sparkles,
  Check,
} from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ConsultationApproach from "@/components/ConsultationApproach";
import ConsultationPackages from "@/components/ConsultationPackages";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Trust Bar */}
      <TrustBar />

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Welcome</span>
              </div>
              <h2 className="font-heading text-charcoal mb-6">
                A Holistic Approach to{" "}
                <span className="gradient-text">Your Health</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-loose text-[1.05rem]">
                <p>
                  Dr. Harshika Singh is a qualified{" "}
                  <strong className="text-slate-800 font-semibold">
                    Homeopathic Doctor in India
                  </strong>{" "}
                  who believes that true healing begins when we treat the person,
                  not just the disease. Combining the time-tested principles of
                  homoeopathy and holistic medicine with a deep clinical
                  understanding, she provides personalized patient care across India.
                </p>
                <p>
                  Her practice focuses on two critical areas that affect millions
                  of Indians — hormonal imbalances and musculoskeletal
                  conditions. Through detailed case-taking and individualized
                  treatment, she helps patients achieve lasting relief without
                  the burden of side effects.
                </p>
                <p>
                  Whether you&apos;re struggling with{" "}
                  <strong className="text-slate-800 font-semibold">PCOS</strong>,{" "}
                  <strong className="text-slate-800 font-semibold">thyroid issues</strong>,{" "}
                  <strong className="text-slate-800 font-semibold">chronic joint pain</strong>, or{" "}
                  <strong className="text-slate-800 font-semibold">arthritis</strong>, Dr. Harshika&apos;s compassionate and
                  scientific approach offers a path to genuine wellness.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  <span>Learn More About Dr. Harshika</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-md border border-slate-200/80">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-6">
                  Why Choose Homeopathy?
                </h3>
                <ul className="space-y-5">
                  {[
                    {
                      title: "Treats Root Cause",
                      desc: "Goes beyond symptom relief to address the fundamental cause of your condition",
                    },
                    {
                      title: "Safe & Natural",
                      desc: "No harmful side effects — suitable for all ages, including during pregnancy",
                    },
                    {
                      title: "Personalized Medicine",
                      desc: "Every prescription is uniquely tailored to your individual symptom profile",
                    },
                    {
                      title: "Long-lasting Results",
                      desc: "Constitutional treatment creates deep, lasting changes in health patterns",
                    },
                    {
                      title: "Holistic Healing",
                      desc: "Treats physical, mental, and emotional symptoms as an integrated whole",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-700" strokeWidth={3} />
                      </span>
                      <div>
                        <p className="font-semibold text-sm text-slate-800">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-16"
          >
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
              What We Treat
            </span>
            <h2 className="font-heading text-charcoal">
              Our <span className="gradient-text">Specializations</span>
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 mt-4 max-w-xl mx-auto text-balance">
              Dr. Harshika specializes in two key areas of health, providing
              expert homeopathic care backed by years of clinical experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {services.map((service, i) => {
              const Icon = service.icon === "Heart" ? Heart : Bone;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-100/70 transition-colors">
                      <Icon className="w-8 h-8 text-emerald-700" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.conditions.slice(0, 4).map((cond, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-800 font-medium border border-emerald-100"
                        >
                          {cond.name}
                        </span>
                      ))}
                      {service.conditions.length > 4 && (
                        <span className="bg-slate-100 text-slate-600 rounded-full px-2.5 py-1 text-xs font-medium">
                          +{service.conditions.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all mt-auto pt-2"
                  >
                    View All Conditions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Approach */}
      <ConsultationApproach />

      {/* Consultation Packages */}
      <ConsultationPackages />

      {/* Testimonials Preview */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-16"
          >
            <h2 className="font-heading text-charcoal">
              What Our Patients <span className="gradient-text">Say</span>
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 mt-4 max-w-xl mx-auto text-center">
              Real stories from real patients who found healing through
              Dr. Harshika&apos;s compassionate homeopathic care.
            </p>
          </motion.div>

          <TestimonialsMarquee />

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-secondary">
              <span>View All Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
