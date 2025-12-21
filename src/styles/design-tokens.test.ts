/**
 * Design Token Tests
 *
 * Verifies that the design system is properly enforced:
 * 1. All page stylesheets use global font tokens (not hardcoded fonts)
 * 2. Stylelint catches violations
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

describe('Design System - Font Tokens', () => {
  // process.cwd() is the project root when running tests
  const projectRoot = process.cwd();
  const stylesDir = path.join(projectRoot, 'src/styles');

  // Get all CSS files in src/styles (excluding _tokens.css)
  const cssFiles = fs.readdirSync(stylesDir)
    .filter(f => f.endsWith('.css') && !f.startsWith('_'));

  test('stylelint is configured to enforce font-family tokens', () => {
    const configPath = path.join(projectRoot, '.stylelintrc.json');
    expect(fs.existsSync(configPath)).toBe(true);

    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    expect(config.rules['scale-unlimited/declaration-strict-value']).toBeDefined();
  });

  test('all page stylesheets pass stylelint font-family check', () => {
    // This will throw if there are violations
    try {
      execSync('npm run lint:css', {
        cwd: projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      });
    } catch (error: any) {
      // If stylelint fails, show what's wrong
      throw new Error(`Stylelint found font-family violations:\n${error.stdout || error.stderr}`);
    }
  });

  test('page stylesheets reference global font tokens, not hardcoded fonts', () => {
    const hardcodedFontPatterns = [
      /font-family:\s*['"]?(?!var\(--)(IBM Plex|Space Grotesk|DM Sans|Poppins|Arial|Helvetica)/i,
    ];

    for (const file of cssFiles) {
      const content = fs.readFileSync(path.join(stylesDir, file), 'utf-8');

      for (const pattern of hardcodedFontPatterns) {
        const match = content.match(pattern);
        if (match) {
          throw new Error(`${file} contains hardcoded font: ${match[0]}. Use var(--font-display), var(--font-body), or var(--font-mono) instead.`);
        }
      }
    }
  });

  test('_tokens.css documentation file exists', () => {
    const tokensPath = path.join(stylesDir, '_tokens.css');
    expect(fs.existsSync(tokensPath)).toBe(true);
  });
});
