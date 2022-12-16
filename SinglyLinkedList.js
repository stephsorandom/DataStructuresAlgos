Problem #2: Singly Linked List:

//Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL, please write the methods for:
- Push() 
- Pop()


class Node { 
    //need value and next for Node
    constructor(val){ 
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList { 
    //need the 3 parts. head, tail, length
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

//ADDING ELEMENT
push(val) {
    //create new node
    let newNode = new Node(val);

    //if no head, then L.L is empty
    if (!this.head) {
        //set head and tail to the New Node
        this.head = newNode;
        this.tail = newNode;
    } else {
        //else if there was already a head, set next property on tail
        this.tail.next = newNode;
        //set tail for new Node
        this.tail = newNode;
    }
    //increment the length of the L.L
    this.length++;
    //return L.L
    return this;
}

//REMOVING ELEMENT
pop(val) {
    //if no head, means empty L.L, return undefined
    if (!this.head) return undefined;
    //declare 2 variables
    let current = this.head;
    let newtail = current;

    //loops through the L.L until the end
    while (current.next) {
        //move new Tail to current spot
        newtail = current;
        //move to your next node, last is undefined
        current = current.next;
    }

    //set tail to be 2nd to last node
    this.tail = newtail; 
    //set next property of 2nd to last, to be equal to null
    this.tail.next = null;

    //need to decrement the length of L.L, since 1 eleme3nt was removed
    this.length--;

    //if L.L. is empty after you removed the element above, set head and tail to null
    if (!this.length) {
        this.head = null;
        this.tail = null;
    }
    //return the value of removed node
    return current;
}