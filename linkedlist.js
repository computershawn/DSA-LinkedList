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




  // just prints out the data in list
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


module.exports = LinkedList