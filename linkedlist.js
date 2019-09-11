const LLNode = require('./linkedlist-node');


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert at first position
  insertAtFirst(data) {
    this.head = new LLNode(data, this.head);
    this.size++;
  }

  // insert at last position
  insertAtLastPosition(data) {
    let node = new LLNode(data);
    let current;

    if (!this.head) {
      this.insertAtFirst(data);
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      this.size++;
    }
  }

  // insert at given position (idx)
  insertAt(data, idx) {
    // idx is out of range
    if (idx > 0 && idx > this.size) return;

    if (idx === 0) {
      this.insertAtFirst(data);
      return;
    }

    const node = new LLNode(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < idx) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = node;
    node.next = current;
    this.size++;
  }

  // remove at given position
  removeAt(idx) {
    // idx out of range
    if (idx > 0 && idx > this.size) return;

    let current = this.head;
    let previous;
    let count = 0;
    if (idx === 0) {
      this.head = current.next;
    } else {
      while (count < idx) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
      this.size--;
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }


  // Print out the data in list
  printListData() {
    let myList = '[HEAD] --> '
    let current = this.head;
    while (current) {
      myList += current.data.toString()
      if(current.next) {
        myList += (' --> ')
      } else {
        myList += (' |')
      }
      current = current.next;
    }
    console.log(myList)
  }  


  // Reverse the linked list
  reverseList() {
    let myList = '[HEAD] --> '

    let prevNode, nextNode
    nextNode = this.head

    let allNodes = []

    while (nextNode) {
      allNodes.push(nextNode)
      nextNode = nextNode.next
    }

    let lastIndex = allNodes.length - 1
    allNodes[0].next = null
    for(let i = lastIndex; i > 0; i--) {
      nextNode = allNodes[i]
      prevNode = allNodes[i-1]
      nextNode.next = prevNode
    }
    this.head = allNodes[lastIndex]
  }    
}


module.exports = LinkedList