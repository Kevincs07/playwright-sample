// Test Configuration and Test Data
export const testConfig = {
  amazon: {
    baseUrl: 'https://www.amazon.com/',
    timeout: 10000,
  },
  searchTerms: {
    book: 'playwright book',
    product: 'Web Automation Testing Using',
  },
  buttons: {
    buyNow: 'Buy Now',
  },
  headings: {
    signIn: 'Sign in or create account',
  },
  selectors: {
    searchInput: 'input#twotabsearchtextbox',
    searchResults: '[data-component-type="s-search-result"]',
  },
};

export const screenshotPaths = {
  signInPage: 'screenshots/sign-in-page.png',
  resultsPage: 'screenshots/results-page.png',
};
