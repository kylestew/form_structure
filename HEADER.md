# Header Design Options

Six concepts for the homepage header. All are CSS-only (no JavaScript beyond the Tailwind CDN), keeping with the zero-dependency approach.

---

## 1. Ruled Grid

A fine geometric grid drawn with CSS, evoking graph paper or a CAD workspace. Thin lines in a slightly lighter shade than the dark background, with the site name and byline sitting on top. The grid subtly reinforces the "structure" half of the brand.

- **Background:** `#222` with a `repeating-linear-gradient` creating a 40px grid of thin `#333` lines
- **Feel:** Technical, precise, architectural
- **Reference vibe:** Engineering notebook, blueprint

```
┌──────────────────────────────────────────────┐
│  ·     ·     ·     ·     ·     ·     ·     · │
│     FORM+STRUCTURE          ABOUT   CONTACT  │
│  ·     ·     ·     ·     ·     ·     ·     · │
│                                              │
│  ·     ·     ·     ·     ·     ·     ·     · │
│                                              │
│  ·     ·  Portfolio of Kyle Stewart  ·     · │
│                                              │
│  ·     ·     ·     ·     ·     ·     ·     · │
└──────────────────────────────────────────────┘
```

---

## 2. Cinematic Gradient

A multi-stop diagonal gradient using your palette — dark base bleeding into a warm rust/amber accent in one corner, then back to dark. Feels like light leaking into a dark room. Dramatic without competing with the work below.

- **Background:** `linear-gradient(135deg, #222 0%, #222 40%, #c14d2c 70%, #222 100%)` with low opacity on the color band
- **Feel:** Warm, cinematic, moody
- **Reference vibe:** Film title cards, gallery lighting

```
┌──────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│  FORM+STRUCTURE                              │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓ │
│ ░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│                                              │
│  Portfolio of Kyle Stewart                   │
│ ░░░░░░░░░░░░░░░▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└──────────────────────────────────────────────┘
```

---

## 3. Dot Matrix

A dense field of small dots in a regular pattern, like a halftone print or LED matrix — tying into the physical computing and LED work (Tetralume). Dots are a slightly lighter gray than the background. Could use a radial gradient to fade the dots out toward the edges.

- **Background:** `radial-gradient(circle, #444 1px, transparent 1px)` with `background-size: 16px 16px`
- **Feel:** Retro-digital, screen-like, textural
- **Reference vibe:** CRT phosphors, LED matrices, Ben-Day dots

```
┌──────────────────────────────────────────────┐
│ · · · · · · · · · · · · · · · · · · · · · ·  │
│ · · · · · · · · · · · · · · · · · · · · · ·  │
│ · FORM+STRUCTURE · · · · · · ABOUT  CONTACT  │
│ · · · · · · · · · · · · · · · · · · · · · ·  │
│ · · · · · · · · · · · · · · · · · · · · · ·  │
│ · · · · · · · · · · · · · · · · · · · · · ·  │
│ · · Portfolio of Kyle Stewart· · · · · · · ·  │
│ · · · · · · · · · · · · · · · · · · · · · ·  │
└──────────────────────────────────────────────┘
```

---

## 4. Split Horizon

The header is divided into two horizontal bands — a near-black top and a dark gray bottom — separated by a thin accent-colored line. Minimal and typographic. The colored line acts as a visual "horizon" and gives the header a sense of structure. The site name sits above the line, the byline below.

- **Background:** top half `#1a1a1a`, bottom half `#2a2a2a`, 2px `#c14d2c` line between
- **Feel:** Clean, editorial, Swiss design
- **Reference vibe:** Müller-Brockmann, modernist posters

```
┌──────────────────────────────────────────────┐
│                                              │
│  FORM+STRUCTURE                ABOUT CONTACT │
│                                              │
│──────────────── #c14d2c ─────────────────────│
│                                              │
│  Portfolio of Kyle Stewart                   │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 5. Topographic

Layered contour-like curves created with multiple `radial-gradient` layers at different positions and sizes, producing an organic topographic map effect. Thin curved lines in slightly different grays create depth without breaking the monochrome palette. Evokes terrain, flow fields, and generative landscapes.

- **Background:** 4-5 stacked `radial-gradient` rings at offset positions, using `#2a2a2a` / `#282828` / `#262626` against `#222`
- **Feel:** Organic, generative, topographical
- **Reference vibe:** Contour maps, flow fields (directly connects to Other Fields)

```
┌──────────────────────────────────────────────┐
│           ___________                        │
│       ___/           \___                    │
│   FORM+STRUCTURE         \    ABOUT  CONTACT │
│  /          _______       \                  │
│ |       ___/       \___    |                 │
│ |      /               \   |                 │
│  \  Portfolio of Kyle Stewart                │
│   \___                  ___/                 │
└──────────────────────────────────────────────┘
```

---

## 6. Monospace Block

Pure typography — no background pattern at all. "FORM+STRUCTURE" rendered extremely large (8-10rem), filling the full width of the header in a single line, using `letter-spacing` and `overflow: hidden` to crop it. The text itself becomes the visual element. Set at low opacity (15-20%) so it's a watermark behind the nav and byline.

- **Background:** Flat `#222`, with oversized text as the texture
- **Feel:** Bold, confident, typographic
- **Reference vibe:** CW&T, brutalist web design, Experimental Jetset

```
┌──────────────────────────────────────────────┐
│  FORM+STRUCTURE                ABOUT CONTACT │
│                                              │
│  F O R M + S T R U C T U R E                │
│  (huge, ~15% opacity, cropped)               │
│                                              │
│  Portfolio of Kyle Stewart                   │
│                                              │
└──────────────────────────────────────────────┘
```
