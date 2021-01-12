// 1a) Write a function that returns the sum of two numbers. 
    // Throw an error if either argument is not of the data type number:
    let total = function sum(x, y){
        console.log(typeof x)
    try{
        if(typeof x !== "number"){
            throw new Error("I want an number")
        }
        if(typeof y !== "number"){
            throw new Error("I want an number also")
        }
    } 
    catch(err){
        console.log(err)
    }
    finally{
        console.log("I ran the code")
    }
  return x + y;
}
console.log(total(6, "hi"))

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
// console.log("ho")
// let total = function sum(x, y){
//     console.log(typeof x)
// try{
//     if(typeof x !== "number"){
//         throw new Error("I want an number")
//     }
//     if(typeof y !== "number"){
//         throw new Error("I want an number also")
//     }
//     console.log(total(1, 2))
// } 
// catch(err){
//     console.log(err)
// }}
// finally{
//     console.log("I ran the code")
// }
// return x + y;
// }

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

// var user = {username: "sam", password: "123abc"};
// function login(username, password){
//   //check credentials
// }
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!