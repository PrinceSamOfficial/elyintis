# Elyintis — Enterprise AI Company Website

## Project Overview

A comprehensive, multi-page marketing website for **Elyintis**, a modern enterprise AI company and "All in AI" provider offering:
- AI Platform as a Service (PaaS)
- Ready-to-use proprietary AI products
- AI consulting services
- Elyintis Academy for certified AI talent

## Tech Stack

- **Frontend:** React + TypeScript + Vite + Wouter (routing) + Framer Motion
- **Backend:** Express.js with real API endpoints
- **Database:** PostgreSQL (Replit built-in) via Drizzle ORM
- **Styling:** Tailwind CSS + shadcn/ui components
- **Font:** Plus Jakarta Sans + Inter

## Visual Identity

- **Mode:** Dark mode only (forced via `class="dark"` on `<html>`)
- **Background:** Deep Navy (`hsl(222 55% 7%)`)
- **Accent Colors:** Teal (`hsl 180 85%`), Cyan (`hsl 195 90%`), Gold/Orange (`hsl 32 95%`)
- **Design Style:** Glassmorphism UI with radial gradient backgrounds, cinematic hero sections
- **Animations:** Framer Motion scroll-triggered fade-ins, floating particles in hero

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.tsx` | Hero, Advantage Grid (4 cards), 90-Day Timeline, CTA |
| `/platform` | `Platform.tsx` | Platform features, No-LLM value prop, 3 product cards |
| `/academy` | `Academy.tsx` | 12-week curriculum, talent profiles, subcontracting |
| `/contact` | `Contact.tsx` | Contact form connected to real backend API |

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/contact` | Save contact form submission to database |
| `GET` | `/api/contact` | Retrieve all contact form submissions |
| `POST` | `/api/newsletter` | Subscribe email to newsletter list |
| `GET` | `/api/newsletter` | Retrieve all newsletter subscribers |

## Database Schema

### `contact_submissions`
- `id` (serial PK), `first_name`, `last_name`, `email`, `company`, `reason`, `message`, `created_at`

### `newsletter_subscribers`
- `id` (serial PK), `email` (unique), `created_at`

## Architecture

- `shared/schema.ts` — Drizzle ORM schema + Zod validation types for all tables
- `server/db.ts` — Drizzle database client using `DATABASE_URL` env var
- `server/storage.ts` — `DatabaseStorage` class wrapping all DB operations
- `server/routes.ts` — Express API routes with Zod validation
- `client/src/pages/Contact.tsx` — Uses `useMutation` + `apiRequest` to POST to `/api/contact`
- `client/src/components/Footer.tsx` — Newsletter uses `useMutation` to POST to `/api/newsletter`

## Global Components

- **`Header.tsx`** — Sticky glassmorphism nav with logo (`mix-blend-mode: screen`), mobile hamburger
- **`Footer.tsx`** — Links, social icons, real newsletter signup

## Running

```bash
npm run dev
```

Serves on port 5000 (Express + Vite).
