import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto(); // ОБОВ’ЯЗКОВО
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(loginPage.flashMessage).toContainText(
    'You logged into a secure area!'
  );
});

test('failed login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto(); // ОБОВ’ЯЗКОВО
  await loginPage.login('wrong', 'wrong');

  await expect(loginPage.flashMessage).toContainText(
    'Your username is invalid!'
  );
});
