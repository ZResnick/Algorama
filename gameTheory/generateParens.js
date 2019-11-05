/*

Write a function that given an integer, will return a list of parenthese combination with n open parentheses.

n=3 shouild return:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

const backtrack = (left, right = left, str = '', sols = []) => {
  if (!left && !right) {
    sols.push(str);
  }
  if (left) {
    backtrack(left - 1, right, str + '(', sols);
  }
  if (right > left) {
    backtrack(left, right - 1, str + ')', sols);
  }
  return sols;
};

const genParens = n => {
  return backtrack(n);
};

console.log(genParens(3));
// console.log(genParens(4));
// console.log(genParens(5));
// console.log(genParens(1));
