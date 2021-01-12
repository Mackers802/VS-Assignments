const readline = require("readline-sync");

const hero = readline.question("Welcome to Quest for freedom! What shall I call you Great Knight of the relm? ");
const char1 = "w";
const char2 = "i";
const char3 = "w"
const charAttack = "a";
const charRun = "r"
const charp = "p"
const charprint = "print"
const charaInventory = "i"
isAlive = true;
let globalRun = false;
// beatAll = false 


function Player(hero, heroHealth, weaponInventory){
    this.hero = hero;
    this.heroHealth = heroHealth;
    this.weaponInventory = weaponInventory;
    this.printPlayerStats = function(){
            console.log("Player: " + this.hero, "HP: " + this.heroHealth, "Weapons Trophy Inventory: " + this.weaponInventory)
    }
}
let player = new Player(hero, 100, "Fist's of Fury,")
console.log("New Player Created:", player);

const rules = readline.question("Great to make your aquaitnce Great Knight " + hero + ", Would you like to know the rules before beginning your quest? [y]es or [n]o " , {limit: ["y","n" ]});
if (rules === "y"){
    console.log("Alrighty " + hero + ", The rules are very simple. The further into the forest you walk, the more monsters you will come across. You may choose to ATTACK them if you'd like. If you do not ATTACK them you may choose to RUN...you will not always be able to escape, and you may have to turn and fight the Some monsters you will defeat but they will leave you beaten and bruised...some may kill you and that'll be GAME OVER. If and when you beat a monster you will be awarded a random amount of health. If you choose to run like a coward, you will have a 50% survival rate. GOOD LUCK" + hero);
}
else if (rules === "n"){
    console.log("Okay, living life dangerously I see, well " + hero + " Lets begin!")
}

const start = readline.question("Are you ready to take a walk into the forest or would you like to check your Weapons trophy inventory before heading into the forest? [w]]alk or [i]nventory", {limit: [char1, char2]});
if(start === char1){
} else if(start === char2){
    console.log([player.weaponInventory])
}

let enemyArr = []
function Enemy(enemyName, enemyHealth, awardedWeapon){
    this.enemyName = enemyName;
    this.enemyHealth = enemyHealth;
    this.awardedWeapon = awardedWeapon;
}    

let threeHeadedDog = new Enemy("the Three Headed Dog", 100, " The Mighty Hatchet of Death,");
let sirKingsley = new Enemy("Sir Kingsley Von WOLF haussen", 100, " A Bucket Of Muddy Water,");
let theTrees = new Enemy("The Killer of Trees", 100, " One Silver Knife,");
let lilWitch = new Enemy("Lil Bad Witch", 100, " One over Sized set of Chains,");
let tangleyvines = new Enemy("Tangley Vines", 100, " A Pair of Golden Gloves,");

function reward(player, enemy){
    player.weaponInventory = player.weaponInventory + enemy.awardedWeapon
    console.log(hero + " recieved " + enemy.awardedWeapon + " for slaying " + enemy.enemyName)
    const weaponInventory = readline.question("Would you like to see your [i]nventory or [w]alk onward into the forest?", {limit: [char2, char3]});
    if(weaponInventory === char2){
        console.log([player.weaponInventory])
    } else if (weaponInventory === char3){
    }
    walk();
}
function addHeroHp(player){
    let hpAdd = Math.floor(Math.random() * 75)
    player.heroHealth = player.heroHealth + hpAdd;
}
function addHeroHpWalk(player){
    let hpAdd = Math.floor(Math.random() * 15)
    player.heroHealth = player.heroHealth + hpAdd;
}
function attackFunc1(randomEnemy) {
    let heroAp1 = Math.floor(Math.random() * 100)
    let enemyAp1 = Math.floor(Math.random() * 100)
    randomEnemy.enemyHealth = randomEnemy.enemyHealth - heroAp1
    player.heroHealth = player.heroHealth - enemyAp1
    console.log(randomEnemy.enemyName + " Health status: " + randomEnemy.enemyHealth)
    console.log(hero + " Health status: " + player.heroHealth)
    if(randomEnemy.enemyHealth <= 0 && player.heroHealth >= 1){
        console.log("enemy Dead")
        addHeroHp(player);
        reward(player, randomEnemy);
    } else if(player.heroHealth <= 0){
        console.log("Unfortunetly " + hero + " has been shreaded into pieces")
        console.log("The GAME is OVER")
        isAlive = false;
    }
}

function playerRunning(randomEnemy){
    randomNum3 = (Math.random())
    if(randomNum3 > 0, randomNum3 < .5){
        console.log("You escaped safely this time");
        
    }
    else if(randomNum3 >= .51, randomNum3 < 1){
        console.log("You've been chased down..Now you're forced to fight for your life");
        attackFunc1(randomEnemy);
    }
}

function walk(){
    while(isAlive === true){ 
        player.printPlayerStats();
        enemyArr.push(threeHeadedDog, sirKingsley, theTrees,lilWitch, tangleyvines);
        let randomEnemy = enemyArr[Math.floor(Math.random() * enemyArr.length)];
        randomNum1 = (Math.random())
        if(randomNum1 > 0, randomNum1 < .33){
                let noEnemy = readline.question("No enemy here, Press [w] to walk on ahead", {limit: ["w"]});
                addHeroHpWalk(player);
                if(noEnemy = "w"){
                }
            }
            else if(randomNum1 >.34, randomNum1 < .66){
                while(player.heroHealth >= 0 && randomEnemy.enemyHealth >= 0 && globalRun === false ){
                    var attack = readline.question("You have come across " + randomEnemy.enemyName + " would you like to [a]ttack or [r]un?", {limit: [charAttack, charRun]});
                    if(attack === charAttack){
                        attackFunc1(randomEnemy);
                    }
                    else if(attack = charRun){
                        playerRunning(randomEnemy);
                    }
                }
            }
            else if(randomNum1 >= .67, randomNum1 <= 1){
                var noEnemy = readline.question("Look's like the coast is clear, Press [w] to walk on ahead", {limit: ["w"]});
                addHeroHpWalk(player);
                if(noEnemy = "w"){
                }
            } 
            // while(beatAll = false){
            // function allMonstersDead(){
            //     beatAll = true
            //     printPlayerStats();
            //     console.log("you have Beaten all Monsters and have escaped the forest.")
            //     console.log("Congradulations you have WON")
            } 
            // allMonstersDead();
        }
    walk();