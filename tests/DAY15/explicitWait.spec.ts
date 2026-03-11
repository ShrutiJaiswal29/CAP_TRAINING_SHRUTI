import { test } from '@playwright/test';

test('Locate MX Player', async ({ page }) => {

  await page.goto('https://www.amazon.in');
  
//    await page.locator("//a[text()='MX Playr']").waitFor({ timeout: 20000 });
//       await page.locator("//a[text()='MX Player']").click()
 // await page.getByTestId('nav_avod_desktop_topnav').waitFor({timeout:20000, state:"detached"});

  await page.waitForSelector("//a[text()='MX Player']",{timeout:2000})
  await page.locator("//a[text()='MX Player']").click()
});