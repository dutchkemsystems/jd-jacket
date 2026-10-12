# Contributing to JD Jackets

Thank you for your interest in contributing to the **JD Jackets** platform. To ensure high code quality, accessibility adherence, and clean auditability, all contributors must follow this workflow.

---

## 🌳 Branching Model & Policy

> **CRITICAL REQUIREMENT**: Do NOT push directly to `main`. All changes must be developed on a dedicated feature or bugfix branch and merged via Pull Request.

### Branch Naming Conventions

- `feature/<ticket-or-name>` — For new capabilities (e.g., `feature/jacket-360-viewer`, `feature/order-configurator`)
- `fix/<ticket-or-name>` — For bug fixes (e.g., `fix/sizing-tally-overflow`)
- `docs/<topic>` — For architectural documentation and ADR updates (e.g., `docs/adr-static-architecture`)
- `chore/<task>` — For tooling, dependency bumps, or Docker updates

---

## 🛠️ Development & PR Lifecycle

1. **Create Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Run Tests Locally Before Committing**:
   ```bash
   npm test
   npm run lint
   npm run build
   ```
   Ensure all 10 unit tests pass and compilation succeeds with 0 errors.

3. **Commit with Conventional Commits**:
   ```bash
   git commit -m "feat(viewer): add interactive 360 rotation slider and hotspot callouts"
   ```

4. **Push Branch and Open PR**:
   ```bash
   git push origin feature/your-feature-name
   ```
   Open a Pull Request targeting `main`.

5. **PR Acceptance Criteria**:
   - Automated CI Quality Pipeline checks must pass (Typecheck, Tests, Build).
   - WCAG AA accessibility compliance verified.
   - Zero console errors or layout shift during 360 viewer interactions.
   - Code adheres to the Zero-Pill Design Discipline (unboxed metadata).
