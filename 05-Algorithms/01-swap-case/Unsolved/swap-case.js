// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function (str) {
  let resultStr = ''
  for (let i = 0; i < str.length; i++) {
    let capitalized = str[i].toUpperCase()

    if (str[i] === capitalized) {
      resultStr += str[i].toLowerCase()
    } else {
      resultStr += str[i].toUpperCase()
    }
  }
  return resultStr
}
