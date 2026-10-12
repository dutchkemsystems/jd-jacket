# ADR 0004: Design System and Anti-Slop Discipline

## Status
Accepted

## Date
2026-10-12

## Context
Commercial web design frequently falls victim to generic templates, arbitrary floating stat capsules, garish purple gradients, and mechanical code comment clutter that signal automated low-effort development. B2B corporate apparel buyers evaluate credibility based on restraint, typographic balance, and domain authenticity.

## Decision
Enforce the following design constitution across the frontend codebase:
1. **Zero-Pill Discipline**: Metadata is rendered as clean unboxed text separated by typographic glyphs (`·`, `/`), reserving rounded pills strictly for functional interactive buttons.
2. **Top Bar Contract**: Strict 1-row, 3-zone structure (Single-line wordmark, 4–5 single-line nav links, 1 primary action button).
3. **60-30-10 Color Discipline**: 60% deep obsidian/neutral canvas, 30% structural surface, 10% high-intent amber accent.
4. **Typographic Pairings**: Plus Jakarta Sans display & body paired with monospace tabular numerals for metrics and size matrices.
5. **Real Photography & Vector Fallbacks**: Commercial photography assets generated and stored locally, paired with resilient SVG fallback states.

## Consequences
- Elevates perceived brand value and commercial trust for corporate procurement teams.
- Assures compliance with WCAG AA accessibility standards.
