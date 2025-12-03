import { test, expect } from '@playwright/test';
import fs from 'fs';

test.describe('Business Plan interactive explorer', () => {
  test('loads and can search/select nodes', async ({ page }) => {
    await page.goto('/business-plan');
    await expect(page.getByRole('heading', { name: 'Cosilico Business Plan' })).toBeVisible();

    await page.getByPlaceholder('Search nodes').fill('PolicyEngine');
    // Click the PolicyEngine node
    await page.getByText('PolicyEngine Nonprofit', { exact: true }).click();

    // Aside shows selected node
    await expect(page.getByRole('heading', { name: 'PolicyEngine Nonprofit' })).toBeVisible();

    // Read-only view: verify status badge shows validated
    await expect(page.locator('.badge', { hasText: /validated/i })).toBeVisible();

    // Save a screenshot as test attachment (view in HTML report)
    const image = await page.screenshot({ fullPage: true });
    await test.info().attach('business-plan', { body: image, contentType: 'image/png' });
  });
});
