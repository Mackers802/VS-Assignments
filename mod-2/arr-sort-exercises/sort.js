// // 1) Sort an array from smallest number to largest
// const array = [1, 3, 5, 2, 90, 20]
// const sortedArray = array.sort(function(a,b){
//     return a-b
// })
// console.log(sortedArray)
// console.log(`${sortedArray[0]}')
// // ([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// // 2) Sort an array from largest number to smallest
// const arr = [1, 3, 5, 2, 90, 20]
// arr.sort(function(a,b){
//     return b - a
// })
// console.log(arr)
// // ([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 

// 3) Sort an array from shortest string to longest
// const arr = ["dog", "wolf", "by", "family", "eaten"]

// arr.sort(function(string1,string2){
//     return string1.length - string2.length
// })

// console.log(arr) // ["by", "dog", "wolf", "eaten", "family"] 


// // 4) Sort an array alphabetically
// const arr = ["dog", "wolf", "by", "family", "eaten"]
// arr.sort()

// console.log(arr); // ["by", "dog", "eaten", "family", "wolf"] 

// 5) Sort the objects in the array by age
// const arr = [
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]
// arr.sort(function(a,b){
//         return a.age - b.age
// })
// console.log(arr)
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]\\
