console.log("hiii")

//type inference
//number
let a=10

//string
let b="shruti"

//boolean
let c=true

//type annotation
let d:null
let e:undefined
let f:string="jecrc"

let g:any=2
g="hii"
g=true
g=undefined

//array and tuple
let arr=[2,4,1,4]
let arr1=["bvfd", 53]
arr1.push(33)
console.log(arr1);

//object
let stud:{
    name:string,
    age?:number,
    rollno:number
}={
    name:"shruti",
    rollno:34
}

function greet(name?:string,age:number=24):void{
    console.log(`${name} and ${age}`);
}
greet("shruti")
 

function add(a:number, b:number):number{
    return a+b
}
console.log(add(1,3));

const add1=(a:number, b:number): number =>{
    return a+b;
};

console.log(add1(5,3));

let arr3:(string|number)[]=[322,"shr"]