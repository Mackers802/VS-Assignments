var readline = require("readline-sync");

var input = readline.question("What phrase would you like to encrypt? ").toLowerCase();
var shift = parseInt(readline.question("How many letters would you like to shift? "));

function cipher(input, shift) {
  var final = "";
  const split = input.split("");
  for (i = 0; i < split.length; i++) {
    let codeShift = split[i].charCodeAt();
    // if(codeShift >= 65){
    //     const shifted = String.fromCharCode(codeShift + shift);
    //     final = final.concat(shifted)
    // } else if (codeShift >= 79){
        const shifted = String.fromCharCode(codeShift + shift);
        final = final.concat(shifted)
    // }
  }
  return final;
}

console.log(cipher(input, shift));




