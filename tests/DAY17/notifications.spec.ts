import { test } from "@playwright/test"

test("handle notification popup", async ({ browser }) => {
    let context=await browser.newContext({permissions:["notifications"]})
    let page=await context.newPage()

  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
  //await page.getByRole("button",{name:"Notifications"}).click()
  await page.waitForTimeout(3000)
  await page.locator('//button[@id="browNotButton"]')
  let result=await page.evaluate(()=>{
     return Notification.requestPermission()
  })
  console.log(result);
  
})