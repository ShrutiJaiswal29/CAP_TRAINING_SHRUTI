import { test } from '@playwright/test';

test ("get by methods", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username").fill("student")

    await page.getByLabel("Username",{exact:true}).fill("student")
    await page.getByLabel("Password").fill("Password123")

    await page.getByText("Submit").click()
    await page.getByRole("textbox",{name:"username",exact:true}).fill("gbhn")
    await page.getByPlaceholder("Enter your name")

    await page.getByTestId("")
})