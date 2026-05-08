import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly cartList: Locator;
  readonly itemNames: Locator;
  readonly itemPrice: Locator;
  readonly removeButton: Locator;
  readonly checkOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.cartList = page.locator('[data-test="cart-list"]');
    this.itemNames = page.locator('[data-test="inventory-item-name"]');
    this.itemPrice = page.locator('[data-test="inventory-item-price"]');
    this.removeButton = page.locator('[data-test^="remove"]');
    this.checkOutButton = page.locator('[data-test="checkout"]');
  }

  async goto() {
    await this.page.goto('/cart.html');
  }

  async removeFirstItem() {
    await this.removeButton.first().click();
  }

  async goToCheckout() {
    await this.checkOutButton.click();
  }
}
