# 02 — Page & Route Inventory

## 1. Route discovery method

| Source | Result |
|---|---|
| Main navigation | `index.php`, `classes.php`, `pricing.php`, `about_us.php` |
| Footer links | `#home`, `#classes`, `#pricing`, `#about`. These are in-page anchors only and are broken on most pages (see below). |
| Internal links / JS | `#group-classes`, `#faq`. `about.js` also references `classes.html`, which returns 404. |
| `robots.txt` | 404 (Hostinger default page) |
| `sitemap.xml`, `sitemap_index.xml`, `wp-sitemap.xml` | 404 for all three |
| Probed common paths | `about.php`, `contact.php`, `blog`, `blog.php`, `schedule.php`, `booking.php`, `faq.php`, `team.php`, `instructors.php`, `gallery.php`, `privacy.php`, `terms.php`, `index.html`, `header.php`, `admin/`, `wp-admin/`, `images/`, `img/`, `assets/`: **all 404** |
| Found by probing | `footer.php` (200: a standalone footer partial, served publicly), `pricing.css` (200), `logo/` and `photo/` (403: directory listing disabled) |
| Pretty URLs | `/classes` returns 404. Only `.php` URLs work. |
| Host variants | `http://` redirects (301) to `https://`. `https://www.humblpilates.com/` returns **200 with duplicate content** and no redirect or canonical tag. |
| Query strings | `/?p=1` returns 200 and serves the homepage (no CMS) |

**Platform:** A hand-written PHP and static HTML site on Hostinger (LiteSpeed, PHP 8.3). There is no CMS, no WordPress and no database-backed content. Each page is made of several concatenated HTML documents: a WhatsApp include, a nav include, and the page body.

## 2. Route table

| Route | Type | Status | Recommendation for Phase 2 |
|---|---|---|---|
| `/` = `/index.php` | Main: Home | ✅ Live, fully inspected | Implement as `/` |
| `/classes.php` | Main: Classes listing, with the group-level detail as a hidden panel | ✅ Live, fully inspected | Implement as `/classes`. Turn the hidden "Group Classes by Level" panel into visible content. |
| `/pricing.php` | Main: Pricing, FAQ and schedule link | ✅ Live, fully inspected | Implement as `/pricing` |
| `/about_us.php` | Main: About and FAQ | ✅ Live, fully inspected | Implement as `/about`. The FAQ may move to `/pricing` or a merged FAQ, **only after the conflicts are resolved**. |
| `/footer.php` | Utility partial, publicly reachable | ⚠️ Live but not a page | Legacy. Do not recreate. Optionally 301 it to `/`. |
| `/classes.html` | Referenced by about.js | ❌ 404 | Do not create. The bug is the redirect in about.js, not a missing page. |
| `#group-classes` (on index and classes) | In-page hidden panel | ✅ Works (JS toggle) | Fold into `/classes` as a normal section |
| `#faq` (about) | Anchor | ✅ Works | Keep the anchor if the FAQ stays on About |
| Footer `#classes`, `#pricing`, `#home`, `#about` on non-home pages | Broken anchors | ⚠️ Do nothing on Classes, Pricing and About (e.g. `#pricing` doesn't exist on the Pricing page; `#classes` on Pricing points to the package grid) | Replace with real route links |
| Legacy URLs `*.php` | — | — | Add redirects (`/classes.php` → `/classes`, etc.) in the Phase 2 hosting config to keep SEO and existing shared links working |

**Blog/editorial:** none exists. There are no articles, posts, archives or tags anywhere. Per the brief, don't invent any. Leave the decision on a blog to Phase 2 with the client.

**Booking/transaction pages:** none on the domain. All booking, payment, login and timetable flows are external on `humbl-pilates.rezerv.co` (see 06).

---

## 3. Shared components (all four pages)

| Component | Notes |
|---|---|
| Floating WhatsApp button | Fixed bottom-right, 60px green circle, `z-index:9999`. Links to `wa.me` via `api.whatsapp.com`, number +62 889 8733 3593. |
| Header / nav | Fixed. Logo on the left; Home · Classes · Pricing · About us & FAQ on the right. Below 768px it becomes a hamburger with a right-side drawer (75% width) and an "×" close button. No active-page state; "Home" is always styled as an unstyled link. |
| Final CTA band | Full-width terracotta block with a serif title, one line of text and a white button |
| Footer | Three columns: (Humbl Pilates + address · Quick Links · Connect "Instagram \| Facebook" as plain text, not links). Copyright © 2024 (invisible on Home). |
| Testimonial card | Large serif quote mark, text, author name, optional "Member since 2023" |
| Section title | Cormorant h2, centred or left-aligned, with an optional grey intro line |

---

## 4. Page-by-page inventory

### 4.1 Home — `/index.php`

| Field | Detail |
|---|---|
| Purpose | Introduce the studio, its offering and location, and drive bookings |
| Title | "Humbl Pilates - Boutique Reformer Studio in Pererenan, Bali" |
| Meta description / canonical / OG | **None** |
| `lang` | Reported as `id` (Indonesian) because the WhatsApp include's `<html lang="id">` comes first. The content is English. |
| Height | 7,290px desktop, 7,944px tablet, 8,044px mobile |

**Sections, in order**
1. **Hero:** h1 "The Humbl Method", the tagline lines, an italic "Move together. Grow together" in terracotta, and an outline **Book Now** button (Rezerv all classes). Image: `DSC02287.jpg` as a diagonal clip-path on the right 48%, with a gradient wash.
2. **About Us:** two paragraphs, then `photo_1.jpeg` (full container width, 820×1025 on desktop).
3. **Founder:** an h3 "Founder" styled as h2, one paragraph naming **Demi Geary**, then `photo_4.jpeg` (820×1025).
4. **What We Offer:** four cards: Levelled group classes ("Discover More →" reveals section 5), Private 1:1 (→ Rezerv appointment), Private Group Session (→ Rezerv appointment), Humbl Online ("Comming Soon"). The fourth card wraps alone onto a second row on desktop.
5. **Group Classes by Level** (hidden until "Discover More" is clicked): three level cards (Find Your Passion / Find Your Humbl [featured] / Find Your Power). Each has a description, studio policy, cancellations note, 45 min / Max 5, and **Book Now** (Rezerv class URL).
6. **Client Testimonials:** Tori, Monisha Alexander, Jessica Chen ("Member since 2023"). These are very long texts in three equal columns.
7. **Where to Find Us:** address, studio hours, contact (email, phone), a "Message us on WhatsApp" button, and a Google Maps iframe.
8. **CTA:** "Ready to Begin Your Journey?" with **Book Your First Class** (Rezerv).
9. Footer.

**Assets:** DSC02287 (hero), photo_1, photo_4, logo, ico (favicon only on this page).
**Interactive:** mobile menu, Discover More toggle, back link, Maps iframe, WhatsApp float.
**Risks:** two `<img>` elements share `id="photo_home"` and neither has alt text. The two tall images (about 1,025px each on desktop) make the About block very long. The founder photo's subject is unconfirmed.
**Redesign notes:** The essentials are the hero promise (five reformers, Pererenan), what's offered, location/hours, and booking. Use shorter testimonial excerpts. Show the levels directly instead of behind a toggle.

### 4.2 Classes — `/classes.php`

| Field | Detail |
|---|---|
| Purpose | Explain the class formats and route visitors to booking or WhatsApp |
| Title | "Classes - Humbl Pilates \| Boutique Reformer Studio in Bali" |
| Meta / OG / favicon | None |
| Primary color rendered | **Brown `#8B7355`** (cascade bug) |

**Sections, in order**
1. **Hero:** h1 "Our Classes", subtitle, and a full-width brown button **Contact Us Today** (WhatsApp).
2. **Image band:** `photo_3.jpeg`, full-bleed and cropped.
3. **Class grid (2×2):** Levelled Group Classes [Most Popular] (features list, "Discover More" toggles the level panel), Private 1:1 Classes [Premium] (→ Rezerv), Semi-Private Classes [New to Pilates?] (→ Rezerv; this is the same product called "Private Group Session" on Home), Humbl Online Library [Limited Spots] "Comming Soon".
4. **Group Classes by Level** (hidden panel): identical content to Home section 5. When shown, it replaces the grid.
5. **CTA:** "Not Sure Which Class is Right for You?" with **Get in Touch** (WhatsApp).
6. Footer.

**Risks:** The badges contradict the content: "Limited Spots" on a product that's coming soon, and "New to Pilates?" on a semi-private group product. The same product has two names. The group detail is invisible to search engines and to visitors without JS.

### 4.3 Pricing — `/pricing.php`

| Field | Detail |
|---|---|
| Purpose | List packages and memberships, answer booking questions, link to the timetable |
| Title | "Pricing & Membership - Humbl Pilates \| Boutique Reformer Studio in Bali" |
| Meta / OG / favicon | None |
| Primary color rendered | Terracotta |

**Sections, in order**
1. **Hero:** "Membership & Pricing" plus subtitle. No image.
2. **Class Package** (`id="classes"`): five cards in a 3+2 grid: Casual Rp280,000 · Intro (3 credits) Rp600,000 · 5 Class Rp1,250,000.00 · 10 Class Rp2,200,000 · 20 Class Rp4,000,000. Each has a **Buy now** button (Rezerv /package).
3. **Membership** (also `id="classes"`, a duplicate ID): Monthly Rp2,950,000 · 6 Month Rp11,000,000 · Yearly Rp18,000,000. **Buy now** goes to Rezerv /package.
4. **"Calender":** "make sure your pilates schedule" with **Check The schedule** (Rezerv /timetable).
5. **FAQ:** seven Q&As in a two-column grid. All are visible; there is no accordion.
6. **CTA:** "Not sure which package is right for you?" with **Contact Us** (WhatsApp, plus a JS bug that also opens a placeholder number; see 06).
7. Footer.

**Risks:** The price is a list bullet, not visually prominent. Validity periods conflict with Rezerv. The Yearly membership isn't on Rezerv. Copy issues: "Calender" and "make sure your pilates schedule".

### 4.4 About Us & FAQ — `/about_us.php`

| Field | Detail |
|---|---|
| Purpose | Story, method, founder, studio, testimonials, extended FAQ |
| Title | "About Us & FAQ - Humbl Pilates \| Boutique Reformer Studio in Bali" |
| Height | 6,313px desktop, 10,148px mobile (the longest page) |
| Primary color rendered | **Brown `#8B7355`** for accents; the hero background is hard-coded terracotta |

**Sections, in order**
1. **Hero:** terracotta block, h1 "About Humbl Pilates" (white, **bold 700**, unlike the other pages), subtitle.
2. **Our Story:** three paragraphs and `DSC04582.jpg` (two columns).
3. **The Humbl Method:** four principle cards (2×2) with stroke icons.
4. **Meet Demi Geary:** `DSC06254.jpg` (alt "Demi Geary"), role, three bio paragraphs, a quote block, and a qualifications list (four ticks).
5. **Our Studio:** three-image gallery (DSC06084, DSC06509, DSC07003) and four emoji feature cards.
6. **Client Testimonials:** Olivia, Bhavana, Jessica Chen (Jessica is duplicated from Home).
7. **FAQ:** five category tabs (Getting Started · Classes & Pricing · Membership · Studio & Location · Humbl Online) with accordions inside. 22 Q&As in total.
8. **CTA:** "Ready to Visit Humbl?" with **Book Your First Class** (Rezerv /class) and **WhatsApp Us**.
9. Footer.

**Risks:** Much of the FAQ and the founder bio contradict verified facts elsewhere, or describe services that may not exist (online subscription details, member perks, discounts, pausing, showers, parking). These read as AI or template filler. **Every claim on this page needs business sign-off** before it's reused (see 08).

---

## 5. External routes (Rezerv, not part of the rebuild, but linked)

| URL | What it is | Verified |
|---|---|---|
| `humbl-pilates.rezerv.co/class?classCategory=` | All classes listing | Loaded and read (2026-10-17) |
| `humbl-pilates.rezerv.co/class` | Same listing | Loaded (final destination of the About "Book" button) |
| `.../class/75b81f3d-…` | Find Your Passion | Loaded |
| `.../class/24f7e7d4-…` | Find Your Humbl | Linked, not opened individually |
| `.../class/1f1ce156-…` | Find Your Power | Linked, not opened individually |
| `.../appointment/c14011f2-…` | 1:1 Private (Rp900,000 / 50 min) | Loaded |
| `.../appointment/3ec2a70f-…` | Private Group Session (price shows "Free" / selector) | Loaded |
| `.../package` | Packages and memberships | Loaded |
| `.../timetable` | Live schedule (instructor Demi Geary; 8:00, 9:15, 10:30, 11:45 slots seen) | Loaded |
