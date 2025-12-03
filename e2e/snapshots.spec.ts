import { test, expect } from '@playwright/test';
import fs from 'fs/promises';

test('Explorer snapshots', async ({ page }) => {
  await fs.mkdir('snapshots', { recursive: true });
  // Respect CRA homepage in production build
  const base = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
  await page.goto(new URL('/', base).toString());
  await page.setViewportSize({ width: 2200, height: 1200 });
  // Navigate to Plan tab
  await page.getByRole('button', { name: 'Plan' }).click();
  await expect(page.getByRole('heading', { name: 'Cosilico Business Plan' })).toBeVisible();

  const columns = page.locator('.explorer-columns');
  await expect(columns).toBeVisible();

  await columns.screenshot({ path: 'snapshots/explorer-unselected.png' });

  // Click without search so other columns remain visible
  await page.getByText('PolicyEngine Nonprofit', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'PolicyEngine Nonprofit' })).toBeVisible();

  await columns.screenshot({ path: 'snapshots/explorer-selected.png' });
});
