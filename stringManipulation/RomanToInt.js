/* eslint-disable complexity */
/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999. */

// eslint-disable-next-line no-unused-vars
var romanToInt = function(str) {
  if (!str) return 0;
  let total = 0;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    let curEl = arr[i];
    switch (curEl) {
      case 'I':
        if (arr[i + 1] === 'V') {
          total += 4;
          i++;
        } else if (arr[i + 1] === 'X') {
          total += 9;
          i++;
        } else total += 1;
        break;
      case 'X':
        if (arr[i + 1] === 'L') {
          total += 40;
          i++;
        } else if (arr[i + 1] === 'C') {
          total += 90;
          i++;
        } else total += 10;
        break;
      case 'C':
        if (arr[i + 1] === 'D') {
          total += 400;
          i++;
        } else if (arr[i + 1] === 'M') {
          total += 900;
          i++;
        } else total += 100;
        break;
      case 'V':
        total += 5;
        break;
      case 'L':
        total += 50;
        break;
      case 'D':
        total += 500;
        break;
      case 'M':
        total += 1000;
        break;
      default:
        total += 0;
        break;
    }
  }
  return total;
};

console.log('3 ------------->', romanToInt('III'));
console.log('4 ------------->', romanToInt('IV'));
console.log('9 ------------->', romanToInt('IX'));
console.log('58 ------------->', romanToInt('LVIII'));
console.log('1994 ------------->', romanToInt('MCMXCIV'));
