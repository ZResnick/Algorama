/*
To some string S, we will perform some replacement operations that replace groups of letters with new ones (not necessarily the same size).

Each replacement operation has 3 parameters: a starting index i, a source word x and a target word y.  The rule is that if x starts at position i in the original string S, then we will replace that occurrence of x with y.  If not, we do nothing.

For example, if we have S = "abcd" and we have some replacement operation i = 2, x = "cd", y = "ffff", then because "cd" starts at position 2 in the original string S, we will replace it with "ffff".

Using another example on S = "abcd", if we have both the replacement operation i = 0, x = "ab", y = "eee", as well as another replacement operation i = 2, x = "ec", y = "ffff", this second operation does nothing because in the original string S[2] = 'c', which doesn't match x[0] = 'e'.

All these operations occur simultaneously.  It's guaranteed that there won't be any overlap in replacement: for example, S = "abc", indexes = [0, 1], sources = ["ab","bc"] is not a valid test case.

Example 1:

Input: S = "abcd", indexes = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]
Output: "eeebffff"
Explanation: "a" starts at index 0 in S, so it's replaced by "eee".
"cd" starts at index 2 in S, so it's replaced by "ffff".
Example 2:

Input: S = "abcd", indexes = [0,2], sources = ["ab","ec"], targets = ["eee","ffff"]
Output: "eeecd"
Explanation: "ab" starts at index 0 in S, so it's replaced by "eee".
"ec" doesn't starts at index 2 in the original S, so we do nothing.
*/

var findReplaceString = function(str, indexes, sources, targets) {
  if (!str.length) return str; //edge case

  //first sort them all and maintain order
  let unordered = [];
  for (let i = 0; i < indexes.length; i++) {
    let index = indexes[i];
    let source = sources[i];
    let target = targets[i];
    unordered.push({ index, source, target });
  }
  unordered.sort((a, b) => a.index - b.index);
  for (let i = 0; i < unordered.length; i++) {
    let info = unordered[i];
    indexes[i] = info.index;
    sources[i] = info.source;
    targets[i] = info.target;
  }

  //then actually do the changing
  let offset = 0;
  for (let i = 0; i < indexes.length; i++) {
    let index = indexes[i] + offset;
    if (index >= str.length) return str; //edge case
    let source = sources[i];
    let target = targets[i];
    let lengthOfSource = source.length;
    if (str.slice(index, index + lengthOfSource) === source) {
      let array = str.split('');
      array.splice(index, lengthOfSource, target);
      str = array.join('');
      offset += target.length - lengthOfSource;
    }
  }
  return str;
};

console.log(
  'vbfrssozp' ===
    replace('vmokgggqzp', [1, 3, 5], ['mo', 'kg', 'ggq'], ['bfr', 's', 'so'])
); // vbfrssozp
console.log(
  'eeebffff' === replace('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff'])
); // eeebffff
console.log('eeecd' === replace('abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff'])); // eeecd
console.log(
  'vbfrssozp' ===
    replace('vmokgggqzp', [3, 5, 1], ['kg', 'ggq', 'mo'], ['s', 'so', 'bfr'])
); // eeecd
