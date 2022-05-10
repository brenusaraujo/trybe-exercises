const sum = require('./sum.js');

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
  expect(sum(0, 0)).toEqual(0);

});