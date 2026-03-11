import {test} from '@playwright/test'
test('get product name and price', async ({ page }) => {
await page.goto('https://www.amazon.in/')
const elements=await page.locator('//span[@class="a-price-whole"]|//h2[@class="a-size-base a-color-base puis-bold-weight-text"]/child::span').allInnerTexts()
console.log(elements);

});