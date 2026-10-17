"""Generate web-sized WebP copies of the audited original photos.

Masters stay untouched in docs/source-audit/original-assets/.
Run from the project root:  python -I scripts/optimize-images.py
"""
import os
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "original-assets")
OUT = os.path.join(ROOT, "public", "images")

# slug: (source file, widths)
PHOTOS = {
    "hero-reformer": ("photo/DSC02287.jpg", [640, 960, 1440]),
    "story-straps": ("photo/DSC04582.jpg", [640, 1200]),
    "studio-arches": ("photo/DSC06084.jpg", [640, 1200, 1800]),
    "class-lunge": ("photo/DSC06254.jpg", [640, 1200]),
    "ring-legs": ("photo/photo_2.jpeg", [640, 1200]),
    "bridge-window": ("photo/DSC07003.jpg", [640, 1200]),
    "straps-mirror": ("photo/photo_1.jpeg", [640, 1200]),
    "grip-socks": ("photo/photo_3.jpeg", [640, 1200]),
    "side-kneel": ("photo/photo_4.jpeg", [640, 1200]),
}


def load(rel):
    im = Image.open(os.path.join(SRC, rel))
    im = ImageOps.exif_transpose(im)
    return im.convert("RGB")


def main():
    os.makedirs(OUT, exist_ok=True)
    for slug, (rel, widths) in PHOTOS.items():
        im = load(rel)
        for w in widths:
            h = round(im.height * w / im.width)
            im.resize((w, h), Image.LANCZOS).save(
                os.path.join(OUT, f"{slug}-{w}.webp"), "WEBP", quality=76, method=6
            )

    # Social share image: 1200x630 crop of the empty studio (arches)
    im = load("photo/DSC06084.jpg")
    w = 1200
    h = round(im.height * w / im.width)
    im = im.resize((w, h), Image.LANCZOS)
    top = round(h * 0.30)
    im.crop((0, top, 1200, top + 630)).save(
        os.path.join(ROOT, "app", "opengraph-image.jpg"), "JPEG", quality=80, optimize=True
    )

    # Favicons from the brand mark
    ico = Image.open(os.path.join(SRC, "logo", "ico.png")).convert("RGBA")
    ico.resize((512, 512), Image.LANCZOS).save(os.path.join(ROOT, "app", "icon.png"))
    ico.resize((180, 180), Image.LANCZOS).save(os.path.join(ROOT, "app", "apple-icon.png"))

    # Wordmark (only a 175x54 raster exists; copied unchanged)
    logo = Image.open(os.path.join(SRC, "logo", "logo.png"))
    logo.save(os.path.join(ROOT, "public", "images", "logo.png"))


if __name__ == "__main__":
    main()
