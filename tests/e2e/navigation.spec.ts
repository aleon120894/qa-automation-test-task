import { test, expect } from '@playwright/test';

test('navigate between pages', async ({ page }) => {
  await page.goto('/');

  await page.click('text=Form Authentication');

  await expect(page).toHaveURL(/login/);
});
