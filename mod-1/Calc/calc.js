
var readlinesync = require('readline-sync');
var parseInt(num1) = readlinesync.question("Please enter your first number ");
console.log(num1)
var parseInt(num2) = readlinesync.question("Please enter your second number ");
console.log(num2)
var action = readlinesync.keyIn("Please enter the operation to perform: add [a], sub [s], mul [m], div [d]]", {limit: "asdm"});
console.log(action)

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
var a = add(num1, num2)
var s = subtract(num1, num2)
var m = multiply(num1, num2)
var d = divide(num1, num2)

if       (action === "a"){
    console.log(a)
} else if(action === "s"){
    console.log(s)
} else if(action === "m"){
    console.log(m)
} else if(action === "d"){
    console.log(d)
}


// var enemyAp1 = Math.floor(Math.random() * 100)
// var heroAp1 = Math.floor(Math.random() * 100)
// function myFunction() {
//     return enemyAp1 - heroAp1;
//   }
// // console.log(enemyAp1)
// // console.log(heroAp1)
// let attackFunc = myFunction(enemyAp1, heroAp1)
// console.log(myFunc)