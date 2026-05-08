import { test, expect } from '../../fixtures/fixtures';

test.describe('Catalog', () => {
  test('Каталог содержит 6 товаров', async ({ catalogPage }) => {
    await expect(catalogPage.inventoryItems).toHaveCount(6);
  });

  test('После добавления товара счётчик корзины равен 1', async ({ catalogPage }) => {
    await catalogPage.addFirstItemToCart();
    await expect(catalogPage.cartBadge).toHaveText('1');
  });

  test('Сортировка Z → A', async ({ catalogPage }) => {
    await catalogPage.sortBy('za');
    await expect(catalogPage.itemNames.first()).toHaveText('Test.allTheThings() T-Shirt (Red)');
    await expect(catalogPage.itemNames.last()).toHaveText('Sauce Labs Backpack');
  });

  test('Сортировка A → Z', async ({ catalogPage }) => {
    await catalogPage.sortBy('az');
    await expect(catalogPage.itemNames.first()).toHaveText('Sauce Labs Backpack');
    await expect(catalogPage.itemNames.last()).toHaveText('Test.allTheThings() T-Shirt (Red)');
  });

  test('Сортировка цена по возрастанию', async ({ catalogPage }) => {
    await catalogPage.sortBy('lohi');
    await expect(catalogPage.itemNames.first()).toHaveText('Sauce Labs Onesie');
    await expect(catalogPage.itemPrice.first()).toHaveText('$7.99');
  });

  test('Сортировка цена по убыванию', async ({ catalogPage }) => {
    await catalogPage.sortBy('hilo');
    await expect(catalogPage.itemNames.first()).toHaveText('Sauce Labs Fleece Jacket');
    await expect(catalogPage.itemPrice.first()).toHaveText('$49.99');
  });
});
