const { test, expect } = require('@playwright/test');

test('First Sample Project', async ({ page }) => {
    await page.goto('https://www.google.com');
    // Check that page loaded and search box is visible
    const searchBox = page.locator('combobox[aria-label="Search"]');
    await expect(searchBox).toBeVisible();
});