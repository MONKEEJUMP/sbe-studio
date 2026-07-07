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
.codex/actions/       # coded setup, verification, and release runbooks
ops/
├── deploy-scripts/   # historical DreamHost/VPS helper scripts
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

The current SBE system is the green signal palette. Pine/forest carries
structure and text, pure white carries the page surface, and the live accents
rotate through grass, neon, lime, chartreuse, and yellow.

| Token              | Light     | Dark      | Role                                |
|--------------------|-----------|-----------|-------------------------------------|
| `--sbe-canvas`     | `#FFFFFF` | `#0B1F0B` | Page background                     |
| `--sbe-surface`    | `#FFFFFF` | `#123812` | Cards and framed surfaces           |
| `--sbe-ink`        | `#0B3D0B` | `#F2FFF0` | Headlines, body text                |
| `--sbe-graphite`   | `#145214` | `#B7E8B7` | Secondary text                      |
| `--sbe-mist`       | `#2F7D32` | `#8FD98F` | Tertiary text, metadata             |
| `--sbe-hairline`   | `#228B22` | `#2CFF05` | Borders and dividers                |
| `--sbe-copper`     | `#228B22` | `#89F336` | Deep forest structural accent       |
| `--sbe-cobalt`     | `#00BF33` | `#00BF33` | Grass live accent                   |
| `--sbe-electric`   | `#89F336` | `#89F336` | Lime accent and offset shadows      |
| `--sbe-plasma`     | `#2CFF05` | `#2CFF05` | Neon accent and live signal states  |
| `--sbe-neon`       | `#CCFF00` | `#CCFF00` | Chartreuse accent                   |
| `--sbe-yellow`     | `#FFFC30` | `#FFFC30` | Bright band and high-signal accents |
| `--sbe-chip`       | `#EDFFE8` | `#0F2A0F` | Soft code-chip background           |

### Typography

| Family         | Tailwind     | Role                                       |
|----------------|--------------|--------------------------------------------|
| Fraunces       | `font-serif` | Display headlines (H1, H2, sometimes H3)   |
| Inter          | `font-sans`  | Body, UI, buttons                          |
| JetBrains Mono | `font-mono`  | ALL numbers, code, paths, technical labels |

### Rules

- Pure white surfaces, pine structure, and green/yellow live accents.
- Use vivid color as signal, shadow, proof, and status; do not let the page
  collapse into a single flat green tone.
- Offset shadows should contrast the card color and the page background.
- Checkmarks are green; code chips use the soft green tint.
- Brand motto: `sbe.studio <abc/always/be/coding>`
- Headlines Fraunces serif; body Inter; all numbers mono
- All interactive elements: visible `focus-visible` ring
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
- **Command-center baseline:** repo `AGENTS.md` and coded `.codex/actions`
  document setup, verification, and release rules.
- **Next improvements:** proof guard checks, individual case-study pages,
  typed evidence/receipt objects, a structured intake path, public-safe Ai
  concierge foundations, OG image generation, and a current deployment runbook.

Every number on every page flows from `lib/manifest-data.ts`. When a stat
updates in the manifest, it updates on the site. Do not bypass this rule.
