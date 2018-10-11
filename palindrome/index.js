// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Better Solution #1
// function palindrome(str) {
//     const rev = str.split('').reverse().join('');
 
//     return str === rev;
// }

//Good Solution #2
function palindrome(str) {
    //.every() is used to do a boolean check on every value in an array
    //turn str into an array and run every on it, which takes a callback
    //with the character(char) and index(i) as paramaters
    return str.split('').every((char, i) => {
    //-i : to make sure we increment through every step in the loop
    //-1 : str.length = 5, but index number is 4 due to zero indexing of array
    return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;
