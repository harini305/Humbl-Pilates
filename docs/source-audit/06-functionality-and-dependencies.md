# 06 — Functionality & Technical Dependencies

All tests were run on 2026-10-17 in headless Chrome, driven through the DevTools protocol by a script outside the project. The raw results are in [raw/browser-measurements.json](raw/browser-measurements.json).

Classification key: **Observed** · **Interaction tested** · **Functionality verified** · **Partially verified** · **Unverified**

## 1. Feature table

| # | Feature | Page(s) | Classification | Evidence / behaviour | Phase 2 implication |
|---|---|---|---|---|---|
| 1 | Primary nav links | All | **Functionality verified** | All four `.php` routes return 200 | Rebuild as App Router routes and redirect the old `.php` URLs |
| 2 | Mobile hamburger drawer | All (≤768px) | **Functionality verified** | Tapping `.menu-toggle` adds `.active`. The drawer slides from `right:-…` to `x=97.5`, 292px wide (75%), full height. The "×" removes `.active`. Screenshots: `index__mobile-390__menu-open.jpg`, `classes__mobile-390__menu-open.jpg` | Rebuild accessibly: use a `<button>` with `aria-expanded`, close on Esc and on link click, add focus trapping, and lock scrolling |
| 3 | Duplicate `toggleMenu` definitions | Classes, Pricing, About | Interaction tested | An inline jQuery `toggleMenu` and a `toggleMenu` in the page JS both exist. The later one wins, and the menu still works. | Don't carry over |
| 4 | "Discover More" reveals Group Classes by Level | Home | **Functionality verified** | `#group-classes` display goes from `none` to `block`, and the back link sets it to `none` | Show the content statically |
| 5 | "Discover More" swaps the grid for the level panel | Classes | **Functionality verified** | `.classes-section` is hidden and `.group-detail-section.active` is shown. The back link restores the grid. Loading `classes.php#group-classes` opens the panel. | Show statically. Keep a `#levels` anchor if useful. |
| 6 | Booking CTAs (Book Now, Book Your First Class, level "Book Now") | Home, Classes, About | **Functionality verified (link only)** | They open the Rezerv class listing or class detail pages, which load correctly. Booking and payment completion were **not** tested (that would need an account and a payment). | Link out to the same Rezerv URLs |
| 7 | "Buy now" on packages and memberships | Pricing | **Partially verified** | All eight buttons go to `/package` (the generic list, not the specific product). The Rezerv package page loads. Checkout was **not** tested. | Deep-link to each product if Rezerv supports it (to be investigated) |
| 8 | Private 1:1 / Private Group "Learn More" / "Find Out More" | Home, Classes | **Functionality verified (link only)** | The Rezerv appointment pages load. 1:1 shows Rp900,000 / 50 min. The group session shows "Price: Free" with a selector. | Link out. Confirm the group pricing with the client. |
| 9 | Timetable "Check The schedule" | Pricing | **Functionality verified (link only)** | Rezerv /timetable loads with live classes (Demi Geary; 8:00, 9:15, 10:30, 11:45) | Link out, or embed if Rezerv offers a widget (to be investigated) |
| 10 | WhatsApp floating button | All | **Functionality verified (link only)** | `api.whatsapp.com/send/?phone=6288987333593`, `target=_blank` | Keep, using an inline SVG icon instead of the Wikimedia hotlink |
| 11 | WhatsApp CTA buttons ("Get in Touch", "Contact Us Today", "Message us on WhatsApp") | Classes, Home | **Functionality verified (link only)** | Correct number | Keep |
| 12 | **Pricing "Contact Us" CTA: double action** | Pricing | **Interaction tested: BUG confirmed** | The click follows the `<a>` to the correct number **and** `pricing.js` calls `window.open('https://wa.me/6281234567890?...')`, a **placeholder number**. Intercepted `window.open` calls recorded this. | Don't port. Use only the real number. |
| 13 | **About "WhatsApp Us" button: double action** | About | **Interaction tested: BUG confirmed** | `onclick="openWhatsApp()"` opens `wa.me/6281234567890` (placeholder), while the wrapping `<a>` goes to the real number | Same as 12 |
| 14 | **About "Book Your First Class": competing navigation** | About | **Interaction tested** | `about.js` sets `location.href='classes.html'` (404), but the anchor's navigation to Rezerv `/class` wins in Chrome. The first requested navigation was `classes.html`; the final URL was Rezerv. The result could differ in other browsers. | Don't port |
| 15 | FAQ category tabs | About | **Functionality verified** | Only the selected `.faq-content` is shown (e.g. Membership becomes `block` and the others `none`) | If the FAQ is kept, rebuild accessibly (`role=tablist`), or drop the tabs for a short FAQ |
| 16 | FAQ accordion (one open at a time) | About | **Functionality verified** | Clicking a question adds `.active` and the answer expands to about 67px | Use `<details>`/`<summary>` or an accessible accordion with `aria-expanded` |
| 17 | Pricing FAQ | Pricing | Observed | A static grid. The click handler only does a "press" scale animation. | — |
| 18 | Gallery lightbox | About | **Unverified / inactive** | `about.js` binds `.gallery-item` click handlers to open a lightbox. Three `.gallery-item` elements exist. A click wasn't fired in testing. | Optional in Phase 2 |
| 19 | Scroll reveal (fade-up 20px, 0.8s) | Classes, Pricing, About | Observed (JS) | IntersectionObserver on `.class-box`, `.level-card`, `.faq-item`, `.method-card`, `.feature-card` | Can be rebuilt with GSAP/ScrollTrigger, subtly, and respecting `prefers-reduced-motion` |
| 20 | Body fade-in on load | Classes, Pricing, About | Observed (JS) | `body.loaded { animation: fadeIn .5s }` | Not needed |
| 20a | Story and Founder side slide-in (±30px, 0.8s) | About | Observed (JS) | `revealObserver` on `.story-content` and `.founder-content` | Optional subtle reveal |
| 20b | Hero parallax (`translateY(scroll × 0.3)`) | About | Observed (JS) | Moves the terracotta hero block on scroll | Not required |
| 20c | FAQ keyboard support (Enter/Space) plus `console.log` "FAQ clicked" tracking stub | About | Observed (JS) | Only logs to the console; there is no real analytics event | Use native buttons. Add analytics only if the client wants it. |
| 20d | Auto-close the menu on resize above 768px; "active section" nav highlight looking for `about.html` (matches nothing) | About | Observed (JS) | The highlight is dead code | — |
| 21 | Header hide/show on scroll | Pricing | Interaction tested | `pricing.js` toggles `.scroll-down` and `.scroll-up` on `#navbar`, but **no CSS rules exist for those classes**, so there's no visible effect. `#navbar.scrolled` styles exist in CSS but no JS adds the class. | Decide fresh in Phase 2 |
| 22 | Smooth anchor scrolling with an 80px offset | All | Observed (JS) | `scrollTo({behavior:'smooth'})` | Use `scroll-margin-top` in CSS |
| 23 | Dead JS: `.btn-purchase` confirm dialog, `.comparison-table` hover, `.pricing-card.featured` pulse | Pricing | Observed | The selectors match nothing in the HTML. These are leftovers from a template. | Don't port |
| 24 | Google Maps embed | Home | **Functionality verified (renders)** | Map with a pin and a place card ("Jl. Pantai Pererenan No.69B…", 5.0 ★, 74 reviews). Screenshot: `index__desktop-1440__location-map.jpg` | Keep the iframe (lazy) or use a static image plus an "Open in Google Maps" link |
| 25 | Email / phone | Home | Observed | Plain text. Neither is a `mailto:` or `tel:` link. | Make them links |
| 26 | Social links | Footer | Observed | "Instagram \| Facebook" is plain text with **no URLs** | Need the real handles from the client |
| 27 | Forms / search / filters / login / e-commerce on the domain | — | Observed: **none exist** | All transactions happen on Rezerv | No backend needed for Phase 2 |
| 28 | Translation / language switcher | — | None | Content is English only. `lang="id"` is wrong. | Set `lang="en"` |
| 29 | Reviews widget | — | None | Testimonials are hard-coded | Keep them static |

## 2. Third-party dependencies

| Dependency | Purpose | Loaded on | Notes for Phase 2 |
|---|---|---|---|
| **Rezerv** (`humbl-pilates.rezerv.co`, "Powered by Rezerv", © The Dexi Group) | Class booking, appointments, packages, memberships, timetable, login, payment | Linked from all pages | **Critical dependency.** Keep every URL listed in `content/site-content.json → booking`. Rezerv's own descriptions still mention "Momence app" (the client's previous booking tool, judging by the name). |
| WhatsApp (`api.whatsapp.com`) | Contact | All pages | Keep |
| Google Maps embed | Location | Home | Keep |
| Google Ads tag `AW-18162115117` (gtag.js) | Ads conversion tracking | **Home only** | Ask the client whether tracking must continue. If so, add it site-wide through `next/script` and respect any consent requirements. |
| Google Fonts | Cormorant Garamond, Inter | All pages, loaded twice | Self-host via `next/font` in Phase 2 |
| jQuery 3.6.0 (code.jquery.com) | Menu toggle | All pages. The `<script>` tag appears twice on Home and once elsewhere; pages with a page-specific JS file run duplicate menu logic. | Not needed |
| Wikimedia `WhatsApp.svg` | Icon | All pages | Replace with an inline SVG |
| Hostinger / LiteSpeed / PHP 8.3 | Hosting | — | Phase 2 targets Next.js. The deployment target and domain DNS are out of scope for this audit. |

## 3. Things Phase 2 must retain or investigate

1. **All Rezerv deep links.** Ask whether Rezerv supports per-package deep links or an embeddable timetable widget.
2. **The real WhatsApp number:** +6288987333593. Never use 6281234567890.
3. **The Google Ads tag** (if the client still uses it).
4. **Redirects** from `/index.php`, `/classes.php`, `/pricing.php` and `/about_us.php` to the new routes, plus www → apex canonicalisation.
5. **No backend.** The site is purely informational and links out. Don't build forms unless the client asks for them.
