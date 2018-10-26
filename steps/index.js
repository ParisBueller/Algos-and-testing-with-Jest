// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution #1
// function steps(n) {
//     //iterate through rows
//     for(let row = 0; row < n; row++) {
//         let stair = '';
//         //iterate through our columns
//         for( let column = 0; column < n; column++) {
//             //if column is less than or equal to row..
//             if (column <= row) {
//                 //add a number to our stair 
//                 stair += '#';
//             } else {
//                 //if column greater than row, add a space to our stair
//                 stair += ' ';
//             }
//         }

//         console.log(stair);
//     }    
// }

//solution #2 (recursion)
//make sure to define row initial value
const steps = (n, row = 0, stair = '') => {
    //always find a base case first
    if (n === row) {
        return;
    }
    //make sure to define stair initial value
    if ( n === stair.length) {
        console.log(stair);
        //call steps but increment by one. 
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

module.exports = steps;
