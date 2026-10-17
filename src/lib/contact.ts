/**
 * Single source of truth for clinic contact details.
 *
 * NOTE: the number below is still the placeholder that shipped with the
 * template — set NEXT_PUBLIC_WHATSAPP_NUMBER (or replace the fallback) with
 * the real clinic WhatsApp number.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
