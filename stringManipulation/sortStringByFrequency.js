/* eslint-disable guard-for-in */
/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

const frequencySort = s => {
  let counts = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (counts[char]) counts[char]++;
    else counts[char] = 1;
  }
  s = '';
  let chars = [];
  for (let char in counts) {
    chars.push({ char, count: counts[char] });
  }
  chars.sort((a, b) => b.count - a.count);
  for (let i = 0; i < chars.length; i++) {
    let current = chars[i];
    let char = current.char;
    let count = current.count;
    for (let j = 0; j < count; j++) {
      s += char;
    }
  }
  return s;
};

console.log(frequencySort('abcdabcaba'));
console.log(
  frequencySort(
    'ebfsguowrsdugwveiosdgriwsdgfqwieasiofqieadgfioqassfgvwhsdgvwisdhvisndvsdjvspdigvlsdbjvdvs'
  )
);
console.log(
  frequencySort(
    'my name is zachary and when you sort my characters you get this!'
  )
);
