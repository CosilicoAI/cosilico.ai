# Repository Guidelines

## Issue Tracking with bd (beads)

**IMPORTANT**: This project uses **bd (beads)** for ALL issue tracking. Do NOT use markdown TODOs, task lists, or other tracking methods.

### Quick Start

```bash
bd ready --json              # Check for ready work
bd create "Title" -t task -p 2 --json   # Create issue
bd update bd-123 --status in_progress --json  # Claim work
bd close bd-123 --reason "Done" --json  # Complete work
```

### Workflow for AI Agents

1. **Check ready work**: `bd ready` shows unblocked issues
2. **Claim your task**: `bd update <id> --status in_progress`
3. **Work on it**: Implement, test, document
4. **Discover new work?** Create linked issue with `discovered-from`
5. **Complete**: `bd close <id> --reason "Done"`
6. **Commit together**: Always commit `.beads/issues.jsonl` with code changes

### Important Rules

- Use bd for ALL task tracking
- Always use `--json` flag for programmatic use
- Check `bd ready` before asking "what should I work on?"
- Do NOT create markdown TODO lists

---

## Project Structure & Module Organization
- `src/`: TypeScript React app source.
  - `App.tsx`: Landing page sections and layout.
  - `index.tsx`: App entry and React Router v7 routes.
  - `components/`: Reusable UI (e.g., `Logo.tsx`).
  - `pages/`: Routeable views (e.g., `Rubric.tsx`).
  - `styles/`: Page-specific styles (e.g., `Rubric.css`).
  - `App.css`, `index.css`: Global styles.
- `public/`: Static assets served as-is (images, favicon).
- Tests live next to code as `*.test.tsx` (see `src/App.test.tsx`).

## Build, Test, and Development Commands
- `npm start`: Runs the dev server with hot reload.
- `npm run build`: Produces a production build in `build/`.
- `npm test`: Runs Jest in watch mode (Testing Library + jest-dom).
- `npm run eject`: Ejects CRA config (avoid unless necessary).

## Coding Style & Naming Conventions
- Language: TypeScript (strict mode enabled in `tsconfig.json`).
- Indentation: 2 spaces; keep lines concise.
- Components: PascalCase (`MyComponent.tsx`); props/interfaces PascalCase.
- Variables/functions: camelCase; constants UPPER_SNAKE_CASE when appropriate.
- Files: React components use `.tsx`; utilities can use `.ts`.
- CSS: Keep global styles in `App.css`/`index.css`; page-specific in `styles/`.
- Linting: CRA eslint config (`react-app`, `react-app/jest`) is enforced.

## Testing Guidelines
- Frameworks: Jest + React Testing Library (`@testing-library/*`).
- Location: Co-locate tests as `*.test.tsx` next to components/pages.
- Style: Test behavior and accessible queries (e.g., `screen.getByText`).
- Commands: `npm test` (watch), `npm test -- --coverage` (report).
- Aim to cover critical paths in `App.tsx`, routes in `index.tsx`, and shared components.

## Commit & Pull Request Guidelines
- Commits: Use concise, imperative messages (e.g., `Add business plan page`, `Fix marquee speed`). Group related changes.
- PRs: Include purpose/summary, linked issues, screenshots for UI changes, and test instructions. Keep diffs focused and pass `npm test`.

## Routing & Pages
- Router: React Router v7 configured in `src/index.tsx`.
- Add a page: create `src/pages/BusinessPlan.tsx`, then register a route:
  `// index.tsx
   <Route path="/business-plan" element={<BusinessPlan />} />`
- Link from nav/footer using standard `<a>` or `<Link>`.

## Security & Configuration Tips
- Do not commit secrets. CRA only exposes env vars prefixed with `REACT_APP_`.
- For static hosting, ensure unknown routes fall back to `index.html` (required for `BrowserRouter`).
