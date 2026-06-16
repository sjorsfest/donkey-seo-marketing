---
name: frontend-a11y
description: Accessibility and motion-safety review for the landing page. Use when the user asks about accessibility, a11y, WCAG, contrast, screen readers, keyboard nav, focus states, alt text, or "reduced motion" — or proactively when adding animations or new interactive UI. This site is animation-heavy (float/wiggle/shine/pulse) and uses outlined text and translucent panels, so contrast and prefers-reduced-motion are the highest-risk areas.
---

# Frontend Accessibility & Motion Safety

Make the Donkey SEO landing page usable for everyone and safe for users sensitive to motion. Audit against WCAG 2.1 AA pragmatically; prioritize real impact over checkbox completeness. Read the actual component before flagging.

## Highest-risk areas for THIS site (check first)

**1. Reduced motion — the biggest gap.**
The site runs many continuous animations: `float`, `bounce-subtle`, `wiggle`, `pulse-glow`, `shine`/`shiny-card`, animated hero word-swap (framer-motion), `animate-pulse` on promo badges, marquee-style effects. In [app/app.css](../../../app/app.css) **only `.shiny-card` is wrapped in `@media (prefers-reduced-motion: reduce)`** — everything else keeps moving.
- Add a global guard so all decorative motion stops under reduced-motion. Pattern to add to app.css:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- For framer-motion (`FadeIn`, `Float`, hero word-swap, `motion.*`): honor `useReducedMotion()` and render the final state without animating. Check [app/components/motion/](../../../app/components/motion/) — fix the shared helpers once so every consumer benefits.
- `html { scroll-behavior: smooth }` and `element.scrollIntoView({ behavior: "smooth" })` (hero) should fall back to instant under reduced motion.

**2. Color contrast.** Verify text meets AA (4.5:1 normal, 3:1 large/UI):
- `text-foreground/80` and `text-foreground/60` over the gradient/translucent backgrounds — opacity + busy bg is the classic failure. Check the worst-case region behind each.
- Body copy or badges on `yellow-400/500` (#ffde57/#ffd641) — yellow + dark text usually passes, but white/teal text on yellow often fails.
- `.text-outline-hero` is white fill with a black outline — fine on imagery but verify against light backgrounds.
- `.glass` / `bg-white/40 backdrop-blur` panels — contrast must hold over the lightest spot they can sit on.
- Muted text `text-muted-foreground` (#3b6156) on white = OK; on teal tints = re-check.

**3. Focus visibility & keyboard.**
- Every interactive element needs a visible focus ring. `Button` has `focus-visible:ring-[3px]` — verify links, accordion triggers, the support widget, scroll-to buttons, and any custom clickable `div` do too. Never `outline: none` without a replacement.
- `onClick` scroll handlers (hero "See how it works") must be on real `<button>`/`<a>`, keyboard-activatable, and `Tab` order must be logical.
- Accordion ([ui/accordion.tsx](../../../app/components/ui/accordion.tsx)) is Radix — generally accessible; verify it isn't stripped of its ARIA.

## Standard checklist
- **Semantic HTML**: one `<h1>` per page; headings don't skip levels; `<nav>`, `<main>`, `<section>`, `<footer>` used correctly; lists are real lists.
- **Images & icons**: meaningful `<img>` have descriptive `alt`; decorative ones `alt=""`. Inline `<svg>` that convey meaning need `role="img"` + `<title>` or `aria-label`; purely decorative svg get `aria-hidden="true"` (e.g. the checkmark icons in the hero trust row).
- **Links vs buttons**: navigation = `<a>` (use `<Button asChild>`); actions = `<button>`. Link text is descriptive out of context (avoid bare "click here").
- **Forms** (signup/support/CTA): every input has an associated `<label>` (or `aria-label`); errors announced; `.input-donkey` keeps its focus ring.
- **Targets**: interactive targets ≥ 24×24px (ideally 44px on mobile). Button sizes already comfortable — check icon-only and small badges/links.
- **Landmarks & skip link**: consider a "skip to content" link for keyboard users.
- **Lang & titles**: `<html lang>` set (it is, `en`); each route has a unique, descriptive `<title>`/meta.
- **Zoom/reflow**: content reflows at 200% zoom / 320px width without loss.

## Workflow
1. Confirm scope (whole page vs. one component) and read the file(s).
2. Walk the checklist top-down; the three "highest-risk" areas first.
3. Report findings as: `Severity (Critical/Serious/Moderate/Minor) · file:line · WCAG criterion · problem · concrete fix`.
4. Offer to apply the global reduced-motion guard + framer-motion `useReducedMotion()` fixes, since those are one-time and high-leverage.
5. For contrast, give measured ratios where you can compute them from the known token hexes; otherwise flag for visual verification with the `run`/`verify` skill.
