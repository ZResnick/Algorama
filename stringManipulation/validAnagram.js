/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let hashS = {};
  let hashT = {};
  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    let tLetter = t[i];
    if (hashS[sLetter]) {
      hashS[sLetter]++;
    } else {
      hashS[sLetter] = 1;
    }
    if (hashT[tLetter]) {
      hashT[tLetter]++;
    } else {
      hashT[tLetter] = 1;
    }
  }
  for (let letter in hashS) {
    if (hashS[letter] !== hashT[letter]) return false;
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
