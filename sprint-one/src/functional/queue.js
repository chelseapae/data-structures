var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var array = Object.keys(storage);
    var first = array[0];
    var value = storage[first];
    delete storage[first];
    return value;
  };

  someInstance.size = function() {
    var arraylength = Object.keys(storage);
    return arraylength.length;
  };

  return someInstance;
};
