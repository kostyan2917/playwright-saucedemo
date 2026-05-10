import { Locator, Page } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;
  readonly burgerMenu: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
    this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutButton.click();
  }
}
