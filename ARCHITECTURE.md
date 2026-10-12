# System Architecture: JD Jackets Web Platform

## 1. High-Level Architecture Overview

The JD Jackets platform operates as a high-performance, single-page application (SPA) with zero persistent server-side database requirements. All product configurations, sizing tallies, color tinting matrices, and lead generation messaging are handled client-side before being dispatched via WhatsApp deep links.

```
+-------------------------------------------------------------------------+
|                                CLIENT BROWSER                           |
|                                                                         |
|  +--------------------+   +---------------------+   +----------------+  |
|  |  Hero 360° Viewer  |   | 20-Model Outerwear  |   | Industry Grid  |  |
|  |  Interactive Canvas|   | Catalog & Filters   |   | Solutions (8)  |  |
|  +--------------------+   +---------------------+   +----------------+  |
|             \                       |                       /           |
|              \                      |                      /            |
|               v                     v                     v             |
|          +----------------------------------------------------+         |
|          |         Multi-Step Order Brief Configurator        |         |
|          |   - Size matrix calculation (XS–XXXL)              |         |
|          |   - MOQ validation & tolerance checks              |         |
|          |   - Artwork & placement serialization              |         |
|          +----------------------------------------------------+         |
|                                     |                                   |
|                                     v                                   |
|                     +-------------------------------+                   |
|                     | WhatsApp Message Serialization|                   |
|                     | (`src/utils/whatsapp.ts`)     |                   |
|                     +-------------------------------+                   |
+-------------------------------------|-----------------------------------+
                                      |
                                      v
          +----------------------------------------------------+
          |       WhatsApp Web / Mobile App (wa.me Deep Link)   |
          |       - Direct handoff to B2B Production Desk      |
          |       - High-res vector attachments (AI, EPS, PDF) |
          +----------------------------------------------------+
```

## 2. Component Hierarchy

- `App.tsx` (Root orchestration, modal mount points, state coordination)
  - `Navbar.tsx` (Top Bar Contract: 3 zones, single-line links, primary CTA)
  - `HeroSection.tsx` (Marketing proposition, headline, proof indicators)
    - `Jacket360Viewer.tsx` (Standalone hero 360 viewer instance)
  - `CorporateProSection.tsx` (JD Corporate Pro™ flagship breakdown)
  - `IndustriesSection.tsx` (8 sector cards with direct catalog filtration)
  - `WhyChooseSection.tsx` (4 quantitative value pillars)
  - `CustomizationSection.tsx` (Fabric grades, embroidery vs silicone, modal triggers)
  - `HowItWorksSection.tsx` (5 sequential fulfillment steps)
  - `WhoWeServeSection.tsx` (Editorial organization badges & photography)
  - `JacketGallerySection.tsx` (20 jacket styles with front/back flip & 360 inspect modal)
  - `FaqSection.tsx` (9 collapsible domain accordions)
  - `FinalCtaSection.tsx` (Dual-channel conversion: Configurator or Direct WhatsApp)
  - `Footer.tsx` (Clean quiet footer with navigation and procurement info)
  - `OrderFormModal.tsx` (4-step order briefing wizard)
  - `CatalogueModal.tsx` (Customization system technical reference sheet)

## 3. Data Integrity & Security

- Zero PII stored in local browser persistence or insecure third-party analytics.
- Order payloads are encoded using standard URI component encoding directly in memory.
- All SVG paths, inputs, and attributes are sanitized against XSS attacks.
- Content Security Policy (CSP) headers applied via `vercel.json`.
