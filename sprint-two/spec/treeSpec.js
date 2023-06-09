describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "_value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('_value')).to.equal(true);
  });

  it('should add _children to the tree', function() {
    tree.addChild(5);
    expect(tree._children[0]._value).to.equal(5);
  });

  it('should return true for a _value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a _value that the tree does not contain', function() {
    tree.addChild(5);
    expect(tree.contains(34)).to.equal(false);
  });

  it('should return false for a _value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add _children to a tree\'s child', function() {
    tree.addChild(5);
    tree._children[0].addChild(6);
    expect(tree._children[0]._children[0]._value).to.equal(6);
  });

  it('should correctly detect nested _children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree._children[0].addChild(7);
    tree._children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});
