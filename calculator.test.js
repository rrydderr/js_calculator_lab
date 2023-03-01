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
    const expected = 5;
    const actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 100;
    const actual = sum(50, 50);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const expected = -7;
    const actual = sum(-3, -4);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    const expected = 5;
    const actual = sum (5, 0);
    expect (actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    const expected = 5;
    const actual = subtract(7, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    const expected = 4553;
    const actual = subtract(5481, 928);
    expect(actual).toBe(expected);
  });
});



describe('multiply', () => {

  test('can multiply two negative numbers', () => {
    expected = 25;
    const actual = multiply(-5, -5);
    const expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    const expected = 0;
    const actual = multiply (23, 0);
    expect (actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two large positive numbers', () => { 
    const expected = 1847.5;
    const actual = divide(36950, 20);
    expect(actual).toBe(expected);
  });

  test('can divide two small positive numbers', () => {
    const expected = 3;
    const actual = divide(9, 3);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
    test('can modulus two small positive numbers', () => {
      const expected = 1;
      const actual = modulus(13, 3);
      expect(actual).toBe(expected);
    });


  test('can modulus two negative numbers', () => {
    const expected = -4;
    const actual = modulus(-36, -8);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
test('can determine whether number is even', () => {
  const expected = true;
  const actual = even(96);
  expect(actual).toBe(expected);
});

test('can determine whether number is even', () => {
  const expected = true;
  const actual = even(963945739457348545093450934);
  expect(actual).toBe(expected);
});

test('can determine whether number is even', () => {
  const expected = false;
  const actual = even(55);
  expect(actual).toBe(expected);
});

//NUMBER IS TOO BIG FOR INT
// test('can determine whether number is even', () => {
//   expected = true;
//   actual = even(963945739457348545093450934);
//   expect(actual).toBe(expected);
// });

  test('can find out whether a large number is even', () => {
    const expected = true;
    const actual = even(123465789123456); // This is almost the maximum of testing
    console.log(123465789123456);
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
      const expected = true;
      const actual = odd(5);
      expect(actual).toBe(expected);
    });
  
    test('can determine whether number is odd', () => {
      const expected = false;
      const actual = odd(48);
      expect(actual).toBe(expected);
    });
});
