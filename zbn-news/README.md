# ZBN News website

ZBN News is a Vite + React site for the Zero Boundary Network. This version is set up as a more formal independent news network built around Omar and Feldman, with in-page YouTube embeds and room to expand into a broader archive.

## Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Key assets

- `public/zbn-logo.png` — network logo
- `public/omar-host.jpg` — Omar host image
- `public/felmon-host.jpg` — Feldman host image

## Current content model

- `src/lib/content.ts` holds network copy, host data, and the launch video lineup.
- The current launch lineup uses Omar-led coverage while the ZBN shell is being established.
- Additional hosts or desk-specific pages can be added by extending the content model and routes.
