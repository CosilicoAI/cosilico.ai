import { test, expect } from '@playwright/test';

test.describe('Cosilico homepage', () => {
  test('loads and displays key content', async ({ page }) => {
    await page.goto('/');

    // Hero
    await expect(page.getByText('Society, in silico.')).toBeVisible();
    await expect(page.getByRole('heading', { name: /We simulate/i })).toBeVisible();

    // Products section
    await expect(page.getByRole('heading', { name: 'Five APIs. One simulation.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Rules' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Data' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Scenarios' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Full profile' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Law archive' })).toBeVisible();

    // Screenshot
    const image = await page.screenshot({ fullPage: true });
    await test.info().attach('homepage', { body: image, contentType: 'image/png' });
  });

  test('demo interaction works', async ({ page }) => {
    await page.goto('/');

    // Find demo input and button
    const input = page.getByPlaceholder('Ask the simulation...');
    const button = page.getByRole('button', { name: 'Query' });

    await expect(input).toBeVisible();
    await expect(button).toBeVisible();

    // Click query button
    await button.click();

    // Results should appear
    await expect(page.getByText('10-year cost', { exact: true })).toBeVisible();
    await expect(page.getByText('households affected', { exact: true })).toBeVisible();
  });
});
