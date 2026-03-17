// @ts-check
import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/amazonHomePage.js';
import { AmazonSearchResultsPage } from '../pages/amazonSearchResultsPage.js';
import { AmazonProductPage } from '../pages/amazonProductPage.js';
import { TestUtils } from '../utils/testUtils.js';
import { testConfig } from '../config/testConfig.js';
import { maximizeViewport } from '../config/browserConfig.js';

test('amazon search and checkout flow', async ({ page }) => {
  TestUtils.logStep(1, 'Navigate to Amazon Home Page');
  await maximizeViewport(page);
  const homePage = new AmazonHomePage(page);
  await homePage.goto();      
  expect(await homePage.isLoaded()).toBeTruthy();   
  TestUtils.logStep(2, `Search for "${testConfig.searchTerms.book}"`);
  await homePage.search(testConfig.searchTerms.book);
  TestUtils.logStep(3, 'Verify search results are loaded');
  const searchResults = new AmazonSearchResultsPage(page);
  await searchResults.waitForResults(testConfig.amazon.timeout);
  const resultCount = await searchResults.getResultCount();
  expect(resultCount).toBeGreaterThan(0);
  console.log(`✓ Found ${resultCount} search results`);

  TestUtils.logStep(4, `Select product: "${testConfig.searchTerms.product}"`);
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'), // Capture new tab from product selection
    searchResults.selectProductByName(testConfig.searchTerms.product)
  ]);
  await newPage.waitForLoadState('domcontentloaded');
  page = newPage; // Switch to the new product page
  const productPage = new AmazonProductPage(page); // Create with new page

  TestUtils.logStep(5, 'Click Buy Now button');
  await productPage.clickBuyNow();
  await page.waitForLoadState('domcontentloaded');

  TestUtils.logStep(6, `Verify "${testConfig.headings.signIn}" page is displayed`);
  await productPage.waitForSignInPage(testConfig.amazon.timeout);
  expect(await productPage.isSignInPresent()).toBeTruthy();
  console.log('✓ Sign in page verified');
  TestUtils.logStep(7, 'Capture screenshot of sign-in page');
  await productPage.takeSignInScreenshot();
});
