/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/

var reverse = function(num) {
  let reverse = '';
  let negative = false;
  if (num < 0) {
    num *= -1;
    negative = true;
  }
  let str = String(num);
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  let final = Number(reverse);
  if (negative) {
    final *= -1;
  }
  if (final > 2147483647 || final < -2147483648) return 0;
  return final;
};

console.log(reverse(1345));
console.log(reverse(-1345));
console.log(reverse(-321));
console.log(reverse(120));
