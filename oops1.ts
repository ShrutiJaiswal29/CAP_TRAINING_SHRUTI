// class Car{
//     public brand:string;
//     colour:string;

//           display(): void {
      
//     }
//     constructor(brand:string,colour:string){
//         this.brand=brand;
//         this.colour=colour;
//         this.display()
//         this.display=()=>{
//             //console.log("new display");
//         };
//         this.display()
//     }


//     start():void{
//         console.log("this is my car");
//     }
// }

// let c=new Car("maruti","red")
// //c.brand="bmw"
// //console.log(c.display());
// console.log(c.brand);
// console.log(c);

export function add(a:number, b:number):number{
    return a+b
}

console.log(add(1,3));

export let name:string="shruti"

export class Car{
    brand:string;
    colour:string;

    constructor(brand:string, colour:string){
        this.brand=brand;
        this.colour=colour;
    }

    display():void{
        console.log("brand:",this.brand);
        console.log("colour:",this.colour);
        
    }
}
