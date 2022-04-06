// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function (str) {
  let reverseStr = ''
  let words = str.split(' ')
  for (let i = words.length - 1; i >= 0; i--) {
    let word = words[i]

    if (i === 0) {
      reverseStr += word
    } else {
      reverseStr += word + ' '
    }
  }
  return reverseStr
}
