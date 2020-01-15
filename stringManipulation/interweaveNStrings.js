/*
Given any number of strings of equal length, interweave the strings
*/

const interweave = strings => {
  let wovenString = '';
  for (let i = 0; i < strings[0].length; i++) {
    for (let j = 0; j < strings.length; j++) {
      wovenString += strings[j][i];
    }
  }
  return wovenString;
};

console.log(interweave(['dog', 'cat', 'any']));
