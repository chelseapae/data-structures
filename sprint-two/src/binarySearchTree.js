var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = undefined;
  tree.right = undefined;
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
    if (currentNode.value < value && !currentNode.right) {
      currentNode.right = newNode;
      return;
    }
    if (currentNode.value < value && currentNode.right) {
      currentNode = currentNode.right;
    }
    //if not empty, then change currentnode to whats in the subtree (while loop will run again)

    //else (value is less than currentvalue)
    //other way, left
    if (currentNode.value > value && !currentNode.left) {
      currentNode.left = newNode;
      return;
    }
    if (currentNode.value > value && currentNode.left) {
      currentNode = currentNode.left;
    }
  }

  //if currentnodevalue equals the value, then null (bc tree has to be unique)
  // if (currentNode.value === value) {
  //   return null;
  // }
};

methods.contains = function(value) {
//create variable to this
  var currentNode = this;
  //while loop - while currentnode exists
  while (currentNode.value) {
    if (currentNode.value === value) {
      return true;
    }
    //create loop, check if currentnode.value < value
    if (currentNode.value < value) {
      //if yes, set current node equal to right
      if (currentNode.right === undefined) {
        return false;
      }
      currentNode = currentNode.right;
      //if currennode.value > value
    }
    if (currentNode.value > value) {
      //if yes, set current node equal to left
      if (currentNode.left === undefined) {
        return false;
      }
      currentNode = currentNode.left;
    }
  }
};

methods.depthFirstLog = function(cb) {
  cb(this.value);
  //check if left exists
  if (this.left) {
    //if yes, depthFirstLog
    //cb(this.left);
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    //if yes, depthFirstLog
    //cb(this.right);
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
