var Set = function() {
  var _set = Object.create(setPrototype);
  _set._storage = {};
  return _set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = 'is defined';
  }
};

setPrototype.contains = function(item) {
  if (this._storage[item] !== undefined) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
