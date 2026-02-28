// import {add} from "./oops1"
// console.log(add(2,5));

// import {name} from "./oops1";
// console.log(name);

// import {Car} from "./oops1";
// let c=new Car("BMW", "Black");
//     c.display();

// function task1(){
//     console.log("task1");
// }

// function task2(){
//     console.log("task2");
// }

// task1()
// task2()

// console.log("start");

// setTimeout(()=>{
// console.log("task completed");

// },2000)


// let interValid:number =setInterval(()=>{
//     console.log("task completed 2");
// },2000)

// console.log("end");

// let p1=new Promise<string>((resolve, reject) => {
//     let success=true;
//     if(success==true){
//         resolve("login successful")
//     }
//     else{
//         reject("login unsuccessful")
//     }
// })
// console.log(p1);

// p1.then((ele)=>{
//     console.log(ele);
// }).catch((res)=>{
//     console.log(res);
    
// })

let myPromise= new Promise<number>((resolve)=>{
    resolve(10);
});

myPromise.then((num)=>{
    let result=num*2;
    console.log(result);
}) 