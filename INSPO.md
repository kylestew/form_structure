# Inspiration Research

Six portfolio sites reviewed for design patterns, styling, and structural ideas relevant to the Form+Structure rebuild.

---

## Site Summaries

### Semiconductor — semiconductorfilms.com/artworks

Ruth Jarman & Joe Gerhardt's collaborative art practice.

- **Layout:** Clean grid of thumbnails (roughly 3-col) on the artworks page. White background, minimal chrome.
- **Navigation:** Simple top nav — Featured, Artworks, Other Projects, Biography/CV, News, Contact. Hamburger on mobile.
- **Project presentation:** Thumbnail + title only. No categories, no hover effects. Click through to detail page. ~40 works shown at once — they don't filter or hide anything.
- **Typography:** Plain, readable. Nothing decorative.
- **Vibe:** Gallery/institutional. The work speaks, the site gets out of the way. Very little personality in the design itself — all personality comes from the art.
- **Standout:** The sheer volume of work shown without pagination. It's a scroll-through archive, not a curated highlight reel.

### Robert Hodgin — roberthodgin.com

Generative artist / creative coder. Very close to your world.

- **Layout:** Masonry grid on the homepage. Variable-height thumbnails, responsive columns.
- **Navigation:** Sticky top bar — name on the left, "Portfolio" and "About" on the right. Clean and minimal.
- **Project presentation:** Thumbnails show the image only by default. On hover: dark semi-transparent overlay (50% opacity) with white title + gray subtitle (e.g. "Generative Print Series"). This is a strong pattern — image-first, text on demand.
- **Colors:** White background, near-black text (#020202). Magenta (#f618f9) links, neon green (#7aed00) hover states. The accent colors are bold and unexpected.
- **Typography:** Simplon family — geometric sans. Regular, italic, bold weights.
- **Vibe:** Sophisticated but energetic. The bright accent colors against the minimal layout create tension — it feels like a serious artist who's also playful.
- **Standout:** The hover overlay pattern. Also the accent color pairing (magenta + neon green) — distinctive without being overwhelming.

### ertdfgcvb — ertdfgcvb.xyz

Andreas Gysin's procedural graphics studio.

- **Layout:** Almost entirely text. The homepage is a single column of links organized by category (External, NFTs, Physicals, Toys). No images on the homepage at all.
- **Navigation:** Flat — just categorized link lists. No traditional nav bar.
- **Project presentation:** Text links pointing to external platforms (fxhash, SuperRare, etc.). Projects live elsewhere. The site is a hub, not a gallery.
- **Colors:** Monochromatic — options for color cycle, white, and gray modes. Code-terminal aesthetic.
- **Typography:** Monospace (fits the "textmode" brand perfectly).
- **Interactive:** Rotating greeting text that cycles every 9 seconds. ASCII art / screensaver mode. The page itself is a piece of generative work.
- **Vibe:** Hacker-poet. The site IS the work — it doesn't just display work, it embodies the practice. Radically minimal.
- **Standout:** The homepage-as-artwork approach. Also: monospace + monochrome is a strong identity choice that you already share (Space Mono).

### Dreams Work — dreamswork.co.uk/work

Immersive experience design studio.

- **Layout:** Grid of large thumbnails on the work page. Clean, lots of whitespace.
- **Navigation:** Three items — About, Projects, Contact. That's it.
- **Project presentation:** Thumbnails with hover effects. Each shows title + role description (e.g. "Concept, Technical Development & Production"). Category filtering available.
- **Colors:** White, gray, dark tones. Muted teal (#576f70) as accent.
- **Typography:** Clean modern sans-serif.
- **Vibe:** Understated and professional. The work is immersive and bold; the site is quiet and confident.
- **Standout:** The role descriptions on each project — immediately communicates what YOU did, not just what the project is. Also: only 3 nav items. Extreme simplicity.

### CW&T — cwandt.com

Experimental product design studio (Che-Wei Wang & Taylor Levy).

- **Layout:** Full-width auto-advancing slideshow on the homepage. Large hero images for each product/project.
- **Navigation:** Hamburger menu expanding to a drawer. Categories: Shop, Projects, Participate, Info.
- **Project presentation:** Hero-image-first. 16:9 aspect ratios. Minimal text. Products cycle automatically every 10 seconds.
- **Colors:** Stark black and white only. #000, #FFF, light gray accents. No color whatsoever.
- **Typography:** **Space Mono** — the same font you use. Monospace conveying technical precision.
- **Vibe:** Gallery-meets-lab. Objects are presented like specimens. The restraint is extreme and effective.
- **Standout:** Space Mono + black/white + full-bleed images. Proof that your font choice can carry a very high-end feel. The auto-advancing slideshow is a bold homepage pattern.

### BREAKFAST — theartistbreakfast.com

Kinetic art studio (large-scale installations).

- **Layout:** Masonry grid of project thumbnails on the works page.
- **Navigation:** Works, Outdoor, Artist Bio, Studio, Jobs, Contact. Fixed top nav.
- **Project presentation:** Thumbnails (~1270x714px) with hover: image scales to 1.15x, dark overlay appears, title + category shown in white. **Category filtering** via buttons (e.g. "Brixels", "Flip-Discs") with URL deeplinks.
- **Colors:** White background, black text, light gray accents. Muted and restrained.
- **Typography:** Aktiv Grotesk at very light weights (200-300 for headings). Thin, elegant type.
- **Vibe:** Museum-quality presentation. Large-scale kinetic art shown with restraint. The thinned-out headings give a sophisticated, editorial feel.
- **Standout:** Category filtering by medium. Also the ultra-light font weight for headings — a small choice that dramatically changes the feel.

---

## Patterns Worth Stealing

### 1. Hover overlay on project thumbnails

Used by: Robert Hodgin, BREAKFAST

Show the image clean by default. On hover, add a dark semi-transparent overlay with the project title and a one-line description. This keeps the grid visually clean while still being informative.

Your current site shows title + categories below the image. The overlay approach would be a step up — images become the full visual, text appears on demand.

### 2. Minimal navigation (3 items max)

Used by: Dreams Work (About, Projects, Contact)

Your rebuild has exactly this: Home (implicit via logo), About, Contact. The project pages are reached through the grid. No need for a "Projects" nav item when the homepage IS the projects page.

### 3. Role/contribution line per project

Used by: Dreams Work

Each project thumbnail shows what you did: "Concept, Technical Development & Production." For a portfolio, this is powerful — it immediately answers "what was your role?" Your projects span hardware, software, creative direction. Adding a short role line (e.g. "Creative Direction, Software, Hardware" for Tetralume) communicates range.

### 4. Category filtering

Used by: BREAKFAST

With only 3 projects this isn't needed now, but as you add more work, filtering by medium/technology (e.g. "installation", "generative", "physical") is a clean way to scale.

### 5. Monospace + monochrome as identity

Used by: ertdfgcvb, CW&T

You already have Space Mono. CW&T proves this font works at a high-end level with pure black/white. ertdfgcvb proves it works for a code-forward creative practice. Your current color palette (dark gray + rust accent) adds warmth on top of this foundation — that's a good differentiation.

### 6. Full-bleed hero images

Used by: CW&T, BREAKFAST

Large project images that span the full width, no padding. Creates visual impact. Your current project detail pages have a max-width constraint. Going wider (at least for the lead image) would add drama.

### 7. Ultra-light heading weights

Used by: BREAKFAST (Aktiv Grotesk 200)

Space Mono doesn't have a 200-weight, but the principle applies: thin, large headings feel more editorial and sophisticated than bold ones. Worth considering if you ever add a second typeface for headings.

---

## What Your Site Is Missing (Based on These References)

| Gap                                         | Who does it well                | Priority                                        |
| ------------------------------------------- | ------------------------------- | ----------------------------------------------- |
| **Hover overlays on project grid**          | Hodgin, BREAKFAST               | High — improves the homepage immediately        |
| **Role/contribution per project**           | Dreams Work                     | High — answers "what did you do?"               |
| **Open Graph / social preview images**      | All of them                     | High — already in the plan                      |
| **A real footer**                           | All of them (even minimal ones) | Medium — yours is currently empty               |
| **Project subtitle or one-liner**           | Hodgin, Semiconductor           | Medium — you have categories but no description |
| **Full-bleed lead images on project pages** | CW&T, BREAKFAST                 | Medium — more visual impact                     |
| **Video on homepage or as hero**            | BREAKFAST, CW&T                 | Low — nice but adds weight                      |
| **Category/medium filtering**               | BREAKFAST                       | Low — not needed with 3 projects                |

---

## Styling Ideas for the Rebuild

**Keep from your current site:**

- Space Mono — validated by CW&T as a high-end choice
- Dark header / white content — common across all these references
- Rust accent color (#c14d2c) — differentiates you from the pure black/white crowd

**Consider adopting:**

- **Hover overlay on project cards** instead of text below the image <-- Add to PLAN.md
- **Larger thumbnails** — closer to BREAKFAST's 1270x714 than small squares
- **A one-line role description** per project (below or inside the overlay)
- **More whitespace** — all these sites are generous with padding <-- Add to PLAN.md
- **Slightly thinner body text weight** — if Space Mono supports it, or through letter-spacing
- **Full-width lead image** on project detail pages (break out of the max-width container for the hero image)

**Avoid:**

- Auto-advancing slideshows (CW&T) — adds JS, can feel out of control
- Text-only homepage (ertdfgcvb) — works for his brand, but you have strong visual work to show
- Masonry layouts — with 3 projects a simple 1x3 or 2-col grid is cleaner
