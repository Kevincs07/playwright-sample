import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/AmazonHomePage';
import { AmazonSearchResultsPage } from '../pages/AmazonSearchResultsPage';
import { AmazonProductPage } from '../pages/AmazonProductPage';
import { TestUtils } from '../utils/testUtils';
import { testConfig } from '../config/testConfig';

test('amazon search and buy flow', async ({ page }) => {
  // maximize
  await TestUtils.maximizeViewport(page);

  const home = new AmazonHomePage(page);
  await home.goto();

  // search
  await home.search(testConfig.searchTerms.book);

  const results = new AmazonSearchResultsPage(page);
  await results.waitForResults(testConfig.amazon.timeout);
  const count = await results.getResultCount();
  expect(count).toBeGreaterThan(0);

  // select product
  await results.selectProductByName(testConfig.searchTerms.product);
  await page.waitForLoadState('domcontentloaded');

  const product = new AmazonProductPage(page);
  await product.clickBuyNow();
  await product.waitForSignIn(testConfig.amazon.timeout);

  // screenshot
  const path = await TestUtils.captureScreenshot(page, 'sign-in-page');
  console.log('Saved screenshot:', path);
});