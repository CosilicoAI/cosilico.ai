import { test, expect } from '@playwright/test';
import fs from 'fs/promises';

test('Home page snapshot', async ({ page }) => {
  await fs.mkdir('snapshots', { recursive: true });
  const base = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
  await page.goto(new URL('/', base).toString());
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Verify home page loads
  await expect(page.getByRole('heading', { name: /Simulate Society/i })).toBeVisible();

  // Take snapshot
  await page.screenshot({ path: 'snapshots/home-page.png', fullPage: true });
});

test('Plan page snapshot', async ({ page }) => {
  await fs.mkdir('snapshots', { recursive: true });
  const base = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
  await page.goto(new URL('/', base).toString());
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate to Plan tab
  await page.getByRole('button', { name: 'Plan' }).click();
  await expect(page.getByRole('heading', { name: 'Business Plan' })).toBeVisible();

  // Take snapshot
  await page.screenshot({ path: 'snapshots/plan-page.png', fullPage: true });
});
