// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        //create two new stacks in our constructor
        this.first = new Stack();
        this.second = new Stack();
    }
    //push records into our first stack
    add(record) {
        this.first.push(record);
    } 

    remove() {
        //while there are records in the first stack
        while(this.first.peek()) {    
            //we pop from the first stack and continue to push to the second stack    
            this.second.push(this.first.pop());
        }
        //pop off the second stack to get the first value from the first stack
        const record = this.second.pop();
        //while peek returns a value, pop the records from the second stack
        //and push them back into the first stack
        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }
        //return the initial record
        return record;
    }

    peek() {
        //while there are records in the first stack
        while(this.first.peek()) {
            //take that record and push it to the second stack
            this.second.push(this.first.pop());
        }
        //gives us a reference to the initial record
        const record = this.second.peek();
        //while there are records in the second stack
        while(this.second.peek()) {
            //take that record and push it back into the first stack
            this.first.push(this.second.pop());
        }
        
        return record;
    }
}

module.exports = Queue;
