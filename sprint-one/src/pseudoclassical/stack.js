var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar ,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var array = Object.keys(this.storage);
  var last = array[array.length - 1];
  var value = this.storage[last];
  delete this.storage[last];
  return value;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


