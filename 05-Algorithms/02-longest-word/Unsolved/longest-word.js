// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function (str) {
  let result = ''
  let arr = str.split(' ')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > result.length) {
      result = arr[i]
    }
  }
  return result
}
