"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Heart, Bone } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    icon: string;
    description: string;
    conditions: {
      name: string;
      description: string;
    }[];
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCondition, setActiveCondition] = useState<number | null>(null);
  const Icon = service.icon === "Heart" ? Heart : Bone;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-premium overflow-hidden"
      id={service.id}
    >
      {/* Header */}
      <div className="p-8 pb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-charcoal">
              {service.title}
            </h3>
            <p className="text-sm text-muted mt-1">
              {service.conditions.length} specialized treatments
            </p>
          </div>
        </div>
        <p className="text-muted leading-relaxed">{service.description}</p>
      </div>

      {/* Conditions Toggle */}
      <div className="px-8 pb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
        >
          <span>{isExpanded ? "Hide" : "View"} Conditions</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>

      {/* Expandable Conditions */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 space-y-2">
              {service.conditions.map((condition, i) => (
                <div key={i} className="border border-primary/8 rounded-xl overflow-hidden">
                  <button
                    onClick={() =>
                      setActiveCondition(activeCondition === i ? null : i)
                    }
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-primary-50/50 transition-colors"
                  >
                    <span className="font-medium text-sm text-charcoal">
                      {condition.name}
                    </span>
                    <motion.div
                      animate={{
                        rotate: activeCondition === i ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-muted" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeCondition === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm text-muted leading-relaxed">
                          {condition.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
