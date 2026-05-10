import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CatalogPage } from '../pages/CatalogPage';
import { users } from '../test-data/users';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { NavigationPage } from '../pages/NavigationPage';

type MyFixtures = {
  catalogPage: CatalogPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  navigationPage: NavigationPage;
};

export const test = base.extend<MyFixtures>({
  catalogPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    const catalogPage = new CatalogPage(page);
    await use(catalogPage);
  },

  cartPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    const catalogPage = new CatalogPage(page);
    await catalogPage.addFirstItemToCart();
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    const catalogPage = new CatalogPage(page);
    await catalogPage.addFirstItemToCart();
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await cartPage.goToCheckout();
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },

  navigationPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    const navigationPage = new NavigationPage(page);
    await use(navigationPage);
  },
});

export { expect } from '@playwright/test';
