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

    //insert a new node at the end of the linked list
    insertLast(data) {
        //find the last node in the linked list by invoking
        //previously authored getLast method(see above)
        const last = this.getLast();

        if(last) {
            //there are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            //our chain is empty!
            this.head = new Node(data);
        }
    }

    //find a node at a given index
    getAt(index) {  
        let counter = 0;
        let node = this.head;
        while (node) {
            //if the counter is equal to given index
            if (counter === index) {
                //return the node as we've found
                //what we're looking for
                return node;
            }
            //increment our counter
            counter++;
            //move our node to the next node in the chain
            node = node.next;
        }
        //if index not found, return null
        return null;
    }
    
    //remove a node at a given index
    removeAt(index) {
        //if list is empty, return
        if(!this.head) {
            return;
        }
        //if trying to remove node at index 0, reassign head
        if(index === 0) {
            this.head = this.head.next;
            return;
        }
        //get the node previous to the index 
        const previous = this.getAt(index - 1);
        //if previous doesn't exist, or the if that
        //node is the last in the list, return
        if(!previous || !previous.next) {
            return;
        }
        //remove the node @ index by reassigning 
        //previous.next to previous.next.next
        previous.next = previous.next.next;
 
    }

    //insert a node at a given index
    insertAt(data,index) {
        //if list is empty, insert a new Node
        if(!this.head) {
            this.head = new Node(data);
            return;
        }
        //if trying to insert node at index 0, reassign head and insert
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        //get the node previous to our index
        const previous = this.getAt(index - 1) || this.getLast();
        //create a new node at the passed index by calling previous.next
        const node = new Node(data, previous.next);
        //reassign link between inserted node and and the one previous
        previous.next = node;
    }

    //iterate through each node in a linked list
    //paramater passed is function to be called on each node
    forEach(fn) {
        //assign node to head
        let node = this.head;
        //assign couner for iterator
        let counter = 0;
        //while a node exists
        while (node) {
            //call our passed function(fn)
            fn(node, counter);
            //crawl through the nodes by calling node.next
            node = node.next;
            //increment counter by 1
            counter++;
        }
    } 

}

module.exports = { Node, LinkedList };
