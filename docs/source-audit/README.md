# Source Audit: humblpilates.com

Phase 1 research for the frontend rebuild. **No implementation has started.** Phase 2 is waiting on client and owner approval, and on answers to the questions in [08 §4](08-issues-gaps-questions.md#4-questions-for-the-client).

**Audited:** 2026-10-17 · **Site:** https://humblpilates.com/ (4 pages, PHP on Hostinger; booking on Rezerv)

## Start here

1. [01-audit-report.md](01-audit-report.md): summary, coverage, key findings
2. [08-issues-gaps-questions.md](08-issues-gaps-questions.md): **conflicting facts to resolve before writing copy**
3. [09-phase-2-recommendations.md](09-phase-2-recommendations.md): mandatory design rules (including the **two-font rule**), IA, acceptance checklist

## Reference

| File | Use |
|---|---|
| [02-page-inventory.md](02-page-inventory.md) | Routes, section order per page, redirects |
| [03-content-inventory.md](03-content-inventory.md) | What content exists, where it lives, and how reliable it is |
| [content/site-content.json](content/site-content.json) | **Verbatim copy, prices, URLs**. Use this as the copy source in Phase 2. |
| [04-assets-manifest.csv](04-assets-manifest.csv) | Every asset → page/section, size, concerns |
| [05-brand-reference.md](05-brand-reference.md) | Colors (HEX), typography, logo, visual language |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Interactions tested, bugs, third parties |
| [07-responsive-observations.md](07-responsive-observations.md) | 1440 / 768 / 390 behaviour |

## Evidence

| Folder | Contents |
|---|---|
| [original-assets/](original-assets/) | Original logo and photo files downloaded from the live site (39 MB, unmodified masters) |
| [screenshots/](screenshots/) | 36 captures across 3 viewports, plus Rezerv pages ([index](screenshots/README.md)) |
| [raw/html/](raw/html/) | Live source of every page, CSS and JS file as served |
| [raw/browser-measurements.json](raw/browser-measurements.json) | Computed styles, overflow checks, image sizes, interaction test results |

## Headline facts

- **Primary color:** terracotta `#AA4126` · **Original fonts:** Cormorant Garamond + Inter
- **Booking:** everything goes to `humbl-pilates.rezerv.co` · **Contact:** WhatsApp +62 889 8733 3593 · humblpilates@gmail.com
- **Critical bug on the live site:** two buttons also open WhatsApp to the placeholder number `6281234567890`
- **Biggest content risk:** the About-page FAQ and the extended founder bio contradict the rest of the site
