/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array) {
    let second = 0;
    let arraySorted = array.sort(function(a, b){return a-b});
    return arraySorted[arraySorted.length-2];
}


module.exports = secondLargest;
