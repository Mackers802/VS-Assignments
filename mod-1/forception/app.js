
// Write a function that takes two arrays as parameters. 
// The first array will be an array of people's names, and the second array will be the alphabet. 
// Using a for loop within a for loop, create and return array that looks like this:

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var alphabetArr = alphabet.split("")
// console.log("Alphabet Array:", alphabetArr)
// console.log("People:", people)


function forception(people, alphabetArr){
    const newArr = []
            for( var i = 0; i < people.length; i++){
                newArr.push(people[i])
                    for( var j = 0; j < alphabetArr.length; j++){
                        newArr.push(alphabetArr[j])
                    }
                }
                return newArr
            }
        console.log(forception(people, alphabetArr))