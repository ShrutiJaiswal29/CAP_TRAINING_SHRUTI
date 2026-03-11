import { test, expect } from '@playwright/test';

test('Amazon shoes delivery date test', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.locator('#twotabsearchtextbox').fill('shoes');

  await page.locator('#nav-search-submit-button').click();

  await page.waitForTimeout(3000);

  const deliveryDate = page.locator("text=Mon, 9 Mar");

  await expect(deliveryDate).toBeVisible();

});