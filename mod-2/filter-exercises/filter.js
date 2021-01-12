// // 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// const fiveAndGreater = [3, 6, 8, 2]
// const result = fiveAndGreater.filter(function fiveAndGreaterOnly(arr) {
//   if(arr >= 5){
//       return true
//   }
// })
// console.log(result)

// 2) Given an array of numbers, return a new array that only includes the even numbers.
// const evensOnly = [3, 6, 8, 2]
// const result = evensOnly.filter(function (even){
//     if(even % 2 === 0){
//         return true
//     }
// })
// console.log(result) /// [6, 8, 2]

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// const fiveOrMore = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const result = fiveOrMore.filter(function(more){
//     if(more.length <= 5){
//         return true
//     }
// })

// console.log(result) // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// const club = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]
// const result = club.filter(function(belong){
//     if(belong.member === true){
//         return true
//     }
// })
// console.log(result)
// // =>
// //[ { name: 'Angelina Jolie', member: true },
// //  { name: 'Paris Hilton', member: true },
// //  { name: 'Bob Ziroll', member: true } ]

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
const oldEnough = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const result = oldEnough.filter(function(matrix){
    if(matrix.age >= 18)
    return true
})

console.log(result)
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]