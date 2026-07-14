# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build static site to /build
npm run preview      # Preview production build locally
npm run check        # SvelteKit sync + Svelte type checking
npm run check:watch  # Type checking in watch mode
npm run lint         # Check formatting + lint (Prettier + ESLint)
npm run format       # Auto-fix formatting with Prettier
```

There are no tests in this project.

## Architecture

**SvelteKit static site** — pre-rendered at build time via `@sveltejs/adapter-static`. No server runtime; output is plain HTML/CSS/JS in `/build`.

### Source layout

- `src/routes/` — single route (`+page.svelte`) imports all section components; `+layout.ts` enables prerendering
- `src/lib/components/sections/` — one component per homepage section (Hero, About, Services, Projects, Stack, Contact)
- `src/lib/components/layout/` — Header and Footer
- `src/lib/components/ui/` — reusable primitives (Badge, SectionHeader, TerminalBox)
- `src/lib/data/` — typed TypeScript data files (projects.ts, services.ts, stack.ts)
- `src/lib/utils/observe.ts` — Intersection Observer utility for scroll-triggered CSS animations
- `src/lib/console/sxsConsole.ts` — browser console easter egg with commands: `help()`, `about()`, `services()`, etc.
- `src/app.css` — entire design system as CSS custom properties (no CSS frameworks)

### Design system

- Dark terminal aesthetic; palette defined as CSS custom properties in `app.css`
- Typography: JetBrains Mono (monospace), Mr Dafoe (display)
- Max content width: 1100px
- Formatting: tabs, single quotes, `printWidth: 100` (see `.prettierrc`)
