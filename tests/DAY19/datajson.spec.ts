import {test} from "@playwright/test"
import fs from "fs"
import path from "path"

let datafile=fs.readFileSync(path.join(__dirname,"../../testdata/data.json"))
let data=JSON.parse(datafile)


// test("json data",async({page})=>{
//    data.forEach(d=>{
//     console.log((d.greet));
//    })
// })

test.only("for application",async({page})=>{
  //await page.goto(data.url)
  //await page.getByLabel("Username").fill(data.username)

  for(let d of data){
    let url=d.url
    let username=d.username
    let password=d.password

    await page.goto(url)
  //  console.log(page.title());
    await page.locator('//imput[@id="username"]').fill(username)
    await page.locator('//input[@id="password"]').fill(password)
    await page.locator('//button[@id="submit"]').click()
  }
})