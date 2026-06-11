"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    id: string;
    patientInitials: string;
    rating: number;
    quote: string;
    condition: string;
  };
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-premium p-8 relative group"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-10 h-10 text-primary" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "text-tertiary fill-tertiary"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-charcoal-light leading-relaxed mb-6 text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Patient Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-primary/8">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">
            {testimonial.patientInitials}
          </span>
        </div>
        <div>
          <p className="font-semibold text-sm text-charcoal">
            {testimonial.patientInitials}
          </p>
          <p className="text-xs text-muted">Treated for {testimonial.condition}</p>
        </div>
      </div>
    </motion.div>
  );
}
