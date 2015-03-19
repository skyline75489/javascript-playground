var nextdate = require('../lib/nextdate.js');
var assert = require('assert');

describe('nextdate()', function() {
  it('should work fine with a random normal date', function(){
    var d = nextdate.nextdate(1999, 4, 5)
    assert.equal(d.getFullYear(), 1999);
    assert.equal(d.getMonth(), 4);
    assert.equal(d.getDate(), 6);
  })
  it('should know about leap year', function(){
    var d = nextdate.nextdate(2000, 2, 28)
    assert.equal(d.getFullYear(), 2000);
    assert.equal(d.getMonth(), 2);
    assert.equal(d.getDate(), 29);
  })
})
