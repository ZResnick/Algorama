/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/


const firstUniqChar (s) => {
  let letters = {}
  for(let i = 0; i < s.length; i++){
      let currentLetter = s[i];
      if(letters[currentLetter]){
          letters[currentLetter]++
      } else {
          letters[currentLetter] = 1
      }
  }
  for(let i = 0; i < s.length; i++){
      let currentLetter = s[i];
      if(letters[currentLetter] === 1) return i
  }
  return -1
};


console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetcode'))
