"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Microscope,
  Pill,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Detailed Case Taking",
    description:
      "A thorough 30-45 minute consultation to understand your complete health picture — symptoms, lifestyle, emotional well-being, and medical history.",
  },
  {
    icon: Microscope,
    title: "Root Cause Analysis",
    description:
      "Going beyond surface symptoms to identify the fundamental imbalances causing your health concerns, using a holistic and individualized approach.",
  },
  {
    icon: Pill,
    title: "Personalized Prescription",
    description:
      "Carefully selected constitutional remedies tailored to your unique symptom profile, ensuring the most effective and gentle healing response.",
  },
  {
    icon: HeartHandshake,
    title: "Continuous Support",
    description:
      "Regular follow-ups to monitor progress, adjust treatment as needed, and provide ongoing guidance for lasting health improvement.",
  },
];

export default function ConsultationApproach() {
  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="font-heading text-charcoal">
            Our Consultation <span className="gradient-text">Approach</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Every patient is unique. Dr. Harshika follows a meticulous,
            patient-centered approach to ensure the best possible outcomes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line behind step icons (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[68px] left-[13%] right-[13%] border-t-2 border-dashed border-emerald-200"
          />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                {/* Step label */}
                <p className="text-xs font-bold tracking-widest uppercase text-emerald-700/70 mb-3">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                {/* Step icon */}
                <div className="relative z-10 mx-auto w-20 h-20 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    <step.icon className="w-9 h-9 text-emerald-700" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-charcoal mb-2 text-base min-h-[48px] flex items-center justify-center">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
