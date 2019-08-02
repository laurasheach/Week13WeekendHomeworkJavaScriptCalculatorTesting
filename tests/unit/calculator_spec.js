var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // calculator.add() - add 1 to 4 and get 5
  it('should add correctly', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('should subtract correctly', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('should multiply correctly', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('should divide correctly', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  // calculator.numberClick() - concatenate multiple number button clicks
  it('should concatenate mulitple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 12);
  })

  // calculator.operatorClick() - chain multiple operations together
  it('should chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.subtract(3);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 16);
  })

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.clearClick();
    calculator.operatorClick('+');
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 18);
  })

});
