---
name: landing-cro-audit
description: Conversion-rate (CRO) and UX heuristic audit of a landing page or a single section. Use when the user wants to "optimize", "improve conversions", "review the landing page / hero / pricing / CTA", get UX feedback, reduce friction, or sharpen the value proposition and messaging. Produces prioritized, specific findings with concrete edits — not generic advice.
---

# Landing Page CRO & UX Audit

Goal: turn a vague "make it convert better" into a **prioritized list of specific, defensible changes** the user can ship today. Be concrete (quote the actual copy/component and give the replacement), ground every claim in a heuristic, and rank by expected impact vs. effort.

This is **Donkey SEO** — an AI tool that turns search opportunities into publish-ready SEO pages, aimed at **solo founders, indie builders, and lean SaaS teams**. The free hook is "3 SEO pages on us / lifetime free, no credit card." Keep findings aligned to that ICP and offer.

## Scope first
Ask (or infer from the request) whether to audit the **whole page** ([app/routes/home.tsx](../../../app/routes/home.tsx) + its sections) or **one section** in [app/components/sections/](../../../app/components/sections/) — hero, features, how-it-works, pricing, faq, final-cta, page-types, smart-linking, discovery-pipeline. Read the actual file(s) before judging; never critique from memory.

## Audit dimensions (run through each, skip what doesn't apply)

**1. Value proposition & clarity (above the fold)**
- Can a first-time visitor answer "what is this, who's it for, why care" in ~5 seconds? Quote the current H1/subhead.
- Is the headline outcome-focused (leads/traffic/revenue) vs. feature-focused? Is jargon explained?
- Is the ICP named explicitly and early?

**2. CTA strategy**
- One unmistakable **primary** action per viewport; secondary CTAs visually subordinate (the `gradient`/`default` Button vs. `secondary`/`ghost`). Flag competing equal-weight CTAs.
- Action-oriented, specific labels ("Start free • 3 SEO pages on us" > "Submit"/"Learn more").
- Is the CTA repeated at natural decision points (after hero, after value sections, final-cta)? Is risk reduced next to it (no credit card, free tier)?

**3. Social proof & trust**
- Logos, testimonials, counts, ratings, case results, security/credibility cues. Note absence — for an unknown SaaS this is often the #1 conversion gap. Suggest the lightest credible proof available.
- Trust near the CTA and near pricing specifically.

**4. Friction & objections**
- Form fields, signup steps, pricing ambiguity, unanswered objections. Does the FAQ pre-empt the real blockers (cost, lock-in, quality of AI output, time-to-value)?
- Cognitive load: walls of text, too many choices, unclear next step.

**5. Information hierarchy & scannability**
- Logical narrative: hook → problem → how it works → proof → pricing → final CTA. Flag missing/duplicate/out-of-order beats.
- Scannable: short paragraphs, descriptive subheads, benefit-led bullets, visual breaks. One idea per section.

**6. Copy quality**
- Benefits over features (tie each feature to a founder outcome). Concrete over vague ("ranks page one" > "improves SEO"). Active voice. Cut filler. Consistent voice (confident, founder-to-founder, a little playful — matches the brand).

**7. Pricing (if in scope)**
- Anchor + recommended plan highlighted, value framed before price, plan differences scannable, annual/monthly clarity, money-back/free-tier risk reversal.

**8. Visual conversion cues**
- Directional cues toward CTA, whitespace, contrast making the primary action pop, mockups/visuals that show the product's value (the dashboard/article mockups). Consistency with the `design-system` skill.

## Output format
Produce a ranked table, highest impact first:

```
### Finding N — <short title>   [Impact: High/Med/Low · Effort: S/M/L]
Where: <file:line or section>
Heuristic: <which dimension above>
Problem: <what's wrong, quoting the current copy/markup>
Recommendation: <specific change — give the exact replacement copy or component change>
```

Then a short **"Ship first"** shortlist (the 3–5 highest impact / lowest effort wins).

Rules: be specific and quote the real content; give replacement copy, not "consider improving"; don't invent metrics or fake testimonials; mark anything that needs A/B validation as a hypothesis; respect the existing visual system (pair with `design-system` when proposing markup). If the user wants, offer to apply the top fixes directly.
