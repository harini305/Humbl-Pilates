# Humbl Pilates: Phase 2 frontend

Frontend only: Next.js (App Router, JavaScript), GSAP + ScrollTrigger, plain CSS. There's no backend, API route, form handler or database. All booking, payment and scheduling stays on Rezerv.

## Run locally

```bash
npm install
npm run build && npm start      # production preview on http://localhost:3000
npm run dev                     # development
python -I scripts/optimize-images.py   # only if the source photos change
```

## Plan as built

1. **Pages and section order**
   - `/`: hero, studio intro and founder, three levels (tabs), what we offer, testimonials, where to find us (map, hours, contact), Book band.
   - `/classes/`: hero, the three levels in full (visible, not behind a toggle), studio policy, private 1:1 and private group sessions, Humbl Online note, Ask band.
   - `/pricing/`: hero with a per-class calculator, class packages, memberships, timetable link, booking FAQ, Ask band.
   - `/about/`: hero, our story, the Humbl Method, Demi Geary (confirmed facts only), studio gallery, testimonials, full FAQ (`#faq`), Book band.
2. **Design direction.** A calm, editorial layout. Every photograph is a plain rectangle (4px corners). Image-and-text sections use a two-column grid where the photograph stretches to the height of the text beside it, so their top and bottom edges line up. Section spacing is 48–80px, and neighbouring sections on the same background share a single gap. Ornaments are left out on purpose: no eyebrow labels, number indexes, icon cards, gradients or emoji. (The arch-shaped frames of the first version were removed at the client's request on 2026-10-17.)
3. **Fonts.** Two families, chosen at the client's request to match the logo: **Lexend** (headings, echoing the wide geometric "Humbl." wordmark) and **Jost** (body, navigation, buttons and footer, echoing the "PILATES" line). Both are self-hosted through `next/font`, and no other family is loaded. The logo is only a raster image, so these are the closest Google Fonts matches. If the client can name the actual logo typeface, swap it in `app/layout.js`.
4. **Tokens.** Every colour, size, space, radius and duration is a custom property in `app/globals.css`, shared by all routes. Terracotta `#AA4126` is the only primary colour, which removes the brown `#8B7355` drift on Classes and About.
5. **Shared components** (`components/`): `Header` (sticky, active state, accessible mobile dialog), `Footer`, `WordBand` (closing CTA), `Photo`/`Media`, `LevelTabs`, `PriceCalculator`, `Faq` (`<details>`), `WhatsAppFloat` (hides over the CTA band and footer), `Motion`.
6. **Images.** `scripts/optimize-images.py` writes WebP copies at 640/960–1800 px from the untouched masters. The 39 MB of originals became 1.1 MB, and the largest file is 153 KB. `photo_2.jpeg` is used instead of its duplicate `DSC06509.jpg`. `images.unoptimized: true` is set, and the `srcset`s are written by hand.
7. **Motion** (`components/Motion.js`):
   - The hero photograph opens like a shutter.
   - Section content rises in staggered, once only.
   - Photographs open upward as they enter.
   - Selected photographs drift slowly while scrolling.
   - The word in the closing band rises.
   - Tabs and the menu animate.
   - Under `prefers-reduced-motion` all of this is off, and content is always visible without JavaScript.
8. **Booking flow and external links.** General "Book a class"/"Book" buttons (header, mobile menu, Home and Classes heroes, closing bands) stay on this site and go to `/classes/#levels`. Only the final per-class, per-session and per-package buttons leave for Rezerv. Rezerv cannot be embedded: its `Content-Security-Policy: frame-ancestors` allows only Rezerv's own domains. Every Rezerv URL comes from `lib/content.js` (copied from `site-content.json`). Only the real WhatsApp number is used; the placeholder `6281234567890` appears nowhere.
9. **Redirects** (in `next.config.mjs`):
   - `/index.php` and `/footer.php` go to `/`.
   - `/classes.php`, `/pricing.php` and `/about_us.php` go to `/classes/`, `/pricing/` and `/about/`.
   - `www.humblpilates.com` goes to the apex domain.

   These need a Next.js host (`next start` or Vercel). A static export would need them set at the host instead.
10. **SEO.** Each route has its own title, description and canonical URL. The site also has an OG image, `lang="en"`, `sitemap.xml`, `robots.txt`, and ExerciseGym JSON-LD (opening hours are left out until F5 is resolved).

## Verified locally (2026-10-17, production build, headless Chrome)

These 70 automated checks passed:
- No horizontal overflow at 1440, 768 and 390 px on all four routes.
- Only the two font families render.
- The closing band sits flush on the footer.
- All text is visible after scrolling.
- The mobile menu opens and closes, including with Escape, traps focus, locks scrolling, and closes on navigation.
- Calculator results are correct.
- The FAQ opens and closes, and the tabs work from the keyboard.
- Every external link on every page is checked against the verified list.
- Every image has alt text.
- Under reduced motion, the mobile hero photograph sits within the first screen.

Not tested: real iOS Safari, Firefox, and Lighthouse.

## Content published but still awaiting client confirmation

Each item is marked `VERIFY` in `lib/content.js`. The numbers refer to [08-issues-gaps-questions.md](source-audit/08-issues-gaps-questions.md).

| Item | What the site shows now |
|---|---|
| F1 class length | 45 minutes (the website's figure; Rezerv lists 50) |
| F5 studio hours | The homepage hours. The conflicting About-FAQ hours are not used. |
| F6/F7 package validity | The website's periods (Rezerv's are shorter). The calculator uses them to decide which packs can be used before they expire. |
| F8 Yearly Membership | Listed, as on the current site |
| F21 product name | "Private Group Session" (as on Home and Rezerv) |
| Humbl Method principles, Our Story | Kept from the About page; need sign-off |

**Withheld until confirmed:** the 22-question About FAQ, Demi's extended bio, quote and qualifications, the studio feature claims (for example "Balanced Body"), private session prices, the Beach House class, and social links. The FAQ shown on the site is the seven verified Pricing-page questions.

Small copy fixes: "Comming Soon" became "coming soon", "Calender" became "Plan your week", and US spellings were changed to UK spellings to match most of the copy (question 16).

## Open client questions

All 16 questions in audit 08 §4 are still open. The ones that block launch are 1–3 (facts and prices), 6 (Demi's bio and photo), 11 (Instagram and Facebook URLs), 12 (vector logo) and 13 (whether to keep the Google Ads tag, which is not installed).
