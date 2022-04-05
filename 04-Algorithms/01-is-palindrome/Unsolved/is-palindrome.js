// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  let reverseStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  if (str === reverseStr) {
    return true
  } else {
    return false
  }
}
