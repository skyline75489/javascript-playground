var nextdate = require('../lib/nextdate.js');
var assert = require('assert');

describe('nextdate()', function() {
  it('should work fine with a random normal date', function(){
    var d = nextdate.nextdate(1999, 4, 5)
    assert.equal(d.year, 1999);
    assert.equal(d.month, 4);
    assert.equal(d.day, 6);
  })
  it('should know about leap year', function(){
    var d = nextdate.nextdate(2000, 2, 28)
    assert.equal(d.year, 2000);
    assert.equal(d.month, 2);
    assert.equal(d.day, 29);
  })
  it('should know about non-leap year', function(){
    var d = nextdate.nextdate(1999, 2, 28)
    assert.equal(d.year, 1999);
    assert.equal(d.month, 3);
    assert.equal(d.day, 1);
  })
  it('should work fine when crossing month', function(){
    var d = nextdate.nextdate(1999, 6, 30)
    assert.equal(d.year, 1999);
    assert.equal(d.month, 7);
    assert.equal(d.day, 1);
  })
})
