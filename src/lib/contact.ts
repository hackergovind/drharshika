/**
 * Single source of truth for clinic contact details.
 *
 * NOTE: the number below is still the placeholder that shipped with the
 * template — replace it with the real clinic WhatsApp number.
 */
export const WHATSAPP_NUMBER = "919999999999";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
