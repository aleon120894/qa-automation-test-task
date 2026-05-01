import { Page, Locator } from '@playwright/test';

export class FormsPage {
  readonly page: Page;
  readonly checkbox: Locator;
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox = page.locator('input[type="checkbox"]').first();
    this.dropdown = page.locator('#dropdown');
  }

  async gotoCheckboxes() {
    await this.page.goto('/checkboxes');
  }

  async gotoDropdown() {
    await this.page.goto('/dropdown');
  }
}
