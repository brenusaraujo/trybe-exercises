const myRemove = require('./myremove');
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
  expect(sum(0, 0)).toEqual(0);
  expect(sum).toThrowError(new Error('parameters must be numbers'));
});

test('retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]); // equal para array.
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]); // equal para array.
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]); // equal para array.
});