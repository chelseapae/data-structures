class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var array = Object.keys(this.storage);
    var first = array[0];
    var value = this.storage[first];
    delete this.storage[first];
    return value;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
