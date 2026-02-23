# cosilico

Unified monorepo for Cosilico — website, API gateway, and shared packages.

## Structure

```
apps/
  web/        Next.js 15 (App Router) + Tailwind v4 — cosilico.ai website
  gateway/    Hono on Cloudflare Workers — API proxy at api.cosilico.ai
packages/
  ui/         Shared React components (future)
  config/     Shared Tailwind/TS config (future)
```

## Commands

```bash
# Root (Turborepo)
bun install          # Install all workspace deps
bun run dev          # Dev all apps
bun run build        # Build all apps

# Website
cd apps/web
bun run dev          # Next.js dev server (Turbopack)
bun run build        # Production build

# API Gateway
cd apps/gateway
bun run dev          # Wrangler local dev
bun run deploy       # Deploy to Cloudflare Workers
```

## Design system

- **Display font**: Instrument Serif (via next/font)
- **Body font**: DM Sans (via next/font)
- **Mono font**: JetBrains Mono (via next/font)
- **Accent**: `#00d4ff` (electric cyan)
- **Background**: `#030306` (void) → `#07070b` (bg)
- CSS tokens in `apps/web/src/app/globals.css` under `@theme`
- Font variables: `--f-display`, `--f-body`, `--f-mono`
- Color variables: `--color-*`

## Writing style

- Sentence case for all headings
- Active voice, quantitative, neutral tone

## Stack

- **Monorepo**: Turborepo + Bun workspaces
- **Website**: Next.js 15, Tailwind v4, React 19
- **Gateway**: Hono, Cloudflare Workers
- **Compute**: Modal (Python, separate repo)
- **Database**: Supabase (separate repo)
