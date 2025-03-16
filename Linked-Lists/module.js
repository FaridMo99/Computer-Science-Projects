export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode !== null && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  getSize() {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      counter++;
      currentNode = currentNode.nextNode;
    }

    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (currentNode === null) {
        return null;
      }
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let currentNode = this.head;

    while (
      currentNode.nextNode !== null &&
      currentNode.nextNode.nextNode !== null
    ) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let arrString = [];

    while (currentNode !== null) {
      arrString.push(` ${currentNode.value.toString()} -> `);
      currentNode = currentNode.nextNode;
    }

    if (currentNode === null) {
      arrString.push("null");
    }

    return arrString.join("");
  }
}

export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
