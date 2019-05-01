// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative solution
function fib(n) {
    //for 0 and 1, there are no previous two entries to add
    //so we set result to an array of 0 and 1
    const result = [0, 1];
    //since our result is an array of [0, 1], we start our iteration at 2
    for(let i = 2; i <=n; i++) {
        //pull out the previous  two records (a, b)
        const a = result[i - 1];
        const b = result[i - 2];
        //add those previous two results
        result.push(a + b);
    }
    //return result at n
    return result[n];
}

module.exports = fib;
