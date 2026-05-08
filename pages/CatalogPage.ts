import { Locator, Page } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly inventoryList: Locator;
  readonly addToCartButtons: Locator;
  readonly shoppingBasket: Locator;
  readonly sortDropdown: Locator;
  readonly cartBadge: Locator;
  readonly itemNames: Locator;
  readonly itemPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    this.shoppingBasket = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.itemNames = page.locator('[data-test="inventory-item-name"]');
    this.itemPrice = page.locator('[data-test="inventory-item-price"]');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async addFirstItemToCart() {
    await this.addToCartButtons.first().click();
  }

  async sortBy(value: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(value);
  }
}
