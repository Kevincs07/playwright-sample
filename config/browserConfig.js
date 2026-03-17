// Common browser configuration utilities
export async function maximizeViewport(page) {
  // Try to set viewport to available screen size; fallback to 1920x1080
  try {
    const screen = await page.evaluate(() => ({ width: window.screen.availWidth, height: window.screen.availHeight }));
    const width = screen && screen.width ? screen.width : 1920;
    const height = screen && screen.height ? screen.height : 1080;
    await page.setViewportSize({ width, height });
  } catch (e) {
    await page.setViewportSize({ width: 1920, height: 1080 });
  }
}
