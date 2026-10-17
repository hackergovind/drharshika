"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export default function WhatsAppButton() {
  const whatsappUrlValue = whatsappUrl(
    "Hello Dr. Harshika! I'd like to inquire about a consultation."
  );

  return (
    <a
      href={whatsappUrlValue}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
