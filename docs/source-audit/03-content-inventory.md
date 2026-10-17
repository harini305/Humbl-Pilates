# 03 — Content Inventory

**The verbatim source text lives in [content/site-content.json](content/site-content.json).** Phase 2 should read copy from that file instead of re-scraping. The raw HTML of every page is kept in [raw/html/](raw/html/) as the authority.

This document maps each piece of content to its source and assigns a status:

- ✅ **Verified fact**: consistent across the site and Rezerv
- ⚠️ **Conflicting**: different values in different places (details in 08)
- ❓ **Unverified claim**: appears once and can't be cross-checked. It may be placeholder copy.
- 🔁 **Duplicate**: the same content appears in several places

---

## 1. Business facts

| Item | Value | Source | Status |
|---|---|---|---|
| Name | Humbl Pilates (logo: "Humbl. PILATES"; Rezerv location: "Humbl. Pilates") | All pages | ✅ |
| Type | Boutique reformer Pilates studio | Home > About | ✅ |
| Location | Jl. Pantai Pererenan, Pererenan, Mengwi, Badung, Bali 80351, Indonesia | Home > Where to Find Us; footer | ✅ (Google adds "No.69B") |
| Reformers / max class size | 5 | Home hero, level cards, testimonials, Classes features | ✅ on Home/Classes/Rezerv · ⚠️ About FAQ says "6-8 people" |
| Email | humblpilates@gmail.com | Home > Contact | ✅ (plain text, not a `mailto:` link) |
| Phone / WhatsApp | +62 8898 73335 93 (displayed) = +6288987333593 | Home > Contact; all WA links | ✅ · ⚠️ JS placeholder `6281234567890` in pricing.js/about.js |
| Studio hours | Mon–Fri 8:00am–5:00pm; Sat & Sun 8:00am–3:00pm | Home > Where to Find Us | ⚠️ About FAQ gives different hours |
| Founder | Demi Geary, Founder & Lead Instructor | Home > Founder; About > Meet Demi; Rezerv timetable instructor | ✅ |
| Social | "Instagram \| Facebook" text only; no URLs anywhere | Footer | ❓ handles unknown |
| Copyright | © 2024 Humbl Pilates | Footer | ✅ (outdated year) |
| Opening year | "Member since 2023" (Jessica Chen); Monisha mentions the "opening weekend" | Testimonials | ❓ implies the studio opened in or before 2023 |

## 2. Offerings

| Offering | Website name(s) | Key facts | Booking | Status |
|---|---|---|---|---|
| Group classes | "Levelled group classes" (Home) / "Levelled Group Classes" (Classes) | 3 levels, max 5, 45 min | Rezerv class URLs | ⚠️ duration: 45 (site) vs 50 (Rezerv listing & timetable) vs 50 (About FAQ) |
| — Find Your Passion | Beginner | Description + policy | `/class/75b81f3d…` | ✅ |
| — Find Your Humbl | Intermediate (featured card) | "Prior Pilates experience recommended." | `/class/24f7e7d4…` | ✅ |
| — Find Your Power | Advanced | "Prior Pilates experience required." | `/class/1f1ce156…` | ✅ |
| Private 1:1 | "Private 1:1 Classes" | Fully customised, flexible scheduling | `/appointment/c14011f2…` | ✅ · price **Rp900,000 / 50 min only on Rezerv** · ⚠️ About FAQ says private = 60 min |
| Private group | "Private Group Session" (Home) / "Semi-Private Classes" (Classes) | 2–5 participants | `/appointment/3ec2a70f…` | 🔁 two names · price unknown |
| Online | "Humbl Online - Online Humbl Classes" / "Humbl Online Library" | "Comming Soon" | — | ⚠️ the About FAQ describes a working subscription |
| Partner class | — (not on website) | "Humbl x Beach House at The Regent", 45-min mat class, open to all | Rezerv only | ❓ ask whether it belongs on the site |

## 3. Pricing (Pricing page)

| Product | Credits | Validity (website) | Validity (Rezerv) | Price |
|---|---|---|---|---|
| Casual Class Package | 1 | 1 month "first date of booking" | 1 month from **purchase** | Rp280,000 |
| Humbl Intro Package | 3 | 14 days from first booking | 14 days from first booking | Rp600,000 |
| 5 Class Package | 5 | **3 months** | **2 months** | Rp1,250,000 (".00" on the site) |
| 10 Class Package | 10 | **6 months** | **3 months** | Rp2,200,000 |
| 20 Class Package | 20 | **6 months** | **3 months** from purchase | Rp4,000,000 |
| Monthly Membership | Unlimited; renewed daily; no rollover | 1 month | 1 month | Rp2,950,000 |
| 6 Month Membership | Unlimited | 6 months | 6 months | Rp11,000,000 |
| Yearly Membership | Unlimited | 12 months | **not listed** | Rp18,000,000 |
| Grip socks | — | — | — | 75,000–250,000 IDR (FAQ) |

Prices match between the website and Rezerv. **Validity periods and the Yearly membership don't.** The client must confirm which source is correct.

## 4. Policies

| Policy | Value | Source | Status |
|---|---|---|---|
| Grip socks | Required for all classes; "no socks, no entry" | Level cards; Pricing FAQ; Rezerv | ✅ · ⚠️ About FAQ says "We practice barefoot or in grip socks" |
| Lateness | No entry if more than 5 minutes late | Level cards; Rezerv | ✅ |
| Cancellation | 8 hours' notice via the app; late cancellations are not credited | Pricing FAQ; Rezerv appointment policy | ✅ · ⚠️ About FAQ says 12 hours |
| Payment | Pay at time of booking (online or at the studio); no holds | Pricing FAQ | ✅ (single source) |
| Pregnancy | Find Your Passion recommended; personalised modifications | Pricing FAQ | ✅ (single source) |
| Cancellation reference | "Refer to our Cancellation Policies outlined in our Rezerv app and via Instagram." | Level cards | ✅ (Rezerv's own copy says "Momence app", which is a leftover on their side) |

## 5. Narrative copy

| Block | Location | Status / priority |
|---|---|---|
| Hero: "The Humbl Method" + tagline + "Move together. Grow together" | Home hero | ✅ **High**: core brand line |
| About Us (2 paragraphs) | Home | ✅ **High** |
| Founder paragraph (Demi Geary) | Home | ✅ **High** |
| Our Story (3 paragraphs) | About | ❓ Medium: plausible but generic; overlaps the Home About |
| The Humbl Method: four principles | About | ❓ Medium: generic; usable if the client approves |
| Meet Demi Geary bio, quote, qualifications | About | ❓ **Must verify**: specific claims ("over a decade", sports-injury origin, named certifications) appear nowhere else and contradict the more modest Home bio |
| Our Studio, four features (incl. "Balanced Body reformers") | About | ❓ Verify the equipment brand |
| Testimonials (5 people) | Home ×3, About ×3 | ✅ real-looking; 🔁 Jessica Chen appears on both pages. Don't add or invent any. |
| Section intros ("Choose your level…", "Four principles…", etc.) | Various | Low |
| CTA headings (4 variants) | End of each page | Low: can be rewritten for the new layout without changing facts |

## 6. FAQ consolidation reference

- **Pricing page FAQ (7 items):** consistent with Rezerv and the rest of the site. **Treat as authoritative.**
- **About page FAQ (22 items in 5 tabs):** at least 9 answers conflict with verified facts or describe unconfirmed services. The full list is in 08 §2.
- **Overlap:** cancellation (both pages, with different answers), class length, class size, and grip socks.
- **Recommendation:** in Phase 2, build a single FAQ from the Pricing FAQ, plus About items that don't conflict and that the client confirms (e.g. what to wear, what to bring, mat vs reformer, injuries → private session first).

## 7. Duplicated, repetitive or low-priority content

| Content | Where repeated | Suggestion |
|---|---|---|
| Group level cards (three long descriptions, plus identical policy and cancellation blocks ×3) | Home + Classes | Show once on `/classes`. State the policy once, not per card. |
| Private group description | Home + Classes (different wording) + Rezerv | Keep one version under one name |
| Jessica Chen testimonial | Home + About | Use once |
| Address | Location section + footer | Fine (footer is short) |
| "Comming Soon" online cards | Home + Classes | Low priority. Omit or reduce to one line until it launches (client decision). |
| Footer "Quick Links" to anchors | All pages | Replace with route links |
| Long testimonials (Tori: about 190 words) | Home | Use excerpts. Don't rewrite the meaning or invent text. |

## 8. Spelling and copy errors (as published)

| Text | Location |
|---|---|
| "Comming Soon" | Home + Classes online cards |
| "Calender" | Pricing schedule section |
| "make sure your pilates schedule" (ungrammatical) | Pricing |
| "Check The schedule" (capitalisation) | Pricing button |
| "Valid for 1 month first date of booking" (missing "from") | Pricing, Casual card |
| "abilities.Offering" (missing space) | Classes, Semi-Private |
| "Rp1,250,000.00" vs "Rp2,200,000" (inconsistent format) | Pricing |
| "Monday- Friday 8:00am- 5:00pm" (spacing) | Home hours |
| "Phone: +62 8898 73335 93" (unusual grouping) | Home contact |
| "Recommended: Beginner" vs "Recommended for: Intermediate" (inconsistent) | Level badges |
| Mixed UK and US spelling (personalised/personalized, centred/centered) | Site-wide |

Don't fix these silently. List the corrections for the client to approve (08).
