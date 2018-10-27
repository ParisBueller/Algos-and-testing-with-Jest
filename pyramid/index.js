// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//solution #1
// function pyramid(n) {
//     //calculate the mid point of our row
//     const midpoint = Math.floor((2 * n - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let column = 0; column < 2 * n - 1; column++) {
//            if (midpoint - row <= column && midpoint + row >= column) {
//                level += '#';
//            } else {
//                level += ' ';
//            }
//         }
//         console.log(level);
//     }
// }

//solution #2(recursion)
const pyramid = (n, row = 0, level = '') => {
    //if row is equal to n, 
    // return and stop running pyramid function
    if( row === n) {
        return;
    }
    //if level is equal to midpoint,
    // console.log the level and rerun pyramid function
    if( level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    
    const midpoint = Math.floor((2 * n - 1) / 2);
    //temp variable add will contain the character we need to add to our level string 
    let add;
    if( midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' ';
    }
    //return pyramid function with n, row, and include
    //the newest character(add) to our level
    pyramid(n, row, level + add);
}
module.exports = pyramid;
