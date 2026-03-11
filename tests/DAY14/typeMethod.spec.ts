import { test, expect } from '@playwright/test'
// import {expect} from "@playwright/test"

test('get by methods', async ({ page }) => {

//   await page.goto('https://practicetestautomation.com/practice-test-login/');

//   // Username using type()
//   await page.getByLabel("username",{exact:true}).type("student");

//   // Password using fill()
//   await page.getByLabel("password").fill("Password123");
//   await page.getByLabel("Password").isVisible()
  
  await page.goto("https://www.amazon.in/")
  await page.locator("input#twotabsearchtextbox").fill("shoes")
  await page.keyboard.press("Enter")
  await page.locator('//h2[@class="a-size-mini s-line-clamp-1"]/span').first().waitFor()
  let ele=await page.locator('//h2[@class="a-size-mini s-line-clamp-1"]/span').all()
  console.log(ele);
  
});
