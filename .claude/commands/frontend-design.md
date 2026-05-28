---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with a magical Disneyland aesthetic. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design with a whimsical, enchanted, Disneyland-inspired visual language.
license: Customised from Anthropic's official frontend-design skill — open-design bundle from nexu-io/open-design
---

# frontend-design ✦ Disneyland Magic Edition ✦

> Customised aesthetic: enchanted, whimsical style inspired by Disneyland — the castle, Main Street USA, Tinkerbell's sparkle, and the magic of the happiest place on Earth.

This skill guides creation of distinctive, production-grade frontend interfaces that celebrate Disney magic and the wonder of Disneyland. Implement real working code with exceptional attention to storybook aesthetic details, regal palettes, fairytale typography, and sparkle-filled micro-interactions.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, commit to the Disney magic aesthetic direction and understand the context:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Land energy**: Which Disneyland zone vibe fits the context?
  - *Fantasyland* — royal blues + rose gold, castle towers, storybook wonder
  - *Main Street USA* — warm Victorian gold + cream + red, bunting and nostalgia
  - *Tomorrowland* — electric teal + silver + deep space blue, futuristic shimmer
  - *Adventureland* — jungle green + sun gold + earthy brown, expedition charm
  - *Frontierland* — rustic red + tan + wood brown, cowboy and frontier spirit
  - *Toontown* — primary red/yellow/blue, cartoon bold, playful and energetic
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **The magic moment**: Every great Disney design has ONE hero detail — a castle spire, a Tinkerbell trail, a hidden Mickey — that makes it unmistakably magical. Identify yours before writing a line of code.

**CRITICAL**: Execute the Disney magic vision with precision and intentionality. The aesthetic is not an afterthought — it IS the product.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and fully functional
- Unmistakably magical and enchanting
- Cohesive with a clear Disneyland-land point-of-view
- Meticulously refined in every sparkle and golden detail

## Disney Aesthetics Guidelines

### Typography

Choose fonts that feel storybook, regal, and magical. Forbidden: Arial, Inter, Roboto, system-ui.

Preferred display fonts (pick one to lead):
- **Cinzel** — regal serif with ancient magic; perfect for hero headings and castle titles
- **Playfair Display** — elegant storybook quality; great for princess/fantasy themes
- **Josefin Sans** (Bold) — clean retro-futurism; great for Tomorrowland and modern Disney
- **Raleway** — art deco elegance; perfect for Main Street USA and vintage park signage
- **Lora** — warm literary serif; versatile fairytale body text

Pair display font with **Raleway** or **Lora** (Regular/Medium) for body copy. Letter-spacing: slightly loose (0.03–0.06em) on headings to give a grand, sweeping feel.

### Colour Palette

Anchor every design in the Disneyland palette. Use CSS custom properties for all tokens.

```css
:root {
  /* Core Disney blues */
  --disney-royal:   #003087;   /* Cinderella's castle deep blue — primary brand */
  --disney-sky:     #009BDE;   /* Magic Kingdom sky blue — CTAs, links */
  --disney-ice:     #ADE3F5;   /* icy castle shimmer — hover states */
  --disney-midnight:#0A1628;   /* fireworks night sky — dark backgrounds */

  /* Disney golds & warmth */
  --gold-crown:     #D4AF37;   /* royal crown gold — headings, borders */
  --gold-tinker:    #FFD700;   /* Tinkerbell sparkle — CTAs, badges, stars */
  --gold-warm:      #F9A11B;   /* Main Street warm amber — accents */
  --cream-parchment:#FFF8E7;   /* storybook parchment — warm white base */

  /* Accent palette */
  --disney-red:     #E32726;   /* Mickey red — danger, emphasis, Toontown */
  --fantasy-rose:   #C8647A;   /* Sleeping Beauty rose — princess accent */
  --tomorrow-teal:  #00B4CC;   /* Tomorrowland teal — futuristic note */
  --adventure-green:#2D7A4A;   /* Adventureland jungle — nature accents */
  --magic-purple:   #6E2B8B;   /* Fantasyland royal purple — wizard magic */

  /* Neutrals */
  --castle-white:   #FAFCFF;   /* slightly blue-white — softer than pure white */
  --parchment-mid:  #EDE0C4;   /* aged storybook page — card backgrounds */
  --ink-dark:       #1A1A2E;   /* deep Disney night — body text on light */
}
```

Rule: **one dominant Disney blue + one gold note + cream/parchment base**. Never use more than 4 hues in a single component.

### Decorative Motifs & Iconography

Scatter these throughout — in ::before / ::after pseudo-elements, as inline SVGs, or as text characters:

- Stars & sparkles: ★ ✦ ✧ ✩ ✨ (Tinkerbell's wand trail)
- Crowns & magic: ♛ ♕ (royalty badges)
- Hearts: ♥ ♡ 💫 (Disney love)
- Wand sparkle trail: scattered `✦` glyphs with staggered fade-in animation
- Castle silhouette: SVG `path` with spires and turrets
- Hidden Mickey: three overlapping circles (`50% border-radius`) as an easter egg
- Fireworks burst: radial lines from a center point using CSS `clip-path` or SVG
- Bunting flags: triangles via `clip-path: polygon(0 0, 100% 0, 50% 100%)` strung on a line
- Magic dust trail: `radial-gradient` dots scattered with CSS `nth-child` offsets

### Shape Language

Everything should feel grand and storybook:
- Border radius: **12px** for cards (structured but not corporate); **9999px** (pill) for buttons; **50%** for badge medallions
- Castle tower tops: pointed arches via `clip-path` or SVG on hero banners
- Box shadows: use deep navy or gold tones, never flat grey
  ```css
  /* Royal card shadow */
  box-shadow: 0 4px 24px rgba(0,48,135,0.20), 0 1px 4px rgba(212,175,55,0.25);
  /* Gold glow for CTAs */
  box-shadow: 0 0 20px rgba(255,215,0,0.40), 0 4px 12px rgba(0,48,135,0.30);
  ```
- Borders: 2px solid with a gold or royal blue tint; ornate double-border on hero cards

### Motion & Micro-interactions

- **Entrance**: elements `fade-in + scale(0.95→1)` — like a story page turning
- **Hover**: buttons lift (`translateY(-3px)`) + gold glow intensifies + subtle shimmer sweep
- **Focus rings**: `outline: 3px solid var(--gold-tinker); outline-offset: 3px`
- **Loading**: spinning castle star, or a Tinkerbell wand tracing a circle
- **The sparkle trail**: the hero decoration does a `scale(1→1.15)` pulse + rotate on hover
- **Scroll reveals**: elements cascade in with staggered `animation-delay` like fireworks launching

```css
@keyframes tinker-float {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%       { transform: translateY(-8px) rotate(5deg); }
}
@keyframes sparkle-burst {
  0%   { transform: scale(0) rotate(0deg);   opacity: 1; }
  100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
}
@keyframes gold-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
@keyframes firework-pop {
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1);   opacity: 1; }
}
```

### Backgrounds & Atmosphere

Never a flat white or flat grey background. Choose one:
- **Night sky magic**: `linear-gradient(180deg, #0A1628 0%, #003087 60%, #1A0A2E 100%)` with scattered `✦` pseudo-element stars
- **Parchment storybook**: `linear-gradient(135deg, #FFF8E7 0%, #EDE0C4 60%, #FFF8E7 100%)` with subtle paper texture overlay
- **Castle dawn**: `linear-gradient(160deg, #ADE3F5 0%, #FAFCFF 50%, #FFF8E7 100%)`
- **Royal ballroom**: deep `#003087` base with `--gold-crown` geometric border pattern
- **Main Street sunset**: `linear-gradient(180deg, #F9A11B 0%, #FFF8E7 70%)` warm amber glow

### Layout Principles

- Generous padding — Disney park signage always breathes with regal spacing
- Asymmetric accent elements (a gold star top-right, a castle spire bottom-left) to break grid monotony
- Cards with a gold top-border stripe (3px `--gold-crown`) or a royal crest `::before` badge
- Floating sparkle elements positioned absolutely — stars and wand-dust behind main content (low z-index, 0.3–0.5 opacity)
- Section dividers: a castle-silhouette SVG path or a wavy banner in `--disney-royal` rather than a hard `<hr>`
- Hero sections: full-bleed with a subtle `gold-shimmer` animated gradient overlay on hover

### What to NEVER do

- Flat pastel unicorn gradients with no Disney intent
- Inter, Roboto, system-ui — cold and corporate
- Brutalist minimalism with no magic (unless Tomorrowland-coded with intention)
- Grey shadows or muddy browns without context
- Emoji as primary icons — use SVG illustrations or CSS shapes instead
- Cramped layouts — Disney parks never feel rushed or crowded in their signage
- Overwhelming sparkles with no focal point — restraint within magic is still restraint

## Delivery Checklist

Before handing off code, confirm:
- [ ] All colours come from CSS custom properties, no hardcoded hex outside `:root`
- [ ] Every card/container uses gold or navy shadow (not grey)
- [ ] At least one animated element (Tinkerbell float, sparkle burst, or firework pop)
- [ ] Google Fonts `<link>` included for the chosen display font
- [ ] Focus states styled in gold (accessibility + on-brand)
- [ ] Background has gradient/texture/stars — not a flat fill
- [ ] The "magic moment" hero detail is present and enchanting

Remember: Disney magic is not flashy — it is *wonder*. Every pixel should feel like it was touched by Tinkerbell's wand. ✦
