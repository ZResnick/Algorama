/*

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.



Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False


Note:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].

*/

function indexOf(needle, haystack) {
  if (needle.length > haystack.length) return -1;
  for (let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++) {
    for (let nIdx = 0; nIdx < needle.length; nIdx++) {
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      if (nIdx + 1 === needle.length) return hIdx;
    }
  }
  return 0;
}

const stringPermuations = (str1, str2) => {
  let sols = [str1[0]];
  let curSols = [];
  for (let i = 1; i < str1.length; i++) {
    for (let j = 0; j < sols.length; j++) {
      let currentArray = sols[j];
      for (let k = 0; k <= currentArray.length; k++) {
        curSols.push([
          ...currentArray.slice(0, k),
          str1[i],
          ...currentArray.slice(k),
        ]);
      }
    }
    sols = [...curSols];
    curSols = [];
  }
  let perms = sols.map(el => {
    return el.join('');
  });

  let counter = 0;
  for (let i = 0; i < perms.length; i++) {
    let curWord = perms[i];
    counter += indexOf(curWord, str2);
  }
  return !!counter;
};

console.log(stringPermuations('ab', 'eidbaooo'));
console.log(stringPermuations('ab', 'eidbooo'));
console.log(
  stringPermuations(
    'abcdef',
    'szfjbweiqashgvincwpqeiandgipvnwpodsngfvperwhsdghfeabcdvpweeropbjowrjsbe'
  )
);
console.log(
  stringPermuations(
    'abcdef',
    'szfjbweiqashgvincwpqeiandgipvnwpodsngfvperwhsdghfabcdvpweeropbjowrjsbe'
  )
);
