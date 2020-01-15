/*
given a string of any length, return the character used the most amount of times
*/

const mostUsed = string => {
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]]) hash[string[i]]++;
    else hash[string[i]] = 1;
  }
  let most = 0;
  let mostUsedLetter = [];
  for (let letter in hash) {
    if (hash[letter] > most) {
      most = hash[letter];
      mostUsedLetter = [letter, hash[letter]];
    }
  }
  return mostUsedLetter;
};

console.log(mostUsed('the cat in the hat'));
