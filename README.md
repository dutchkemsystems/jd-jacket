# JD Jackets — Custom Branded Outerwear Platform

[![CI Quality Pipeline](https://img.shields.io/badge/CI-Passing-emerald)](.github/workflows/ci.yml)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployable-black)](https://vercel.com)
[![Docker](https://img.shields.io/badge/Docker-Multi--stage-blue)](Dockerfile)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](tsconfig.json)

A production-grade, conversion-optimized marketing and procurement platform for **JD Jackets**, specializing in custom-branded outerwear for corporate businesses, field logistics, schools, and operational organizations.

---

## 🌟 Key Features

1. **Interactive 360° Jacket Viewer**:
   - Continuous mouse drag, touch swipe, keyboard arrow navigation, and auto-rotation.
   - Dual-elevation perspective rendering (Front 0° through Rear 180°).
   - Real-time colorway switching (Midnight Obsidian, Corporate Navy, Steel Graphite, Alpine Moss, High-Vis Yellow).
   - Technical inspection hotspots highlighting seam sealing, YKK reverse-coil zips, and high-density embroidery zones.

2. **Full 20-Model Outerwear Catalog**:
   - Spanning Executive Puffers, 3-Layer Technical Softshells, Heavy Weather Expedition Parkas, Varsity Heritage Bombers, and CleanShield Warmups.
   - Interactive Front/Back flip on every product card.
   - 360° inspection modal for all 20 silhouettes.

3. **Multi-Step WhatsApp Lead & Order Configurator**:
   - Step 1: Organization & Delivery Location details.
   - Step 2: Jacket Model & Mixed Sizing Breakdown (XS through XXXL) with live total unit calculation.
   - Step 3: Colors, Pantone codes, Branding method (Embroidery, 3D Silicone, Screen Print, Reflective Transfer), and placement matrix.
   - Step 4: Markdown-formatted message serialization and direct 1-click dispatch to WhatsApp (`https://wa.me/<number>?text=...`).

4. **8 Purpose-Built Industry Portals**:
   - Corporate & Office Teams
   - Logistics & Transport
   - Security & Operational Teams
   - Schools & Education
   - Tourism & Hospitality
   - Sports & Events
   - Construction, Mining & Engineering
   - Healthcare & Care Teams

5. **Anti-Slop Design Constitution**:
   - Zero-pill discipline (clean unboxed typographic metadata).
   - Strict 1-row, 3-zone Top Bar Contract.
   - 60-30-10 color allocation with WCAG 2.2 AA compliant contrast.

---

## 🛠️ Technology Stack

- **Framework**: React 19 / Vite 8 / TypeScript 7
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Animations**: Motion (`motion`)
- **Testing**: Node.js native test runner (`tsx --test`)
- **Deployment**: Vercel (static zero-database target) & Docker containerization

---

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev
```

### Running Test Suite

```bash
# Execute automated test suite (10 unit tests covering catalog, sizing, and WhatsApp serialization)
npm test
```

### Production Build

```bash
# Compile optimized static bundle
npm run build

# Preview distribution locally
npm run preview
```

---

## 🐳 Docker Containerization

Run the platform as a containerized service with multi-stage caching:

```bash
# Build and run using Docker Compose
docker compose up -d --build

# Verify container status
docker ps
```

The application will be served at `http://localhost:3000`.

---

## 🚀 Vercel Deployment

This repository is pre-configured for instant zero-configuration deployment to Vercel:

1. Import the repository into your Vercel Dashboard.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. The included `vercel.json` automatically configures clean URLs, HTTP security headers, and asset caching rules.

---

## 📑 Architecture & Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) — Comprehensive architecture description, state transitions, and component hierarchy.
- [SPECIFICATION.md](SPECIFICATION.md) — Functional and technical specification matrix.
- [CONTRIBUTING.md](CONTRIBUTING.md) — Git workflow, branch naming conventions, and PR criteria.
- [Architecture Decision Records (ADRs)](docs/adr/) — Historical decisions documenting why architecture choices were made.
