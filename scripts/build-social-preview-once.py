"""Produce updated lowob share-card graphics from the existing logo in the old card.

Retains the EXACT starburst and lowercase 'lowob' wordmark via pixel extraction.
Replaces old grid, loading-bar and status copy with a black/green brand card.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import numpy as np

ROOT = Path("dist")
ASSETS = ROOT / "assets"
SOURCE = ASSETS / "social-preview.png"
VERSION = "social-preview-20261120.png"
TITLE = "Commercial Growth for Complex Markets"
W, H = 1200, 630

src = Image.open(SOURCE).convert("RGB")
sw, sh = src.size
# The retained original white logo sits at the center of the old loading visual.
region = np.asarray(src.crop((
    int(sw * .35), int(sh * .30), int(sw * .65), int(sh * .51)
))).astype(np.float32)
lum = region.mean(axis=2)
chroma = region.max(axis=2) - region.min(axis=2)
alpha = np.clip((lum - 78) / 165 * 255, 0, 255) * np.clip((65 - chroma) / 45, 0, 1)
alpha = np.uint8(alpha)
alpha[alpha < 10] = 0
logo = Image.fromarray(np.dstack([
    np.full_like(alpha, 247), np.full_like(alpha, 247),
    np.full_like(alpha, 246), alpha
]), "RGBA")
bbox = logo.getbbox()
if not bbox:
    raise RuntimeError("Existing social card's white lowob logo could not be isolated")
logo = logo.crop(bbox)
assert logo.width >= 160 and logo.height >= 35, (
    f"Unexpected original logo dimensions: {logo.size}. Check source crop."
)
assert logo.width / logo.height >= 2.7 and logo.width / logo.height <= 4.5, (
    f"Unexpected original wordmark ratio: {logo.size}"
)

yy, xx = np.mgrid[:H, :W]
glow = np.exp(-((xx - W * .5) / (W * .60)) ** 2 -
              ((yy - H * 1.03) / (H * .45)) ** 2) * .36
rgb = np.empty((H, W, 3), dtype=np.uint8)
rgb[:, :, 0] = np.uint8(3 + 6 * glow)
rgb[:, :, 1] = np.uint8(4 + 155 * glow)
rgb[:, :, 2] = np.uint8(5 + 11 * glow)
canvas = Image.fromarray(rgb, "RGB").convert("RGBA")

logo_width = 346
logo_height = round(logo.height * logo_width / logo.width)
logo = logo.resize((logo_width, logo_height), Image.Resampling.LANCZOS)
canvas.alpha_composite(logo, ((W - logo_width) // 2, 235))

font_options = [
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]
font_path = next((p for p in font_options if Path(p).exists()), None)
assert font_path, "No fallback sans-serif font found"
font = ImageFont.truetype(font_path, 32)
d = ImageDraw.Draw(canvas)
bounds = d.textbbox((0, 0), TITLE, font=font)
text_width = bounds[2] - bounds[0]
assert text_width < W - 160, "Tagline unexpectedly too wide"
d.text(((W - text_width) / 2, 370), TITLE, font=font, fill=(247, 247, 246, 255))

rendered = canvas.convert("RGB")
files = [
    ASSETS / VERSION,
    ASSETS / "social-preview.png",
    ASSETS / "lowob-social-preview-loading.png",
]
for output in files:
    rendered.save(output, format="PNG", optimize=True)
    assert Image.open(output).size == (W, H)

old_url = "https://lowob.com/assets/social-preview.png"
new_url = f"https://lowob.com/assets/{VERSION}"
rewritten = []
for page in ROOT.rglob("*.html"):
    html = page.read_text(encoding="utf-8")
    if old_url in html:
        revised = html.replace(old_url, new_url)
        page.write_text(revised, encoding="utf-8")
        rewritten.append(page.as_posix())

# The Read is now a public product page and needs an appropriate social card.
read_path = ROOT / "the-read/index.html"
read_html = read_path.read_text(encoding="utf-8")
assert '<meta property="og:image"' not in read_html, "Read already has an OG image; check before overriding"
needle = '<meta property="og:type" content="website">'
assert read_html.count(needle) == 1
injected = (needle +
    f'\n<meta property="og:image" content="{new_url}">' +
    '\n<meta property="og:image:width" content="1200">' +
    '\n<meta property="og:image:height" content="630">' +
    '\n<meta name="twitter:card" content="summary_large_image">' +
    f'\n<meta name="twitter:image" content="{new_url}">' +
    '\n<meta property="og:image:alt" content="lowob — Commercial Growth for Complex Markets">')
read_path.write_text(read_html.replace(needle, injected), encoding="utf-8")
rewritten.append(read_path.as_posix())

assert 3 <= len(rewritten) <= 90, f"Unexpected number of metadata pages updated: {len(rewritten)}"
assert (ASSETS / VERSION).exists()
assert '<meta property="og:image"' in read_path.read_text(encoding="utf-8")
print(f"PASS: 1200×630 logo-preserving OG image, black background, green glow, no grid.")
print(f"PASS: updated {len(rewritten)} HTML pages and 3 PNG asset paths.")
print("Pages:", ", ".join(rewritten))
