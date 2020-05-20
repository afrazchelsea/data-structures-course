// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var check = str.split("").reverse().join("");
  if (check === str) return true;

  return false;
}

module.exports = palindrome;

/* Alternate Solution

function palindrome(str) {
  var check = str.split("");
  return check.every((char, i) => {
    return char === check[check.length - i - 1];
  });
}

*/
