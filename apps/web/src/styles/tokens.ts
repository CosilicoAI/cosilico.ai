/** Cosilico design tokens as JS constants — kept in sync by hand with
 * the `@theme` block in `apps/web/src/app/globals.css`. The contrast
 * test (`src/__tests__/contrast.test.ts`) iterates over `contrastPairs`
 * and asserts each one clears its declared WCAG minimum.
 *
 * If you change a hex here, change it in globals.css too — and vice
 * versa. The test fails loudly if a token edit drops below AA.
 */

export const colors = {
  // Surfaces — dark void with electric accents
  void: "#030306",
  bg: "#07070b",
  elevated: "#0d0d14",
  card: "#11111a",
  surface: "#191924",

  // Borders. `border` and `borderSubtle` are decorative hairlines
  // (1.32:1 / 1.18:1 on bg). SC 1.4.11 does not require 3:1 for purely
  // decorative rules. `borderStrong` is for *interactive* component
  // boundaries (form inputs, focusable dividers) and clears 3:1 against
  // every documented surface.
  border: "#242432",
  borderSubtle: "#1b1b28",
  borderStrong: "#6a6a80",

  // Text
  text: "#ededf2",
  textSecondary: "#b4b4c6",
  // Bumped from #6c6c84 (3.94:1 on bg, fails SC 1.4.3 4.5:1) to give
  // small-text and low-DPI displays headroom. Still reads as muted.
  textMuted: "#8a8aa8",

  // Brand and status
  cyan: "#00d4ff",
  cyanBright: "#40e8ff",
  cyanDim: "#0099bb",
  amber: "#ffaa00",
  green: "#00ff88",
  coral: "#ff4466",

  // Focus ring — same hex as cyan, but named separately so consumers
  // and tests can talk about the focus contract independently.
  focusRing: "#00d4ff",
} as const;

/** Documented WCAG contrast guarantees. Asserted in
 * `src/__tests__/contrast.test.ts`; drift fails CI. */
export type ContrastPair = {
  description: string;
  fg: string;
  bg: string;
  /** WCAG SC 1.4.3 normal-text minimum is 4.5; 1.4.11 non-text is 3.0. */
  minRatio: number;
};

export const contrastPairs: readonly ContrastPair[] = [
  // Body text on every documented surface
  {
    description: "text on bg (body text)",
    fg: colors.text,
    bg: colors.bg,
    minRatio: 4.5,
  },
  {
    description: "text on elevated",
    fg: colors.text,
    bg: colors.elevated,
    minRatio: 4.5,
  },
  {
    description: "text on card",
    fg: colors.text,
    bg: colors.card,
    minRatio: 4.5,
  },

  // Secondary text on bg (used for subhead, captions)
  {
    description: "text-secondary on bg",
    fg: colors.textSecondary,
    bg: colors.bg,
    minRatio: 4.5,
  },

  // Muted text — small text limit. Must clear AA on every surface it
  // appears on (the playground card uses text-muted on `card`).
  {
    description: "text-muted on bg",
    fg: colors.textMuted,
    bg: colors.bg,
    minRatio: 4.5,
  },
  {
    description: "text-muted on elevated",
    fg: colors.textMuted,
    bg: colors.elevated,
    minRatio: 4.5,
  },
  {
    description: "text-muted on card",
    fg: colors.textMuted,
    bg: colors.card,
    minRatio: 4.5,
  },

  // Status / brand colors used as text
  {
    description: "cyan on bg (link / brand text)",
    fg: colors.cyan,
    bg: colors.bg,
    minRatio: 4.5,
  },
  {
    description: "amber on bg (status text)",
    fg: colors.amber,
    bg: colors.bg,
    minRatio: 4.5,
  },
  {
    description: "green on bg (status text)",
    fg: colors.green,
    bg: colors.bg,
    minRatio: 4.5,
  },
  {
    description: "coral on bg (status text)",
    fg: colors.coral,
    bg: colors.bg,
    minRatio: 4.5,
  },

  // SC 1.4.11 non-text — interactive borders and focus indicators
  {
    description: "border-strong on bg (input border, SC 1.4.11)",
    fg: colors.borderStrong,
    bg: colors.bg,
    minRatio: 3,
  },
  {
    description: "border-strong on elevated (input border, SC 1.4.11)",
    fg: colors.borderStrong,
    bg: colors.elevated,
    minRatio: 3,
  },
  {
    description: "border-strong on card (input border, SC 1.4.11)",
    fg: colors.borderStrong,
    bg: colors.card,
    minRatio: 3,
  },
  {
    description: "focus-ring on bg (SC 1.4.11)",
    fg: colors.focusRing,
    bg: colors.bg,
    minRatio: 3,
  },
  {
    description: "focus-ring on elevated (SC 1.4.11)",
    fg: colors.focusRing,
    bg: colors.elevated,
    minRatio: 3,
  },
  {
    description: "focus-ring on card (SC 1.4.11)",
    fg: colors.focusRing,
    bg: colors.card,
    minRatio: 3,
  },
];
