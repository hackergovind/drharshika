"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Shield,
  Globe,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-pattern min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-32 right-[15%] w-64 h-64 rounded-full bg-primary/5 animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-[10%] w-40 h-40 rounded-full bg-tertiary/5 animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-[5%] w-24 h-24 rounded-full bg-secondary/5 animate-float hidden lg:block" style={{ animationDelay: "4s" }} />

      <div className="container-custom relative z-10 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Personalized Homeopathic Care</span>
              </div>

              <h1 className="font-heading mb-6">
                <span className="text-charcoal">Healing from </span>
                <span className="gradient-text">Within,</span>
                <br />
                <span className="text-charcoal">Naturally</span>
              </h1>

              <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                Dr. Harshika Singh brings compassionate, evidence-informed
                homeopathic care for hormonal health and musculoskeletal
                conditions. Experience healing that addresses the root cause,
                not just the symptoms.
              </p>

              {/* Credentials */}
              <p className="text-sm font-medium text-charcoal mb-8">
                <span className="text-primary font-semibold">BHMS, MD (Hom.)</span>
                <span className="mx-2 text-muted">•</span>
                <span className="text-muted">Specialist in Hormonal & Joint Health</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/book" className="btn-primary">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  <span>Explore Services</span>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "1000+", label: "Patients Treated" },
                { value: "95%", label: "Patient Satisfaction" },
                { value: "Pan India", label: "Online Consultations" },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-2xl font-heading font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Doctor Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main photo card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-primary/10 relative z-10">
                <Image
                  src="/images/dr-harshika.png"
                  alt="Dr. Harshika Singh - BHMS, MD (Hom.) - Homeopathic Specialist"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating info cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -left-6 top-1/4 z-20"
              >
                <div className="bg-white rounded-xl shadow-lg p-4 border border-primary/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-charcoal">Hormonal Expert</p>
                    <p className="text-xs text-muted">PCOS, Thyroid & More</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute -right-4 bottom-1/4 z-20"
              >
                <div className="bg-white rounded-xl shadow-lg p-4 border border-primary/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-tertiary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-charcoal">Online Consults</p>
                    <p className="text-xs text-muted">Available Pan India</p>
                  </div>
                </div>
              </motion.div>

              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-primary/5 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl bg-tertiary/5 -z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

