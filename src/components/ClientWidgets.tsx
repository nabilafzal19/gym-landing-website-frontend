"use client";

import dynamic from "next/dynamic";

const WhatsAppFloat = dynamic(
  () => import("@/components/WhatsAppFloat").then((m) => m.WhatsAppFloat),
  { ssr: false }
);

const StickyCTA = dynamic(
  () => import("@/components/StickyCTA").then((m) => m.StickyCTA),
  { ssr: false }
);

export function ClientWidgets() {
  return (
    <>
      <WhatsAppFloat />
      <StickyCTA />
    </>
  );
}
