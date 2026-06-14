"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="cta-banner section-padding text-white relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-white mb-4">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Take the first step towards natural, lasting wellness. Book your
            personalized consultation with Dr. Harshika Singh and experience
            the transformative power of homeopathy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl flex items-center justify-center gap-2 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)", boxShadow: "0 4px 20px rgba(249,115,22,0.5)" }}
            >
              <Phone className="w-5 h-5" />
              <span>Book Consultation</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
