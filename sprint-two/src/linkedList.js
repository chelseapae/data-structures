var LinkedList = function() {
  var list = {};
  list._head = null;
  list._tail = null;

  list.addToTail = function(value) {
    //create node using given value
    var last = Node(value);
    //change list.tail to equal this.tail
    // list.tail = last;

    if (list._head === null) {
      list._tail = last;
      list._head = last;
    }

    if (list._head) {
      list._tail.next = last;
      list._tail = last;
    }
  };

  list.removeHead = function() {
    //list._head.value
    //list._head.next is to be assigned to list._head

    // if (list._head === null) {
    //   return null;
    // }

    var oldValue = list._head.value;
    var newHead = list._head.next;
    list._head = newHead;
    return oldValue;
  };

  list.contains = function(target) {
    //while (list has next), loop, reassign node.next to node.next
    // create var thats equal to head
    var current = list._head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
