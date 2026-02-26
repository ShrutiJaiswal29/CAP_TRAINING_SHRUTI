// function add(a:number,b:number):number{
//     return a+b;
// }

// console.log(add(5,3));

// function greet(name:string,age:number=2):void{
//     console.log(`${name} and ${age}`);
// }

// greet("virat",18)

function printid(id : string |number){
    console.log(id);
    
}
printid("virat")
printid(19)

const add = (a:number,b:number) => a+b;

console.log(add(3,4));

interface employee{
    name:string;
    readonly id:number;
}

let e1 : employee = {
    name : "Sonakshi",
    id:101
}

e1.name = "Ridhi"
e1.id = 102;