/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input) {
    input = input.replace("_", " ").replace("'","");

    let words = input.split(/\W+/);

    let newArray= words.map(word => word.charAt(0).toUpperCase());
    
    return newArray.join('');
}
module.exports = parse;