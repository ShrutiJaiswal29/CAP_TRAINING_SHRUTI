import {test} from "@playwright/test"
import path from "path"

// test("upload file", async({page})=>{
//     // console.log(__dirname);
//     // console.log(__filename);
    
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator("#singleFileInput").setInputFiles("C:/Users/shrut/OneDrive/Desktop/CAP_TRAINING/tests/DAY18/uploadfile/demo.txt")
//     await page.getByRole("button",{name:"Upload Single File"}).click()
//     await page.waitForTimeout(3000)

// })


// test("upload multiple files", async ({ page }) => {

//   await page.goto("https://testautomationpractice.blogspot.com/")

//   await page.locator("#multipleFilesInput").setInputFiles([
//     "C:/Users/shrut/OneDrive/Desktop/CAP_TRAINING/tests/DAY18/uploadfile/demo.txt",
//     "C:/Users/shrut/OneDrive/Desktop/CAP_TRAINING/tests/DAY18/uploadfile/demo1.xlsx"
//   ])

//   await page.getByRole("button", { name: "Upload Multiple Files" }).click()

//   await page.waitForTimeout(3000)

// await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"tests/DAY18/uploadfile/demo.txt"))


test.only("Task 4",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:'Download'}).click()
    ])
    await page.pause();
    

let downloadfolder="C:/Users/shrut/OneDrive/Desktop/CAP_TRAINING/Downloads"
let filename= downloadfile.suggestedFilename()
path.join(downloadfolder,filename)
await downloadfile.saveAs(path.join(downloadfolder,filename))
})