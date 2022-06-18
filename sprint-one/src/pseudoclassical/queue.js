var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar ,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var array = Object.keys(this.storage);
  var first = array[0];
  var value = this.storage[first];
  delete this.storage[first];
  return value;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
