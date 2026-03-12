import {test} from "@playwright/test"

test("",async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage()
await page.goto("https://www.amazon.in/")
await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes")
await page.keyboard.press("Enter")
let [page2] = await Promise.all([
await page.waitForEvent("popup"),
page.locator("//img[@class='MZeksS']").first().click()])

console.log(page);
console.log(page2);


})