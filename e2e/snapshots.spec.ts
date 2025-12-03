import { test, expect } from '@playwright/test';
import fs from 'fs/promises';

test('Homepage snapshot', async ({ page }) => {
  await fs.mkdir('snapshots', { recursive: true });
  const base = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
  await page.goto(new URL('/', base).toString());
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Verify home page loads
  await expect(page.getByText('Society, in silico.')).toBeVisible();

  // Take snapshot
  await page.screenshot({ path: 'snapshots/homepage.png', fullPage: true });
});

test('Mobile homepage snapshot', async ({ page }) => {
  await fs.mkdir('snapshots', { recursive: true });
  const base = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
  await page.goto(new URL('/', base).toString());
  await page.setViewportSize({ width: 375, height: 812 });

  // Verify home page loads
  await expect(page.getByText('Society, in silico.')).toBeVisible();

  // Take snapshot
  await page.screenshot({ path: 'snapshots/homepage-mobile.png', fullPage: true });
});
