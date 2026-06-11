"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Heart,
  Bone,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { services } from "@/lib/utils";

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
];

const steps = [
  { id: 1, title: "Service", icon: Heart },
  { id: 2, title: "Schedule", icon: Calendar },
  { id: 3, title: "Details", icon: User },
  { id: 4, title: "Confirm", icon: CheckCircle },
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    subService: "",
    otherCondition: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    notes: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const selectedService = services.find((s) => s.id === formData.service);

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.service !== "";
      case 2:
        return formData.date !== "" && formData.time !== "";
      case 3:
        return (
          formData.name !== "" &&
          formData.email !== "" &&
          formData.phone !== ""
        );
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          age: formData.age ? parseInt(formData.age) : null,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
          Appointment Requested!
        </h2>
        <p className="text-muted max-w-md mx-auto mb-2">
          Thank you, {formData.name}! Your consultation request has been submitted
          successfully. Dr. Harshika&apos;s team will contact you shortly to confirm.
        </p>
        <p className="text-sm text-primary font-medium">
          Service: {selectedService?.title} • {formData.date} at {formData.time}
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                step === s.id
                  ? "bg-primary text-white"
                  : step > s.id
                  ? "bg-primary/10 text-primary"
                  : "bg-gray-100 text-muted"
              }`}
            >
              <s.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{s.title}</span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-8 h-0.5 mx-1 ${
                  step > s.id ? "bg-primary" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl font-bold text-charcoal">
              Select a Service
            </h3>
            <p className="text-muted text-sm mt-1">
              Choose the area of health you need help with
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => {
              const Icon = service.icon === "Heart" ? Heart : Bone;
              return (
                <button
                  key={service.id}
                  onClick={() => updateField("service", service.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    formData.service === service.id
                      ? "border-primary bg-primary-50"
                      : "border-gray-200 hover:border-primary/30 bg-white"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 mb-3 ${
                      formData.service === service.id
                        ? "text-primary"
                        : "text-muted"
                    }`}
                  />
                  <h4 className="font-heading font-bold text-charcoal">
                    {service.title}
                  </h4>
                  <p className="text-xs text-muted mt-1">
                    {service.conditions.length} conditions treated
                  </p>
                </button>
              );
            })}
          </div>

          {/* Sub-service selection */}
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <label className="form-label">
                Select specific condition (optional)
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                {selectedService.conditions.map((cond) => (
                  <button
                    key={cond.name}
                    onClick={() => updateField("subService", cond.name)}
                    className={`p-3 rounded-lg border text-left text-sm transition-all ${
                      formData.subService === cond.name
                        ? "border-primary bg-primary-50 text-primary font-medium"
                        : "border-gray-200 hover:border-primary/30 text-charcoal"
                    }`}
                  >
                    {cond.name}
                  </button>
                ))}
              </div>

              {/* Other option */}
              <div className="mt-3">
                <button
                  onClick={() => updateField("subService", "Other")}
                  className={`w-full p-3 rounded-lg border text-left text-sm transition-all ${
                    formData.subService === "Other"
                      ? "border-primary bg-primary-50 text-primary font-medium"
                      : "border-gray-200 hover:border-primary/30 text-charcoal"
                  }`}
                >
                  Other (please specify)
                </button>
                {formData.subService === "Other" && (
                  <input
                    type="text"
                    value={formData.otherCondition}
                    onChange={(e) => updateField("otherCondition", e.target.value)}
                    placeholder="Please describe your specific concern..."
                    className="form-input mt-2"
                  />
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Step 2: Date & Time */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl font-bold text-charcoal">
              Pick a Date & Time
            </h3>
            <p className="text-muted text-sm mt-1">
              Choose your preferred appointment slot
            </p>
          </div>

          <div>
            <label className="form-label">Preferred Date</label>
            <input
              type="date"
              value={formData.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => updateField("date", e.target.value)}
              className="form-input"
            />
          </div>

          {formData.date && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <label className="form-label">Preferred Time</label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => updateField("time", slot)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      formData.time === slot
                        ? "border-primary bg-primary text-white"
                        : "border-gray-200 hover:border-primary/30 text-charcoal"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Step 3: Personal Details */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-5"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl font-bold text-charcoal">
              Your Details
            </h3>
            <p className="text-muted text-sm mt-1">
              Help us prepare for your consultation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Enter your full name"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Phone *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => updateField("age", e.target.value)}
                placeholder="Your age"
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Gender</label>
            <div className="flex gap-3">
              {["Female", "Male", "Other"].map((g) => (
                <button
                  key={g}
                  onClick={() => updateField("gender", g)}
                  className={`px-5 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                    formData.gender === g
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 hover:border-primary/30 text-charcoal"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="form-label">
              Additional Notes / Symptoms (optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder="Briefly describe your main concerns..."
              rows={4}
              className="form-input resize-none"
            />
          </div>
        </motion.div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl font-bold text-charcoal">
              Review & Confirm
            </h3>
            <p className="text-muted text-sm mt-1">
              Please verify your appointment details
            </p>
          </div>

          <div className="card-premium p-6 space-y-4">
            {[
              { label: "Service", value: selectedService?.title || formData.service },
              { label: "Condition", value: formData.subService === "Other" ? formData.otherCondition || "Other" : formData.subService || "General Consultation" },
              { label: "Date", value: formData.date },
              { label: "Time", value: formData.time },
              { label: "Name", value: formData.name },
              { label: "Email", value: formData.email },
              { label: "Phone", value: formData.phone },
              ...(formData.age ? [{ label: "Age", value: formData.age }] : []),
              ...(formData.gender ? [{ label: "Gender", value: formData.gender }] : []),
              ...(formData.notes ? [{ label: "Notes", value: formData.notes }] : []),
            ].map((item, i) => (
              <div key={i} className="flex justify-between py-2 border-b border-primary/8 last:border-b-0">
                <span className="text-sm text-muted">{item.label}</span>
                <span className="text-sm font-medium text-charcoal text-right max-w-[60%]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="btn-secondary !py-3 !px-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            onClick={() => canProceed() && setStep(step + 1)}
            disabled={!canProceed()}
            className={`btn-primary !py-3 !px-6 text-sm ${
              !canProceed() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="btn-primary !py-3 !px-6 text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Confirm Appointment</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
