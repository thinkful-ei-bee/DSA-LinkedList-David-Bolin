'use strict';

class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    if (this.head === null) {
      this.head = new _Node(item, null, null);
    } else {
      this.head.prev = new _Node(item, this.head, null);
      this.head = this.head.prev;
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.head = new _Node(item, null, null);
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = new _Node(item, null, current);
    }
  }

  remove(item) {
    if (this.head === null) {
      console.log('List is empty');
      return;
    }

    let previous;
    let current = this.head;
    
    while (current.value !== item) {
      if (current.next === null) {
        console.log('Item not found');
        return;
      }
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    if (current.next) {
      current.next.prev = previous;
    }
  }

  find(item) {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    while (current.value !== item) {

      if (current.next === null) {
        return null;
      }
      current = current.next;
    }

    return current;
  }

  insertBefore(key, item) {
    if (this.head === null) {
      console.log('List is empty');
      return;
    }

    let current = this.head;

    if (current.value === key) {
      const newNode = new _Node(item, current, null);
      this.head = newNode;
      current.prev = newNode;
      return;
    }
    let previous;

    while (current !== null) {
      previous = current;
      current = current.next;
      if (current.value === key) {
        previous.next = new _Node(item, current, previous);
        current.prev = previous.next;
        return;
      }
    }

    console.log('Item not found');
    return;
  }

  insertAfter(key, item) {
    let current = this.head;

    while (current !== null) {
      if (current.value === key) {
        const next = current.next;
        current.next = new _Node(item, next, current);
        next.prev = current.next;
        return;
      }
      current = current.next;
    }
    console.log('item not found in insert after');
    return;
  }

  insertAt(position, item) {
    if (position === 0) {
      this.insertFirst(item);
      return;
    }

    let previous;
    let current = this.head;
    
    while (position > 0) {
      previous = current;
      current = current.next;
      position--;
    }

    previous.next = new _Node(item, current, previous);
    current.prev = previous.next;
  }
}

module.exports = DLinkedList;