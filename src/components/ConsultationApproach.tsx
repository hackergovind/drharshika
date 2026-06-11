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
            Our Consultation <span className="gradient-text">Approach</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Every patient is unique. Dr. Harshika follows a meticulous,
            patient-centered approach to ensure the best possible outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              {/* Step Number */}
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <step.icon className="w-9 h-9 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-tertiary text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-heading font-bold text-charcoal mb-2 text-base">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
