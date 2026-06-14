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

      <div className="container-custom relative z-10 pt-24 pb-16 lg:pt-0 lg:pb-0 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
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
                <span className="text-charcoal">Healing from </span>
                <span className="gradient-text">Within,</span>
                <br />
                <span className="text-charcoal">Naturally</span>
              </h1>

              <p className="text-base lg:text-lg text-muted leading-relaxed mb-5 max-w-lg mx-auto lg:mx-0">
                Dr. Harshika Singh brings compassionate, evidence-informed
                homeopathic care for hormonal health and musculoskeletal
                conditions — addressing root cause, not just the symptoms.
              </p>

              <p className="text-sm font-medium text-charcoal mb-8">
                <span className="text-primary font-semibold">BHMS, MD (Hom.)</span>
                <span className="mx-2 text-muted">•</span>
                <span className="text-muted">Specialist in Hormonal &amp; Joint Health</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center lg:justify-start">
                <Link href="/book" className="btn-primary justify-center">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-secondary justify-center">
                  <span>Explore Services</span>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "1000+", label: "Patients Treated" },
                { value: "95%", label: "Patient Satisfaction" },
                { value: "Pan India", label: "Online Consultations" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
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
                  src="/images/dr-harshika.png"
                  alt="Dr. Harshika Singh, BHMS MD Hom. — Founder & Consulting Physician"
                  width={1000}
                  height={700}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Floating card — Hormonal Expert (left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -left-4 sm:-left-8 top-1/4 z-20 hidden sm:block"
              >
                <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-primary/10 flex items-center gap-3 max-w-[170px]">
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
                className="absolute -right-4 sm:-right-8 bottom-1/4 z-20 hidden sm:block"
              >
                <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-primary/10 flex items-center gap-3 max-w-[160px]">
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
