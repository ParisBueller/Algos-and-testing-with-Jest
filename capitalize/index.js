// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// //solution #1*
// function capitalize(str) {
//     //create an empty array to store our capitalized words
//     const words = [];
//     //loop through each word, splitting at the space
//     for (let word of str.split(' ')) {
//         //take the first letter [0] of each word and capitalize it
//         // then concatenate it with the rest of the word with .slice(1)
//         //and push it to our words array
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     //join all our words back together and return them
//    return words.join(' ');
// }

//solution #2
function capitalize(str) {
    //capitalize our first letter of the sentence
    let result = str[0].toUpperCase();
    //loop through our words starting at 1
    for (let i = 1; i < str.length; i++) {
        //if the character to the left [i - 1] is a space..
        if(str[i - 1] === ' ') {
            //capitalize that letter
           result += str[i].toUpperCase();
        } else {
            //otherwise, return that letter
            result += str[i];
        }
    }
    //return our result string
    return result;
}

module.exports = capitalize;
