# 05 — Brand Reference (Original Site)

Source: live CSS (`home.css`, `classes.css`, `pricing.css`, `about.css`), computed styles measured in headless Chrome, and pixel sampling of the logo files. Copies of all four stylesheets are in [raw/html/](raw/html/).

Labels used: **Verified** = read from CSS or measured. **Estimate** = inferred from screenshots.

---

## 1. Logo

| Item | Detail | Status |
|---|---|---|
| Wordmark | "Humbl." in a rounded geometric sans, with a small "PILATES" set underneath. Terracotta on transparent. | Verified ([logo.png](original-assets/logo/logo.png)) |
| Wordmark color | `#A94023` (dominant pixel) — effectively the same as CSS `#AA4126` | Verified (pixel sample) |
| Brand mark | A stylised white "H" (the two uprights joined by a flowing S-curve) on a terracotta rounded square, `#A84023` | Verified ([ico.png](original-assets/logo/ico.png)) |
| Placement | Top-left of the fixed header. Rendered at 123×38 on desktop and 88×27 at 768px and below. | Verified |
| Variations | None. No white/inverse logo and no SVG. | Verified (probed `logo.svg`, `logo_white.png`, `logo2.png`: all 404) |
| Quality | 175×54 px raster, so it is soft on high-DPI screens | Verified |

**The "H" mark and the wordmark should stay as they are.** They are the most recognisable brand assets.

## 2. Colors

### 2.1 Actual brand colors

| Role | HEX | Where it's used | Status |
|---|---|---|---|
| **Primary: terracotta** | `#AA4126` | Logo, CTA bands (full-width), filled "Buy now" buttons, outline "Book Now" buttons, footer text and links, About hero background, price-card titles | Verified (22 uses in CSS; matches logo) |
| Terracotta (logo pixels) | `#A94023` / `#A84023` | logo.png / ico.png | Verified |
| Terracotta, lighter | `#C45438` | Only the "Limited Spots" badge | Verified (incidental) |
| Charcoal (headings) | `#2C2C2C` (`--secondary`) | h1–h4 and the "Premium" badge | Verified |
| Body text | `#3A3A3A` (`--text`) | Paragraphs | Verified |
| Muted text | `#8A8A8A` (`--text-light`) | Subtitles, intros | Verified |
| Off-white background | `#FAF9F7` (`--light`) | Hero, offerings and FAQ section backgrounds | Verified |
| Cream | `#F5F3F0` (`--cream`) | Hover backgrounds and the quote block | Verified |
| Sand / taupe accent | `#C4B5A0` (`--accent`) | Borders and gradient tints | Verified |
| Border | `#EBEBEB` | Card borders and dividers | Verified |
| White | `#FFFFFF` | Page background and footer background | Verified |

### 2.2 Inconsistent or incidental colors

| HEX | Source | Notes |
|---|---|---|
| `#8B7355` (warm brown) | `--primary` in `classes.css` and `about.css` | Because of stylesheet load order, the **Classes and About pages render their primary buttons, icons, nav underline and FAQ tab in brown** instead of terracotta. On Home and Pricing the same elements are terracotta. The brown looks like a leftover from a template, not a deliberate brand choice. **Recommendation: treat terracotta as the single primary color and keep brown only as a possible neutral.** Needs the business to confirm. |
| `#9DAD7F` (sage green) | The "New to Pilates?" badge | Used once. Incidental. |
| `#25D366` | WhatsApp floating button | WhatsApp's own brand color, not Humbl's |
| Browser default link blue | The "Home" nav item | Bug: the item has class `humbl` instead of `nav-link`, so it gets no styling |
| `rgba(255,255,255,.5)` on `#FFFFFF` | Footer copyright | Bug: the text is invisible because it was written for a dark footer that was later changed to white |

### 2.3 Hover and active states (from CSS)

- **Nav link:** the color changes to primary and a 1px underline grows from the center (`::after`, width 0 → 100%, 0.25s).
- **`.btn-primary` (outline):** fills with primary, the text turns white, the button lifts by 1px and gets a soft shadow.
- **Cards** (`.method-card`, `.level-card`, `.class-box`): lift by 4px on hover, get `--shadow-lg`, and the border turns primary.
- **FAQ tab active:** primary background with white text.
- **Footer link hover:** turns white on a white background, so the text **disappears** (bug).

## 3. Typography

### 3.1 Families in use (original)

| Family | Weights loaded | Use | Status |
|---|---|---|---|
| **Cormorant Garamond** (serif) | 300, 400, 500, 600 | h1–h3, section titles, card titles, italic tagline, quote marks, founder name | Verified |
| **Inter** (sans) | 300, 400, 500 | Body, nav, buttons, h4 (eyebrow labels), footer, forms | Verified |
| DM Sans / Roboto | — | Only on the Hostinger 404 page, which is not part of the site | Verified, but not a brand font |

There are no self-hosted font files. Fonts load from Google Fonts twice: once through `<link>` and again through `@import` in every CSS file.

### 3.2 Measured type scale (computed in Chrome)

| Element | Desktop 1440 | Tablet 768 | Mobile 390 | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| Body `p` | 13px | 13px | 13px | 300 | 1.7 to 1.9 | normal |
| Home hero `h1` | 46px | 36px | 30px | 400 | 1.2 | −0.02em |
| Inner-page hero `h1` | 44px | 36px | 30px | 400 (**700 on About**) | 1.2 | −0.02em |
| Section `h2` | 30 / 32 / 36px (varies by page) | 28–36px | 24–28px | 400 | 1.25 | −0.02em |
| Card `h3` | 16–18px | — | — | 400 | 1.25 | −0.02em |
| `h4` eyebrow labels | 11–12px, Inter 500, UPPERCASE | — | — | 500 | — | 1.5px |
| Nav link | 12px Inter | — | — | 400 | — | 0.5px |
| Button | 11px Inter, UPPERCASE | — | — | 500 | — | 1px |
| Tagline | 18px Cormorant italic, primary color | — | — | 400 | — | — |
| Footer | 12px body; 11px headings | — | — | 300 / 500 | 1.8 | 1.5px on headings |

**Observations**
- Body text is very small for a marketing site: 13px at weight 300 in light grey. It is hard to read, especially on mobile.
- The h2 size is inconsistent across pages (30, 32 and 36px for the same role).
- Justified text (`text-align: justify`) in the About and Founder paragraphs leaves uneven gaps between words on mobile.

### 3.3 Two-font rule for Phase 2 (recorded, not decided)

The redesigned site **must use exactly two font families**: one for headings, and one for body, navigation, buttons, forms, cards and the footer. **No final choice is made in this audit.** Options for Phase 2 to consider:

- **Keep the original pairing** (Cormorant Garamond with Inter). This gives the strongest brand continuity. The catch is that Cormorant is thin at small sizes, so it should only be used at 28px and above, at weight 500 or more.
- **Change the serif and keep Inter.** A sturdier serif (for example a transitional or old-style text serif) would read better at mid sizes and keep the same warm, editorial tone.
- **Use a sans pairing that echoes the wordmark.** The logo uses a rounded geometric sans, so a humanist or geometric sans for headings would also be on-brand.

Whichever pair is chosen, Phase 2 should raise body text to at least 16px at weight 400.

## 4. Other visual identity elements

| Element | Original treatment |
|---|---|
| Overall tone | Warm, minimal, calm, "boutique": off-white backgrounds, terracotta accents and serif headings |
| Photography | Warm-toned, professional, shot in the studio with arched backlit mirrors, pale wood and cream-upholstered reformers, ceramic objects on shelves, and natural window light. All photos are portrait 4:5. |
| Image cropping | Hero: a diagonal `clip-path` slice on the right 48%, with a gradient wash fading into the off-white. Classes: a full-width band. About: fixed-height crops (600/700/300px). |
| Signature motif in the photos | **Arched, softly backlit mirrors.** This is the studio's architectural signature and a natural motif for Phase 2, used through photography rather than added ornaments. |
| Border radius | Mostly square: 2px on images and cards, 4–12px in a few places, and pills on the badges |
| Shadows | Very subtle: 0 1px 3px to 0 8px 24px, at 3–6% black |
| Icons | Feather-style 1.5px stroke SVGs on Classes and About. Emoji icons in "Our Studio". The WhatsApp glyph is hotlinked. |
| Decorative elements | A large serif quotation mark on testimonials, colored pill badges, and arrows ("Discover More →") |
| Header | Fixed, white at 95–98% opacity with a backdrop blur. It is about 130px tall on desktop because the container padding adds 30px above and below. |
| Section rhythm | Alternating white and off-white bands with 90px vertical padding. Every page ends in a full-width terracotta CTA band followed by a white footer. |
