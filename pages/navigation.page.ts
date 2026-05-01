import { Page } from '@playwright/test';

export class NavigationPage {
  constructor(private page: Page) {}

  async gotoHome() {
    await this.page.goto('/');
  }

  async goToLogin() {
    await this.page.click('text=Form Authentication');
  }
}
