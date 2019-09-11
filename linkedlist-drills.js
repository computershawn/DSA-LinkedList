const LinkedList = require('./linkedlist')


const main = () => {
  const myLinkedList = new LinkedList();
  myLinkedList.insertAtLastPosition('n0');
  myLinkedList.insertAtLastPosition('n1');
  myLinkedList.insertAtLastPosition('n2');
  myLinkedList.insertAtLastPosition('n3');
  myLinkedList.insertAtLastPosition('n4');
  console.log('Linked List')
  myLinkedList.printListData();
  console.log('---------');
  myLinkedList.reverseList();
  console.log('Linked List After Reverse')
  myLinkedList.printListData();
  console.log('---------');
}

main()