"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Bone,
  Sparkles,
  Star,
} from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ConsultationApproach from "@/components/ConsultationApproach";
import CTABanner from "@/components/CTABanner";
import { services, testimonials } from "@/lib/utils";

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
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Dr. Harshika Singh believes that true healing begins when we
                  treat the person, not just the disease. With years of
                  specialized training and clinical experience, she combines the
                  time-tested principles of homeopathy with a deep understanding
                  of modern medicine.
                </p>
                <p>
                  Her practice focuses on two critical areas that affect millions
                  of Indians — hormonal imbalances and musculoskeletal
                  conditions. Through detailed case-taking and individualized
                  treatment, she helps patients achieve lasting relief without
                  the burden of side effects.
                </p>
                <p>
                  Whether you&apos;re struggling with PCOS, thyroid issues, chronic
                  joint pain, or arthritis, Dr. Harshika&apos;s compassionate and
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
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-primary/10">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-6">
                  Why Choose Homeopathy?
                </h3>
                <div className="space-y-5">
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
                    <div key={i} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-charcoal">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
            className="text-center mb-14"
          >
            <h2 className="font-heading text-charcoal">
              Our <span className="gradient-text">Specializations</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              Dr. Harshika specializes in two key areas of health, providing
              expert homeopathic care backed by years of clinical experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon === "Heart" ? Heart : Bone;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="card-premium p-8 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.conditions.slice(0, 4).map((cond, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-full bg-primary/8 text-primary font-medium"
                      >
                        {cond.name}
                      </span>
                    ))}
                    {service.conditions.length > 4 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-muted font-medium">
                        +{service.conditions.length - 4} more
                      </span>
                    )}
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
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

      {/* Testimonials Preview */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-charcoal">
              What Our Patients <span className="gradient-text">Say</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              Real stories from real patients who found healing through
              Dr. Harshika&apos;s compassionate homeopathic care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-premium p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-tertiary fill-tertiary"
                    />
                  ))}
                </div>
                <p className="text-charcoal-light leading-relaxed mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-primary/8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {t.patientInitials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.patientInitials}</p>
                    <p className="text-xs text-muted">
                      Treated for {t.condition}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
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
