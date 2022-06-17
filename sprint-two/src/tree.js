var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var nextTree = new Tree(value);
  this.children.push(nextTree);
};

treeMethods.contains = function(target) {
  if (this.value === target && this.value !== undefined) {
    return true;
  }

  if (this.children) {
    for (var child = 0; child < this.children.length; child++) {
      if (this.children[child].contains(target)) {
        return true;
      }
    }
  }

  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
