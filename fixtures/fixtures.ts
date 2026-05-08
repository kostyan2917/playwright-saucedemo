import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CatalogPage } from '../pages/CatalogPage';
import { users } from '../test-data/users';

type MyFixtures = {
  catalogPage: CatalogPage;
};

export const test = base.extend<MyFixtures>({
  catalogPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    const catalogPage = new CatalogPage(page);
    await use(catalogPage);
  },
});

export { expect } from '@playwright/test';
