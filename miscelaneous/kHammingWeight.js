/*
Given an integer, n, find the number of non-zero elements in the base-k representation of that integer.
This number is also known as the Hamming Weight of K

Examples:
Input  : 5, 2
Binary representation : 101
Output : 2

Input  : 7, 2
Binary representation : 111
Output : 3

Input  : 345767, 10
Binary representation : 345767
Output : 0

Input  : 345767, 5
Binary representation : 42031032
Output : 6

*/

const onesInBinary = (n, k) => {
  if (n === 0) return 0;
  let count = 1;
  while (n > k) {
    if (n % k) count++;
    n = Math.floor(n / k);
  }
  return count;
};

console.log('2 ---->', onesInBinary(5, 2));
console.log('3 ---->', onesInBinary(7, 2));
console.log('1 ---->', onesInBinary(128, 2));
console.log('4 ---->', onesInBinary(129, 3));
console.log('6 ---->', onesInBinary(345767, 10));
console.log('7 ---->', onesInBinary(56098, 5));
console.log('9 ---->', onesInBinary(43869346934, 7));
