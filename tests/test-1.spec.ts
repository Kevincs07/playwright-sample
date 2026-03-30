import { test, expect } from '@playwright/test';
import { loginData } from './testdata';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.waitForLoadState('domcontentloaded');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(loginData.username);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(loginData.password);
  await page.locator('[data-test="login-button"]').click();
});
