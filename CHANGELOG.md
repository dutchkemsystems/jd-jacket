# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- ESLint flat config and Prettier formatting with lint/format scripts
- Test coverage reporting via c8 with configurable thresholds
- Dependabot configuration for npm and GitHub Actions
- Structured logger for server-side diagnostics

### Changed
- Pinned TypeScript to 5.x for compatibility with the ESLint tooling ecosystem

### Fixed
- Documented `DISABLE_HMR` environment variable in `.env.example`

## [0.1.0] - 2026-10-13

### Added
- Initial release: JD Jacket marketing site and order configurator
- React + TypeScript + Vite frontend
- WhatsApp deep-link order flow
- Test suite covering catalog integrity, sizing math, WhatsApp URL formatting
- CI workflow (typecheck, test, build on Node 20.x/22.x matrix)
