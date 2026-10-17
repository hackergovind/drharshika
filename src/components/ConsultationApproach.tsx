"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
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
  const flowRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Drives the connector line: 0 when the steps enter the viewport, 1 once they settle in view.
  const { scrollYProgress } = useScroll({
    target: flowRef,
    offset: ["start 85%", "end 60%"],
  });

  // Smoothed so the line eases along instead of snapping to the scroll position.
  const drawnLine = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="consultation-approach"
      className="section-padding bg-white"
    >
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

        <div className="relative" ref={flowRef}>
          {/* Scroll-drawn journey line connecting the steps (desktop only).
              The faint dashed guide is always visible; the solid line draws
              itself forward as the section scrolls into view. */}
          <svg
            aria-hidden="true"
            className="hidden lg:block absolute top-[62px] left-[12%] w-[76%] h-3 overflow-visible"
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              {/* userSpaceOnUse: the line is perfectly horizontal, so an
                  objectBoundingBox gradient would degenerate (zero-height box)
                  and nothing would paint. */}
              <linearGradient
                id="journey-line"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="100"
                y2="0"
              >
                <stop offset="0%" stopColor="#5E9B6F" />
                <stop offset="100%" stopColor="#2f5039" />
              </linearGradient>
            </defs>

            {/* Guide */}
            <path
              d="M0 6 H100"
              stroke="#a7f3d0"
              strokeWidth={2}
              strokeLinecap="butt"
              strokeDasharray="1 1.6"
            />

            {/* Progress line */}
            <motion.path
              d="M0 6 H100"
              stroke="url(#journey-line)"
              strokeWidth={2}
              strokeLinecap="butt"
              style={{ pathLength: reduceMotion ? 1 : drawnLine }}
            />
          </svg>

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
