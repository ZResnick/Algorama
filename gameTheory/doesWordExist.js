/* eslint-disable complexity */
const helper = (board, word, coords, curWord) => {
  if (curWord === word) return true;
  let newBoard = board.map(row => {
    return [...row];
  });
  newBoard[coords[0]][coords[1]] = 1;
  let i = coords[0];
  let j = coords[1];
  let nextLetter = word[curWord.length];
  if (newBoard[i][j + 1] === nextLetter) {
    if (helper(newBoard, word, [i, j + 1], curWord + nextLetter)) return true;
  }
  if (newBoard[i + 1] && newBoard[i + 1][j] === nextLetter) {
    if (helper(newBoard, word, [i + 1, j], curWord + nextLetter)) return true;
  }
  if (newBoard[i][j - 1] === nextLetter) {
    if (helper(newBoard, word, [i, j - 1], curWord + nextLetter)) return true;
  }
  if (newBoard[i - 1] && newBoard[i - 1][j] === nextLetter) {
    if (helper(newBoard, word, [i - 1, j], curWord + nextLetter)) return true;
  }
  return false;
};

const doesWordExist = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let curLet = board[i][j];
      if (curLet === word[0]) {
        console.log(curLet);
        if (helper(board, word, [i, j], curLet)) return true;
      }
    }
  }
  return false;
};

let input = [
  ['e', 'h', 'e', 'o'],
  ['l', 'h', 'p', 'l'],
  ['x', 'x', 'x', 'x'],
];

let input2 = [
  ['C', 'A', 'A'],
  ['A', 'A', 'A'],
  ['B', 'C', 'D'],
];

console.log(doesWordExist(input, 'hel'));
console.log(doesWordExist(input2, 'AAB'));
