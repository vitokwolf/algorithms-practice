// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  let result = {}

  for (let i = 0; i < str.length; i++) {
    let letter = str[i]

    if (!result[letter]) {
      result[letter] = 1
    } else {
      result[letter]++
    }
  }

  return result
}
