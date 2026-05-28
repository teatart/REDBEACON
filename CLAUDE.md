# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

One-page marketing website for **Red Beacon Asset Management** — a fictional asset management firm. Pure static site: no build step, no package manager, no framework.

## Running the site

Open `index.html` directly in a browser. There is no server, no `npm install`, no compilation.

```
# Windows — open in Edge
start msedge index.html

# macOS
open index.html
```

For form submission testing, FormSubmit.co requires the file to be served from a real domain (not `file://`). Use any local static server:

```
npx serve .
# or
python -m http.server 8080
```

## Architecture

Three files, no dependencies beyond Google Fonts loaded at runtime:

| File | Responsibility |
|---|---|
| `index.html` | All markup and section order. Single source of truth for content. |
| `styles.css` | All visual styling. Theming via CSS variables in `:root`. Mobile-first. |
| `script.js` | All interactivity. One `init*` function per feature, all called inside `DOMContentLoaded`. |

### Design tokens (`styles.css` `:root`)

All colors, fonts, radii, and shadows live as CSS custom properties. Change a brand color here and it propagates everywhere — do not hardcode hex values elsewhere.

Key tokens: `--color-primary` (burgundy `#6D1A36`), `--color-accent` (gold `#d4a017`), `--font-heading` (Playfair Display), `--font-body` (Inter).

### JS module pattern (`script.js`)

Each feature is an isolated `init*` function. They share no module-level state except the carousel's closure. Adding a new interactive feature means: write `initFoo()`, call it in `DOMContentLoaded`. No globals, no classes.

The counter animation (`animateCounter`) reads `data-target`, `data-prefix`, and `data-suffix` HTML attributes — update stat values in `index.html` only, not in JS.

### Scroll-triggered animations

`.fade-in` elements start invisible (`opacity:0; transform:translateY(24px)`). `initFadeIn()` uses `IntersectionObserver` to add `.visible`, which transitions them in. Any new section that should animate on scroll just needs the `fade-in` class in HTML — no JS changes required.

### FormSubmit integration

The form posts to `https://formsubmit.co/your-email@example.com`. JS intercepts `submit`, validates, then calls `fetch()` — the page never reloads. The hidden `_next` field is a no-JS fallback only. To go live: replace the email in the `action` attribute, submit once to activate the endpoint via the confirmation email FormSubmit sends.

### Responsive breakpoints

Mobile-first base styles cover ≤767 px. Two `@media` blocks at the bottom of `styles.css`: `min-width: 768px` (tablet — 2-col grids, desktop nav) and `min-width: 1024px` (desktop — 4-col USP grid, larger padding). The hamburger menu is hidden above 768 px via CSS, not JS.
