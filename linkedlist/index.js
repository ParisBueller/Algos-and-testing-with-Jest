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

    //insert a new node at the front of the linked list
    insertFirst(data) {
        //create a new node and assign it to the head property,
        //to make sure we do not overwrite any existing node
        //we can pass it as the second argument to the new Node().
        this.head = new Node(data, this.head);     
    }

    //get the size of a linked list
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

    //return the first node in a linked list
    getFirst() {
        return this.head;
    }

    //return the last node in a linked list
    getLast() {
        //if no nodes in linked list, return null right away
        if(!this.head) {
            return null;
        }
        //while a node exists, update the node to the next node in our chain
        let node = this.head;
        while (node) {
            //if no node exists, return  the current node as it is the last 
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    //clear the linked list
    clear() {
        this.head = null;
    }

    //remove only the first node in a linked list
    removeFirst() {
        //if nothing is assigned to head node
        //linked list must be empty, return
        if (!this.head) {
            return;
        }
        //reassign the head node to the next node
        //in the linked list
        this.head = this.head.next;

    }

    //remove the last node in a linked list
    removeLast() {
        //if nothing is assigned to head node
        //linked list must be empty, return
        if (!this.head) {
            return;
        }
        //if no node after head node
        //assign the head to eqaul null
        if(!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        //while node.next exists(i.e. !null)
        while(node.next) {
            //reassign previous to node
            //reassign node to node.next
            previous = node;
            node = node.next;
        }
        //once node.next = null, assign the previous nodes
        //next property to be null
        previous.next = null;
    }

}

module.exports = { Node, LinkedList };
