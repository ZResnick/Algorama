/*


*/

const generate = numRows => {
  let triangle = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      triangle.push([1]);
    }
    if (i === 1) {
      triangle.push([1, 1]);
    }
    if (i > 1) {
      let row = [];
      for (let j = 0; j < i + 1; j++) {
        if (j === 0 || j >= triangle[i - 1].length) {
          row.push(1);
        } else row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
      triangle.push(row);
    }
  }
  return triangle;
};

console.log(generate(7));
