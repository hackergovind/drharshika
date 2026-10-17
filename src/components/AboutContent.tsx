"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Heart,
  Bone,
  Globe,
  Award,
  BookOpen,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-charcoal mb-4">
            About <span className="gradient-text">Dr. Harshika</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg text-balance">
            A dedicated homeopathic physician committed to transforming lives
            through natural, evidence-based healing.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Photo Placeholder + Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-primary/10 sticky top-28">
                {/* Author Photo + Byline */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20 shadow-lg">
                  <Image
                    src="/images/dr-harshika.png"
                    alt="Dr. Harshika Singh, BHMS MD Hom. - Homeopathic Physician"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h2 className="font-heading text-2xl font-bold text-charcoal">
                  Dr. Harshika Singh
                </h2>
                <p className="text-primary font-semibold mt-1">
                  BHMS, MD (Hom.)
                </p>
                <p className="text-xs text-muted mt-1">
                  Homeopathic Physician &amp; Wellness Expert
                </p>
              </div>

                {/* Quick Info */}
                <div className="space-y-4">
                  {[
                    {
                      icon: GraduationCap,
                      label: "Education",
                      value: "BHMS, MD in Homeopathy",
                    },
                    {
                      icon: Heart,
                      label: "Specialty",
                      value: "Hormonal & Thyroid Health",
                    },
                    {
                      icon: Bone,
                      label: "Specialty",
                      value: "Musculoskeletal Health",
                    },
                    {
                      icon: Globe,
                      label: "Availability",
                      value: "Online across India",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-ivory hover:bg-primary-50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted">{item.label}</p>
                        <p className="text-sm font-semibold text-charcoal">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link href="/book" className="btn-primary w-full justify-center text-sm">
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-10"
            >
              {/* Intro */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Meet Your Doctor</span>
                </div>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Dr. Harshika Singh is a highly qualified homeopathic
                    physician holding both BHMS (Bachelor of Homeopathic
                    Medicine and Surgery) and MD in Homeopathy — a
                    postgraduate specialization that reflects her deep
                    commitment to mastering this healing art.
                  </p>
                  <p>
                    With extensive clinical experience treating complex chronic
                    conditions, Dr. Harshika has developed a reputation for
                    her thorough, compassionate, and effective approach to
                    patient care. Her patients consistently note her ability
                    to truly listen, understand their unique health challenges,
                    and craft treatment plans that deliver meaningful results.
                  </p>
                  <p>
                    Her practice focuses on two areas where homeopathy
                    demonstrates remarkable efficacy: hormonal and thyroid
                    health, and musculoskeletal conditions. This dual
                    specialization allows her to provide focused, expert care
                    for conditions that profoundly impact quality of life.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-white rounded-2xl p-8 border border-primary/10">
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Philosophy of Care
                </h3>
                <div className="space-y-4 text-muted leading-relaxed text-sm">
                  <p>
                    &ldquo;I believe every patient is a unique individual whose
                    health concerns deserve to be understood in their entirety
                    — not just the physical symptoms, but the mental and
                    emotional dimensions as well. This is the essence of
                    homeopathic practice.&rdquo;
                  </p>
                  <p>
                    &ldquo;My goal is not merely to manage symptoms but to
                    facilitate genuine healing from within. When we treat the
                    root cause, the body naturally moves toward balance and
                    health. This is what makes homeopathy so powerful — it
                    works with your body, not against it.&rdquo;
                  </p>
                  <p>
                    &ldquo;I am deeply committed to staying current with the
                    latest research in both homeopathy and conventional
                    medicine. This dual awareness helps me provide the most
                    informed, effective care possible while honoring the
                    classical principles that make homeopathy effective.&rdquo;
                  </p>
                </div>
              </div>

              {/* Specializations Detail */}
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-6">
                  Areas of Expertise
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Heart,
                      title: "Hormonal & Thyroid Health",
                      items: [
                        "PCOS Management",
                        "Thyroid Disorders",
                        "Hormonal Imbalance",
                        "Menstrual Irregularities",
                        "Perimenopause",
                        "Weight Management",
                      ],
                    },
                    {
                      icon: Bone,
                      title: "Musculoskeletal Health",
                      items: [
                        "Osteoarthritis",
                        "Rheumatoid Arthritis",
                        "Cervical Spondylosis",
                        "Lumbar Spondylosis",
                        "Chronic Pain",
                        "Joint Stiffness",
                      ],
                    },
                  ].map((area, i) => (
                    <div
                      key={i}
                      className="card-premium p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <area.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-heading font-bold text-sm text-charcoal">
                          {area.title}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {area.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-sm text-muted"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-6">
                  Qualifications & Credentials
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: GraduationCap,
                      title: "MD in Homeopathy",
                      desc: "Postgraduate specialization in Homeopathic Medicine, demonstrating advanced expertise in clinical practice and research.",
                    },
                    {
                      icon: Award,
                      title: "BHMS",
                      desc: "Bachelor of Homeopathic Medicine and Surgery — the foundational professional degree in homeopathic medicine.",
                    },
                    {
                      icon: Stethoscope,
                      title: "Clinical Experience",
                      desc: "Extensive hands-on experience treating thousands of patients with complex chronic conditions in both clinical and online settings.",
                    },
                  ].map((qual, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-ivory hover:bg-primary-50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <qual.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal">
                          {qual.title}
                        </h4>
                        <p className="text-sm text-muted mt-1">{qual.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
