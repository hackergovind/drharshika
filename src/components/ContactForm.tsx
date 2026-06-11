"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
          Message Sent!
        </h3>
        <p className="text-muted">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Full Name *</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Your full name"
              className="form-input !pl-11"
            />
          </div>
        </div>
        <div>
          <label className="form-label">Email *</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="you@example.com"
              className="form-input !pl-11"
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Phone</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              className="form-input !pl-11"
            />
          </div>
        </div>
        <div>
          <label className="form-label">Subject *</label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            placeholder="What is this about?"
            className="form-input"
          />
        </div>
      </div>

      <div>
        <label className="form-label">Message *</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted" />
          <textarea
            required
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Tell us how we can help..."
            rows={5}
            className="form-input !pl-11 resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
