export default class Node {
  constructor({ data = null, nextNode = null }) {
    this._data = data;
    this._nextNode = nextNode;
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  get nextNode() {
    return this._nextNode;
  }

  set nextNode(nextNode) {
    if (nextNode instanceof Node || nextNode === null) {
      this._nextNode = nextNode;
    } else {
      throw new TypeError("next node must be instance of Node or null");
    }
  }
}
