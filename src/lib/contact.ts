/**
 * Single source of truth for clinic contact details.
 */
const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919258715490";
const digitsOnly = rawNumber.replace(/\D/g, "");

// Fallback to Dr. Harshika's verified number if environment has placeholder or invalid value
export const WHATSAPP_NUMBER =
  digitsOnly.includes("9999999999") || digitsOnly.length < 10
    ? "919258715490"
    : digitsOnly.length === 10
    ? `91${digitsOnly}`
    : digitsOnly;

export const WHATSAPP_DISPLAY = "+91 92587 15490";
export const CLINIC_PHONE = "+91 92587 15490";

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}
