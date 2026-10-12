# ADR 0003: Client-Side 360-Degree Jacket Viewer

## Status
Accepted

## Date
2026-10-12

## Context
Prospective corporate buyers need to inspect jacket silhouettes, collar constructions, rear branding zones, storm flaps, and embroidery areas from all angles before ordering 50+ units. Heavy 3D GLTF/OBJ model loaders require multi-megabyte asset payloads that cause high bounce rates on mobile network connections.

## Decision
We implemented a lightweight, high-performance dual-plane SVG and CSS 3D transform rotation engine that:
1. Supports pointer drag, touch swipe, scrub slider, and keyboard controls.
2. Dynamically calculates rotation angles ($0^\circ$ to $360^\circ$) and specular lighting intensity based on angle normals.
3. Renders dual front and rear elevations with perspective scaling, seam lines, zip hardware, and customizable embroidery swatches.
4. Includes technical hotspot pins ("Precision Embroidery Zone", "YKK Weatherproof Zipper", "Large Back Branding Zone", "Articulated Sleeves").
5. Switches colorways in real time with dynamic CSS variable tinting.

## Consequences
- Total bundle payload overhead is less than 35KB (compared to 15MB+ for WebGL textures).
- 60fps buttery-smooth rotation even on budget mobile devices.
- Zero external 3D engine CDN dependencies.
