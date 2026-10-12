# Technical & Product Specification: JD Jackets

## 1. Product Brief & Business Requirements

| ID | Feature | Specification Description | Fulfillment Status |
|---|---|---|---|
| **REQ-01** | Hero Section | Headline, subheadline, proof bullets, "Find your industry" CTA, 360° showcase | Complete |
| **REQ-02** | Corporate Pro™ | "Your company. Your identity." + Executive Puffer showcase + Unboxed tags | Complete |
| **REQ-03** | Industries Grid | 8 dedicated industry cards with dedicated copy and jacket recommendations | Complete |
| **REQ-04** | Value Pillars | 4 cards: Professional appearance, Team identity, Brand visibility, Staff branding | Complete |
| **REQ-05** | Customization | "Customize your jacket" + Links to original catalogue & full brief | Complete |
| **REQ-06** | How It Works | 5 sequential steps from industry choice to quote approval and production | Complete |
| **REQ-07** | Who We Serve | Headline, descriptive body, and 12-item organization tag list | Complete |
| **REQ-08** | Jacket Gallery | 20 front-and-back jacket styles with rotation/flip, filters, and CTA | Complete |
| **REQ-09** | FAQ Section | 9 collapsible accordions addressing branding, sizing, MOQ, turnaround | Complete |
| **REQ-10** | Final CTA | Headline, subtext, direct WhatsApp button | Complete |
| **REQ-11** | Order Configurator | Multi-step brief with size breakdown (XS–XXXL) & serialized WhatsApp handoff | Complete |
| **REQ-12** | 360 Viewer | Smooth pointer drag, touch swipe, angle scrub, dual elevations, colorway picker | Complete |
| **REQ-13** | CI/CD Infrastructure | GitHub Actions for linting, testing, bundle verification, and Vercel deploy | Complete |
| **REQ-14** | Containerization | Multi-stage Dockerfile and docker-compose.yml | Complete |
| **REQ-15** | ADR Records | Architecture Decision Records covering static architecture, 360 viewer, design system | Complete |

## 2. Size Tolerance Matrix

The platform encodes standardized size charts across 7 bins:

- **XS**: Chest 34–36" (86–91 cm), Length 67 cm, Sleeve 63 cm
- **S**: Chest 36–38" (91–97 cm), Length 69 cm, Sleeve 64 cm
- **M**: Chest 38–40" (97–102 cm), Length 72 cm, Sleeve 66 cm
- **L**: Chest 40–42" (102–107 cm), Length 74 cm, Sleeve 67 cm
- **XL**: Chest 42–44" (107–112 cm), Length 76 cm, Sleeve 69 cm
- **XXL**: Chest 44–46" (112–117 cm), Length 78 cm, Sleeve 70 cm
- **XXXL**: Chest 46–48" (117–122 cm), Length 80 cm, Sleeve 71 cm

## 3. Communication Protocols

- **Protocol**: WhatsApp Click-to-Chat protocol (`https://wa.me/<phone>?text=<encoded_payload>`)
- **Character Encoding**: RFC 3986 Standard URI Component Encoding
- **Clipboard Fallback**: Async Clipboard API with visual success confirmation
