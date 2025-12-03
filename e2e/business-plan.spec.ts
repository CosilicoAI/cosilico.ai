import { test, expect } from '@playwright/test';

test.describe('Business Plan page', () => {
  test('loads and displays market opportunity', async ({ page }) => {
    await page.goto('/');
    // Navigate to Plan tab
    await page.getByRole('button', { name: 'Plan' }).click();
    await expect(page.getByRole('heading', { name: 'Business Plan' })).toBeVisible();

    // Verify market opportunity section exists
    await expect(page.getByRole('heading', { name: 'Market Opportunity' })).toBeVisible();

    // Verify at least one market card is visible
    await expect(page.getByRole('heading', { name: 'Tax Software', exact: true })).toBeVisible();

    // Save a screenshot as test attachment
    const image = await page.screenshot({ fullPage: true });
    await test.info().attach('business-plan', { body: image, contentType: 'image/png' });
  });
});
