// test/test.js
const assert = require('chai').assert;

describe('Array', function() {
  it('should start empty', function() {
    const arr = [];
    assert.equal(arr.length, 0);
  });
});