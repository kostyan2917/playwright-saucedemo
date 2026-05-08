import { expect, test } from '../../fixtures/fixtures';

test.describe('Cart', () => {
  test('Товар отображается в корзине', async ({ cartPage }) => {
    await expect(cartPage.inventoryItems).toHaveCount(1);
  });

  test('Название товара correct', async ({ cartPage }) => {
    await expect(cartPage.itemNames.first()).toHaveText('Sauce Labs Backpack');
  });

  test('Цена товара correct', async ({ cartPage }) => {
    await expect(cartPage.itemPrice.first()).toHaveText('$29.99');
  });

  test('Удаление товара из корзины', async ({ cartPage }) => {
    await cartPage.removeFirstItem();
    await expect(cartPage.inventoryItems).toHaveCount(0);
  });
});
