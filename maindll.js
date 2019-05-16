'use strict';

function display(list) {
  if (list.head === null) {
    console.log('List is empty');
    return;
  }
  let current = list.head;

  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

function reverseList(list) {
  // this is even simpler than the singly linked list version
  let current = list.head;
  let previous = null;

  while(current !== null) {
    let newNext = current.prev;
    let newPrev = current.next;

    current.prev = newPrev;
    current.next = newNext;

    previous = current;
    current = current.prev;
  }

  list.head = previous;
  return list;

}

function mainDLL() {
  const DLinkedList = require('./dll');
  const DLL = new DLinkedList();

  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');

  console.log('List before changes:');
  display(DLL);

  DLL.insertLast('Tauron');
  DLL.remove('Picon');

  console.log('List after changes:');
  display(DLL);

  reverseList(DLL);
  console.log('List after reversal:');
  display(DLL);
}

mainDLL();