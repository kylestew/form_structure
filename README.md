# Form+Structure

Portfolio site for Kyle Stewart — [formandstructure.co](https://formandstructure.co)

## Stack

Plain HTML + Tailwind CSS (via CDN). No build step, no dependencies, no framework.

- **Styling:** Tailwind v4 loaded via `<script>` tag
- **Font:** Space Mono (Google Fonts)
- **Analytics:** GoatCounter (privacy-friendly, no cookies)
- **Contact form:** Netlify Forms
- **Hosting:** Netlify, deployed from `master`

## Pages

| File | Route | Description |
|------|-------|-------------|
| `index.html` | `/` | Homepage — project grid with hover overlays |
| `about.html` | `/about` | Bio, skills, social links |
| `contact.html` | `/contact` | Contact form (Netlify Forms) |
| `thanks.html` | `/thanks` | Form submission confirmation |
| `neon-sprawl.html` | `/neon-sprawl` | Project — interactive installation |
| `other-fields.html` | `/other-fields` | Project — generative print series |
| `tetralume.html` | `/tetralume` | Project — LED light & sound performance |

## File Structure

```
├── *.html              # Pages
├── images/
│   ├── covers/         # Homepage project thumbnails
│   ├── neon-sprawl/    # Project images + videos
│   ├── other-fields/   # Project images
│   ├── tetralume/      # Project images
│   └── art_avi_tall.jpg
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── .nvmrc
```

## Local Development

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. Note: links use `.html` extensions which work locally. Netlify's Pretty URLs feature strips them in production.

## Deploy

Netlify settings:

- **Build command:** _(leave empty)_
- **Publish directory:** `/`
- **Branch:** `master`

Push to `master` and Netlify deploys automatically. No build step needed.

## Adding a Project

1. Create `project-name.html` — copy the structure from an existing project page
2. Add images to `images/project-name/`
3. Add a cover image to `images/covers/project-name.jpg`
4. Add a project card to `index.html` (copy an existing card block)
5. Add the URL to `sitemap.xml`
