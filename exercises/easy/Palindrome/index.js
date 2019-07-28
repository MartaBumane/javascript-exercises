/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str) {
    // let charCount = str.length;
 
    // for (let i = 0; i < charCount/2; i++) {
    //     if (str[i] !== str[charCount - 1 - i]){
    //         return false;
    //     }
    // }  
    // return true;
    let reverseStirng = str.split("").reverse().join("");
    if(str === reverseStirng){
        return true;
    }else{
        return false;
    }

}

module.exports = palindrome;
