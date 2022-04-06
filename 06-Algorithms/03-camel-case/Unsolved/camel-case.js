// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  let result = ''
  let arr = str.split(' ')

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].toLowerCase()

    if (i === 0) {
      result += word
    } else {
      for (let x = 0; x < word.length; x++) {
        if (x === 0) {
          result += word[0].toUpperCase()
        } else {
          result += word[x]
        }
      }
    }
  }

  return result
}
