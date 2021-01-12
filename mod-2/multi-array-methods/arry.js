var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

let people = peopleArray.filter(function peopleArray(arr){
    if(arr.age > 18){
        return true
    }
})
// console.log(people)

let alpha = people
alpha.sort(function(a, b){
    if(a.lastName < b.lastName){
        return -1
    }
    else if(a.lastName > b.lastName){
        return 1
    }
    else{
        return 0
    }
})
// console.log(alpha)
let html = alpha
const finished = html.map(function html(arr){
    let li = "<li>" + arr.firstName + " " + arr.lastName + " " + arr.age + "</li>"
return li
})
console.log(finished)

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, 
// and where each name and age is embedded in a string that looks like an HTML <li> element.
 
 /*
 Output: 
 [ 
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>" 
 ]
 */
