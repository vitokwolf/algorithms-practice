// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]

    // switch case method

    // compare to true false statements

    // switch (true) {
    //   case num % 3 === 0 && num % 5 === 0:
    //     console.log('Fizz Buzz')
    //     break
    //   case num % 3 === 0 && num % 5 !== 0:
    //     console.log('Fizz')
    //     break
    //   case num % 3 !== 0 && num % 5 === 0:
    //     console.log('Buzz')
    //     break

    //   default:
    //     console.log(num)
    // }

    // compare to the value

    switch (0) {
      case num % 15:
        console.log('Fizz Buzz')
        break
      case num % 3:
        console.log('Fizz')
        break
      case num % 5:
        console.log('Buzz')
        break
      default:
        console.log(num)
    }

    // if/else statements method

    //   if (num % 3 === 0 && num % 5 === 0) {
    //     console.log('Fizz Buzz')
    //   } else if (num % 3 === 0) {
    //     console.log('Fizz')
    //   } else if (num % 5 === 0) {
    //     console.log('Buzz')
    //   } else {
    //     console.log(num)
    //   }
  }
}
