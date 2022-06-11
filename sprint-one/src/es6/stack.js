class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    var array = Object.keys(this.storage);
    var last = array[array.length - 1];
    var value = this.storage[last];
    delete this.storage[last];
    return value;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}


