/*
Given a string, return that string organized according to the following rules:
1:  If there are more than 1 of a certain character, move all instances of that character to the beginning of the word
organized in order of appearance
2:  All the other characters should be at the end of the array in alphabetical order

Examples:
oleostepa  ---->  ooeealpst
hjdksabshj  ---->  hhjjssabdk
*/

const duplicatesFirst = str => {
  //split into an array
  str = str.split('');

  //create hash to hold the indexes at which the character occurs
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (!hash[curr]) {
      hash[curr] = [i];
    } else {
      hash[curr].push(i);
    }
  }

  //create a new string
  let newString = '';

  //iterate through the array
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (curr) {
      let indexes = hash[curr];
      let length = indexes.length;
      if (length > 1) {
        for (let j = 0; j < indexes.length; j++) {
          let index = hash[curr][j];
          str[index] = null;
          newString += curr;
        }
      }
    }
  }
  str.filter(el => el);
  str.sort();
  let rest = str.join('');
  newString += rest;
  return newString;
};

console.log(duplicatesFirst('oleostepa'));
console.log(duplicatesFirst('hjdksabshj'));
