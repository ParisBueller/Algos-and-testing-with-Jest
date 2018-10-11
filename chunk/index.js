// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//solution #1
// function chunk(array, size) {
//     //create empty array to push to
//     const chunked = [];
//     //iterate through our array at each element
//     for(let element of array) {
//         //get last element inside of the array
//         const last = chunked[chunked.length -1];
//         //if the last element does not exist
//         //or, its length is equal to chunk size
//         if(!last || last.length === size) {
//             //push the element to empty chunked array
//             chunked.push([element]);
//         } //otherwise, push our element to the last element
//         else {
//             last.push(element);
//         }
//     }
//     //return our chunked array
//     return chunked;
    
// }

//solution #2
function chunk(array, size) {
    //create empty array to push to
    const chunked = [];
    //creat index
    let i = 0;
    //while index is less than the length of array
    while( i < array.length) {
        //push a chunk the length of size to our empty chunked array
       chunked.push(array.slice(i, i + size));
       //increment our base index by adding size
        i += size;
    }
    //return our chunked array
    return chunked;
}

module.exports = chunk;
