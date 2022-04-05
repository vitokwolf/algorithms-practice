// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  let counter = 0
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u' ||
      str[i] === 'y'
    ) {
      counter++
    }
  }
  return counter
}
