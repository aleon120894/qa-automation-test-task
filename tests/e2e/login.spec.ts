import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.describe('Login finctionality', () => {
  test('emergency login check', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');

    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });

test('failed login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto(); 
    await loginPage.login('wrong', 'wrong');

    await expect(loginPage.flashMessage).toContainText(
      'Your username is invalid!'
    );
  });
});
