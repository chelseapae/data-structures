var BinarySearchTree = function(value) {
  var tree = {};
  tree._value = value;
  tree._left = undefined;
  tree._right = undefined;
  _.extend(tree, methods);
  return tree;
};
var methods = {};

methods.insert = function(value) {
  var currentNode = this;
  //newnode to be put into the tree (wherever it goes)
  //newnode constructor is a newtree
  var newNode = new BinarySearchTree(value);

  //while loop - while currentnodevalue doesn't equal the value passed in
  while (currentNode) {
    //if currentnodevalue is greater than value and if its empty
    //push value into
    if (currentNode._value < value && !currentNode._right) {
      currentNode._right = newNode;
      return;
    }
    if (currentNode._value < value && currentNode._right) {
      currentNode = currentNode._right;
    }
    //if not empty, then change currentnode to whats in the subtree (while loop will run again)

    //else (value is less than currentvalue)
    //other way, left
    if (currentNode._value > value && !currentNode._left) {
      currentNode._left = newNode;
      return;
    }
    if (currentNode._value > value && currentNode._left) {
      currentNode = currentNode._left;
    }
  }

  // if currentnodevalue equals the value, then null (bc tree has to be unique)
  if (currentNode._value === value) {
    return null;
  }
};

methods.contains = function(value) {
//create variable to this
  var currentNode = this;
  //while loop - while currentnode exists
  while (currentNode._value) {
    if (currentNode._value === value) {
      return true;
    }
    //create loop, check if currentnode.value < value
    if (currentNode._value < value) {
      //if yes, set current node equal to _right
      if (currentNode._right === undefined) {
        return false;
      }
      currentNode = currentNode._right;
      //if currennode.value > value
    }
    if (currentNode._value > value) {
      //if yes, set current node equal to left
      if (currentNode._left === undefined) {
        return false;
      }
      currentNode = currentNode._left;
    }
  }
};

methods.depthFirstLog = function(cb) {
  cb(this._value);
  //check if left exists
  if (this._left) {
    //if yes, depthFirstLog
    //cb(this.left);
    this._left.depthFirstLog(cb);
  }
  if (this._right) {
    //if yes, depthFirstLog
    //cb(this._right);
    this._right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
