import { siteConfig, type WhatsAppIntent } from "@/config/site";

const messages: Record<WhatsAppIntent, (detail?: string) => string> = {
  join: () =>
    `Hi ${siteConfig.name}! I'd like to join and start my fitness journey. Please share membership details.`,
  trial: () =>
    `Hi ${siteConfig.name}! I'm interested in a FREE TRIAL. When can I visit for my first session?`,
  "pricing-basic": () =>
    `Hi! I'd like to sign up for the *Basic Plan* ($29/month) at ${siteConfig.name}.`,
  "pricing-standard": () =>
    `Hi! I'd like to sign up for the *Standard Plan* ($49/month) at ${siteConfig.name}.`,
  "pricing-premium": () =>
    `Hi! I'd like to sign up for the *Premium Plan* ($79/month) at ${siteConfig.name}.`,
  contact: () =>
    `Hi ${siteConfig.name}! I have a question and would like to get in touch.`,
  program: (detail) =>
    `Hi! I'm interested in the *${detail ?? "fitness program"}* at ${siteConfig.name}. Please share more info.`,
  general: () =>
    `Hi ${siteConfig.name}! I'd like more information about your gym and memberships.`,
};

export function getWhatsAppUrl(
  intent: WhatsAppIntent = "general",
  detail?: string
): string {
  const text = messages[intent](detail);
  const encoded = encodeURIComponent(text);
  const phone = siteConfig.phoneRaw.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encoded}`;
}
