import {test} from "@playwright/test"
//import page from "page"

// test("",async({browser})=>{
// let context=await browser.newContext()
// let page=await context.newPage()
// await page.goto("https://www.amazon.in/")
// await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes")
// await page.keyboard.press("Enter")
// let [page2] = await Promise.all([
// await page.waitForEvent("popup"),
// page.locator("//img[@class='MZeksS']").first().click()])

// console.log(page);
// console.log(page2);

// await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
// await page.locator('//textarea[@class="w-full h-40 p-2 border rounded-lg mb-4"]').fill('hellooo')
// await page.locator('#fileName').fill('hello.txt')
// let [page2]=await Promise.all([
// page.waitForEvent("download"),
// page.locator('#downloadButton').click()
// ])


// })