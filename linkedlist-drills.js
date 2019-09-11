const LinkedList = require('./linkedlist')


const main = () => {
  const myLinkedList = new LinkedList();
  myLinkedList.insertAtFirst(100);
  myLinkedList.insertAtFirst(200);
  myLinkedList.insertAtLastPosition(50);
  myLinkedList.insertAt(400, 2);
  myLinkedList.printListData();
  console.log('---------');
  myLinkedList.insertAt(600, 1);
  myLinkedList.printListData();
  console.log('---------');
  myLinkedList.removeAt(2);
  myLinkedList.printListData();  
}


main()