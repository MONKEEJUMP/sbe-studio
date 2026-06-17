# Space Bot Engineering Studio — Website

The foundation of the Space Bot Engineering Studio (sbe.studio) Ai consulting
website. Brand line: `sbe.studio <abc/always/be/coding>`. Next.js 16 App
Router, TypeScript strict, Tailwind CSS, custom brand design system. Light mode
default, dark mode toggleable and persisted via `next-themes`.

Internal / legal entity: Space Bot Engineering. Client-facing / public brand:
Space Bot Engineering Studio.

**Current state:** homepage, services, work, about, receipts, contact, stats
API, and 404 are present. The site uses manifest-backed work and receipts
content plus a live Vercel portfolio wall with public production deployments.

---

## Quickstart

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # production build
pnpm lint      # eslint
pnpm typecheck # TypeScript only
```

Node 20.9+ required for Next.js 16. Package manager: pnpm.

---

## Stack

- **Framework:** Next.js 16 (App Router, flat `app/`)
- **Language:** TypeScript strict mode
- **Styling:** Tailwind CSS with custom tokens
- **Theme:** `next-themes` (light default, dark toggle, localStorage persistence)
- **Motion:** CSS transitions/keyframes only; `prefers-reduced-motion` honored
- **Icons:** `lucide-react` (UI only, never decorative)
- **Fonts:** Inter (body/UI), Fraunces (serif display), JetBrains Mono (numbers/code)

---

## Directory layout

```
app/
├── layout.tsx        # fonts, ThemeProvider, metadata, JSON-LD
├── page.tsx          # homepage
├── globals.css       # brand CSS variables, Tailwind layers
├── not-found.tsx     # custom 404
├── api/stats/route.ts
├── work/
├── services/
├── about/
├── receipts/
└── contact/
components/
├── layout/           # Container, Nav, Footer
├── brand/            # Wordmark, BrandSignature
├── work/             # Vercel portfolio cards and deployment strips
├── ui/               # Button, ThemeToggle, Rule, Marquee, StatNumber, LiveDot, Eyebrow
└── home/             # HeroAct1/2/3, LiveStats, credibility, services, work, founder
lib/
├── brand.ts          # shared brand motto
├── manifest-data.ts  # MANIFEST_DATA — single source of truth for stats
├── work.ts           # selected work data
├── vercel-portfolio.ts # live Vercel deployment inventory
└── utils.ts
public/favicon.svg
public/work-sites/    # screenshot captures for the portfolio wall
ops/
├── deploy-scripts/   # DreamHost/VPS helper scripts
└── archive/          # old deploy logs and generated tarballs
```

---

## MANIFEST_DATA — source of truth

Every number that appears on the site is imported from
`lib/manifest-data.ts`. If a stat does not exist in `MANIFEST_DATA`, it
does not appear on the site. The API route at `GET /api/stats` exposes
the same constant as JSON for future client-side consumers.

Never hardcode a statistic in a component. Never round. Never estimate.

---

## Brand design system

### Color palette

Neutrals (70%) and signature accents (30%), plus status signals:

| Token              | Light     | Dark      | Role                                |
|--------------------|-----------|-----------|-------------------------------------|
| `--sbe-canvas`     | `#FAFAF7` | `#0A0A0A` | Page background                     |
| `--sbe-ink`        | `#0A0A0A` | `#F5F5F4` | Headlines, body text                |
| `--sbe-graphite`   | `#525252` | `#A3A3A3` | Secondary text                      |
| `--sbe-mist`       | `#A3A3A3` | `#737373` | Tertiary text, metadata             |
| `--sbe-hairline`   | `#E5E5E5` | `#262626` | 1px dividers                        |
| `--sbe-copper`     | `#B22234` | `#F06474` | United States flag red accent       |
| `--sbe-cobalt`     | `#3C3B6E` | `#A8B0FF` | United States flag blue accent      |
| `--sbe-live`       | `#F59E0B` | `#F59E0B` | Live status dots                    |
| `--sbe-verified`   | `#059669` | `#059669` | Verified checkmarks                 |

### Typography

| Family         | Tailwind     | Role                                       |
|----------------|--------------|--------------------------------------------|
| Fraunces       | `font-serif` | Display headlines (H1, H2, sometimes H3)   |
| Inter          | `font-sans`  | Body, UI, buttons                          |
| JetBrains Mono | `font-mono`  | ALL numbers, code, paths, technical labels |

### Rules

- 70% neutrals · 20% flag red · 10% flag blue · status colors sparingly
- Zero color gradients (only one alpha-mask on the Marquee edges)
- Brand motto: `sbe.studio <abc/always/be/coding>`
- Headlines Fraunces serif; body Inter; all numbers mono
- All interactive elements: visible `focus-visible` ring in Copper
- All animation honors `prefers-reduced-motion`

---

## Current plan

- **Foundation:** scaffold, design system, navigation, footer, homepage,
  secondary routes, 404, and stats API are in place.
- **Security baseline:** dependencies are upgraded to the current Next/React
  line and `pnpm audit --prod` is expected to pass cleanly.
- **Content baseline:** `/work`, `/about`, `/receipts`, and `/contact` contain
  usable first-pass content sourced from the manifest.
- **Portfolio baseline:** `/work` now includes a featured deployment row, all
  current Vercel websites, and screenshot assets captured from the live URLs.
- **Next improvements:** individual case-study pages, richer founder/about
  copy, a real contact form or calendar link, OG image generation, and a
  deployment runbook.

Every number on every page flows from `lib/manifest-data.ts`. When a stat
updates in the manifest, it updates on the site. Do not bypass this rule.
