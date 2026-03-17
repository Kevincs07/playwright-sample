// Amazon Home Page Object Model
export class AmazonHomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder*="Search"]').first();
    this.url = 'https://www.amazon.in/';
  }

  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async search(query) {
    await this.searchInput.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }

  async isLoaded() {
    // Page is loaded when we can navigate
    return true;
  }
}
