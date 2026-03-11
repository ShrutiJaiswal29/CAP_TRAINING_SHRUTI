import {test} from "@playwright/test"
import { asyncWrapProviders } from "node:async_hooks"

// test("",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
//     await page.locator("#btn_a").click({button:"right", clickCount:3, force:true})
//     await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
//      await page.locator("#btn_a").hover()
//      await page.mouse.down()
//      await page.mouse.up()


// })

// test("",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
//     await page.locator("#submit").click({force:true})
//     await page.locator("#submit").dispatchEvent("click")
// })

// test("Drag&Drop",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//     // const source = await page.locator('//div[text()="Mobile Charger"]')
//     // const target = page.locator('//div[text()="Mobile Accessories"]');
    // await source.hover();
    // await page.mouse.down();
    // await target.hover();
    // await page.mouse.up();

    // await page.locator("#submit").dispatchEvent("click")
    // await page.locator('//div[text()="Mobile Charger"]').dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))
     
    test("",async({page})=>{
        await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
        await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
      //  await page.locator('//input[@type="checkbox"]').click()
      await page.locator('//input[@type="checkbox"]').uncheck()
        await page.waitForTimeout(3000)

        //await page.mouse.move(100,100)
    })

