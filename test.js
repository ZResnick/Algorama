const test = (arr, val, arr1) => {
  return [...arr1, val, ...arr];
};

console.log(test([1, 2, 3, 4, 5], 'Zach', [6, 7, 8]));
