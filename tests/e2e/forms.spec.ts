import { test, expect } from '@playwright/test';

test.describe('Forms', () => {
  test('checkbox interaction', async ({ page }) => {
    await page.goto('/checkboxes');

    const checkbox = page.locator('input[type="checkbox"]').first();

    await checkbox.check();
    await expect(checkbox).toBeChecked();
  });

  test('dropdown selection', async ({ page }) => {
    await page.goto('/dropdown');

    await page.selectOption('#dropdown', '1');

    await expect(page.locator('#dropdown')).toHaveValue('1');
  });
});
