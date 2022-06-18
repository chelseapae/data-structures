describe('set', function() {
  var _set;

  beforeEach(function() {
    _set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(_set.add).to.be.a('function');
    expect(_set.contains).to.be.a('function');
    expect(_set.remove).to.be.a('function');
  });

  it('should add values to a _set', function() {
    _set.add('Susan Sarandon');
    _set.add('Danny Glover');
    expect(_set.contains('Danny Glover')).to.equal(true);
    expect(_set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should return false if the item is not contained in the _set', function() {
    _set.add('Susan Sarandon');
    _set.add('Danny Glover');
    expect(_set.contains('John Glover')).to.equal(false);
    expect(_set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a _set', function() {
    _set.add('Mel Gibson');
    _set.remove('Mel Gibson');
    expect(_set.contains('Mel Gibson')).to.equal(false);
  });

});
