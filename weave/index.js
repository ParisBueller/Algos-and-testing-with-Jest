// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    //create a new queue to weave two queue sources together
    const q = new Queue();
    //check that neither one of our weave sources are undefined
    while(sourceOne.peek() || sourceTwo.peek()) {
        //if sourceOne is not undefined
        if (sourceOne.peek()) {
            //add the last piece of data from sourceOne queue to our new queue
            q.add(sourceOne.remove());
        }
        //if sourceTwo is not undefined
        if(sourceTwo.peek()) {
            //add the last piece of data from sourceTwo queue to our new queue
            q.add(sourceTwo.remove());
        }       
    }
    //return the new queue
    return q;
}

module.exports = weave;
