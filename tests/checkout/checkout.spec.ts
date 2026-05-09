import { expect, test } from '../../fixtures/fixtures';

test.describe('Checkout', () => {
  test('Успешное оформление заказа', async ({ checkoutPage }) => {
    await checkoutPage.fillForm('Ivan', 'Petrov', '90001');
    await checkoutPage.continue();
    await checkoutPage.finish();
    await expect(checkoutPage.successfulMessage).toBeVisible();
  });

  test('Ошибка при пустом First Name', async ({ checkoutPage }) => {
    await checkoutPage.fillForm('', 'Petrov', '90001');
    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toHaveText('Error: First Name is required');
  });

  test('Ошибка при пустом Last Name', async ({ checkoutPage }) => {
    await checkoutPage.fillForm('Ivan', '', '90001');
    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toHaveText('Error: Last Name is required');
  });

  test('Ошибка при пустом Zip', async ({ checkoutPage }) => {
    await checkoutPage.fillForm('Ivan', 'Petrov', '');
    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toHaveText('Error: Postal Code is required');
  });
});
