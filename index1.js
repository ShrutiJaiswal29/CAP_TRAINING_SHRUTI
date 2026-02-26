console.log("hiii");
//type inference
//number
var a = 10;
//string
var b = "shruti";
//boolean
var c = true;
//type annotation
var d;
var e;
var f = "jecrc";
var g = 2;
g = "hii";
g = true;
g = undefined;
//array and tuple
var arr = [2, 4, 1, 4];
var arr1 = ["bvfd", 53];
arr1.push(33);
console.log(arr1);
//object
var stud = {
    name: "shruti",
    rollno: 34
};
function greet(name, age) {
    if (age === void 0) { age = 24; }
    console.log("".concat(name, " and ").concat(age));
}
greet("shruti");
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
var add1 = function (a, b) {
    return a + b;
};
console.log(add1(5, 3));
