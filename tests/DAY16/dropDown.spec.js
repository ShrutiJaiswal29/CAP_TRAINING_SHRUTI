import {test,expect} from "@playwright/test"

// test("standard dropdown",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//    // await page.locator("#country_code").selectOption({value:"+91"})
//     await page.locator("#select3").selectOption({value:"India"})
//     await expect(page.locator("#select3")).toHaveValue("India")
//      await page.locator("#select3").selectOption({ index: 2 })

     //multiselect
    //  test("multiselect",async({page})=>{
    //  await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    //  await page.locator("#select-multiple-native").selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}])
    //  await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    //   });
  

    //custom
    test("custom",async({page})=>{
      await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
        await page.locator('//div[@class="sort-sortBy"]').click({force:true})
        await page.waitForTimeout(3000)
         
        let options=await page.locator('//label[@class="sort-label "]').all()
        for(let opt of options){
            let text=await opt.textContent()
            console.log(text);

            if(text.includes("Better ")){
                await opt.click()
                break;
            }
        }
    });