// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //Take our string and convert it into an object,
    //where the keys of the object are the characters,
    //and the values are the number of times that character has been found

    //create a new character map object
    const charMap = {};
    let max = 0;
    let maxChar = '';

    //loop through each character in our string(str)
    for (let char of str) {
        //if [char] already exists, increment by one ++
        if(charMap[char]) {
            charMap[char]++;
        } // if[char] does not yet exist, assign it to 1
        else {
            charMap[char] = 1;
        }
    }
    //use for in loop to iterate through an object
    for (let char in charMap) {
        //if current character is greater than our max.. 
        if (charMap[char] > max) {
            //update the max
            max = charMap[char];
            //update maxChar
            maxChar = char;
        }
    }

    return maxChar;

}

module.exports = maxChar;
