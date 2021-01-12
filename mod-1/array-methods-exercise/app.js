/*
1).  Remove the last item from the vegetable array.
2).  Remove the first item from the fruit array.
3).  Find the index of "orange."
4).  Add that number to the end of the fruit array.
5).  Use the length property to find the length of the vegetable array.
6).  Add that number to the end of the vegetable array.
7).  Put the two arrays together into one array. Fruit first. Call the new Array "food".
8).  Remove 2 elements from your new array starting at index 4 with one method.
9).  Reverse your array.
10). Turn the array into a string and return it.
*/

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

// 1).
vegetables.pop()
    console.log("vegetables: ", vegetables);

// 2).
fruit.shift()
    console.log("fruit: ", fruit);

// 3).
var orangeIndex = fruit.indexOf("orange")
    console.log("Index of Orange:", orangeIndex)

// 4).
fruit.push(orangeIndex)
    console.log("fruit + Index of Ornage: ", fruit);

// 5).
var vegetablesLength = vegetables.length
    console.log("Length of vegtables:", vegetables.length)

// 6).

vegetables.push(vegetablesLength)
    console.log("vegetables + length of vegtables: ", vegetables);

// 7).
var food = fruit.concat(vegetables)
    console.log("food:", food)

// 8).
food.splice(4, 2)
    console.log("Food splice:", food)

// 9).
var reverse = food.reverse()
    console.log("Reverse:", reverse)

// 10).
var join = reverse.join(", ")
    console.log("joined:", join)