// 1) Make an array of numbers that are doubles of the first array -  // [4, 10, 200]
// const doubleNumbers = [2, 5, 100]
// const result = doubleNumbers.map (function doubleNumbers(arr){
//     return arr * 2
//   });
// console.log(result)

// 2) Take an array of numbers and make them strings - ["2", "5", "100"]
// const stringItUp = [2, 5, 100]
// const result = stringItUp.map (function stringItUp(arr){
//     return arr.toString()
//   });
  
//   console.log(result)

// 3) Capitalize each of an array of names - ["John", "Jacob", "Jingleheimer", "Schmidt"]
// const capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// const result = capitalizeNames.map (function capitalizeNames(arr){
//     let upper = arr[0].toUpperCase()
//     let half = arr.substring(1).toLowerCase()
//     return upper.concat(half)
//   });
  
//   console.log(result);

// 4) Make an array of strings of the names
// const namesOnly = [
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
// ]
// const result = namesOnly.map (function namesOnly(strings){
//   return strings.name.toString()
// })
// console.log(result)
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// const people = [
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]
//   const result = people.map (function people(arr){
//     if(arr.age >= 17){
//       return arr.name + " can go to the matrix"
//     } else {
//       return arr.name + " can't fo to the matrix"
//     }
//   })
//   console.log(result)

// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]



// 6) Make an array of the names in h1s, and the ages in h2s
const readyToPutInTheDOM = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]
  const thisIsIt = readyToPutInTheDOM.map (function readyToPutInTheDOM(arr){
    let h1 = arr.name
    let h2 = arr.age
    return "<h1>" + arr.name + "<h1>" + "<h2>" + arr.age + "<h2>"
    
})
console.log(thisIsIt)

// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
