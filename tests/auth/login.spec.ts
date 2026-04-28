import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Авторизация standard_user', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL('/inventory.html');
  });

  test('Ошибка при неверном пароле', async ({ page }) => {
    await loginPage.login(users.standard.username, 'wrong_password');
    await expect(page.locator('[data-test="error"]')).toContainText(
      'Epic sadface: Username and password do not match any user in this service',
    );
  });

  test('Ошибка при неверном логине', async ({ page }) => {
    await loginPage.login('wrong login', users.standard.password);
    await expect(page.locator('[data-test="error"]')).toContainText(
      'Epic sadface: Username and password do not match any user in this service',
    );
  });

  test('Авторизация locked_out_user', async ({ page }) => {
    await loginPage.login(users.locked.username, users.standard.password);
    await expect(page.locator('[data-test="error"]')).toContainText(
      'Epic sadface: Sorry, this user has been locked out.',
    );
  });

  test('Авторизация с пустыми полями', async ({ page }) => {
    await loginPage.login('', '');
    await expect(page.locator('[data-test="error"]')).toContainText(
      'Epic sadface: Username is required',
    );
  });
});
