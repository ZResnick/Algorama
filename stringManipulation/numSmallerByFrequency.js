/*
Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.



Example 1:

Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
Example 2:

Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
Output: [1,2]
Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both >
*/

var numSmallerByFrequency = function(queries, words) {
  let frequency = str => {
    let quant = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
      let letter = alphabet[i];
      if (str.indexOf(letter) > -1) {
        for (let j = 0; j < str.length; j++) {
          if (str[j] === letter) quant++;
        }
        break;
      }
    }
    return quant;
  };
  let answers = [];

  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    let queryQuant = frequency(queries[i]);
    for (let j = 0; j < words.length; j++) {
      let wordQuant = frequency(words[j]);
      if (queryQuant < wordQuant) count++;
    }
    answers.push(count);
  }
  return answers;
};

console.log(numSmallerByFrequency(['cbd'], ['zaaaz']));
console.log(numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']));
console.log(
  numSmallerByFrequency(
    ['bbb', 'cc', 'vouefv', 'vjfbovadfxbvornfdb'],
    ['a', 'aa', 'aaa', 'aaaa', 'wrdsoughq9eruaosfghnveoirhf']
  )
);
