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
  let count = 0;
  while (n >= 1) {
    let exp = 1;
    while (Math.pow(2, exp) <= n) {
      exp++;
    }
    count++;
    n -= Math.pow(2, exp - 1);
  }
  return count;
};

console.log(onesInBinary(5));
console.log(onesInBinary(7));
console.log(onesInBinary(345767));
console.log(onesInBinary(128));
