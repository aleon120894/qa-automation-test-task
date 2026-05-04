// pages/login.page.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
  }

  async goto() {
    // Використовуємо повний URL, щоб на 100% виключити вплив baseURL
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string) {
    // Клацнути по полю, щоб з'явився фокус
    await this.usernameInput.click();
    // Посимвольне введення з невеликою затримкою
    await this.usernameInput.pressSequentially(username, { delay: 100 });

    await this.passwordInput.click();
    await this.passwordInput.pressSequentially(password, { delay: 100 });

    // Замість кліку по кнопці натиснемо Enter, це найнадійніший спосіб для форм
    await this.passwordInput.press('Enter');
}
}
