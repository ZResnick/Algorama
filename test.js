function myIndexOf(string, searchTerm) {
  let index = -1;
  for (let i = 0; i < string.length; i++) {
    let j = 0;
    let stringLetter = string[i];
    let searchLetter = searchTerm[j];
    if (stringLetter === searchLetter) {
      index = i;
      while (j < searchTerm.length) {
        if (stringLetter === searchLetter) {
          i++;
          j++;
        } else {
          break;
        }
        if (j === searchTerm.length - 1) {
          return index;
        }
      }
    } else {
      continue;
    }
  }
  return index;
}

console.log(myIndexOf('my ball is shaped like a baloon', 'ballthazar'));
