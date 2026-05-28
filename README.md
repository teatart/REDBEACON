# Red Beacon Asset Management

A one-page marketing website for **Red Beacon Asset Management** — a fictional asset management firm. Styled with a Disneyland Fantasyland aesthetic: deep royal blue, crown gold, castle-inspired design, and storybook typography.

## Live Site

[https://teatart.github.io/REDBEACON/](https://teatart.github.io/REDBEACON/)

## Tech Stack

- Pure static site — HTML, CSS, JavaScript
- No build step, no framework, no dependencies
- Hosted on GitHub Pages via GitHub Actions

## Project Structure

| File | Description |
|---|---|
| `index.html` | All markup and content |
| `styles.css` | All styling — Disney Magic Edition with CSS custom properties |
| `script.js` | All interactivity (carousel, counters, fade-ins, form, WhatsApp float) |
| `playwright-fill-form.js` | Playwright script to auto-fill and submit the enquiry form |
| `package.json` | Node.js dependencies (Playwright) |

## Design Tokens

All colours and fonts live as CSS custom properties in `styles.css `:root`:

| Token | Value | Use |
|---|---|---|
| `--disney-royal` | `#003087` | Primary — headings, card borders |
| `--gold-tinker` | `#FFD700` | Accent — CTAs, counters, sparkles |
| `--gold-crown` | `#D4AF37` | Borders, section dividers |
| `--cream-parchment` | `#FFF8E7` | Page background |
| `--disney-midnight` | `#0A1628` | Hero + footer dark base |
| `--font-heading` | Cinzel | Display font — regal serif |
| `--font-body` | Raleway | Body copy |

## Features

- Responsive one-page layout with sticky nav and hamburger menu
- Scroll-triggered fade-in animations via IntersectionObserver
- Auto-incrementing stat counters
- Testimonial carousel
- Contact form via FormSubmit.co (no backend)
- WhatsApp floating chat button
- **Dark / Light theme toggle** — persists via `localStorage`, respects `prefers-color-scheme` on first visit

## Running Locally

Open `index.html` directly in a browser:

```bash
# Windows
start msedge index.html

# macOS
open index.html
```

For form submission testing, serve with a local static server:

```bash
npx serve .
# or
python -m http.server 8080
```

## Playwright Form Automation

Requires Node.js. Install dependencies and run:

```bash
npm install
npx playwright install chromium
node playwright-fill-form.js
```

This opens a browser, navigates to the live site, fills in the enquiry form, and submits it. The submission is sent via FormSubmit.co to `tracey.tay@redbeaconam.com`.

> **Note:** FormSubmit.co requires the form to be submitted from a real domain (not `file://`). The script targets the live GitHub Pages URL. On first use, FormSubmit will send an activation email to confirm the endpoint before forwarding submissions.

## WhatsApp Float Button

A floating chat button appears in the **bottom-left corner** after a 2-second delay. It links directly to WhatsApp via `wa.me` with a pre-filled message.

- **Number**: +601154113445
- **Icon**: Official WhatsApp SVG (white on `#25D366` green)
- **Features**: Pulse ring animation, hover tooltip, fade-in on load, `prefers-reduced-motion` support
- To change the number or message, update the `href` on `#whatsapp-float__link` in `index.html`

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
