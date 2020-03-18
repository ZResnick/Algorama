/* eslint-disable complexity */
/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

const findAnagrams = (s, p) => {
  let results = [];
  let sLength = s.length;
  let pLength = p.length;
  if (sLength < pLength) return results;

  let pMap = {};
  let sMap = {};
  for (let i = 0; i < pLength; i++) {
    let currentLetter = p[i];
    if (pMap[currentLetter]) pMap[currentLetter]++;
    else {
      pMap[currentLetter] = 1;
    }
    let currentSLetter = s[i];
    if (sMap[currentSLetter]) sMap[currentSLetter]++;
    else {
      sMap[currentSLetter] = 1;
    }
  }
  for (let i = 0, j = pLength; j < sLength + 1; i++, j++) {
    let shouldPush = true;
    for (let letter in pMap) {
      if (sMap[letter] !== pMap[letter]) shouldPush = false;
    }
    shouldPush && results.push(i);
    let charToRemove = s[i];
    let charToAdd = s[j];
    sMap[charToRemove]--;
    if (sMap[charToRemove] === 0) delete sMap[charToRemove];
    if (sMap[charToAdd]) sMap[charToAdd]++;
    else sMap[charToAdd] = 1;
  }
  return results;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
