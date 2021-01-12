// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...animals) {  
//     console.log(...animals)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// ----------------------------

// Write a function that returns a food object with the array names as properties using Object Literals:


// function combineFruit(fruit, sweets, vegetables){
//     console.log(`Fruit: ${fruit } Sweets: ${sweets } Veggies: ${vegetables }`)
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"])

// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrit"]
//      }


// Use destructuring to use the property names as variables. Desructure the object in the parameter:

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
//   console.log(parseSentence(vacation))

// Use destructuring to make this code ES6:

// let returnFirst = items => {const [firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// let returnFavorites = arr => {const [firstFav, secondFav, thirdFav] = arr
//         return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }
// console.log(returnFavorites(favoriteActivities))


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
// You will need to change how the arrays are passed in. 
// You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals(one, two, three) {  
//  return `${one} ${two} ${three}`
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Try to make the following function more ES6xy:

// let product = (a, b, c, d, e) => { let numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }
// console.log(product(1967, 3098, 8683, 7864, 6876))

// Make the following function more ES6xy. Use at least both the rest and spread operators:

// let unshift = (array, a, b, c, d, e) => {  
//   return `${a}${b}${c}${d}${e}`.concat(`${array}`);
// }
// console.log(unshift(["hello", "moto"], 1,2,3,4,5))

// // Write some destructuring code to help this function out. Use object literals to simplify it:
// const nameArr = [
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
// ]

// let populatePeople = (names) => {
//     return names.map(name => {
//         let {firstName, lastName} = name
//     return `firstname: ${firstName}, lastname: ${lastName}`
// })
// }

// console.log(populatePeople(nameArr))