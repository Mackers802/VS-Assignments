// 1).  Make a function that will return any given string into all caps followed by the same string all lowercase.

                     //capilizeAndLowercase("Hello") // => "HELLOhello"

    // let string = "Hello"
    // console.log(string)

function alpha(string){
const upper = []
const lower = []
    for( var i = 0; i < string.length; i++){
        var toUpper = string[i].toUpperCase()
        upper.push(toUpper)
}
    for( var j = 0; j < upper.length; j++){
        var toLower = upper[j].toLowerCase()
        lower.push(toLower)
}
    return {upper, lower}
}
        console.log(alpha(string))


// 2).  Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

                    // findMiddleIndex("Hello") // => 2
                    // findMiddleIndex("Hello World") // => 5
                    

// const string = ("Stringhhhh")
// function stringCutCounter(string){
//     var half = string.length / 2;
//     var roundedDown = Math.floor(half)
//     return roundedDown;
// }
// console.log(stringCutCounter(string))

// function randomNumberGenerator(){
//     const ranNum = Math.random() * 100;  
//         let half = ranNum / 2;
//         let roundedDown = Math.floor(half)
//         return roundedDown;
//     }
// console.log(randomNumberGenerator())

// 3).  Make a function that uses slice() and the other functions you've written to return the first half of the string
// const words = ("hello")
//     function nipTuck(){
//         var firsthalf = words.slice(1)
//         return firsthalf;
//     }
//     console.log(nipTuck())
                    // returnFirstHalf("Hello") // => "He"
                    // returnFirstHalf("Hello World") // => "Hello"

// // 4).  Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

//                     // hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down.

//     //                 // capilizeAndLowercase("Hello") // => "HEllo"
//     //                 // capilizeAndLowercase("Hello World") // => "HELLO world"

    const stringy = ("whatever")
    function thereAndBack(pete){
        let upper = stringy.toUpperCase()
        let lower = stringy.toLowerCase()
        let firstHalf = upper.slice(0,4)
        let secondHalf = lower.slice(4)
        let joined = firstHalf.concat(secondHalf)
        return joined;
    }
    console.log(thereAndBack(stringy))


// // Optional Code Challenge (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):

// // Make a function that takes any string and capitalizes any character that follows a space.

// // capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"
