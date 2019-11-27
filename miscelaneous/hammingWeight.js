/*
Given an integer, find the number of 1's in the binary representation of that integer.
This number is also known as the Hamming Weight

Examples:
Input  : 5
Binary representation : 101
Output : 2

Input  : 7
Binary representation : 111
Output : 3

Input  : 345767
Binary representation : 1010100011010100111
Output : 10

*/

const onesInBinary = n => {
  if (n === 0) return 0;
  let count = 1;
  while (n > 2) {
    if (n % 2) count++;
    n = Math.floor(n / 2);
  }
  return count;
};

console.log('2 ------> ', onesInBinary(5));
console.log('3 ------> ', onesInBinary(7));
console.log('10 -----> ', onesInBinary(345767));
console.log('1 ------> ', onesInBinary(128));
