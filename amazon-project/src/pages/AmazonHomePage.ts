import { Page, Locator } from '@playwright/test';

export class AmazonHomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly url = 'https://www.amazon.com/';

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[aria-label="Search Amazon"]', { hasText: '' });
  }

  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async search(query: string) {
    // fallback locator if specific aria-label not present
    const input = this.searchInput.first();
    await input.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    if (!(await input.isVisible())) {
      await this.page.locator('input#twotabsearchtextbox').fill(query);
      await this.page.locator('input#twotabsearchtextbox').press('Enter');
      return;
    }
    await input.fill(query);
    await input.press('Enter');
  }
}
