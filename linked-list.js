import Node from "./node.js";

export default class LinkedList {
  constructor(head = null) {
    this._head = head;
  }

  get head() {
    return this._head;
  }

  set head(head) {
    if (head instanceof Node || head === null) {
      this._head = head;
    } else {
      throw new TypeError("head must be instance of Node or null");
    }
  }

  append(value) {
    let newNode = new Node({ data: value });
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node({ data: value });
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let size = 0;
    let current = this.head;
    while (current !== null) {
      size++;
      current = current.nextNode;
    }
    return size;
  }

  tail() {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index > this.size()) {
      throw new Error("index out of bound");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    let current = this.head;
    if (this.head === null) {
      return;
    }
    if (this.head.nextNode === null) {
      this.head = null;
    }
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    console.log("here", current);
    current.nextNode = null;
  }

  contain(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.data) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      console.log("index out of bound");
      return;
    }
    console.log("value", value, "index", index);

    if (index === 0) {
      this.prepend(value);
    } else {
      let newNode = new Node({ data: value });
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.log("Index out of bound");
      return;
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    current.nextNode = current.nextNode.nextNode;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current != null) {
      result += `(${current.data}) -> `;
      current = current.nextNode;
    }
    result += "null";
    console.log(result);
  }
}
