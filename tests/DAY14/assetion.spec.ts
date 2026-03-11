import {expect, test} from "@playwright/test"
test.use({ actionTimeout: 5000 });

test("", async({page})=>{
    // await page.goto("dfgh")
    // await expect(page.locator("cvb")).toBeAttached()

    await page.goto("https://wwww.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes",{timeout:40000})
})