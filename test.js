/**
 * Reference: https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e
 * 
 * 1. Mocha is a testing framework. (organize & execute tests)
 * 2. Two basic functions:
 *    2.1  describe(): Way to group our tests in Mocha, takes 2 args: name of the test group & callback function.
 *    2.2  it(): For individual test case, takes 2 args: string to explain what the test should do & callback function.
 * 3. Assertion Library: Tool to verify things are correct.
 */


//NodeJS built-in assert module
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
        //All we’re doing here is testing if [1,2,3].indexOf(4)); is equal to -1
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


