/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
*/

const baloonFinder = text => {
  let letters = {};
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    letters[char] ? letters[char]++ : (letters[char] = 1);
  }
  let max = Math.min(
    letters['b'],
    letters['a'],
    Math.floor(letters['l'] / 2),
    Math.floor(letters['o'] / 2),
    letters['n']
  );
  return !max || isNaN(max) ? 0 : max;
};

console.log(baloonFinder('loonbalxballpoon'));
console.log(baloonFinder('leet'));
