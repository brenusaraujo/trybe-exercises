function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

test('retorna o array esperado', () => {
  expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]); // equal para array.
  expect([1, 2, 3, 4]).not.toEqual([1, 2, 3, 4]); // equal para array.
});