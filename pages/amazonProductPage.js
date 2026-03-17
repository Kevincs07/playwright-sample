// Amazon Product Details Page Object Model
export class AmazonProductPage {
  constructor(page) {
    this.page = page;
    this.buyNowButton = page.getByRole('button', { name: 'Buy Now' });
    this.signInHeading = page.getByRole('heading', { name: 'Sign in or create account' });
  }

  async clickBuyNow() {
    await this.buyNowButton.click();
  }

  async waitForSignInPage(timeout = 10000) {
    await this.signInHeading.waitFor({ state: 'visible', timeout });
  }

  async isSignInPresent() {
    return await this.signInHeading.isVisible();
  }

  async takeSignInScreenshot() {
    await this.page.screenshot({ path: 'screenshots/sign-in-page.png', fullPage: true });
  }
}
