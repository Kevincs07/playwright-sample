// Amazon Search Results Page Object Model
export class AmazonSearchResultsPage {
  constructor(page) {
    this.page = page;
    this.searchResults = page.locator('[data-component-type="s-search-result"]');
  }

  async waitForResults(timeout = 10000) {
    await this.searchResults.first().waitFor({ state: 'visible', timeout });
  }

  async getResultCount() {
    return await this.searchResults.count();
  }

  async selectProductByName(productName) {
    // Use a more robust locator that matches links containing the product name text
    await this.page.locator('a').filter({ hasText: productName }).first().click();
  }

  async areResultsPresent() {
    return (await this.getResultCount()) > 0;
  }
}
