import {test} from "@playwright/test"

test("standard dropdown",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
   // await page.locator("#country_code").selectOption({value:"+91"})
    await page.locator("#select3").selectOption({value:"India"})
});