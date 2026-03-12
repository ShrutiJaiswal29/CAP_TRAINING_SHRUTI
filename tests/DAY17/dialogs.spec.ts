import {test} from "@playwright/test"

test("",async({page})=>{
    page.on("dialog",async(d)=>{
        //await d.accept("fdgdbdcnd")
        if(d.type()=="alert"){
            await d.accept("figjreu")
        }
        //confirm
        //prompt

        else if(d.type()=="confirm"){
            await d.dismiss()
            console.log(d.message());
        }

        else if(d.type()=="prompt"){
            //await d.accept("hello")
            //await d.defaultValue()

            if(d.defaultValue()=="tom"){
                console.log((await d.defaultValue()));
                await d.accept(d.defaultValue())
                
            }
            else{
                await d.accept("tom")
            }
        }
    })
   await page.goto("https://testautomationpractice.blogspot.com/")
   await page.locator('//button[@id="alertBtn"]').click()
   await page.getByRole("button",{name:"Confirmation Alert"}).click()
   await page.getByRole("button",{name:"Prompt Alert"}).click()
})