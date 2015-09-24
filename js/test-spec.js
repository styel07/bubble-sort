mocha.setup('bdd');
var should = chai.should();
var expect = chai.expect;

//var app = require('app.js');

describe('Bubble Sort', function() {

  it('should be a function', function() {
    BubbleSort.should.be.a('function');
  });

  describe('Sort method', function() {
    var bubble = BubbleSort();
    var arrayToBePassed = [6, 1, 3, 4];
    bubble.sort(arrayToBePassed);

    it('should be an array', function() {
      arrayToBePassed.should.to.be.an('array');
    });

    // length

    // order 1, 3, 4, 6

    //
  });
});
mocha.run();