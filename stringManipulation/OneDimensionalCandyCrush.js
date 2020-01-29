/*
Given a string of characters, return the string after all instances of 3 identical characters are removed.  Note that if removing one sequence creates another sequence, that sequence should be eliminated too.

Example:
crush('qaabcdddccbeaaaeeba') => 'q

Explanation:
'qaabcdddccbeaaaeeba'
'qaabcccbeeeba'
'qaabbba'
'qaaa'
'q'


Example:
crush('qqbbbqccdddefffeea') => 'q

Explanation:
'qqbbbqccdddefffeea'
'qqqcceeea'
'cca'
*/

//This method just runs through the whole string adding to the stack and removing from the stack every time we find one with a count of three.  After we're done, we just go through the stack and add the correct numbers of letters to a final string;
const crushBetter = str => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let curChar = str[i];
    if (stack[0] && stack[0].char === curChar) {
      if (stack[0].count === 2) {
        stack.shift();
      } else {
        stack[0].count++;
      }
    } else {
      stack.unshift({ char: curChar, count: 1 });
    }
  }

  let finalString = '';
  for (let i = 0; i < stack.length; i++) {
    for (let j = 0; j < stack[i].count; j++) {
      finalString = stack[i].char + finalString;
    }
  }
  return finalString;
};

//This method involves shrining the actual string and changing the iterator to go back 3 every time we find one
const crush = str => {
  let arr = str.split('');
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let curChar = arr[i];
    if (!stack.length) stack.push({ char: curChar, count: 1 });
    else if (stack[0].char === curChar) {
      if (stack[0].count === 2) {
        stack.shift();
        arr.splice(i - 2, 3);
        i -= 3;
      } else {
        stack[0].count++;
      }
    } else {
      stack.unshift({ char: curChar, count: 1 });
    }
  }

  return arr.join('');
};

console.log('q' === crush('qaabcdddccbeaaaeeba'));
console.log('cca' === crush('qqbbbqccdddefffeea'));
console.log('cd' === crush('aabbbacd'));
console.log('c' === crush('aaabbbc'));
console.log('' === crush('aabbccddeeedcba'));
console.log('acd' === crush('aaabbbacd'));

console.log('q' === crushBetter('qaabcdddccbeaaaeeba'));
console.log('cca' === crushBetter('qqbbbqccdddefffeea'));
console.log('cd' === crushBetter('aabbbacd'));
console.log('c' === crushBetter('aaabbbc'));
console.log('' === crushBetter('aabbccddeeedcba'));
console.log('acd' === crushBetter('aaabbbacd'));
