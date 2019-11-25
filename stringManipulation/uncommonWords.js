/*
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.



Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
*/

const uncommonFromSentences = (A, B) => {
  let wordList = {};
  A.split(' ').forEach(el => {
    wordList[el] ? wordList[el]++ : (wordList[el] = 1);
  });
  B.split(' ').forEach(el => {
    wordList[el] ? wordList[el]++ : (wordList[el] = 1);
  });
  let results = [];
  for (let key in wordList) {
    if (wordList[key] === 1) results.push(key);
  }
  return results;
};

console.log(
  uncommonFromSentences(
    'hello my name is zach and i love apples and some other fruit',
    'some people love fruit, other people only like some fruit like apples'
  )
);
