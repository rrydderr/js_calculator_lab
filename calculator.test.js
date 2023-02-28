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

  test('can add two large positive numbers', () => { 
    expected = 100;
    actual = sum(50, 50);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -7;
    actual = sum(-3, -4);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum (5, 0);
    expect (actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(7, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 4553;
    actual = subtract(5481, 928);
    expect(actual).toBe(expected);
  });
});



describe('multiply', () => {

  test('can multiply two negative numbers', () => {
    expected = 25;
    actual = multiply(-5, -5);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply (23, 0);
    expect (actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two large positive numbers', () => { 
    expected = 1847.5;
    actual = divide(36950, 20);
    expect(actual).toBe(expected);
  });

  test('can divide two small positive numbers', () => {
    expected = 3;
    actual = divide(9, 3);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
    test('can modulus two small positive numbers', () => {
      expected = 1;
      actual = modulus(13, 3);
      expect(actual).toBe(expected);
    });


  test('can modulus two negative numbers', () => {
    expected = -4;
    actual = modulus(-36, -8);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
test('can determine whether number is even', () => {
  expected = true;
  actual = even(96);
  expect(actual).toBe(expected);
});

test('can determine whether number is even', () => {
  expected = false;
  actual = even(55);
  expect(actual).toBe(expected);
});
});

// describe('odd', () => {
//   test('can determine whether number is odd', () => {
//     expected = true;
//     actual = odd(97);
//     expect(actual).toBe(expected);
//   });

//   test('can determine whether number is odd', () => {
//     expected = false;
//     actual = odd(48);
//     expect(actual).toBe(expected);
//   });

  describe('odd', () => {
    test('can determine whether number is odd', () => {
      expected = true;
      actual = odd(5);
      expect(actual).toBe(expected);
    });
  
    test('can determine whether number is odd', () => {
      expected = false;
      actual = odd(48);
      expect(actual).toBe(expected);
    });
});
