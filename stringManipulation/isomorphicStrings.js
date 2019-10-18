/* eslint-disable guard-for-in */

/* eslint-disable complexity */

/*
Two words are called isomorphic if the letters in one word can be remapped to get the second word. Remapping a letter means replacing all occurrences of it with another letter. The ordering of the letters remains unchanged. No two letters may map to the same letter, but a letter may map to itself.
For example, the words "abca" and "zbxz" are isomorphic because we can map 'a' to 'z', 'b' to 'b' and 'c' to 'x'.

Given 2 strings, return true if their isomorphic, false if theyre not.
*/

const areIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  let sMemo = {};
  let tMemo = {};
  //memoize s
  for (let i = 0; i < s.length; i++) {
    let curEl = s[i];
    if (!sMemo[curEl]) {
      sMemo[curEl] = 1;
    } else {
      sMemo[curEl]++;
    }
  }
  //memoize t
  for (let j = 0; j < s.length; j++) {
    let curEl = t[j];
    if (!tMemo[curEl]) {
      tMemo[curEl] = 1;
    } else {
      tMemo[curEl]++;
    }
  }
  for (let key in sMemo) {
    let curVal = sMemo[key];
    let isFalse = true;
    for (let prop in tMemo) {
      let curMatch = tMemo[prop];
      if (curMatch === curVal) {
        tMemo[prop] = -1;
        isFalse = false; //this will stop the function from returning false if theres a
        break;
      }
    }
    if (isFalse) return false; //if theres never a match, isFalse will remain true and retuern false
  }
  return true;
};

console.log(areIsomorphic('zuzu', 'apap'));
console.log(areIsomorphic('apple', 'bear'));
console.log(areIsomorphic('ssssssssiiii', 'vvvvvvvvpppp'));
console.log(
  areIsomorphic('apapapapapapapshshshshshshsh', 'vbvbvbvbvbvbvbdhdhdhdhdhdhdh')
);
console.log(areIsomorphic('asgasg', 'chychy'));
console.log(areIsomorphic('fhtyg', 'pppasdj'));
console.log(areIsomorphic('wojdbvwpdv', 'celqbvfeqbcvn2eq'));
