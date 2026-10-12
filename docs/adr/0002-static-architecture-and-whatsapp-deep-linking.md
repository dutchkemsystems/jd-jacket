# ADR 0002: Static Architecture and WhatsApp Deep Linking

## Status
Accepted

## Date
2026-10-12

## Context
Custom corporate jacket purchasing in B2B environments typically requires customized vector proof reviews, color matching, size distribution adjustments, and payment terms (50% deposit, LPO, or wire transfer). Traditional self-checkout e-commerce carts with standard credit card processing cause high friction and abandonment for multi-unit corporate orders ($1,000–$25,000+).

## Decision
1. Maintain a 100% static client-side architecture (Next.js / Vite SPA) deployable anywhere (Vercel, Cloud Run, Docker, AWS S3/CloudFront) with zero database operational cost and zero downtime risk.
2. Implement an interactive client-side 4-step order configurator that collects organization name, industry, mixed sizes (XS–XXXL), jacket model, pantone codes, embroidery methods, and delivery timeline.
3. Automatically serialize the brief into a structured markdown WhatsApp payload dispatched via `wa.me/<phone>?text=<encoded_msg>`, allowing corporate buyers to directly attach vector logo files and discuss terms with the production desk in real time.

## Consequences
- **Positive**: Zero backend hosting cost, zero database vulnerabilities, near-instant load times (<0.5s), immediate conversion to high-touch B2B sales conversations.
- **Positive**: B2B buyers can immediately attach large vector `.ai` and `.eps` files without complex server upload quotas.
- **Negative**: Relies on WhatsApp as the communication medium (addressed by offering instant copy-to-clipboard and contact email fallbacks).
