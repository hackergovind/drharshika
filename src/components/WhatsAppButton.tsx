"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919999999999";
  const message = encodeURIComponent(
    "Hello Dr. Harshika! I'd like to inquire about a consultation."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
