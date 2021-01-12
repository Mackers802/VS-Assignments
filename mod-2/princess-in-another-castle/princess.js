const readline = require("readline-sync");

function gameOver() {
    process.exit()
}
let statuss = ["small", "big", "powered Up", "dead"]

class Player {
    constructor(name) {
        this.namePicked = name;
        this.index = 1
        this.status = statuss[this.index];
        this.coins = 0
        this.hasPowerUp = this.gotPowerUp
        this.hasStar = false
        this.gotHit = function () {
            if (this.index === 0){
                this.status = statuss[3]
                console.log(`
Mario: "Got hit"

        Game Over:
                  Status: ${this.status} 
                  Has Star: ${this.hasStar}
                  Coins: ${this.coins}`)
                gameOver()
            }else {
                this.index--
                this.hasStar = false
                this.status = statuss[this.index]
            }
        }

        this.gotPowerUp = function (){
            if (this.index === 2) {
                this.hasStar = true
                this.status = statuss[2]
            } else {
                this.index++
                this.status = statuss[this.index]
            }
        }
        this.print = function () {
            return `
        Status: ${this.status} 
        Has Star: ${this.hasStar}
        Coins: ${this.coins}`
        }
    }
}

let playerChosen = readline.question("Would you like to be [M]ario or [L]uigi", { limit: ["m", "l"] });
function namePicked() {
    if (playerChosen === "m") {
        console.log(`You have chosen Mario`)
        return "Mario"
    } else if (playerChosen === "l") {
        console.log(`You have chosen Luigi`)
        return "Luigi"
    }
}

const player = new Player(namePicked())

let playGame = readline.question("Shall We Play? [Y]es, [N]o", { limit: ["y", "n"] });
if (playGame === "y") {
    setInterval(letsPlay, 500)
} else if (playGame === "n") {
    process.exit()
}

function letsPlay() {
    let randomStatusNum = (Math.random())
    // console.log(randomStatusNum)
    if (randomStatusNum >= 0 && randomStatusNum <= .33) {
        player.coins++
        console.log(`${player.namePicked}: "Recieved Coin"`)
    } else if (randomStatusNum >= .34 && randomStatusNum <= .66) {
        player.gotHit()
        console.log(`${player.namePicked}: "Got Hit"`)
    } else if (randomStatusNum >= .67 && randomStatusNum <= .99) {
        console.log(`${player.namePicked}: "Recieved Power Up"`)
        player.gotPowerUp()
    }
    console.log(player.print())
}


