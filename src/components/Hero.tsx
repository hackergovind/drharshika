"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-pattern min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-24 right-[12%] w-72 h-72 rounded-full bg-primary/5 animate-float hidden lg:block pointer-events-none" />
      <div className="absolute bottom-16 left-[8%] w-48 h-48 rounded-full bg-tertiary/5 animate-float hidden lg:block pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container-custom relative z-10 pt-24 pb-20 lg:pt-28 lg:pb-20 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* ── LEFT: Text Content ── */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-5">
                <Sparkles className="w-4 h-4" />
                <span>Personalized Homeopathic Care</span>
              </div>

              <h1 className="font-heading mb-5 leading-tight">
                <span className="text-charcoal">DR. HARSHIKA</span>
                <br />
                <span className="gradient-text">WELLNESS &amp; HOMOEOPATHY</span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-loose mb-6 max-w-lg mx-auto lg:mx-0">
                Dr. Harshika Singh brings compassionate, evidence-based
                homeopathic care for hormonal health and musculoskeletal
                conditions — addressing root cause, not just the symptoms.
              </p>

              <div className="mb-8">
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                  BHMS, MD (Hom.)
                </span>
                <p className="text-sm text-slate-600">
                  Focused on Hormonal Health, Thyroid Care &amp; Musculoskeletal Conditions
                </p>
              </div>

              {/* CTA Buttons — matching rounded-full radius */}
              <div className="flex flex-col sm:flex-row gap-3 mb-0 justify-center lg:justify-start">
                <Link href="/book" className="btn-primary justify-center rounded-full">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-secondary justify-center rounded-full">
                  <span>Explore Services</span>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap items-center gap-6 sm:gap-0 justify-center lg:justify-start mt-8"
            >
              {[
                { value: "1000+", label: "Patients Treated" },
                { value: "95%", label: "Patient Satisfaction" },
                { value: "Pan India", label: "Online Consultations" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`text-center lg:text-left ${
                    i > 0 ? "sm:border-l sm:border-slate-200 sm:pl-8 sm:ml-8" : ""
                  }`}
                >
                  <p className="text-2xl font-heading font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Doctor Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[520px]">
              {/* Main photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-primary/10 bg-[#F5EDE0] relative z-10">
                <Image
                  src="/images/dr-harshika-hero.jpg"
                  alt="Dr. Harshika Singh, BHMS MD Hom. — Founder & Consulting Physician"
                  width={1280}
                  height={853}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Floating card — Hormonal Expert (left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -left-3 sm:-left-6 top-[22%] z-10 hidden sm:block"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-3 sm:p-4 border border-primary/10 flex items-center gap-3 max-w-[170px]">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-charcoal">Hormonal Expert</p>
                    <p className="text-xs text-muted">PCOS, Thyroid &amp; More</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — Online Consults (right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="absolute -right-3 sm:-right-6 top-[42%] z-10 hidden sm:block"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-3 sm:p-4 border border-primary/10 flex items-center gap-3 max-w-[160px]">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-charcoal">Online Consults</p>
                    <p className="text-xs text-muted">Available Pan India</p>
                  </div>
                </div>
              </motion.div>

              {/* Background decorative layers */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-primary/5 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-orange-50/60 -z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
