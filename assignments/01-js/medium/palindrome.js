/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const testString = str
    .toLowerCase()
    .replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, "");

  if (testString.length === 0) return true;

  for (let i = 0; i < testString.length; i++) {
    if (testString[i] !== testString[testString.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

module.exports = isPalindrome;
