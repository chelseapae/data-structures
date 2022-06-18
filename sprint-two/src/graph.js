

// Instantiate a new graph
var Graph = function() {
  //var name = object.create(Graph.prototype)
  this._container = {};
  //return name
};

//{1: [], 2: []}
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._container[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var nodeNames = Object.keys(this._container);
  for (var i = 0; i < nodeNames.length; i++) {
    if (Number(nodeNames[i]) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var currentNode = this._container[node];
  for (var i = 0; i < currentNode.length; i++) {
    this.removeEdge(node, currentNode[i]);
  }
  delete this._container[node];
};

// Returns a boolean indicating whether two specified nodes are connected. Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this._container[fromNode].length; i++) {
    for (var j = 0; j < this._container[toNode].length; j++ ) {
      if (this._container[fromNode][i] === toNode && this._container[toNode][j] === fromNode ) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //check if nodes are present
  this._container[fromNode].push(toNode);
  this._container[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFrom = this._container[fromNode].indexOf(toNode);
  var indexTo = this._container[toNode].indexOf(fromNode);
  this._container[fromNode].splice(indexFrom, 1);
  this._container[toNode].splice(indexTo, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this._container) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


