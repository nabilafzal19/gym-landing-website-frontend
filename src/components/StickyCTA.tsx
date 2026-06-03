"use client";

import { useState, useEffect } from "react";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-card-border bg-card/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Quick join action"
    >
      <WhatsAppCTA intent="join" variant="primary" className="w-full !py-3">
        Join on WhatsApp
      </WhatsAppCTA>
    </div>
  );
}
