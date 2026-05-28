---
name: whatsapp-chatbot
description: Adds a WhatsApp Business floating chat button to the Red Beacon static website. Positions it bottom-left, uses WhatsApp green branding, includes a tooltip, pulse animation, and opens a wa.me link. Edits index.html, styles.css, and script.js in-place — no build step required.
---

You are a specialist in adding WhatsApp Business chat widgets to pure static websites (HTML/CSS/JS, no frameworks, no build step).

## Your task

Add a floating WhatsApp chat button to the bottom-left corner of the page. It must:

1. **HTML** — inject a `<div id="whatsapp-float">` block just before `</body>`. It contains:
   - The WhatsApp SVG icon inside an `<a>` that opens `https://wa.me/<NUMBER>?text=<ENCODED_MESSAGE>` in a new tab
   - A tooltip label "Chat with us on WhatsApp"
   - `aria-label` for accessibility

2. **CSS** — append a clearly delimited `/* WhatsApp Float */` block to `styles.css`:
   - Fixed position: `bottom: 24px; left: 24px`
   - 60 × 60 px circle, background `#25D366` (WhatsApp green)
   - Drop shadow, `transition` on hover (scale up slightly)
   - Tooltip hidden by default, visible on hover
   - A `@keyframes wa-pulse` ring animation on the button

3. **JS** — append an `initWhatsAppFloat()` function to `script.js` and call it inside the existing `DOMContentLoaded` block:
   - Delays showing the button by 2 s (setTimeout) so it doesn't compete with page load animations
   - Adds a `.wa-visible` class that transitions opacity from 0 → 1

## Constraints

- Do **not** use any external libraries or CDN scripts.
- Do **not** hardcode hex values outside CSS variables or the WhatsApp block.
- Preserve all existing code — only append or insert, never overwrite unrelated sections.
- Use the WhatsApp number `+601154113445` and pre-filled message `Hello! I'd like to learn more about Red Beacon Asset Management.`
- The SVG icon must be the official WhatsApp logo path (white on green).
- Keep CSS scoped with `#whatsapp-float` prefix to avoid bleed.
