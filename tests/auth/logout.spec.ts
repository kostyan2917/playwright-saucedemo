import { test, expect } from '../../fixtures/fixtures';

test.describe('Logout', () => {
  test('Успешный выход из аккаунта', async ({ navigationPage }) => {
    await navigationPage.logout();
    await expect(navigationPage.page).toHaveURL('/');
  });
});
