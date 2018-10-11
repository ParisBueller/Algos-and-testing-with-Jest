// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// //Solution #1
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);
//     //if stringA and stringB dont have the same number of characters
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         //return false
//         return false;
//     }

//     for ( let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;   
// }
// //build a helper function that builds a character map
// const buildCharMap = (str) => {
//     const charMap = {};
//     //loop through our string and replace with regex, make lowerCase
//     for ( let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         //take our character map, assign a key to the charMap of the 
//         //current character, and increment the value at that character
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     //return charMap
//     return charMap;
// }

//Solution #2
const anagrams = (stringA, stringB) => {
    //compare stringA and stringB using our helper function below
    return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
    //replace with regex, convert to lower case, call .split() to convert to a string
    // call .sort() to sort the strings alphabetically, then join back together
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
