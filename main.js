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

function size(list) {
  let count = 0;
  let current = list.head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
}

function isEmpty(list) {
  if (list.head === null) {
    return true;
  }

  return false;
}

function findPrevious(list, item) {
  if (list.head === null) {
    console.log('not found');
    return;
  }

  if (list.head.value === item) {
    console.log('item is first in list');
    return;
  }

  let previous = list.head;
  let current = list.head.next;

  while (current.value !== item) {
    previous = current;
    current = current.next;
  }

  return previous;
}

function findLast(list) {
  if (list.head === null) {
    console.log('list is empty');
    return;
  }

  let current = list.head;

  while (current.next !== null) {
    current = current.next;
  }

  return current;
}

// Exercise 5 -- reverse list

function reverseList(list) {
  let current = list.head;
  let previous = null;

  while(current !== null) {
    let currentNext = current.next;
    current.next = previous;
    previous = current;
    current = currentNext;
  }

  list.head = previous;

  return list;

}

// 6. 3rd from End

function thirdFromEnd(list) {
  if (!list.head || !list.head.next || !list.head.next.next) {
    console.log('list is too short');
    return;
  }

  let current = list.head;

  while (current.next.next.next !== null) {
    current = current.next;
  }

  return current.value;
}

function findMiddle(list) {
  // if there are two middles this gives the 2nd one
  let currentLast = list.head;
  let currentMid = list.head;
  let count = 1;

  if (currentLast === null) {
    return null;
  }

  while (currentLast !== null) {
    if (count % 2 === 0) {
      currentMid = currentMid.next;
    }
    currentLast = currentLast.next;
    count++;
  }

  return currentMid.value;
}

function checkCycles(list) {
  if (!list.head) {
    return false;
  }
  
  if (!list.head.next) {
    return false;
  }

  let slowCounter = list.head;
  let fastCounter = list.head.next;

  while (fastCounter.next !== null) {
    if (fastCounter.next.next === null) {
      return false;
    }
  
    if (fastCounter.next === slowCounter || fastCounter.next.next === slowCounter) {
      return true;
    }

    fastCounter = fastCounter.next.next;
    slowCounter = slowCounter.next;
  }

  return false;
  
}

function main() {
  const LinkedList = require('./linkedlist.js');
  const SLL = new LinkedList();

  const cycleList = new LinkedList();
  cycleList.insertFirst(1);
  cycleList.insertLast(2);
  cycleList.insertLast(3);
  cycleList.insertLast(4);
  cycleList.head.next.next.next = cycleList.head;

  SLL.insertFirst('Apollo');
  ['Boomer', 'Helo', 'Husker', 'Starbuck'].forEach(name => SLL.insertLast(name));
  SLL.remove('squirrel');

  SLL.insertLast('Tauhida');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(2, 'Kat');
  SLL.remove('Tauhida');

  display(SLL);
  console.log('Size:', size(SLL));
  console.log('Empty:', isEmpty(SLL));
  console.log('Before Boomer:', findPrevious(SLL, 'Boomer'));
  console.log('Last node: ', findLast(SLL));
  console.log('List being reversed:');
  reverseList(SLL);
  display(SLL);
  console.log('Third from end (after reversing):', thirdFromEnd(SLL));
  console.log('Middle element:', findMiddle(SLL));
  console.log('Cycles in cycleList:', checkCycles(cycleList));
  console.log('Cycles in our regular list:', checkCycles(SLL));
}

main();

// Exercise 4
// WhatDoesThisProgramDo(lst) removes duplicates from a list

