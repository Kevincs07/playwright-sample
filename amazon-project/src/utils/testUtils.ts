import { Page, Locator } from '@playwright/test';

export class TestUtils {
  static async maximizeViewport(page: Page) {
    try {
      const screen = await page.evaluate(() => ({ width: window.screen.availWidth, height: window.screen.availHeight }));
      const width = screen?.width ?? 1920;
      const height = screen?.height ?? 1080;
      await page.setViewportSize({ width, height });
    } catch (e) {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  }

  static async captureScreenshot(page: Page, name = 'screenshot') {
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const path = `screenshots/${name}-${ts}.png`;
    await page.screenshot({ path, fullPage: true });
    return path;
  }
}
