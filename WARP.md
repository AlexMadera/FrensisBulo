# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview
This is an Astro (v5) static site with a single-page, section-based layout and locale-prefixed routes (e.g. `/en/`, `/nl/`). Content is stored as typed TS data and passed into `.astro` components.

## Common commands
All commands are run from the repo root.

### Install
- `npm install`

### Develop (local server)
- `npm run dev`
  - Astro dev server (default `http://localhost:4321`)

### Build / preview
- `npm run build` (outputs to `dist/`)
- `npm run preview`

### Astro CLI / typecheck
- `npm run astro -- --help`
- `npm run astro check`

### Lint / tests
No lint or test scripts/config are currently present in `package.json`.

## Code architecture (big picture)

### Routing & page entrypoints
- `src/pages/index.astro` is only a redirect to the default locale (`/en/`).
- `src/pages/[lang]/index.astro` is the real page entrypoint.
  - Uses `getStaticPaths()` to pre-render one page per language.
  - Validates the route param with `isValidLanguage()` and loads localized content via `getContent()`.
  - Composes the page as a set of section components inside a shared layout.

Note (PowerShell): paths containing `[...]` are treated as wildcards; use `-LiteralPath` / quoting when scripting against `src/pages/[lang]`.

### Layout & global runtime behavior
- `src/layouts/Layout.astro`
  - Imports global CSS (`src/styles/global.css`) and sets core meta tags.
  - Adds a global script that initializes Lenis smooth scrolling and GSAP + ScrollTrigger.

### Localization (i18n)
- `astro.config.mjs` declares locales and routing behavior.
- `src/i18n/content.ts`
  - Defines `languages`, `Language`, and the `SiteContent` shape.
  - `content: Record<Language, SiteContent>` is the single source of truth for all localized copy + structured data.
  - `getContent(lang)` returns the per-locale `SiteContent` object.

When adding a new locale, keep these in sync:
- `astro.config.mjs` `i18n.locales`
- `src/i18n/content.ts` `languages` + `content[<newLang>]`

### Component layering & composition
The UI is intentionally layered:
- `src/components/ui/*`: small UI primitives (`Container`, `Button`, `Card`, `SectionHeader`, icons)
- `src/components/layout/*`: page chrome (`Header`, `Footer`)
- `src/components/sections/*`: page sections (Hero/About/Gallery/WorkingMethod/Prices/Testimonials/Contact)

`src/pages/[lang]/index.astro` wires everything together by passing `SiteContent` slices into each section.

### Navigation model
- `Header.astro` renders navigation links using `content.nav.links`.
- Most navigation is in-page anchors (e.g. `#about`, `#contact`) and the header adds smooth-scrolling behavior via GSAP.

### Assets
Static assets live in `public/` and are referenced via absolute URLs (e.g. `/gallery/gallery1.jpg`). Some asset lists (gallery slides/images) are centralized in `src/i18n/content.ts`.