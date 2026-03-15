# Plan: Static Site Rebuild

## Goal

Strip the site down to a simple static portfolio. No React, no Next.js, no interactive canvas demos, no notes section. Just project pages with images/video, an about page, and a contact form. Hosted on Netlify with zero JavaScript shipped to the browser (Tailwind loaded via CDN script tag).

---

## Decisions

| Decision | Choice |
| --- | --- |
| Framework | None — plain HTML + Tailwind CDN |
| Styling | Tailwind v4 via CDN `<script>` tag, no build step |
| Hosting | Netlify, deploy from `master`, domain `formandstructure.co` |
| Contact form | Netlify Forms with `/thanks.html` success page |
| Homepage hero | Static gradient or image (no JS) |
| Git strategy | Fresh branch `static-rebuild` off `master` |
| Interactive projects | Removed entirely (dancing-laser-fairies, on-a-line) |
| Rust-rays | Removed entirely |
| Notes | Archived as standalone markdown before removal |
| Unused images | Moved to `_trash/` for manual review before deploy |

---

## Final Site Map

| Page | Content |
| --- | --- |
| `/` | Project grid with cover images |
| `/about` | Bio, skills, social links, profile photo |
| `/contact` | Netlify Forms contact form |
| `/neon-sprawl` | Text, images, embedded videos |
| `/other-fields` | Text, image grid |
| `/tetralume` | Text, Vimeo embed |
| `/thanks` | Form submission confirmation |

---

## Project Structure

```
form_structure/
├── index.html              # Home — project grid
├── about.html              # Bio + skills
├── contact.html            # Netlify form
├── thanks.html             # Form success page
├── neon-sprawl.html        # Project detail
├── other-fields.html       # Project detail
├── tetralume.html          # Project detail
├── robots.txt
├── sitemap.xml
├── images/
│   ├── neon-sprawl/        # Project images + videos
│   ├── other-fields/       # Project images
│   ├── tetralume/          # Project images
│   ├── art_avi_tall.jpg    # Profile photo
│   └── covers/             # Project cover images for homepage grid
├── favicon.ico
├── _archive/               # Notes exported as markdown (move out before deploy)
└── _trash/                 # Unused images for review (move out before deploy)
```

No `package.json`, no `node_modules`, no build step. Netlify serves the files directly.

`_archive/` and `_trash/` will be moved out of the repo before deploying.

---

## Migration Steps

### 0. Archive notes as standalone markdown

Before tearing down the Next.js site, export all 30 notes as clean, portable markdown files into `_archive/notes/`.

**What the notes contain today:**

- Standard frontmatter (title, publishedAt, summary, image)
- Prose + code blocks (the valuable stuff)
- `// @meta exec`, `// @meta store:name`, `// @meta load:name` directives — custom directives for the site's interactive code execution system. Meaningless outside the site.
- `<Canvas id="..." />` JSX components — rendered interactive demos. Can't be preserved as markdown.
- A few inline images referencing `/images/_notes/...`

**Conversion per file:**

1. Rename `.mdx` → `.md` (drop underscore prefix from draft files too)
2. Keep frontmatter and all prose/code blocks intact
3. Strip `// @meta ...` comment lines from code blocks
4. Replace `<Canvas ... />` tags with `<!-- interactive demo -->`
5. Remove any remaining JSX/HTML-in-MDX wrappers (e.g. `<div style={{...}}>`)
6. Fix image paths to be relative (`./images/...` instead of `/images/_notes/...`)

**Archive structure:**

```
_archive/
└── notes/
    ├── images/              # from public/images/_notes/ (covers, fluid, halftoning, jpeg, etc.)
    ├── cellular-automata.md
    ├── cga.md
    ├── chaikin-curves.md
    ├── curl.md
    ├── distributions.md
    ├── dithering.md
    ├── falling-sand.md
    ├── heightfields.md
    ├── journey.md
    ├── jpeg-compression.md
    ├── noise.md
    ├── quantization.md
    ├── random.md
    ├── rasterization.md
    ├── 3d-projection.md
    ├── ascii-art.md
    ├── compression.md
    ├── dunes.md
    ├── flood-fill.md
    ├── fluid-sim.md
    ├── fluid-sim-save.md
    ├── geometric-primitives.md
    ├── gradients.md
    ├── halftoning.md
    ├── image-kernels.md
    ├── particles-systems.md
    ├── pixel-sorting.md
    ├── raymarching.md
    ├── raytracing.md
    └── vectors.md
```

Plain markdown — readable in any editor, GitHub, Obsidian, etc. Code examples fully preserved; only site-specific execution machinery stripped.

### 1. Create fresh branch and clean slate

```
git checkout master
git checkout -b static-rebuild
```

Remove all Next.js files, configs, and dependencies. Move `public/` contents to root-level `images/` and `favicon.ico`.

### 2. Create HTML pages

Build 7 HTML files (6 pages + thanks) with a shared structure:

- Common `<head>`: Space Mono font (Google Fonts), Tailwind v4 CDN script, favicon, per-page metadata + OG tags
- Common nav: "FORM+STRUCTURE" linking home, responsive "F+S" on mobile
- Common footer: copyright, social links as inline SVGs (Instagram, X, GitHub, LinkedIn)

**Home page:** Dark header with static gradient/image + site name + "Portfolio of Kyle Stewart" byline. Below that, white grid of project cards with **hover overlay** — images shown clean by default, dark semi-transparent overlay with title + one-line description on hover (inspired by Hodgin / BREAKFAST). Each card links to its project page.

**About page:** Direct port — profile photo, bio, focus areas, "Let's Work Together" section. FontAwesome icons replaced with inline SVGs.

**Project pages (neon-sprawl, other-fields, tetralume):** Convert JSX to plain HTML. `next/image` becomes `<img>` with `width`/`height`/`loading="lazy"`. Videos stay as `<video>` and `<iframe>`.

**Contact page:** Netlify Forms — `<form>` with `data-netlify="true"`, fields for name, email, message. On success redirects to `/thanks`.

**Thanks page:** Simple confirmation message with link back to home.

### 3. Add SEO basics

- Per-page `<title>` and `<meta name="description">`
- Open Graph tags (og:title, og:image, og:description) per page
- `robots.txt` (simple allow-all)
- `sitemap.xml` (hand-written, 7 URLs)
- Canonical URLs

### 4. Fix bugs from the old site

- Fix alt text on neon-sprawl images (were all "OF_gen_01")
- Fix "Kyle Stewar" typo on about page
- Remove all dead/commented-out code (clean start)

### 5. Clean up assets

- Move unused image directories to `_trash/`: gen-art-challenge, houdini-to-web, non-realtime, plotter, spool, subdivs, synths
- Delete removed project assets: on-a-line, dancing-laser-fairies, _notes
- Reorganize cover images into `images/covers/`
- Verify all remaining images are referenced

### 6. Deploy

Netlify build settings:

- Build command: _(none)_
- Publish directory: `/`
- No Node.js needed

You move `_archive/` and `_trash/` out of the repo, then merge `static-rebuild` → `master` and push.

---

## Design Spec

- **Font:** Space Mono (monospace, 400/700)
- **Colors:** dark `#222`, gray `#404040`, light_gray `#808080`, light `#ececec`, action `#c14d2c`
- **Layout:** dark header, white content area, dark footer
- **Whitespace:** generous padding throughout — more breathing room than the current site (see INSPO.md references)
- **Project cards:** image-only by default, hover overlay (dark semi-transparent) with title + description in white
- **Images:** drop shadow effect on art images
- **Grid:** 2-col on desktop, 1-col on mobile
- **Links:** action color (`#c14d2c`), underline on hover

---

## Dependency Comparison

**Current:** 17 production deps, 3 dev deps, hundreds of transitive packages, ~88MB public assets

**After:** 0 dependencies, 0 build step, ~41MB images (after cleanup)

---

## Todo List

### Phase 0: Archive & Prep

- [ ] Create `static-rebuild` branch off `master`
- [ ] Create `_archive/notes/` directory
- [ ] Copy `public/images/_notes/` → `_archive/notes/images/`
- [ ] Convert all 30 `.mdx` notes to clean `.md`:
  - [ ] cellular_automata.mdx → cellular-automata.md
  - [ ] cga.mdx → cga.md
  - [ ] chaikin-curves.mdx → chaikin-curves.md
  - [ ] curl.mdx → curl.md
  - [ ] distributions.mdx → distributions.md
  - [ ] dithering.mdx → dithering.md
  - [ ] falling_sand.mdx → falling-sand.md
  - [ ] heightfields.mdx → heightfields.md
  - [ ] journey.mdx → journey.md
  - [ ] jpeg-compression.mdx → jpeg-compression.md
  - [ ] noise.mdx → noise.md
  - [ ] quantization.mdx → quantization.md
  - [ ] random.mdx → random.md
  - [ ] rasterization.mdx → rasterization.md
  - [ ] _3d-projection.mdx → 3d-projection.md
  - [ ] _ascii-art.mdx → ascii-art.md
  - [ ] _compression.mdx → compression.md
  - [ ] _dunes.mdx → dunes.md
  - [ ] _flood-fill.mdx → flood-fill.md
  - [ ] _fluid_sim.mdx → fluid-sim.md
  - [ ] _fluid_sim_save.mdx → fluid-sim-save.md
  - [ ] _geometric-primitives.mdx → geometric-primitives.md
  - [ ] _gradients.mdx → gradients.md
  - [ ] _halftoning.mdx → halftoning.md
  - [ ] _image-kernels.mdx → image-kernels.md
  - [ ] _particles-systems.mdx → particles-systems.md
  - [ ] _pixel-sorting.mdx → pixel-sorting.md
  - [ ] _raymarching.mdx → raymarching.md
  - [ ] _raytracing.mdx → raytracing.md
  - [ ] _vectors.mdx → vectors.md
- [ ] Per-file conversion: strip `// @meta` lines, replace `<Canvas />` with `<!-- interactive demo -->`, remove JSX wrappers, fix image paths to relative
- [ ] Verify archived notes render cleanly in a markdown previewer

### Phase 1: Clean Slate

- [ ] Delete `app/` directory
- [ ] Delete `src/` directory
- [ ] Delete `node_modules/`
- [ ] Delete `package.json`, `package-lock.json`
- [ ] Delete `next.config.mjs`, `jsconfig.json`, `.eslintrc.json`, `postcss.config.mjs`
- [ ] Delete `.next/` build directory
- [ ] Move `public/images/` → root `images/`
- [ ] Move `public/favicon.ico` → root `favicon.ico`
- [ ] Delete empty `public/` directory
- [ ] Move unused images to `_trash/`:
  - [ ] `images/gen-art-challenge/`
  - [ ] `images/houdini-to-web/`
  - [ ] `images/non-realtime/`
  - [ ] `images/plotter/`
  - [ ] `images/spool/`
  - [ ] `images/subdivs/`
  - [ ] `images/synths/`
- [ ] Delete removed project images:
  - [ ] `images/on-a-line/`
  - [ ] `images/dancing-laser-fairies/`
  - [ ] `images/_notes/`
- [ ] Collect project cover images into `images/covers/` (neon-sprawl, other-fields, tetralume)
- [ ] Update `.nvmrc` to `22` (or remove — no build step needed)

### Phase 2: Build Pages

#### Shared HTML structure
- [ ] Define common `<head>` block: charset, viewport, Space Mono (Google Fonts), Tailwind v4 CDN script, favicon
- [ ] Define Tailwind theme config (inline in CDN script): colors (dark, gray, light_gray, light, action)
- [ ] Build nav component markup: "FORM+STRUCTURE" (desktop) / "F+S" (mobile), links to `/about` and `/contact`
- [ ] Build footer markup: copyright line, inline SVG social icons (Instagram, X, GitHub, LinkedIn)

#### index.html (Home)
- [ ] Dark header section with CSS gradient or static image
- [ ] Site name "FORM+STRUCTURE" + "Portfolio of Kyle Stewart" byline
- [ ] Project grid (2-col desktop, 1-col mobile)
- [ ] Project card component: cover image, hover overlay (dark semi-transparent bg, white title + description)
- [ ] Cards for: Neon Sprawl, Other Fields, Tetralume
- [ ] Generous whitespace / padding between cards and sections

#### about.html
- [ ] Profile photo (`images/art_avi_tall.jpg`) with proper alt text ("Kyle Stewart")
- [ ] Title: "Kyle Stewart" + subtitle: "Graphics Engineer · Creative Toolmaker"
- [ ] Bio paragraphs (3 paragraphs from current about page)
- [ ] Focus Areas section (Generative & Procedural Design, Creative Programming, Graphics & Rendering, Interactive Systems, Physical Computing)
- [ ] "Let's Work Together" section with opportunities list
- [ ] Social links as inline SVGs (Instagram, X, GitHub, LinkedIn)
- [ ] Per-page OG tags

#### neon-sprawl.html
- [ ] Title: "Neon Sprawl" + subtitle: "Interactive Installation for City Lights, San Diego"
- [ ] Lead video (video02.mp4)
- [ ] Description paragraphs
- [ ] "The Experience" section
- [ ] Image sections: Time Shadows (2 images), City Wave (1 image), with proper alt text (not "OF_gen_01")
- [ ] Videos: Shake Off the City, Burning Tape
- [ ] "Interaction & Technology" section with hardware-demo image + proper alt text
- [ ] "Exhibition Context" section
- [ ] "Reflection" section with video01.mp4
- [ ] Credits and links
- [ ] All images: `loading="lazy"`, `width`/`height` attributes
- [ ] Per-page OG tags

#### other-fields.html
- [ ] Title: "Other Fields" + subtitle: "Generative Art Print Series"
- [ ] Lead images (2-up grid: OF_gen_01, OF_gen_02)
- [ ] Description paragraph
- [ ] Technical Details section
- [ ] Small image grid (4-up: OF_gen_03–07)
- [ ] All images: `loading="lazy"`, `width`/`height` attributes, proper alt text
- [ ] Per-page OG tags

#### tetralume.html
- [ ] Title: "Tetralume" + subtitle (fix: currently says "Generative Art Print Series" — should describe the LED performance)
- [ ] Vimeo embed iframe
- [ ] Description paragraph
- [ ] Challenges section
- [ ] Technical Details section (LED specs list)
- [ ] Credits (Luminul Creative / Ben Guerrette)
- [ ] Per-page OG tags

#### contact.html
- [ ] Title: "Get in Touch" or similar
- [ ] Netlify form: `<form name="contact" method="POST" data-netlify="true" action="/thanks">`
- [ ] Fields: name (text, required), email (email, required), message (textarea, required)
- [ ] Submit button styled with action color
- [ ] Honeypot field for spam prevention (`data-netlify-honeypot="bot-field"`)
- [ ] Per-page OG tags

#### thanks.html
- [ ] Simple confirmation: "Thanks for reaching out" or similar
- [ ] Link back to home
- [ ] Same nav/footer as other pages

### Phase 3: SEO & Meta

- [ ] Per-page `<title>`: "Page Name — Form+Structure"
- [ ] Per-page `<meta name="description">`
- [ ] Per-page Open Graph tags: og:title, og:description, og:image, og:url, og:type
- [ ] Twitter card meta tags
- [ ] Canonical `<link rel="canonical">` per page
- [ ] Write `robots.txt` (allow all, reference sitemap)
- [ ] Write `sitemap.xml` (7 URLs: home, about, contact, neon-sprawl, other-fields, tetralume, thanks)

### Phase 4: Polish & QA

- [ ] Verify all image paths resolve correctly
- [ ] Verify all internal links work (nav, footer, project cards, contact → thanks)
- [ ] Verify external links work (social profiles, project credits)
- [ ] Check responsive layout at mobile / tablet / desktop breakpoints
- [ ] Check hover overlays work on project cards
- [ ] Verify Netlify form submission works (test with `netlify dev` or after deploy)
- [ ] Check alt text is descriptive on all images
- [ ] Verify no leftover Next.js / React artifacts
- [ ] Test pages render without JavaScript disabled (except Tailwind CDN)
- [ ] Check OG tags render correct previews (use og:image validator)
