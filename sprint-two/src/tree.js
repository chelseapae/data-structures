var Tree = function(value) {
  var newTree = {};
  newTree._value = value;
  newTree._children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var nextTree = new Tree(value);
  this._children.push(nextTree);
};

treeMethods.contains = function(target) {
  if (this._value === target && this._value !== undefined) {
    return true;
  }

  if (this._children) {
    for (var child = 0; child < this._children.length; child++) {
      if (this._children[child].contains(target)) {
        return true;
      }
    }
  }

  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
