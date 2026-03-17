import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('TomMario');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Tom12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Apply' }).click();
  await page.getByRole('link', { name: 'My Leave' }).click();
  await page.locator('.oxd-icon.bi-calendar').first().dblclick();
  await page.getByText('Today').click();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').dblclick();
  await page.getByText('Today').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('-03-03').click();
  await page.getByRole('table').getByText('Russel Hamilton').dblclick();
  await page.getByText('CAN - Vacation').click();
  await page.getByRole('table').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.locator('div').filter({ hasText: /^\(1\) Record Found$/ }).click();
});