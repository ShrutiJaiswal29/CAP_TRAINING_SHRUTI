import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

// test("write excel data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx.xlsx"))
//     let sheet=await book.getWorksheet("Sheet4")

//     if(!sheet){
//         sheet=await book.addWorksheet("Sheet4")
//     }

//     // sheet.getRow(1).getCell(1).value="playwright";
//     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/readexcel.xlsx.xlsx"))
// })

test("capture amazon suggestions",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("b")
    await page.waitForSelector("div.s-suggestion")
    const items=await page.locator("div.s-suggestion").allTextContents();

    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx.xlsx"))

    let sheet=book.getWorksheet("Sheet5")

    if(!sheet){
        sheet=book.addWorksheet("Sheet5")
    }

    for(let i=0;i<items.length;i++){
        sheet.getRow(i+1).getCell(1).value=items[i]
    }

     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/readexcel.xlsx.xlsx"))

})