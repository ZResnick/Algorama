/*

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

*/

const levenshteinDistance = (str1, str2) => {
  //create a grid thats m+1 by n+1
  const grid = Array(str1.length + 1);

  for (let row = 0; row < grid.length; row++) {
    grid[row] = Array(str2.length + 1).fill(0);
  }

  //first row
  for (let col = 1; col < grid[0].length; col++) {
    grid[0][col] = col;
  }

  //first col
  for (let row = 1; row < grid.length; row++) {
    grid[row][0] = row;
  }

  //run the logic for the levenshtein number
  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[0].length; col++) {
      if (str1[row - 1] === str2[col - 1])
        grid[row][col] = grid[row - 1][col - 1];
      else {
        grid[row][col] =
          Math.min(
            grid[row][col - 1],
            grid[row - 1][col - 1],
            grid[row - 1][col]
          ) + 1;
      }
    }
  }
  console.log(grid);
  return grid[str1.length][str2.length];
};

console.log(levenshteinDistance('intention', 'execution'));
console.log(levenshteinDistance('horse', 'ros'));
