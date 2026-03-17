# Playwright Testing Framework

A structured testing framework for Amazon website automation using Playwright with Page Object Model pattern.

## Project Structure

```
playwright-sample/
├── tests/
│   └── example.spec.js          # Test cases using the framework
├── pages/
│   ├── amazonHomePage.js        # Amazon home page object
│   ├── amazonSearchResultsPage.js# Search results page object
│   └── amazonProductPage.js     # Product/checkout page object
├── utils/
│   └── testUtils.js             # Reusable utility functions
├── config/
│   └── testConfig.js            # Test data and configurations
├── screenshots/                 # Generated screenshots
├── package.json
└── playwright.config.js
```

## Page Object Model (POM)

### 1. **AmazonHomePage**
Handles interactions with the Amazon home page.
- `goto()` - Navigate to Amazon
- `search(query)` - Perform search
- `isLoaded()` - Check if page is ready

### 2. **AmazonSearchResultsPage**
Manages search results page actions.
- `waitForResults()` - Wait for results to load
- `getResultCount()` - Get number of results
- `selectProductByName()` - Select a product
- `areResultsPresent()` - Verify results exist

### 3. **AmazonProductPage**
Handles product details and checkout flow.
- `clickBuyNow()` - Click buy button
- `waitForSignInPage()` - Wait for sign-in
- `isSignInPresent()` - Verify sign-in visible
- `takeSignInScreenshot()` - Capture screenshot

## Test Configuration

All test data, URLs, and selectors are centralized in `config/testConfig.js`:
- Base URLs
- Search terms
- Button names
- Element selectors
- Timeouts

## Test Utilities

Helper functions in `utils/testUtils.js`:
- `assertElementVisible()` - Assert with logging
- `captureScreenshot()` - Save screenshots with timestamps
- `getCurrentUrl()` - Get current page URL
- `waitForNavigation()` - Handle navigation waits
- `logStep()` - Log test steps

## Running Tests

```bash
# Run all tests
npx playwright test

# Run Amazon flow test only
npx playwright test -g "amazon search and checkout"

# Run with specific browser
npx playwright test --project=chromium

# Run in headed mode (see browser)
npx playwright test --headed

# Generate and show report
npx playwright show-report
```

## Adding New Tests

1. Create a new page object in `pages/` if needed
2. Add test data to `config/testConfig.js`
3. Write test in `tests/example.spec.js` using the page objects
4. Use `TestUtils.logStep()` for clear step logging

## Example Test Structure

```javascript
test('new test', async ({ page }) => {
  // Step 1: Setup
  TestUtils.logStep(1, 'Description of step');
  const homePage = new AmazonHomePage(page);
  
  // Step 2: Actions
  await homePage.goto();
  
  // Step 3: Assertions
  expect(result).toBeTruthy();
});
```

## Benefits

✓ **Maintainability** - Page objects isolate selectors and locators  
✓ **Reusability** - Page object methods shared across tests  
✓ **Scalability** - Easy to add new pages and tests  
✓ **Readability** - Clear test steps with logging  
✓ **Centralized Config** - Easy to update test data  
✓ **Error Messages** - Descriptive logging for debugging
