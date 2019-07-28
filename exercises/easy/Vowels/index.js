/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {
    let vowelsCount = 0;
    let stringLower = string.toLowerCase();

    for (let i = 0; i <= string.length; i++) {

    if (stringLower.charAt(i) == "a" || stringLower.charAt(i) == "e" || stringLower.charAt(i) == "i" || stringLower.charAt(i) == "o" || stringLower.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;

}

module.exports = vowels;
