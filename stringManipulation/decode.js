/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/

const decodeString = s => {
  let final = '';
  let numStack = [];
  let strStack = [];
  let i = 0;

  while (i < s.length) {
    if (Number.isInteger(Number(s[i]))) {
      let count = 0;
      while (Number.isInteger(Number(s[i]))) {
        count = 10 * count + s[i] * 1;
        i++;
      }
      numStack.push(count);
    } else if (s[i] === '[') {
      strStack.push(final);
      final = '';
      i++;
    } else if (s[i] === ']') {
      let temp = strStack.pop();
      let multiplier = numStack.pop();
      for (let i = 0; i < multiplier; i++) {
        temp += final;
      }
      final = temp;
      i++;
    } else {
      final += s[i];
      i++;
    }
  }
  return final;
};

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
