# 01 — Audit Report: humblpilates.com

**Audit date:** 2026-10-17 · **Phase:** 1 (research only) · **Original URL:** https://humblpilates.com/

## 1. Overview

Humbl Pilates is a boutique reformer Pilates studio on Jl. Pantai Pererenan, Pererenan, Bali, run by founder and lead instructor **Demi Geary**. It has five reformers and caps group classes at five people. The website is a small, informational marketing site with four pages. **All booking, payment, packages, memberships, login and the timetable are handled externally by Rezerv** (`humbl-pilates.rezerv.co`). Contact goes through WhatsApp.

**Technology:** Hand-written PHP and HTML/CSS with jQuery, hosted on Hostinger (LiteSpeed, PHP 8.3). There is no CMS, no database content, no forms, no search, no blog and no e-commerce on the domain. Each page is stitched together from several complete HTML documents (a WhatsApp include, a nav include and the body).

**Workspace at start:** `D:\humblpilates10` was **empty**: no existing project files, assets or earlier audit evidence.

## 2. Method

| Step | Tool |
|---|---|
| Fetch HTML, CSS and JS for every page; probe for routes | `curl` |
| Download all referenced images (plus one unreferenced image found by probing) | `curl` into `original-assets/` (39 MB) |
| Image dimensions, EXIF dates, duplicate detection, logo color sampling | Python + Pillow |
| Rendering, computed styles, overflow checks, screenshots at 1440, 768 and 390, interaction tests, Rezerv page reading | Headless Chrome driven by a Node script over the DevTools protocol. The script lives in the session scratchpad; nothing was installed in the project. |

## 3. Coverage

| Category | Items |
|---|---|
| **Fully inspected** | `/index.php` (= `/`), `/classes.php`, `/pricing.php`, `/about_us.php`: source, rendering at 3 viewports, interactions |
| **Partially inspected** | `/footer.php` (a public partial; source only). External Rezerv pages: class listing, Find Your Passion detail, 1:1 appointment, Private Group appointment, package list and timetable were read. The Find Your Humbl and Find Your Power detail pages were linked but not opened. |
| **Discovered but inaccessible** | `/logo/` and `/photo/` directory listings (403) |
| **Broken / unavailable** | `/classes.html` (404, referenced by about.js); `robots.txt` and all sitemap variants (404); `/favicon.ico` (404); `/photo/photo_5.jpeg` (404, probed) |
| **Not verified** | Rezerv checkout, payment and login (they'd need an account and a real transaction); the About gallery lightbox click; hover visuals (read from CSS only); iOS Safari, Firefox and physical devices |
| **Limitations** | No sitemap, so discovery relied on links and probing common paths. Hidden pages with unguessable names can't be ruled out. Rezerv content is live third-party data that may change. Full-page captures show the fixed header partway down the image (a capture artifact). |

## 4. Key findings

### 4.1 Content
- The core facts are clear and mostly consistent across Home, Classes, Pricing and Rezerv: location, five reformers, the three group levels, prices, the 8-hour cancellation policy, grip socks, and lateness.
- **The About page has a large amount of conflicting or unverifiable content.** Its 22-item FAQ contradicts the rest of the site on class length, cancellation window, class size, studio hours and membership renewal. It also describes perks, discounts and an online subscription that aren't offered anywhere else. The extended founder bio makes specific claims found nowhere else. **This content needs client approval before reuse** (08 §1).
- Package validity periods and the Yearly membership differ between the website and Rezerv.
- Rezerv has things the website doesn't: the 1:1 price (Rp900,000 / 50 min) and a partner class at Beach House, The Regent.
- 5 testimonials (one repeated across pages). No blog.

### 4.2 Assets
- 10 photos (one is a duplicate shot) and 2 logo files. No video, PDFs or downloads.
- Six photos are 4–7.6 MB camera originals (4000×5000 class) served directly to the browser. That's about 31 MB on the About page alone.
- The logo is a low-resolution 175×54 PNG, with no vector or inverse version.
- Full manifest: [04-assets-manifest.csv](04-assets-manifest.csv)

### 4.3 Brand
- Primary **terracotta `#AA4126`** (it matches the logo), with charcoal, off-white, cream and sand neutrals.
- Fonts: **Cormorant Garamond** (headings) and **Inter** (body).
- Calm, minimal, boutique look. The photography (warm light, arched backlit mirrors, pale wood) carries most of the brand feel.
- A CSS cascade bug makes the Classes and About pages render in **brown `#8B7355`** instead of terracotta.

### 4.4 Functionality
- Everything works as links (nav, Rezerv, WhatsApp, map). The "Discover More" toggles, the mobile drawer, and the About FAQ tabs and accordion were all verified.
- **Bug:** two CTAs also open WhatsApp to a **placeholder number (6281234567890)**.
- Accessibility problems: buttons nested in links, a div used as the hamburger, missing alt text, 13px light-grey body text.

### 4.5 Responsive
- No horizontal overflow at 1440, 768 or 390. The hamburger appears at 768px and below.
- The mobile hero photo is washed out to near-white. Very tall 4:5 images make the pages long (About is 10,148px on mobile).
- The WhatsApp float covers content on mobile.

### 4.6 SEO
- Titles only. There are no meta descriptions, canonical tags, OG tags, sitemap or robots.txt. `lang="id"` is set on English content. www serves a duplicate of the site.

## 5. Documents

| File | Contents |
|---|---|
| [02-page-inventory.md](02-page-inventory.md) | Routes, status and per-page section order |
| [03-content-inventory.md](03-content-inventory.md) | Content map with verification status |
| [content/site-content.json](content/site-content.json) | **Verbatim copy and structured facts** |
| [04-assets-manifest.csv](04-assets-manifest.csv) | Asset → page/section map |
| [05-brand-reference.md](05-brand-reference.md) | Colors, type, logo, visual language |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Interactions and third parties |
| [07-responsive-observations.md](07-responsive-observations.md) | Viewport findings |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Conflicts, defects, client questions |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Mandatory rules, IA, acceptance checklist |

## 6. Confirmation

- No redesign, components, pages or project configuration were created or changed. No packages were installed in the project.
- Nothing was pushed to GitHub or deployed to Vercel.
- The only files written are inside `docs/source-audit/`. Temporary scripts and the browser profile are in the session scratchpad.
