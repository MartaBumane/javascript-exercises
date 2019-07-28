/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/\W+/, "").replace("!", "");
    stringB = stringB.replace(/\W+/, "").replace("!", "");
  
  
    let stringOne = [];
    for(let i = 0;i<stringA.length;i++){
      stringOne.push(stringA.charAt(i).toLowerCase());
      
    }
    
    let stringTwo =[];
    for(let i = 0;i<stringB.length;i++){
      stringTwo.push(stringB.charAt(i).toLowerCase());
      
    }
    
    stringOne = stringOne.sort();
    stringTwo = stringTwo.sort();
    stringA = stringOne.join("");
    stringB = stringTwo.join("");
  
    
    if(stringA== stringB){
        return true;
    }else{
        return false;
    }
  }
  

module.exports = anagrams;
