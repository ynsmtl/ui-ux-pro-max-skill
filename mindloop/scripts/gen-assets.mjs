/**
 * Generates the monochrome PNG assets used by the landing page.
 *   - avatar-1/2/3.png  : grayscale silhouette avatars for the "subscribers" row
 *   - icon-chatgpt.png  : abstract rosette mark
 *   - icon-perplexity.png : layered-squares mark
 *   - icon-google.png   : sparkle mark
 *
 * Run with:  node scripts/gen-assets.mjs
 */
import sharp from "sharp"
import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const outDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/assets"
)

/* ----------------------------- avatars ----------------------------- */
const avatar = (bg0, bg1, fg) => `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <defs>
    <radialGradient id="bg" cx="50%" cy="32%" r="85%">
      <stop offset="0%" stop-color="${bg0}"/>
      <stop offset="100%" stop-color="${bg1}"/>
    </radialGradient>
    <clipPath id="clip"><circle cx="64" cy="64" r="64"/></clipPath>
  </defs>
  <circle cx="64" cy="64" r="64" fill="url(#bg)"/>
  <g clip-path="url(#clip)" fill="${fg}">
    <circle cx="64" cy="52" r="21"/>
    <ellipse cx="64" cy="118" rx="42" ry="46"/>
  </g>
</svg>`

/* --------------------------- platform icons ------------------------ */
const card = (inner) => `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect x="24" y="24" width="352" height="352" rx="86" fill="#0c0c0c"/>
  <rect x="24.75" y="24.75" width="350.5" height="350.5" rx="85"
        fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.5"/>
  ${inner}
</svg>`

const rosette = `
  <g fill="none" stroke="#ffffff" stroke-width="12" stroke-linejoin="round">
    <ellipse cx="200" cy="200" rx="58" ry="120"/>
    <ellipse cx="200" cy="200" rx="58" ry="120" transform="rotate(60 200 200)"/>
    <ellipse cx="200" cy="200" rx="58" ry="120" transform="rotate(120 200 200)"/>
  </g>`

const squares = `
  <g fill="none" stroke="#ffffff" stroke-width="12" stroke-linejoin="round">
    <rect x="124" y="124" width="152" height="152" rx="16"/>
    <rect x="124" y="124" width="152" height="152" rx="16" transform="rotate(45 200 200)"/>
  </g>
  <line x1="200" y1="96" x2="200" y2="304" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>`

const sparkle = `
  <path d="M200 60 C212 140, 260 188, 340 200 C260 212, 212 260, 200 340 C188 260, 140 212, 60 200 C140 188, 188 140, 200 60 Z" fill="#ffffff"/>
  <path d="M310 86 C313.5 106, 322 114.5, 342 118 C322 121.5, 313.5 130, 310 150 C306.5 130, 298 121.5, 278 118 C298 114.5, 306.5 106, 310 86 Z" fill="#ffffff" opacity="0.85"/>`

const assets = {
  "avatar-1.png": avatar("#2c2c2c", "#0d0d0d", "rgba(237,237,237,0.92)"),
  "avatar-2.png": avatar("#3a3a3a", "#121212", "rgba(255,255,255,0.88)"),
  "avatar-3.png": avatar("#232323", "#090909", "rgba(214,214,214,0.9)"),
  "icon-chatgpt.png": card(rosette),
  "icon-perplexity.png": card(squares),
  "icon-google.png": card(sparkle),
}

await mkdir(outDir, { recursive: true })
for (const [name, svg] of Object.entries(assets)) {
  await sharp(Buffer.from(svg)).png().toFile(path.join(outDir, name))
  console.log("wrote", path.relative(process.cwd(), path.join(outDir, name)))
}
