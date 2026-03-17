// Test Utilities and Helper Functions
export class TestUtils {
  // Assert that element is visible with custom message
  static async assertElementVisible(locator, message = '') {
    try {
      await locator.waitFor({ state: 'visible', timeout: 10000 });
      console.log(`✓ ${message || 'Element'} is visible`);
      return true;
    } catch (error) {
      console.error(`✗ ${message || 'Element'} is NOT visible`);
      throw error;
    }
  }

  // Take screenshot with timestamp
  static async captureScreenshot(page, screenshotName) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `screenshots/${screenshotName}-${timestamp}.png`;
    await page.screenshot({ path: filename, fullPage: true });
    console.log(`Screenshot saved: ${filename}`);
    return filename;
  }

  // Get current URL
  static async getCurrentUrl(page) {
    return page.url();
  }

  // Wait for navigation
  static async waitForNavigation(page, action) {
    await Promise.all([page.waitForNavigation(), action()]);
  }

  // Log test step
  static logStep(stepNumber, stepName) {
    console.log(`\n[Step ${stepNumber}] ${stepName}`);
  }
}
