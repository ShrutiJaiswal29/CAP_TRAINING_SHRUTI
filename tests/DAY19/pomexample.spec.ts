import {test} from "@playwright/test"
import example from "../../PageObjectModel/example.page.ts"

test("",async({page})=>{
    let examplepage = new example(page)

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await examplepage.usernameTF.fill("student")
    await examplepage.passwordTF.fill("Password123")
    await examplepage.SubmitBtn.click()
})
