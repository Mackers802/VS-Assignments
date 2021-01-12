// Write a short program that prints each number from 1 to 100 on a new line.
                      // for( var i = 0; i <= 100; i++){
                      //   arr = i
                      //   console.log(arr)
                      // }

// For each multiple of 3, print "Fizz" instead of the number.
                // multiples of 3 = "fizz"
                // numbers to words string 
                // 

// For each multiple of 5, print "Buzz" instead of the number.
                // multiples of 5 = "buzz"
                // numbers to words string
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
                // multiples of 3 & 5 = "FizzBuzz"
                //  numbers to words string 

// Example:
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// ect.

  for(var i = 1; i <= 100; i++){
    if (i % 15 === 0){
    console.log("fizzBuzz")}
    else if(i % 3 === 0){
      console.log("fizz")}
    else if(i % 5 === 0){
      console.log("buzz")}
    else {
      console.log(i)
    }
}

