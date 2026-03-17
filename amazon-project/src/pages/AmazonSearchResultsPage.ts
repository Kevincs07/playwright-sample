import { Page, Locator } from '@playwright/test';

export class AmazonSearchResultsPage {
  readonly page: Page;
  readonly results: Locator;

  constructor(page: Page) {
    this.page = page;
    this.results = page.locator('[data-component-type="s-search-result"]');
  }

  async waitForResults(timeout = 10000) {
    await this.results.first().waitFor({ state: 'visible', timeout });
  }

  async getResultCount() {
    return await this.results.count();
  }

  async selectProductByName(name: string) {
    await this.page.getByRole('link', { name }).click();
  }
}
