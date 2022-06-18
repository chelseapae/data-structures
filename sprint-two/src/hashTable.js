//[[[vi, vi], [v2, v2]], [], []]
//[]

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if there's nothing at storage[index] then we need to add a bucket with a tuple (k&v) in it
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  }
  //check if storage[index] exists (if there is a value)
  if (this._storage.get(index) !== undefined) {
  //then loop through the bucket and check the k values to see if its the same
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      //if they are the same, reassign v
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        //if they aren't the same, add another array with a new k & v
        bucket.push([k, v]);
      }
    }
  }

  // this._storage.set(index, [[k, v]]);
  // console.log(this._storage.get(index));
  //create bucket
  //v is the bucket
  //create tuples within v
  //get to see if there's a bucket at that index, otherwise bucket equals an empty array
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    var bucket = this._storage.get(index);

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (bucket.length > 1) {
        for (var j = 0; j < tuple.length; j++) {
          if (tuple[j][0] === k) {
            return tuple[j][1];
          }
        }
      }
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
    return this._storage.get(index);
  }
};

HashTable.prototype.remove = function(k) {

  if (k === undefined) {
    return undefined;
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, col) {
    if (index === i) {
      col.splice(i, 1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


