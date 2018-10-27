// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution #1
// function vowels(str) {
//     //define a counter variable starting at 0
//     let count = 0;
//     //define a checker array to hold our vowels
//     const checker = ['a', 'e', 'i', 'o', 'u'];
//     //iterate through str
//     for (let char of str.toLowerCase()) {
//         //if current character includes a vowel(checker)
//         if(checker.includes(char)) {
//             //increment by 1
//             count++;
//         }
//     }

//     return count;
// }

// solution #2 (regex)
const vowels = (str) => {
    //match the given vowels using regex with two flags g and i,
    //return will be an array of matches or null if no matches
    //g makes sure we dont stop at the first match
    //i(insensitive) makes the match insensitive to capital or lower case
    const matches = str.match(/[aeiou]/gi)
    //if an array, return matches.length, if null return 0
    return matches ? matches.length : 0;
}

module.exports = vowels;
