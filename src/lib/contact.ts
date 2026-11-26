/**
 * Single source of truth for clinic contact details.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919258715490";

export const WHATSAPP_DISPLAY = "+91 92587 15490";
export const CLINIC_PHONE = "+91 92587 15490";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
