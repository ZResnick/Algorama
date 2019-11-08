/*

Prompt
You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

Examples
indexOf('or', 'hello world'); // should return 7
indexOf('hello world', 'or'); // should return -1
indexOf('howdy', 'hello world'); // should return -1
indexOf('oox', 'ooboxoooxo'); // should return 6

*/

function indexOf(needle, haystack) {
  if (needle.length > haystack.length) return -1;
  for (let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++) {
    for (let nIdx = 0; nIdx < needle.length; nIdx++) {
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      if (nIdx + 1 === needle.length) return hIdx;
    }
  }
  return -1;
}

console.log(indexOf('ello world', 'hello world'));
console.log(indexOf('daijfowe', '2ejbwfouqpifwhregpiqehgnpvqdaijfoweejsgdfb'));
console.log(indexOf('laffy', 'not a huge fan of taffy'));
console.log(indexOf('hello', 'darkness my old friend'));
console.log(indexOf('this is more characters', 'this is less'));
console.log(
  indexOf(
    'eosdghfviwrsdgpivwoenadgnbvesndzgpe',
    'dgouwrghsug3895ewhutrbfg2ou4hwy8t486jethng3rw98tng834h8wryhg3wrhsgoi3wjers089gvehrdiofhgvb8ehrsdhjfgvme90rsnfhgb9etnd9fh9gbvjer9jdoipfhbpioet9dfh9eosdghfviwrsdgpivwoenadgnbvesndzgpebeporsd;ohgew9jhbefd'
  )
);
