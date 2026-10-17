"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    label: "BHMS, MD (Hom.)",
    sublabel: "Qualified & Experienced",
  },
  {
    icon: Users,
    label: "1000+ Patients",
    sublabel: "Successfully Treated",
  },
  {
    icon: Clock,
    label: "Personalized Care",
    sublabel: "Detailed Consultations",
  },
  {
    icon: Shield,
    label: "Safe & Natural",
    sublabel: "No Side Effects",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#EEF5F0] border-y border-emerald-800/15 py-10 lg:py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-800/10 border border-emerald-800/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-emerald-800" />
              </div>
              <div>
                <p className="font-semibold text-sm text-emerald-950">{item.label}</p>
                <p className="text-xs font-medium text-emerald-800/80">{item.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
