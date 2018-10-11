// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //convert our number to a string to perform string split/reversal methods
    const rev = n.toString().split('').reverse().join('');
    //Math.sign returns 1 for positive, and -1 for negative numbers.
    //This helps deal with negative numbers passed that were reversed
    return parseInt(rev) * Math.sign(n);
    
    
}

module.exports = reverseInt;
