// Write code to return the largest number in the given array

var maxNum = function (arr) {
  arr.sort((a, b) => a - b)
  return arr[arr.length - 1]
}
