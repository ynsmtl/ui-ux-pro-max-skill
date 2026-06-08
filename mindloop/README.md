# Mindloop

A dark, monochrome landing page for **Mindloop** — a newsletter / content
platform. Pure black (`#000`) background with a white foreground, Inter for
body copy and Instrument Serif for the italic accent words. No colour, no
gradients beyond monochrome.

## Stack

- **React + Vite + TypeScript**
- **Tailwind CSS** (v3) with the shadcn/ui token convention (HSL CSS variables)
- **shadcn/ui** primitives (`Button`, `Input`)
- **Framer Motion** — entrance animations + the scroll-driven word reveal
- **hls.js** — HLS background video in the CTA section
- **@fontsource/inter** + **@fontsource/instrument-serif**
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Design system

All colours live as raw HSL triplets in `src/index.css` and are mapped to
Tailwind tokens in `tailwind.config.js` (e.g. `--background: 0 0% 0%` →
`bg-background`). The signature **liquid glass** surface — a frosted panel with
a luminous inner edge — is the global `.liquid-glass` class.

The shared entrance animation is `fadeUp(delay)` in `src/lib/animations.ts`,
spread directly onto any `motion` element.

## Structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui primitives (button, input)
│   ├── icons.tsx      # concentric-circle mark + social glyphs
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SearchChanged.tsx
│   ├── Mission.tsx    # scroll-driven word-by-word reveal
│   ├── Solution.tsx
│   ├── CTA.tsx        # hls.js background video
│   └── Footer.tsx
├── lib/
│   ├── animations.ts
│   └── utils.ts       # cn()
├── assets/            # generated monochrome PNGs (see scripts/gen-assets.mjs)
├── App.tsx
├── index.css          # design tokens + liquid-glass
└── main.tsx           # font imports + mount
```

## Assets

The avatar and platform-icon PNGs are generated as crisp monochrome marks from
SVG via [`sharp`](https://sharp.pixelplumbing.com/):

```bash
node scripts/gen-assets.mjs
```
