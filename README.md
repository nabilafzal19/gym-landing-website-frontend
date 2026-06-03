# Gym Landing Page — IronPulse Fitness

A modern, high-converting, SEO-friendly gym and fitness landing page built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Frontend-only — no backend, database, or authentication. Lead generation via **WhatsApp** (`wa.me` links).

## Features

- 12 conversion-focused sections (Hero, About, Programs, Trainers, Pricing, BMI calculator, and more)
- Sticky navbar + mobile menu
- Floating & sticky WhatsApp CTAs with dynamic messages
- SEO: metadata, Open Graph, sitemap, robots.txt
- Mobile-first responsive design
- Premium black / white / red fitness branding

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize for Any Gym

Edit **`src/config/site.ts`**:

- Gym name, phone (`phoneRaw` for WhatsApp, e.g. `15551234567`)
- Address, email, hours, social links
- Programs, trainers, pricing, testimonials, gallery

WhatsApp message templates live in **`src/lib/whatsapp.ts`**.

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any static/Node host supporting Next.js.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Project Structure

```
src/
├── app/              # Layout, page, SEO routes
├── components/       # UI, sections, layout
├── config/site.ts    # All business content (reusable)
└── lib/              # WhatsApp & BMI utilities
```

## License

Private / client project — customize per gym client.
