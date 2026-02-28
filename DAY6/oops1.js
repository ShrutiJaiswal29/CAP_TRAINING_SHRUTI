"use strict";
// class Car{
//     public brand:string;
//     colour:string;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.name = void 0;
exports.add = add;
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
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
exports.name = "shruti";
var Car = /** @class */ (function () {
    function Car(brand, colour) {
        this.brand = brand;
        this.colour = colour;
    }
    Car.prototype.display = function () {
        console.log("brand:", this.brand);
        console.log("colour:", this.colour);
    };
    return Car;
}());
exports.Car = Car;
