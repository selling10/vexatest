"""Trycker fotona i sidans två färger: svart och rosa.

Källor: högupplösta masters i src/assets/site/masters.
Rampens ändar är --ink och --rosa.

    python3 scripts/duotone.py [namn ...]
"""

import sys
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src/assets/site/masters"
OUT = ROOT / "src/assets/site/duotone"

BLACK = (11, 10, 10)
MID = (112, 105, 106)
PINK = (239, 227, 227)

# namn -> (fil, beskärning v/ö/h/n, svartpunkt, vitpunkt, gamma, kontrast)
PLAN = {
    "yard": ("yard.jpg", (0.04, 0.18, 0.98, 0.88), 3, 99.0, 0.95, 0.48),
    "roof": ("roof.jpg", (0.02, 0.0, 0.98, 1.0), 4, 99.0, 0.90, 0.50),
    "corner": ("corner.jpg", (0.0, 0.0, 0.96, 1.0), 3, 99.0, 0.98, 0.45),
    "quay": ("quay.jpg", (0.0, 0.0, 1.0, 1.0), 2.5, 99.2, 0.95, 0.45),
    "hall": ("hall.jpg", (0.0, 0.0, 1.0, 1.0), 1.5, 99.5, 1.05, 0.40),
    # Samma proportion (~3.17:1) så Ways-paren blir spegelbildade.
    "flowerteam": ("flowerteam.jpg", (0.0, 0.22, 1.0, 0.78), 3, 99.0, 0.95, 0.48),
    "gnesta": ("gnesta.jpg", (0.05, 0.2875, 0.95, 0.7125), 2.5, 99.2, 0.95, 0.45),
    # Acquisition: samma 3:2-format så Icarus och Munkbro speglar varandra.
    "icarus": ("icarus.jpg", (0.0, 0.0555, 1.0, 0.9445), 2.5, 99.2, 0.95, 0.45),
    "munkbro": ("munkbro.jpg", (0.0, 0.0555, 1.0, 0.9445), 2.5, 99.2, 0.95, 0.48),
    # Sale & leaseback: samma 16:9-ish så Nifelhem och Maskinisten speglar varandra.
    "nifelhem": ("nifelhem.jpg", (0.0, 0.078125, 1.0, 0.921875), 2.5, 99.2, 0.95, 0.45),
    "maskinisten": ("maskinisten.jpg", (0.02, 0.022, 0.98, 0.978), 3, 99.0, 0.92, 0.48),
}

WIDTHS = (1400, 1000, 640)


def ramp():
    lut = np.zeros((256, 3), np.float64)
    t = np.linspace(0, 1, 128)[:, None]
    lut[:128] = np.array(BLACK) + (np.array(MID) - np.array(BLACK)) * t
    lut[128:] = np.array(MID) + (np.array(PINK) - np.array(MID)) * t
    return lut


LUT = ramp()


def tone(gray, black_pct, white_pct, gamma, contrast):
    lo, hi = np.percentile(gray, [black_pct, white_pct])
    x = np.clip((gray - lo) / max(hi - lo, 1e-6), 0, 1)
    x = x**gamma
    s = x * x * (3 - 2 * x)
    return np.clip(x * (1 - contrast) + s * contrast, 0, 1)


def grain(shape, rng, amount=5.0):
    return rng.normal(0, amount, shape)


def build(key, rng):
    name, box, bp, wp, g, contrast = PLAN[key]
    source = SRC / name
    if not source.exists():
        raise SystemExit(f"Saknar master: {source}")

    img = Image.open(source).convert("RGB")
    w, h = img.size
    left, top, right, bottom = box
    img = img.crop((int(w * left), int(h * top), int(w * right), int(h * bottom)))

    a = np.asarray(img, np.float64)
    gray = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    x = tone(gray, bp, wp, g, contrast)

    idx = np.clip(x * 255, 0, 255)
    floor = np.floor(idx).astype(int)
    ceil = np.clip(floor + 1, 0, 255)
    frac = (idx - floor)[..., None]
    out = LUT[floor] * (1 - frac) + LUT[ceil] * frac
    out += grain(out.shape[:2], rng)[..., None]

    full = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))
    native = full.size[0]
    print(f"{key:8s} {name:14s} {full.size[0]}x{full.size[1]}")

    widths = [native, *(t for t in WIDTHS if t < native)]
    for target in widths:
        scaled = (
            full
            if target == native
            else full.resize(
                (target, round(full.size[1] * target / native)), Image.LANCZOS
            )
        )
        path = OUT / f"{key}-{target}.webp"
        scaled.save(path, "WEBP", quality=86, method=6)
        print(f"         {path.name:24s} {path.stat().st_size / 1024:5.0f} kB")

    fallback = min(1280, native)
    shrunk = (
        full
        if fallback == native
        else full.resize(
            (fallback, round(full.size[1] * fallback / native)), Image.LANCZOS
        )
    )
    path = OUT / f"{key}-{fallback}.jpg"
    shrunk.save(path, "JPEG", quality=84, optimize=True, progressive=True)
    print(f"         {path.name:24s} {path.stat().st_size / 1024:5.0f} kB")
    return full.size


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    rng = np.random.default_rng(7)
    sizes = {}
    for key in sys.argv[1:] or list(PLAN):
        sizes[key] = build(key, rng)
    print("SIZES", sizes)


if __name__ == "__main__":
    main()
