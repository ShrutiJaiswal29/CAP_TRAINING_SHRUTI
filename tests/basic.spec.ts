import {test} from "@playwright/test"

test("basic upi",async({request})=>{
  //let apicontext=await request.newContext()

  let r1=await request.post("https://petstore.swagger.io/v2/pet",{
    data:{
      id:51,
      name:"dog",
      status:"available"
    }
  
})
console.log("Create:",await r1.json());

let r2=await request.get("https://petstore.swagger.io/v2/pet/51")
console.log("Get:",await r2.json());

let r3=await request.put("https://petstore.swagger.io/v2/pet",{
  data:{
    id:51,
    name:"dog-updated",
    status:"sold"
  }
})
console.log("Update",await r3.json());

let r4=await request.delete("https://petstore.swagger.io/v2/pet/51")
//console.log("Status:", response.status());


})