# Site Audit — formandstructure.co

Audited: 2026-03-15
Branch: `next_update` (1 commit ahead of `master`, plus uncommitted changes)
Last deploy: Jul 3, 2025 (`master@dfe3f6e`)

---

## Site Overview

Next.js 15 App Router portfolio with MDX notes, interactive canvas projects, and a WebGL hero.
Hosted on Netlify, deploys from `master`.

### Routes

| Route | Type | Status |
|-------|------|--------|
| `/` | Home — project grid + WebGL blob hero | Live |
| `/about` | Bio, skills, social links | Live |
| `/notes` | Notes gallery (published MDX) | Live |
| `/notes/[slug]` | Individual note pages | Live |
| `/neon-sprawl` | Post — interactive installation | Live |
| `/other-fields` | Post — generative print series | Live |
| `/tetralume` | Post — LED performance | Live |
| `/dancing-laser-fairies` | Project — generative canvas | Live |
| `/on-a-line` | Project — generative interactive | Exists but **commented out** of homepage |
| `/rust-rays` | Post — Rust path tracer | **Untracked, draft, no images** |

### Notes Inventory

- **16 published** notes (no underscore prefix): noise, distributions, chaikin-curves, cellular_automata, cga, curl, dithering, falling_sand, heightfields, journey, jpeg-compression, quantization, random, rasterization
- **15 draft** notes (underscore prefix, hidden from gallery): _3d-projection, _ascii-art, _compression, _dunes, _flood-fill, _fluid_sim, _fluid_sim_save, _geometric-primitives, _gradients, _halftoning, _image-kernels, _particles-systems, _pixel-sorting, _raymarching, _raytracing, _vectors

---

## Bugs & Broken Things

### Missing cover image — `rust-rays`

`ProjectCard` loads `/images/rust-rays/cover.jpg`. No such file or directory exists. If this card is deployed, it will render a broken image on the homepage.

### Typo in `app/layout.js:18`

```html
<body className={`${spaceMono.className} antialised bg-dark`}>
```

Should be `antialiased`.

### Typo in `app/about/page.js:18`

```html
alt="Profile Picture of Kyle Stewar"
```

Missing the final "t".

### Copy-paste alt text — `neon-sprawl/page.js`

Lines 46, 53, 64, 87 all use `alt="OF_gen_01"` for completely different images (Time Shadows, City Wave, hardware demo). These should describe the actual image content.

### Note cover images — 14 of 29 exist

Published notes referencing missing covers will show broken images in the gallery. Missing covers for published notes:

- `rasterization.png` (new stub note)

Draft notes don't surface in the gallery so their missing covers don't matter unless you publish them.

---

## Dead Code

### `app/layout.js:23-66`

Large commented-out block — old Pages Router `<Head>` with favicon links, RSS feed reference, and meta tags. This was the pre-App Router metadata setup. Safe to remove.

### `app/components/footer.js`

The entire footer body (lines 6-67) is commented out. It contains placeholder content from another site (monopo.london address, VAT number, "SERVICES" / "TEAM" links). The rendered footer is just an empty `<footer>` tag with a dark background.

### `app/page.js:28-32`

"On a Line" project commented out of the projects array. The route and page still exist at `app/(projects)/on-a-line/`.

### `app/components/projects/rendered-hero.js`

Large commented-out animation block (TODO at line 55). This file is the *unused* hero — the homepage imports `rendered-hero-2.js` instead.

---

## SEO & Metadata

Current metadata in `app/layout.js`:

```js
title: 'Form+Structure',
description: 'Portfolio of Kyle Stewart',
```

**Missing:**

- No Open Graph tags (og:title, og:image, og:description) — links shared on social media will have no preview card
- No Twitter Card tags
- No per-page metadata — every page shows "Form+Structure" as the title
- No `sitemap.xml` — hurts crawlability
- No `robots.txt`
- No canonical URLs
- No structured data (JSON-LD)
- No RSS feed (referenced in commented-out code but never implemented)

---

## Content Quality

### Rust Rays post (`app/(posts)/rust-rays/page.js`)

- Marked as "Draft" in the UI
- Content is an inline string array joined with `\n` — unusual pattern vs other pages
- Multiple "coming soon" placeholders (demo link, GitHub link)
- Screenshot section says "*Placeholders for now*" with image paths in inline code (not rendered)
- References `/images/raytracer/hero.jpg` — directory doesn't exist
- No cover image for the project card

### Rasterization note (`app/notes/notes/rasterization.mdx`)

Stub content:
```
???
TODO: copy what I know from class
```

This is a published note (no underscore prefix) so it's visible in the gallery.

### Journey note

Functions as a table of contents / roadmap. Several items are unlinked placeholders. Some sections have loose formatting ("- Shells / Linux / etc...").

---

## Architecture Notes

### Custom MDX code execution system

`app/components/mdx.jsx` implements a `@meta` directive system:
- `// @meta store:name` — saves code block to a named slot
- `// @meta load:name` — prepends stored code
- `// @meta exec` — executes the code block client-side via `ClientScript`

This is powerful but undocumented and fragile. The TODO at line 187 notes "remark plugins break other scripts."

### Note dates come from filesystem

`app/notes/utils.js` uses `fs.statSync` for `createdAt`/`updatedAt`. This means dates reflect when files were last modified on the build server, not when content was actually written. Deploying to Netlify resets these to the deploy time. Consider using frontmatter dates instead.

### `root` dependency

`"root": "github:kylestew/root"` — custom utility library pulled directly from GitHub. Not pinned to a version/commit, so `npm install` could pull breaking changes. Used for canvas utilities, geometry primitives, and random functions in the interactive projects.

---

## Performance

### Three.js on homepage

Three.js (~600KB) loads for the hero blob animation. It's only used on the home page, so it's scoped to that route via Next.js code splitting. But it's a heavy dependency for a background animation.

### Public assets — ~88MB

Mostly project images and videos. Expected for a portfolio, but none of the videos appear to use lazy loading or streaming optimization.

### `rendered-hero.js` still in bundle?

`rendered-hero.js` (the unused hero) imports from `root` and sets up a full canvas pipeline. If it's not tree-shaken, it adds to the homepage bundle. The homepage imports `rendered-hero-2.js`, but `rendered-hero.js` still exists as a component.

---

## Minor Issues

- `.nvmrc` says `20.19.0` but Netlify dashboard notes Node 20; might want to align with Node 22 for Netlify agent features
- `overlayExt` prop in `ProjectCard` is accepted but never used in the component
- `app/components/navbar.js` has an empty destructured parameter `{}`
- The footer renders as an empty dark bar — either build it out or remove it

---

## Summary

| Area | State |
|------|-------|
| Core site | Solid — clean routing, good component structure |
| Published content | Good — 5 projects + 16 notes with real substance |
| Draft content | Rust-rays needs images and links before deploy; rasterization is a stub |
| Dead code | Moderate — commented-out blocks in layout, footer, homepage, hero |
| SEO | Weak — no OG tags, no sitemap, no per-page titles |
| Bugs | A few typos and a missing cover image that would break the homepage |
| Performance | Acceptable — Three.js is heavy but code-split |
| Dependencies | Clean and current |
