# 09 — Phase 2 Recommendations & Mandatory Requirements

Phase 2 must not start until the client approves the audit (see 08 §4 for the questions to resolve first).

## 1. Target stack (as briefed)

- Next.js (App Router), JavaScript (not TypeScript), React
- GSAP + ScrollTrigger for motion
- A responsive, static or SSG-friendly site. **No backend is needed**: every transaction stays on Rezerv.

## 2. Mandatory design rules (carried over from the brief)

### Typography
- **Exactly two font families across the whole site:** one for headings, and one for body, navigation, buttons, forms, cards and the footer.
- Both must be readable, professional and not overly decorative.
- No third family for any section, the footer, the logo treatment or decorative headings. (The logo stays an image.)
- Consistent sizes for equivalent components on every route, from one controlled, responsive type scale (e.g. CSS `clamp()` tokens).
- Build hierarchy with weight, size, line height and letter spacing.
- Recommended minimum: body text 16px at weight 400, with contrast of at least 4.5:1.
- The final font pair is **not chosen yet**. Options are in 05 §3.3. The original pair is Cormorant Garamond (headings) and Inter (body).

### Visual design
- A professional, human-designed look. No template feel.
- Intentional alignment between images and text. Consistent content widths, margins and spacing.
- **No** decorative numbering, eyebrow text, random symbols, floating badges or ornamental elements. (This drops the original's colored pill badges, emoji icons and big quote glyphs unless one clearly serves a purpose.)
- Avoid repetitive AI-looking layouts, such as rows of identical icon cards.
- Use effects only when they have a clear purpose. Motion should be subtle and respect `prefers-reduced-motion`.

### Content
- Keep pages concise. Avoid repeated paragraphs and unnecessary sections.
- Keep meaningful facts. Use [content/site-content.json](content/site-content.json) as the copy source.
- **Do not invent** claims, testimonials, FAQs, prices, bios or blog posts. The About-page FAQ, the Demi bio extras and the studio feature claims stay out until the client confirms them.

### Footer
- Compact and content-driven: name and address, contact (WhatsApp, email), page links, social links (only once the client supplies URLs), and copyright.
- No excessive padding, extra columns or duplicated content.
- The final content section must be fully visible above the footer, with a natural transition, and no overlap, clipping, large blank gaps or fixed-footer interference.
- Text must be readable. (The original had invisible copyright and hover states.)

### Images and performance
- Use the original photos in [original-assets/photo/](original-assets/photo/). **Don't** add stock or AI imagery.
- Resize and compress locally before committing. Suggested targets: hero about 2000–2400px on the long edge; content images 1200–1600px; WebP or AVIF at about 75–80 quality, aiming for under 300 KB each. Keep the originals in `docs/source-audit/original-assets/` as masters. Don't commit the 4–7 MB originals into `public/`.
- `photo_2.jpeg` and `DSC06509.jpg` are the same shot. Use only one.
- **In `next.config`, merge `images: { unoptimized: true }` into the existing config without replacing unrelated settings**, so the site doesn't use Vercel's Image Optimization quota.
- Still use `next/image` (or `<img>`) with explicit `width`/`height`, a sensible `sizes`, `loading="lazy"` below the fold, and priority on the hero. Since optimization is off, serve pre-generated responsive sizes (e.g. `-800w`, `-1600w`).
- Self-host fonts via `next/font` (the two chosen families only).
- No jQuery.

**Don't change project configuration during the audit.** This section is guidance for Phase 2 only.

## 3. Recommended information architecture

| Route | Content | Source pages |
|---|---|---|
| `/` | Hero (five reformers, Pererenan, tagline, Book), short About, the offerings (group levels, private, private group), one or two testimonial excerpts, location/hours/map, closing CTA | Home |
| `/classes` | The three group levels **shown openly** (not behind a toggle), the studio policy stated once, private 1:1 and private group, plus Humbl Online only if the client wants it | Home §4–5, Classes |
| `/pricing` | Packages and memberships with prominent prices, a timetable link, a short confirmed FAQ | Pricing |
| `/about` | Story, the Humbl Method (if approved), Demi (confirmed facts only), the studio gallery, testimonials | About |
| Optional `/faq` or a section on `/pricing` | One merged, conflict-free FAQ | Pricing FAQ plus approved About items |
| Redirects | `/index.php` → `/`, `/classes.php` → `/classes`, `/pricing.php` → `/pricing`, `/about_us.php` → `/about`, `/footer.php` → `/`, www → apex | — |

Navigation: Classes · Pricing · About (plus the logo linking home), with a persistent **Book** button going to Rezerv. A blog is **not** recommended unless the client asks for one. If one is added later, its first presentation uses no more than 10 images.

## 4. Brand continuity

- **Primary color: terracotta `#AA4126`** everywhere. Drop the brown `#8B7355` as a primary; it can stay as an optional neutral. Contrast checks: terracotta on white is 6.0:1 and terracotta on `#FAF9F7` is 5.7:1, both AA-compliant for text and buttons.
- Neutrals: `#2C2C2C` / `#3A3A3A` for text, `#FAF9F7` / `#F5F3F0` for backgrounds, `#C4B5A0` sand and `#EBEBEB` for borders. Don't use `#8A8A8A` for body text (3.3–3.5:1).
- Keep the **logo wordmark and the "H" mark** unchanged. Generate favicons from `ico.png`. Ask for a vector logo.
- Photography is the brand's strongest asset: warm light, **arched backlit mirrors**, pale wood. Let the photos carry the atmosphere instead of decorative UI.
- Keep the calm, minimal, boutique tone. Fix readability (larger body text) and inconsistency (one primary color, one h2 size).

## 5. Functionality to rebuild

| Feature | Approach |
|---|---|
| Header | Sticky, with an accessible mobile menu (`<button aria-expanded>`, Esc closes, focus management, scroll lock). Active-route state. A visible **Book** CTA. |
| Booking | External links to the exact Rezerv URLs in `site-content.json → booking`, with `rel="noopener"`. Use `target="_blank"` or the same tab, whichever the client prefers. |
| WhatsApp | Real number only (`6288987333593`). A floating button is optional; if kept, it mustn't cover CTAs or the menu on mobile. |
| Map | Lazy iframe, or a static image plus an "Open in Google Maps" link |
| FAQ | `<details>`/`<summary>` or an accessible accordion. Tabs are not needed for about 10 questions. |
| Email / phone | `mailto:` and `tel:` links |
| Analytics | Google Ads tag `AW-18162115117` via `next/script` site-wide, **only if the client confirms** |
| SEO | Per-route `metadata` (title, description), canonical URLs, OG image (a studio photo), `lang="en"`, `sitemap.xml`, `robots.txt`, LocalBusiness/ExerciseGym JSON-LD using only verified facts (name, address, geo, phone, email, confirmed hours) |
| Motion | GSAP/ScrollTrigger: gentle reveals, perhaps an image parallax in the hero only. Disable under `prefers-reduced-motion`. |

## 6. Don't carry over

- The placeholder WhatsApp number and the `classes.html` redirect
- `<button>` nested inside `<a>`, `onclick` on divs, duplicate IDs
- Hidden "Discover More" panels for essential content
- The per-page color drift, the invisible footer text, the white-on-white hover
- Emoji icons, contradictory badges, "Comming Soon" cards (unless the client wants a mention)
- The very long full-width 4:5 images that stretch the Home page
- Justified body text
- jQuery and the dead template JS

## 7. Acceptance checklist for Phase 2

- [ ] Exactly two font families, loaded via `next/font`, verified in DevTools on every route
- [ ] One primary color (terracotta) on every route
- [ ] No horizontal overflow at 390, 768 and 1440 (`scrollWidth === clientWidth`)
- [ ] The last section is fully visible above the footer at all three widths
- [ ] Every Rezerv and WhatsApp link points to the correct URL and number
- [ ] No image in `public/` over about 400 KB; `images.unoptimized: true` merged into the existing config
- [ ] Every fact matches `site-content.json`, or the client's answers to 08 §4
- [ ] Lighthouse accessibility ≥ 95; body text contrast ≥ 4.5:1
- [ ] `.php` redirects in place
