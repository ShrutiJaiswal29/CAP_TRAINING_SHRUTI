import { test, expect } from '@playwright/test';

test('Screenshot assertion', async ({ page }) => {

  await page.goto('https://playwright.dev/docs/test-assertions');

  await expect(page).toHaveScreenshot();

});