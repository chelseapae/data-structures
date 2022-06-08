var Stack = function() {
  //someInstance is the given object that we want to modify
  var someInstance = {};

  // Use an object with numeric keys to store values
  //storage is an object with numeric keys ex: {1: 'value', 2: 'value'} because these are NOT arrays.
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //we want to push the string value into our storage
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    //we want to delete the last key-value from storage
    //then return storage
    var array = Object.keys(storage);
    var last = array[array.length - 1];
    var value = storage[last];
    delete storage[last];
    return value;
  };

  someInstance.size = function() {
    //turn object into array
    //check length
    var arraylength = Object.keys(storage);
    return arraylength.length;
  };

  return someInstance;
};
