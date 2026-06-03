"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/config/site";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md shadow-neutral-900/5 border-b border-card-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-display text-xl font-bold text-white"
            aria-hidden
          >
            IP
          </span>
          <span className="font-display text-lg font-bold uppercase tracking-wide text-heading group-hover:text-accent transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppCTA intent="join" variant="primary" className="!py-2.5 !px-5 !text-xs">
            Join Now
          </WhatsAppCTA>
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-heading transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-heading transition-all ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-heading transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-[72px] bg-card/98 backdrop-blur-lg transition-all duration-300 border-t border-card-border ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-12 px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-lg font-display font-semibold uppercase tracking-wide text-heading hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4" onClick={() => setIsOpen(false)}>
            <WhatsAppCTA intent="join">Join on WhatsApp</WhatsAppCTA>
          </li>
        </ul>
      </div>
    </header>
  );
}
