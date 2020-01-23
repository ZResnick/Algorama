/*
Write a function solution that, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible number of letters.
Examples:
Given S = “eedaaad” , the function should return “eedaad” . One occurrence of letter a is deleted.
Given S = “xxxtxxx” , the function should return “xxtxx” . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
Given S = “uuuuxaaaaxuuu” , the function should return “uuxaaxuu”.
*/

const removeThirdCharacter = string => {
  string = string.split('');
  let i = 0;
  while (i < string.length) {
    let current = string[i];
    if (string[i + 1] === current && string[i + 2] === current) {
      string.splice(i, 1);
    } else {
      i++;
    }
  }

  return string.join('');
};

console.log('eedaad' === removeThirdCharacter('eedaaad'));
console.log('xxtxx' === removeThirdCharacter('xxxtxxx'));
console.log('uuxaaxuu' === removeThirdCharacter('uuuuxaaaaxuuu'));
