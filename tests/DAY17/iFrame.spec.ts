import {test} from "@playwright/test"

test("frames",async({page})=>{
   await page.goto("https://ui.vision/demo/webtest/frames/")
//    let frame=await page.frames()
//    console.log(frame.length);

//    const title = await page.title()
//    console.log(title)

//    for(let i of frame){
//     let title=await i.title()
//     console.log(title)
//    }
   
//!------------

// let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
// await frame1?.locator('//input[@name="mytext1"]').fill("hello")

// let frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
// await frame2.locator('//input[@name="mytext2]').fill("sddgghgj")

// await page.locator('//input[@name="mytext1"]')
// .contentFrame()

await page.frameLocator('frame[src="frame_3.html"]')
 .frameLocator("iframe")
  .getByLabel("I am a human")
.check()

})