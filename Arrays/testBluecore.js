/*
PROBLEM 1:    Mix Potions
Write a function mixPotions that accepts one argument, an array of potion objects, and returns the potion that is produced when they are mixed.
SOLUTION:  There may be a more elegant way to do this if given more time, but the solution below works.
*/

const mixingPotions = potionsArray => {
  //instantiate a resulting potion
  let mixedPotion = { volume: 0, ingredients: {} };

  //run through each potion in the array and mix it with the resulting potion conducting the math described in the example as you go.
  for (let i = 0; i < potionsArray.length; i++) {
    let previousVolume = mixedPotion.volume;
    let currentPotion = potionsArray[i];

    //update the total volume
    mixedPotion.volume += currentPotion.volume;

    //add ingredients
    let currentPotionsIngredients = currentPotion.ingredients;
    let mixedPotionIngredients = mixedPotion.ingredients;
    let volume = currentPotion.volume;

    //loop through ingredients in the current potion.  Make sure you save these ingredients in a hash map so that if theres an ingredient already in the mixedPotion thats not in the current potion, you can update the concentration after.
    let hash = {};
    for (let ingredient in currentPotionsIngredients) {
      hash[ingredient] = true;
      let concentration = currentPotionsIngredients[ingredient];
      if (!mixedPotionIngredients[ingredient]) {
        mixedPotionIngredients[ingredient] =
          (concentration * volume) / mixedPotion.volume;
      } else {
        mixedPotionIngredients[ingredient] =
          (concentration * volume +
            mixedPotionIngredients[ingredient] * previousVolume) /
          mixedPotion.volume;
      }
    }

    //this is where you account for ingredients already in the mixedPotion that aren't in the current potion
    for (let ingredient in mixedPotionIngredients) {
      if (!hash[ingredient]) {
        mixedPotionIngredients[ingredient] =
          (mixedPotionIngredients[ingredient] * previousVolume) /
          mixedPotion.volume;
      }
    }
  }

  return mixedPotion;
};

//Tests:
console.log(
  mixingPotions([
    {
      volume: 100,
      ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 },
    },
    {
      volume: 300,
      ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 },
    },
  ])
);

//-----------------------------------------------------

/*
Problem 2:  Tic-tac-toe
Write a function ticTacToe() that accepts one argument, a string representation of a tic-tac-toe grid, and returns an array of 2 numbers: the number of ways in which X or O can instantly make a winning move.
The 0th index of the returned array should be the number of ways X can win if it is currently X's turn. The other element in the array should be the number of ways O can win if it is currently O's turn.
SOLUTION:  Again, theres certainly a more elegant solution given more time, but the below makes the sense and works
*/

const ticTacToe = string => {
  //instantiate win counts for both x and o
  let xWins = 0;
  let oWins = 0;

  //split the string into 3 'rows'
  let grid = string.split('\n');

  //check the rows in a nested for loop
  for (let row = 0; row < 3; row++) {
    let numX = 0;
    let numO = 0;
    for (let col = 0; col < 3; col++) {
      let char = grid[row][col];
      if (char === 'X') numX++;
      if (char === 'O') numO++;
    }
    if (numX === 3 || numO === 3) return [0, 0];
    if (numX === 2 && !numO) xWins++;
    if (numO === 2 && !numX) oWins++;
  }

  //check the columns in a nested for loop
  for (let col = 0; col < 3; col++) {
    let numX = 0;
    let numO = 0;
    for (let row = 0; row < 3; row++) {
      let char = grid[row][col];
      if (char === 'X') numX++;
      if (char === 'O') numO++;
    }
    if (numX === 3 || numO === 3) return [0, 0];
    if (numX === 2 && !numO) xWins++;
    if (numO === 2 && !numX) oWins++;
  }

  //check the left to 'backslash' diagonal
  let numX = 0;
  let numO = 0;
  for (let col = 0, row = 0; row < 3; col++, row++) {
    let char = grid[row][col];
    if (char === 'X') numX++;
    if (char === 'O') numO++;
  }
  if (numX === 3 || numO === 3) return [0, 0];
  if (numX === 2 && !numO) xWins++;
  if (numO === 2 && !numX) oWins++;

  //reset the counts and check the left to 'forward slash' diagonal
  numX = 0;
  numO = 0;
  for (let col = 2, row = 0; row < 3; col--, row++) {
    let char = grid[row][col];
    if (char === 'X') numX++;
    if (char === 'O') numO++;
  }
  if (numX === 3 || numO === 3) return [0, 0];
  if (numX === 2 && !numO) xWins++;
  if (numO === 2 && !numX) oWins++;

  return [xWins, oWins];
};

//Tests:
console.log(ticTacToe('X X\n OO\nXOO'));
console.log(ticTacToe('O X\nO O\nX O'));
console.log(ticTacToe('O X\nXOO\nX O'));

//-----------------------------------------------------

/*
Problem 3:  Median Sort
Write a function medianSort() that accepts one argument: an array. The elements of this array can be either numbers or arrays of numbers. The function should return the initial array sorted by the numbers or the median values of the arrays of numbers.
Solution:  Using classic merge sort with the addition of medianNumber finder
*/

//This function finds the median without altering the original array.
const medianNumber = arr => {
  let numbers = [...arr];
  let median = 0;
  let length = numbers.length;
  numbers.sort();
  if (length % 2 === 0) {
    median = (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
  } else {
    median = numbers[(length - 1) / 2];
  }
  return median;
};

//this function splits the array
const split = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
};

//this function takes two sorted arrays and merges them into one sorted array
const merge = (arr1, arr2) => {
  let output = [];
  while (arr1.length && arr2.length) {
    //if the current element is an array, use our medianNumber function to see which is larger, but push in the actual element rather than the median
    let left = Array.isArray(arr2[0]) ? medianNumber(arr2[0]) : arr2[0];
    let right = Array.isArray(arr1[0]) ? medianNumber(arr1[0]) : arr1[0];
    if (left > right) {
      output.push(arr1.shift());
    } else {
      output.push(arr2.shift());
    }
  }
  return [...output, ...arr1, ...arr2];
};

//This function brings everything together and is the classic implementation of merge sort.
const medianSort = arr => {
  if (arr.length <= 1) return arr;
  let splitted = split(arr);
  let left = medianSort(splitted[0]);
  let right = medianSort(splitted[1]);
  return merge(left, right);
};

//Tests:
console.log(medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]]));
console.log(medianSort([[12, 9, 1, 25], 4]));
