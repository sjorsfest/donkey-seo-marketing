---
name: responsive-performance
description: Responsive/mobile-UX review and landing-page performance audit for this React Router v7 + Tailwind v4 site. Use when the user mentions mobile, responsive, breakpoints, layout breaking on small/large screens, page speed, Core Web Vitals (LCP/CLS/INP), font loading, image weight, or animation cost. Tailored to the project's Tailwind breakpoints, Google Fonts setup, framer-motion usage, and fixed-gradient background.
---

# Responsive UX & Landing Performance

Two related goals: the page must look and work great from 320px phones to large desktops, and it must load fast with stable layout. Read the real component/CSS before judging.

## Responsive UX

**Tailwind v4 breakpoints in use**: `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`. The hero uses `2xl:scale-120` and large `2xl:pt-64` — watch that big-screen scaling doesn't cause overflow or oversized hero on laptops at common widths.

Check per section:
- **Mobile-first ladder**: base styles target small screens, enhancements layer up (`sm:`/`md:`/`lg:`). Multi-column grids (`grid lg:grid-cols-2`) collapse cleanly to one column; order still makes sense (content before decorative mockups on mobile).
- **No horizontal scroll** at 320/360/390px. Watch `whitespace-nowrap` headlines (hero word-swap uses it — verify it fits the smallest screen), wide tables (`.docs-table` has `min-width: 760px` inside a scroll wrapper — confirm the wrapper actually scrolls), and absolutely-positioned mockups (`.absolute -right-8` ArticleMockup is correctly `hidden lg:block` — keep decorative overflow off mobile).
- **Tap targets** ≥ 44px on mobile; spacing between tappable items; CTAs full-width on mobile where the pattern already does `w-full sm:w-auto`.
- **Type scale**: fluid/responsive headline sizes (hero ladders `text-4xl … lg:text-7xl`); body stays ≥ 16px to avoid iOS zoom-on-focus. Line length capped (`max-w-xl`/`62ch`) on large screens.
- **Container & spacing**: sections use `.section-container` (`max-w-7xl` + responsive px); vertical rhythm scales down on mobile (avoid huge `pt-44`-style gaps eating the first screen on phones).
- **Sticky/fixed elements**: navbar and the `SupportWidget` don't overlap content or the first CTA on small screens; safe-area insets respected.
- **Background**: `background-attachment: fixed` is already switched to `scroll` under `max-width: 768px` in app.css (iOS perf/jank) — keep that.

## Performance (landing pages live and die on LCP/CLS)

**Fonts** ([app/root.tsx](../../../app/root.tsx) links): Fredoka + Nunito via Google Fonts with `preconnect` already set. Improve:
- Ensure `display=swap` is in the URL (it is) so text renders immediately; consider self-hosting or `<link rel="preload">` for the exact hero weight to cut LCP.
- Trim requested weight ranges to what's used (`Nunito:wght 200..1000` is huge) — fewer axes = smaller download.

**Images / mockups**: width/height (or aspect-ratio) on every `<img>` to prevent CLS; serve appropriately sized assets (R2/S3 origin per `lib/r2.server.ts`); `loading="lazy"` + `decoding="async"` on below-the-fold images; modern formats (WebP/AVIF); the hero/LCP image eager + `fetchpriority="high"`.

**Layout stability (CLS)**: reserve space for the animated hero word-swap (it already uses `min-w-[8ch]`/`min-w` — verify height too so the line doesn't jump), late-loading fonts (size-adjust/fallback metrics), and any client-only mockup that mounts after hydration.

**JS / animation cost**:
- framer-motion is client JS — keep heavy idle animations (`Float`, infinite `shine`, `pulse-glow`) off the critical path and cheap. Animate only `transform`/`opacity` (the CSS keyframes already do); avoid animating layout properties.
- Many simultaneous infinite animations (multiple `shiny-card`, floats) cost battery/CPU — confirm count is reasonable and they pause under `prefers-reduced-motion` (cross-ref `frontend-a11y`).
- `"use client"` components ship JS — verify sections that are static don't need it.

**React Router specifics**: data comes from `loader`s (e.g. `root.tsx` fetches `getAllPublishedArticles(30)` with redis cache — confirm cache TTL is sane and the call isn't oversized for what the page renders); prefer server rendering for above-the-fold; lazy-load below-the-fold/interactive islands.

## Workflow
1. Confirm scope and read the section(s)/CSS/root.tsx.
2. **Responsive**: mentally (or via `run`/`verify` skill) walk 320 / 390 / 768 / 1024 / 1440 / 1920px; note breaks with `file:line` + fix.
3. **Performance**: identify the likely LCP element, list CLS risks, fonts, images, and animation/JS cost.
4. Report findings ranked by impact: `Impact (High/Med/Low) · Effort · file:line · problem · fix`. Separate "verified in code" from "verify in browser/Lighthouse".
5. Offer to apply safe wins (font weight trimming, img dimensions/lazy, reduced-motion). Suggest a Lighthouse/PageSpeed run for real CWV numbers — don't fabricate metrics.
