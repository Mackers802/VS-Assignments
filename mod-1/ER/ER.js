const readline = require("readline-sync");
const name = readline.question("What is your name? ");
    console.log( "Hello, " + name + " It's nice to meet you!");


var start = readline.question("Would you like to try my new Escape room? Yes[y] No[n] ", {limit: ["y", "n"]});

if (start === "y") {
    console.log( name + " has entered the Escape room ")
} else if(start === "n"){
    console.log("Have a nice day! " + name )
        process.exit()
}

 isAlive = true
 findKey = true
while(isAlive === true){
    const playerChoice = readline.question("What would you like to do...[p]ut Hand in Hole? [s]earch around for the Key? [o]pen the door? ", {limit: ["p", "s", "o"]});
    if (playerChoice === "p"){
        isAlive = false;
        findKey = false;
        console.log("you DED") + process.exit();
    } else if (playerChoice === "s"){
        isAlive = true;
        findKey = true;
        console.log("Congradulation's you have found the key ")
        var openDoor = readline.question("Would you like to open the door? [y]es or [n]o? ", {limit: ["y", "n"]});
            if (openDoor === "y"){
                isAlive = true;
                findKey = true;
                console.log("Enjoy your freedom " + name) + process.exit()
            }
            else if(openDoor === "n"){
                console.log("You're now trapped in my terminal forever") + process.exit()
            }
    } else if (playerChoice === "o"){
            findKey = false;
            console.log("door locked")
    }
}
    

