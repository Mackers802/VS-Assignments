// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])



// task 1) ---------------------------------

// const carrots = ["bright orange", "ripe", "rotten"]

// let mapVegetables = arr => {
//     return arr.map(carrot => ({ type: "carrot", name: carrot })
//     )
// }
// mapVegetables(carrots)



// task 2) ---------------------------------
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// let filterForFriendly = arr => {
//         return arr.filter(person => (person.friendly))}
// filterForFriendly(people)


// task 3)-----------------------------------
// let doMathSum = (a, b) => a + b 
// doMathSum(5,6)

// let produceProduct = (a, b) => a * b


// Task 4)------------------------------------
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// Extra Credit
// Use template literals to build the string
            //  -------------------------------------------
// let firstName = ["Kat"]
// let lastName = ["Stark"]
// let age = [40]


// function nameDrop(){
//     console.log(`"Hi ${firstName} ${lastName}, how does it feel to be ${age}`)
// }
// nameDrop(firstName, lastName, age)


// task 5)------------------------------------------------------------
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 let filterForDogs = arr => {arr.filter(animal => {if (animal.type === "dog") {true} else {false}})}
 filterForDogs(animals)


