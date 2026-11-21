import { contactInfo } from "@/constants";

/**
 * Stop-gap for forms until a real backend exists (see TODO.md):
 * opens the visitor's email app with a pre-filled message to the Association.
 */
export function sendViaEmailApp(subject: string, body: string) {
  window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
