import { Page } from '@playwright/test';

export class AmazonProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickBuyNow() {
    const buyNow = this.page.getByRole('button', { name: 'Buy Now' });
    await buyNow.waitFor({ state: 'visible', timeout: 5000 });
    await buyNow.click();
  }

  async waitForSignIn(timeout = 10000) {
    await this.page.getByRole('heading', { name: 'Sign in or create account' }).waitFor({ state: 'visible', timeout });
  }
}
