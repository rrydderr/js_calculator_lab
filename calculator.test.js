const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test.skip('can add two large positive numbers', () => { 
    expected = 100;
    actual = sum(50, 50);
    expect(actual).toBe(expected);
  });

  test.skip('can add two negative numbers', () => {
    expected = -7;
    actual = sum(-3, -4);
    expect(actual).toBe(expected);
  });

  test.skip('can add zero', () => {
    expected = 5;
    actual = sum (5, 0);
    expect (actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
