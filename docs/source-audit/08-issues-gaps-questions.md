# 08 — Issues, Gaps, Inconsistencies & Open Questions

Severity: 🔴 affects facts or customers · 🟠 functional or UX defect · 🟡 cosmetic or copy

## 1. Factual conflicts (need the client's answer before Phase 2 copy is final)

| # | Topic | Source A | Source B | Source C | Severity |
|---|---|---|---|---|---|
| F1 | **Group class duration** | 45 min (Home and Classes level cards; Classes features) | 50 min (Rezerv class listing and live timetable) | 50 min (About FAQ). The Rezerv "Find Your Passion" detail page says 45. | 🔴 |
| F2 | **Private session duration** | 50 min (Rezerv 1:1 and group appointments) | 60 min (About FAQ) | — | 🔴 |
| F3 | **Cancellation window** | 8 hours (Pricing FAQ; Rezerv policy) | 12 hours (About FAQ) | — | 🔴 |
| F4 | **Class size** | Max 5 / "just five reformers" (Home, Classes, testimonials) | "maximum of 6-8 people" (About FAQ) | — | 🔴 |
| F5 | **Studio hours** | Mon–Fri 8am–5pm; Sat & Sun 8am–3pm (Home) | Mon–Fri 6am–8pm; Sat 7am–6pm; Sun 8am–4pm (About FAQ) | — | 🔴 |
| F6 | **Package validity** | 5-pack 3 mo; 10-pack 6 mo; 20-pack 6 mo (Pricing cards) | 5-pack 2 mo; 10-pack 3 mo; 20-pack 3 mo (Rezerv) | The Pricing FAQ repeats the website values | 🔴 |
| F7 | Casual / 20-pack validity start | "first date of booking" (site) | "from date of purchase" (Rezerv) | — | 🔴 |
| F8 | **Yearly Membership Rp18,000,000** | Listed on the website | Not on Rezerv's package page | — | 🔴 |
| F9 | **Membership renewal** | "One time payment", valid for a fixed period (Pricing; Rezerv) | "automatically renews each month until you choose to cancel" (About FAQ) | — | 🔴 |
| F10 | Membership perks, pausing, sharing, discounts (15% residents and students; 10% off workshops and merch; free private session per year; mat storage; pause 2 weeks/yr; 30-day cancel notice; packages shareable with a family member) | Only in the About FAQ | Not mentioned anywhere else or on Rezerv | — | 🔴 likely placeholder |
| F11 | **Humbl Online** | "Comming Soon" (Home, Classes) | The About FAQ describes a live subscription with logins, weekly content, bundles | — | 🔴 |
| F12 | Grip socks | Required; "no socks, no entry" (level cards, Pricing FAQ, Rezerv) | "We practice barefoot or in grip socks" (About FAQ) | — | 🔴 |
| F13 | Booking channels | Rezerv (all CTAs); payment required at booking | "book through our website, WhatsApp, or by calling" (About FAQ) | — | 🟠 |
| F14 | "We provide… mats, props, and towels" | About FAQ only | — | — | ❓ verify |
| F15 | **Founder bio** | Home: "brings Pilates teaching and experience in health, fitness and education" | About: "over a decade of experience", "recovery from a sports injury", "certifications in Classical and Contemporary Pilates", "pre/postnatal… injury rehabilitation", four named qualifications | — | 🔴 must verify, because these are personal and professional claims |
| F16 | Equipment brand | "Balanced Body reformers and props" (About) | Not verifiable from the photos | — | ❓ verify |
| F17 | Distance claim | "about 10 minutes from Canggu by scooter… Echo Beach, Batu Bolong" (About FAQ) | — | — | ❓ verify |
| F18 | Private Group Session price | Not on the website | Rezerv shows "Price: Free" with a selector | — | ❓ |
| F19 | 1:1 Private price | Not on the website | Rp900,000 / 50 min (Rezerv) | — | Should this be shown on the site? |
| F20 | Partner class "Humbl x Beach House at The Regent" | Not on the website | Listed on Rezerv | — | Include it? |
| F21 | Product naming | "Private Group Session" (Home, Rezerv) | "Semi-Private Classes" (Classes page) | — | 🟠 pick one |
| F22 | Street number | Not on the website | "No.69B" (Google Maps place card) | — | Add it? |
| F23 | Cancellation reference | "Rezerv app and via Instagram" (site) | "Momence app" (Rezerv's own class descriptions) | — | 🟡 for the client to fix in Rezerv |

## 2. Functional and technical defects on the original

| # | Issue | Evidence | Severity |
|---|---|---|---|
| T1 | **The placeholder WhatsApp number `6281234567890` opens alongside the real one** (Pricing "Contact Us", About "WhatsApp Us") | 06 §1 #12–13 | 🔴 customers may message a stranger |
| T2 | About "Book" buttons are scripted to go to `classes.html` (404) and only work because the anchor navigation wins | 06 #14 | 🟠 |
| T3 | Footer copyright is invisible (white text on white) | Screenshot `index__desktop-1440__footer.jpg` | 🟡 |
| T4 | Footer link hover turns the text white on a white background, so it disappears | CSS `.footer-section a:hover` | 🟠 |
| T5 | Footer "Quick Links" are anchors that only work on Home | 02 §2 | 🟠 |
| T6 | "Instagram \| Facebook" are not links | Footer | 🟠 |
| T7 | The "Home" nav item is unstyled (browser default blue, underlined) | Screenshots | 🟡 |
| T8 | Primary color changes between pages (terracotta vs brown) because of CSS load order | 05 §2.2 | 🟠 brand |
| T9 | Several `<html>`/`<head>`/`<body>` documents concatenated per page; `lang="id"` for English content | Raw HTML | 🟠 SEO and accessibility |
| T10 | No meta descriptions, canonical tags, OG/Twitter tags, structured data, sitemap or robots.txt | 02 §1 | 🟠 SEO |
| T11 | `www` serves duplicate content without a redirect or canonical | 02 §1 | 🟡 SEO |
| T12 | Favicon only on Home | 04 | 🟡 |
| T13 | Images without alt text (photo_1, photo_4, photo_3); duplicate `id="photo_home"`; duplicate `id="classes"` on Pricing; inaccurate alt ("Reformer Equipment" on a legs/ring photo; "Demi Geary" on a two-person photo) | Measurements JSON | 🟠 accessibility |
| T14 | **Oversized images:** five About photos and the hero are 4–7.6 MB each (about 39 MB of originals); the About page alone loads about 31 MB | 04 | 🔴 performance |
| T15 | Email and phone are not clickable | Home | 🟡 |
| T16 | Clickable elements are `<button>` nested inside `<a>` (invalid HTML; keyboard and screen-reader issues) | All CTAs | 🟠 accessibility |
| T17 | Hamburger is a `<div>` with `onclick`; the close control is an `<li>`; no ARIA | Nav | 🟠 accessibility |
| T18 | Body text is 13px / weight 300 / grey (low readability; check contrast of `#8A8A8A` on `#FAF9F7`, which is about 3.3:1 and fails AA for body text) | 05 §3 | 🟠 accessibility |
| T19 | Dead or template JS (comparison table, purchase confirm, pulse, `about.html` highlight, `#navbar.scrolled`, scroll-up/down classes with no CSS) | 06 #21, #23, #20d | 🟡 |
| T20 | `footer.php` partial is publicly reachable | 02 | 🟡 |
| T21 | Group level details are hidden behind JS (not visible to search engines or to visitors without JS) | Home, Classes | 🟠 |
| T22 | Badges contradict their cards: "Limited Spots" on a coming-soon product; "New to Pilates?" on private group | Classes | 🟡 |
| T23 | Copyright year is 2024 | Footer | 🟡 |
| T24 | Google Ads tag only on Home | 06 §2 | 🟡 |

## 3. Missing information and assets

| Item | Status |
|---|---|
| Instagram / Facebook URLs | **Missing.** Needed from the client. |
| Vector or high-resolution logo; inverse (white) logo | **Missing.** Only a 175×54 PNG exists. |
| Confirmed portrait of Demi Geary | **Unknown.** No image is confirmed to show her. |
| Meta descriptions / social share image | Missing |
| Privacy policy / terms pages | None on the site (Rezerv has its own T&Cs) |
| Instructor list (beyond Demi) | None. Tori's testimonial mentions "Demi and her team", but there are no team names. |
| Class timetable on the site | Only a link to Rezerv |
| Studio photos without people / exterior / signage | Only one empty-studio interior (DSC06084). No exterior. |

## 4. Questions for the client

1. Which values are correct for **class duration** (45 or 50 min), **private duration** (50 or 60), **cancellation** (8h or 12h), **class size** (5 or 6–8) and **studio hours**?
2. Which **package validity** periods are correct: the website's or Rezerv's?
3. Is the **Yearly Membership** still offered?
4. Is **Humbl Online** launching? Should it appear at all? Is any of the online FAQ content real?
5. Are the **About-page FAQ** items about discounts, member perks, pausing, sharing, parking, showers and towels accurate? Which should be kept?
6. Please confirm or provide **Demi Geary's bio and qualifications**, and say which photo (if any) shows her.
7. Is the equipment **Balanced Body**?
8. Should **private session prices** (Rp900,000 1:1) and the **private group price** be shown on the site?
9. Should the **Humbl x Beach House at The Regent** class appear on the site?
10. Which name should be used: **"Private Group Session"** or **"Semi-Private"**?
11. What are the **Instagram and Facebook** URLs?
12. Can you supply a **vector logo** (and a white version)?
13. Is the Google Ads tag (`AW-18162115117`) still in use? Is any other analytics required?
14. Should **"Momence"** in the Rezerv class descriptions be updated? (This is on the client's side, not part of the website build.)
15. Is a **blog** wanted? (None exists, and none will be invented.)
16. Which spelling convention: **UK or US** English? The site mixes both.
