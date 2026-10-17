# 07 — Responsive Observations

**Tested viewports:** 1440×900 (desktop, no touch), 768×1024 (tablet, mobile emulation with touch), 390×844 (mobile, mobile emulation with touch). Everything was rendered in headless Chrome. Physical devices, Safari/WebKit and Firefox were **not** tested.

**CSS breakpoints in the source:** `max-width: 1024px`, `769–1024px`, `max-width: 768px`, `max-width: 480px`.

Screenshots: [screenshots/](screenshots/) (index in [screenshots/README.md](screenshots/README.md)).

## 1. Summary by viewport

| Aspect | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Horizontal page overflow | None | None (`scrollWidth = clientWidth`) | None |
| Off-canvas drawer | n/a | Present but parked off-screen at `x=960`, clipped by `overflow-x:hidden` | Parked at `x=488`; slides in to `x≈98` when opened. On About it extends 6px past the viewport (right edge 396 > 390), which is masked by `overflow-x:hidden`. |
| Header | Fixed, about 130px tall (`.container` adds 30px top and bottom padding to the 16px nav padding). Logo at 123px wide. | Hamburger shown from ≤768px. Logo at 88px. | Same. Header about 60px. |
| Content width | Max 1140px container with 32px side padding | Full width minus about 24px | Full width minus 20px |
| Body text | 13px / weight 300 | 13px | 13px (too small) |
| h1 | 46px (Home), 44px (inner pages) | 36px | 30px |

## 2. Page-specific behaviour

### Home
- **Hero.** On desktop the photo sits on the right 48% with a diagonal clip-path and a light gradient wash, and the text sits on the left over off-white. At **768 and 390 the photo becomes a full-bleed background behind the text and is washed out almost to white**, so the image is barely visible (see `index__mobile-390__viewport.jpg`). Hero height is 90vh with a 580px minimum.
- **About/Founder images** are full container width at 4:5. That's 820×1025 on desktop (more than a screen tall each), 720×900 on tablet and 350×438 on mobile. They add a lot of scrolling, which makes the page 7,290–8,044px tall.
- **About paragraphs** use `text-align: justify`, which leaves visible word gaps at 390px.
- **What We Offer** uses `auto-fit, minmax(260px,1fr)`: three cards then one orphan on desktop, and one column on mobile. Cards have very different text lengths (one line versus a whole paragraph), so heights are uneven and there's a lot of empty space.
- **Testimonials:** three columns on desktop, stacked on mobile. Very long cards.
- **Location:** two columns (info and map) on desktop, stacked on mobile. The map iframe is set to 600×450 and scales down.
- **Footer:** three columns on desktop, stacked on mobile. The copyright line is invisible at every size (white on white).

### Classes
- Hero has a full-width brown button (`width:100%`) on desktop, which looks odd at 1440.
- The `photo_3` band is full-bleed. A 4:5 portrait is cropped to a wide band on desktop; on mobile it shows 390×488.
- Class grid: 2×2 on desktop and tablet, one column on mobile.
- Level panel (when open): three columns on desktop, stacked on mobile.

### Pricing
- Package grid: 3+2 on desktop (the last row is left-aligned and the right side is empty), 2-column or 1-column at smaller widths, and one column at 390. Each card is about 260px tall on mobile, which makes the page 5,969px.
- The FAQ grid is two columns on desktop and one on mobile.
- The "Calender" section isn't wrapped in `.container` and relies on the `faq-section` styles.

### About
- At 390px it's the longest page (**10,148px**). On mobile the FAQ tabs wrap onto several lines.
- Story and Founder go from two columns on desktop to stacked. Images become fixed 400px-tall crops on tablet and mobile.
- Our Studio gallery: three columns of 343×300 fixed crops on desktop, stacked full-width 300px crops on mobile.
- Hero h1 is bold 700 (the other pages use 400).

## 3. Sticky and fixed elements
- **Header:** `position: fixed` at every width. Content offset is handled by hero padding (140px on inner pages). Anchor scrolls use a JS 80px offset, which doesn't match the 130px desktop header, so headings can end up partly hidden after an anchor jump.
- **WhatsApp float:** fixed at 20px/20px, 60px circle, `z-index:9999`. On mobile it covers the right end of text lines and card buttons while scrolling (visible in mobile screenshots), and it sits above the open nav drawer.

## 4. Mobile-only content differences
- None in content. The same HTML is used at every size; only layout changes.

## 5. Limitations
- No physical device, iOS Safari or Firefox testing.
- Hover states were read from CSS, not observed.
- Full-page screenshots show the fixed header partway down the image. That's an artifact of how the capture works, not a site bug.
- The Google Map is blank in full-page captures because it lazy-loads. A separate viewport capture shows it rendering.
