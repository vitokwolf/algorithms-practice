// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function (str) {
  let acronym = ''
  let words = str.split(' ')
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    acronym += word[0].toUpperCase()
  }
  return acronym
}
