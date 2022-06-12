var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create node using given value
    var last = Node(value);
    //change list.tail to equal this.tail
    // list.tail = last;

    if (list.head === null) {
      list.tail = last;
      list.head = last;
    }

    if (list.head) {
      list.tail.next = last;
      list.tail = last;
    }
  };

  list.removeHead = function() {
    //list.head.value
    //list.head.next is to be assigned to list.head

    // if (list.head === null) {
    //   return null;
    // }

    var oldValue = list.head.value;
    var newHead = list.head.next;
    list.head = newHead;
    return oldValue;
  };

  list.contains = function(target) {
    //while (list has next), loop, reassign node.next to node.next
    // create var thats equal to head
    var current = list.head;
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
