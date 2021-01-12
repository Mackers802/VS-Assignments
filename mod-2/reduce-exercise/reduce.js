// // 1) Turn an array of numbers into a total of all the numbers
// const arr = [1,2,3]
// const result = arr.reduce(function(final, num){
//     final = final + num
//     return final
// })
// console.log(result)


// 2) Turn an array of numbers into a long string of all those numbers.
// const numArr = [1,2,3]
// const result = numArr.reduce(function(final,string){
//     final += string.toString()
//     return final
// })
// console.log(result)


// 3) Turn an array of voter objects into a count of how many people voted
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// const result = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final++
//     }
//     return final
// },0)
// console.log(result)
// console.log(totalVotes(voters)); // 7

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const result = wishlist.reduce(function(final, num){
//         final = final + num.price
//     return final
// },0)
// console.log(result)
//  // 227005

// 5) Given an array of arrays, flatten them into a single array
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
// const result = arrays.reduce(function(final,num){
//     final = final + "," + num
//     return final 
// })
// console.log(result)
// ["1", "2", "3", true, 4, 5, 6];

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the 
                    // ages 18-25, 
                    // how many from 26-35, 
                    // how many from 36-55, and 
// how many of each of those age ranges actually voted. 
// The resulting object containing this data should have 6 properties. 
// See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const numYoungVotes = voters.reduce(function(final, vote){
if(vote.age >= 18 && vote.age <=25){
    final.numYoungPeople++
        if(vote.voted){
            final.numYoungVotes++
        }
} else if(vote.age >= 26 && vote.age <=35){
    final.numMidPeople++
        if(vote.voted){
            final.numMidVotes++
        }
}
else if(vote.age >= 36 && vote.age <=55){
    final.numOldVotesPeople++
        if(vote.voted){
            final.numOldsPeople++
        }
}
return final
}, {numYoungPeople: 0, numYoungVotes: 0, numMidPeople: 0, numMidVotes: 0, numOldVotesPeople: 0, numOldsPeople: 0})
console.log(numYoungVotes)


//  // Returned value shown below:
// /*
// { numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidsPeople: 4,
//   numOldVotesPeople: 3,
//   numOldsPeople: 4 
// }
// */