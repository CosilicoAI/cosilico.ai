# cosilico.ai

Cosilico company website.

## After pushing changes

**Always verify Vercel deploy succeeded:**
```bash
vercel ls 2>&1 | head -5
```

If status is "Error", check build logs and fix before saying done.

CI runs with `CI=true` which treats ESLint warnings as errors. Run `bun run build` locally to catch issues before pushing.
