/*
You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

Given a non-empty string S and a number K, format the string according to the rules described above.

Example 1:
Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Explanation: The string S has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
Example 2:
Input: S = "2-5g-3-J", K = 2

Output: "2-5G-3J"

Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
*/

const licenseKeyFormatting = (S, K) => {
  let string = S.split('-').join('');
  let cased = '';
  for (let i = 0; i < string.length; i++) {
    cased += string[i].toUpperCase();
  }
  let firstCount = cased.length % K;
  let license = firstCount ? `${cased.slice(0, firstCount)}` : '';
  for (let i = firstCount; i < cased.length; i += K) {
    license += '-';
    license += cased.slice(i, i + K);
  }
  if (license[0] === '-') license = license.slice(1);
  return license;
};

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
console.log(
  licenseKeyFormatting('5F3Z-2e-9-w-vw2sd4bfg4ivn-hd-7684939-vwuve857', 3)
);
