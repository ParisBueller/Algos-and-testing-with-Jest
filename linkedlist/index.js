// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        //create a new node and assign it to the head property,
        //to make sure we do not overwrite any existing node
        //we can pass it as the second argument to the new Node().
        this.head = new Node(data, this.head);     
    }

    size() {
        let counter = 0;
        //get a referennce to our first node in the LinkedList
        let node = this.head;
        //while a head node exists
        while (node) {
            //immediately increment by one if there is a head
            counter++;
            //crawl through the list by calling the next property,
            //will be either another node or the value null
            node = node.next;
        }
        
        return counter;
    }
}

module.exports = { Node, LinkedList };
