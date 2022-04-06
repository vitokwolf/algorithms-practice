// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  let sortedArr = arr.sort((a, b) => b - a)
  let largest = sortedArr[0]
  let second = sortedArr[1]
  return largest * second
}
