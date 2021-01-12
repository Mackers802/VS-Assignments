
var readline = require("readline-sync");

var input = readline.question("What phrase would you like to encrypt? ").toLowerCase();
var shift = parseInt(readline.question("How many letters would you like to shift? "));

const caeserCipher = (input, shift) => {
    // create alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // break string into array so you can loop and change
    const strArr = input.split('')
    console.log(strArr)
    // create for loop to loop through string
    for (let i = 0; i < strArr.length; i++){
        let index = alphabet.indexOf(strArr[i])
      if (index >= 0 && index + shift <= 25 ){
            strArr[i] = alphabet[index + shift]
        } else if(index >= 0 && index + shift >= 26){
            index -= 26 
            strArr[i] = alphabet[index + shift]
        }
    }
    return strArr.join('')
}
console.log(caeserCipher(input, shift))