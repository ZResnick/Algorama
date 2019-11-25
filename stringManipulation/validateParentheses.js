/* eslint-disable complexity */
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/

const validateParentheses = str => {
  if (str === null || str.length <= 0) return true;
  var parens = str.split('');
  var stack = [];
  for (let char of parens) {
    if (char === '[') stack.push(']');
    else if (char === '{') stack.push('}');
    else if (char === '(') stack.push(')');
    else if (stack.length === 0 || char !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};

console.log(validateParentheses('((()))({}[])({[]})'));
console.log(validateParentheses('((()))({}[])({[]}){)]{'));
