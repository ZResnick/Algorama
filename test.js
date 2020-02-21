let test = (arr, target) => {
  let latter = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (curr === target) {
      arr.splice(i, 1);
      latter.push(target);
      i--;
    }
  }
  return [...arr, ...latter];
};

console.log(test([1, 2, 3, 1, 4, 1, 5, 1], 1));
