

//Test
console.log("testy")

//Preliminary

// #1 --------------------------------------------

for( var i = 0; i <= 9; i++){
        console.log(i)
}

// #2 --------------------------------------------
for( var i = 9; i >= 0; --i){
    console.log (i)
}


// #3 --------------------------------------------
var fruitt = ["banana", "orange", "apple", "kiwi"]
for( var i = 0; i < fruitt.length; i++)
    console.log(fruitt[i])


//Bronze Medal

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// #1 --------------------------------------------
// Write a for loop that will push the numbers 0 through 9 to an array.
const arrNum = []
for( var i = 0; i <= 9; i++){
  arrNum.push(i);
}
  console.log(arrNum)

// // #2 --------------------------------------------
// // Write a for loop that prints to the console only even numbers 0 through 100.

for (var i = 0; i <= 100; i++){
  if (( i % 2) == 0)
  console.log(i)
}


// #3 --------------------------------------------
// Write a for loop that will push every other fruit to an array.

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
  for( var i = 0; i < fruit.length; i++){
    if (( i % 2) == 0)
      console.log(fruit[i])
  }

// // Silver Medal
// 1). Write a loop that will print out all the names of the people of the people array
// 2). Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// 3). Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".


// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
//   for( var i = 0; i < peopleArray.length; i++);
//     console.log(peopleArray.name.length)


//   ["Harrison Ford", "Vladimir Putin"] // names
//   ["Singer", "Entertainer"] // occupations