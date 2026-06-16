---
name: design-system
description: Donkey SEO design-system reference and guardrails. Use BEFORE writing or editing any landing-page UI (sections, cards, buttons, badges, mockups) so the neo-brutalist look stays consistent — hard #1a1a1a borders, offset box-shadows, outline headlines, yellow/teal palette, Fredoka/Nunito fonts. Use whenever the task touches app/components, app/app.css, or any .tsx that renders visible markup.
---

# Donkey SEO Design System

A playful **neo-brutalist** marketing site: thick black outlines, hard offset shadows (no blur), outlined headlines, a yellow + teal palette, and bouncy micro-interactions. Reuse the existing primitives and tokens — do **not** invent new colors, shadows, or border treatments.

## Where things live
- Tokens, keyframes, utility classes: [app/app.css](../../../app/app.css) (`@theme` block + `@layer base` + utilities)
- UI primitives: [app/components/ui/](../../../app/components/ui/) — `button.tsx`, `card.tsx`, `badge.tsx`, `accordion.tsx`
- Landing sections: [app/components/sections/](../../../app/components/sections/) — hero, features, pricing, faq, how-it-works, etc.
- Layout: [app/components/layout/](../../../app/components/layout/) — `navbar.tsx`, `footer.tsx`
- Motion helpers: [app/components/motion/](../../../app/components/motion/) — `FadeIn`, `Float`
- Class merge helper: `cn()` from [app/lib/utils.ts](../../../app/lib/utils.ts) — always use it when composing className strings.

Tailwind is **v4, config-in-CSS** (`@import "tailwindcss"` + `@theme`). There is no `tailwind.config.js`. Add new tokens to the `@theme` block in `app.css`.

## Core rules (read before generating UI)
1. **Reuse primitives first.** Need a button → `<Button>`. A card → `<Card>`. A pill/tag → `<Badge>`. Only drop to raw markup when no variant fits, and then mirror the same border+shadow recipe.
2. **The signature recipe** for any raised surface: `border-2 border-outline` (or `border-[3px]` for XL) + an offset shadow `shadow-[4px_4px_0_#1a1a1a]`. Press/hover states shrink the shadow and nudge the element toward it (see Button). Never use soft `shadow-md`/`shadow-lg` blurred shadows on branded surfaces.
3. **Headlines** use `font-display` (Fredoka) and are bold. Hero/feature headlines get an outline via `.text-outline`, `.text-outline-lg`, or `.text-outline-hero`. Body copy uses `font-body` (Nunito), already the default.
4. **Color** comes from tokens, never raw hex in JSX (except where the codebase already does, e.g. shadow color `#1a1a1a`). Primary = `yellow-500` (#ffd641). Secondary/background accents = teal scale. Text = `text-foreground` (#0f3d3e) / `text-muted-foreground` (#3b6156).
5. **Spacing/containers**: wrap section content in `.section-container` (`max-w-7xl` + responsive padding). Default radius is `rounded-2xl` (--radius = 1rem).
6. **Respect motion preferences** — see the `frontend-a11y` skill before adding new animations.

## Tokens (from `@theme` in app.css)
- **Fonts**: `--font-display` Fredoka, `--font-body` Nunito (default). Use `font-display` / `font-body`.
- **Yellow (primary)**: `yellow-100 #fff9e1` → `yellow-500 #ffd641` (brand) → `yellow-950 #4d4114`.
- **Teal (secondary/bg)**: `teal-50 #f0f9f6` → `teal-400 #70ac96` → `teal-900 #0f3d3e` → `teal-950 #081f20`.
- **Semantic**: `foreground #0f3d3e`, `muted-foreground #3b6156`, `card #ffffff`, `border #e5e7eb`, `outline #1a1a1a` (the black used for all borders/shadows), `primary #ffd641`, `secondary/accent #86c4ad`, `destructive #ef4444`.
- **Radius**: `--radius: 1rem`; scale `radius-sm … radius-4xl`.
- The page background is a fixed multi-radial-gradient on `body` (yellow + teal + white blooms). Don't paint full-bleed opaque section backgrounds that fight it — prefer `bg-white`, `bg-white/40 backdrop-blur-sm` (`.glass`), or translucent panels.

## Utility classes (defined in app.css — prefer these over re-deriving)
| Class | Use |
|---|---|
| `.card-shadow` / `.card-shadow-lg` / `.card-shadow-xl` | border + offset shadow (4/6/8px). Raw-markup equivalent of the Card recipe. |
| `.text-outline` / `.text-outline-lg` / `.text-outline-hero` | black text-shadow outline for headlines (hero variant forces white fill). |
| `.hover-lift` | translateY + scale on hover, presses on active. |
| `.btn-scale` | scale up on hover, down on active. |
| `.shiny-card` (+ `.shine-delay-1..8`) | animated diagonal sheen overlay; stagger multiples with delay classes. |
| `.pulse-glow` | pulsing yellow glow box-shadow. |
| `.gradient-text` | yellow gradient clipped to text. |
| `.glass` | translucent white + backdrop blur. |
| `.input-donkey` | branded input (inset shadow, yellow focus ring). |
| `.section-container` | `mx-auto max-w-7xl` + responsive px. |
| `.animate-float` / `.animate-bounce-subtle` / `.animate-wiggle` / `.animate-pop` | named keyframe animations. |
| `.delay-100..500` | staggered `animation-delay` for entrance sequences. |

## Primitive APIs (don't reimplement)
- **Button** (`~/components/ui/button`) — `variant`: `default` (yellow), `secondary` (white), `outline`, `ghost`, `link`, `gradient`. `size`: `sm | default | lg | xl | icon | icon-sm | icon-lg`. Use `asChild` to render an `<a>` (e.g. CTA links). Hover/active shadow-press is built in.
- **Card** (`~/components/ui/card`) — `variant`: `default | elevated | shiny | ghost | outline`; `hover` boolean for lift. Subcomponents: `CardHeader`, `CardTitle` (font-display), `CardDescription`, `CardContent`, `CardAction`, `CardFooter`.
- **Badge** (`~/components/ui/badge`) — `variant`: `default | secondary | outline | success | warning | promo | teal`; `size`: `sm | default | lg`. Pill shape, supports a leading `<svg>`.
- **Motion** — `<FadeIn direction="up|down|left|right" duration delay>` for entrances, `<Float y duration rotate>` for idle hover-bob. Both wrap `framer-motion`. Prefer these over hand-rolled `motion.div`.

## Workflow when building/editing UI
1. Identify the nearest existing section/primitive and read it for the live pattern.
2. Compose with `<Button>/<Card>/<Badge>` + tokens + utility classes. Merge classes with `cn()`.
3. Match the surrounding section's rhythm: `.section-container`, `font-display` headings, `text-foreground/80` body, `gap`/`space-y` spacing seen in siblings.
4. For new motion, reach for `FadeIn`/`Float` and guard with reduced-motion (`frontend-a11y`).
5. Quick self-check before finishing: borders are `border-outline`, shadows are hard `#1a1a1a` offsets, no stray blurred shadows, no raw hex colors, headings use Fredoka. Then verify visually with the `run` or `verify` skill.
