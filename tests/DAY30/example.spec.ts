import {test,expect} from "@playwright/test"

test("",async({request})=>{
    let r1=await request.post("https://www.shoppersstack.com/shopping/users/login",{
        data:{
            email:"shrutijaizz123@gmail.com",
            password:"ShrutiJaiswal@2",
            role:"SHOPPER"
        },ignoreHTTPSErrors:true
    })

    const body=await r1.json()
    console.log(body);

    let shopperId = body.data.userId
console.log("ShopperId:", shopperId)

     let token=body.data.jwtToken
    console.log("Token:",token);

   let r2=await request.get("https://www.shoppersstack.com/shopping/products/alpha",{
   headers:{
    Authorization:`Bearer ${token}`
   }  , ignoreHTTPSErrors:true
})

    console.log("Status:", await r2.status())

    let products = await r2.json()
console.log(products)

let productId = products.data[8].productId
console.log("ProductId:", productId)

    let r3 = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }, ignoreHTTPSErrors:true
    }
)

console.log("Wishlist Status:", await r3.status())

let r4 = await request.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: 162
        },ignoreHTTPSErrors:true
    }
)

console.log("Add Wishlist Status:", await r4.status())

// await request.delete(
//     `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`,
//     {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },ignoreHTTPSErrors:true
//     }
// )

let r6 = await request.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: productId,
            quantity:1
        },ignoreHTTPSErrors:true
    }
)

console.log("Cart Add Status:", await r6.status())

let r7 = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors:true
    }
)

console.log("Cart Status:", await r7.status())

let cartData = await r7.json()
console.log(cartData)

let r8 = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors:true
    }
)

console.log("Address GET Status:", await r8.status())

let r9 = await request.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            buildingInfo: "Flat 101",
            city: "Delhi",
            country: "India",
            landmark: "Near Metro",
            name: "Shruti",
            phone: "9876543210",
            pincode: "110001",
            state: "Delhi",
            streetInfo: "MG Road",
            type: "HOME"
        }, ignoreHTTPSErrors:true
    }
)

console.log("Address POST Status:", await r9.status())
console.log(await r9.text())

let res = await r9.json()
let addressId = res.data.addressId

console.log("AddressId:", addressId)

let r10 = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address/${addressId}`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors:true
    }
)

console.log("Single Address Status:", await r10.status())

let r11 = await request.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`,
    {
          data: {
    addressId: addressId,
    paymentMode: "COD"
},
        headers: {
            Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors:true
    }
)

console.log("Order Status:", await r11.status())

let r12= await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors:true
    }
)

console.log("Order GET Status:", await r12.status())


let orderRes = await r12.json()
let orderId = orderRes.data[0].orderId

console.log("OrderId:", orderId)
let orderedProductId = orderRes.data[0].orderedItems[0].productId
console.log("Ordered ProductId:", orderedProductId)

let r13 = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders/${orderId}/invoice`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors:true
    }
)

console.log("Invoice Status:", await r13.status())
console.log("Ordered ProductId:", orderedProductId)
console.log(orderRes.data[0])

let shopperName = body.data.username

let r14 = await request.post(
    `https://www.shoppersstack.com/shopping/reviews`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: orderedProductId,
            dateTime: new Date().toISOString(),
            description: "Nice product",
            heading: "Good",
            rating: 4,
            shopperId: shopperId,
            shopperName: shopperName
        },
        ignoreHTTPSErrors: true
    }
)

console.log("Review POST Status:", await r14.status())
console.log("Review POST Body:", await r14.text())

let r15 = await request.get(
    `https://www.shoppersstack.com/shopping/reviews/${orderedProductId}`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        },
        ignoreHTTPSErrors: true
    }
)

console.log("Review GET Status:", await r15.status())
console.log("Review GET Body:", await r15.text())
})