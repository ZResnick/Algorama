/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/

const coinChange = (coins, amount) => {
  let totals = [0];
  for (let i = 1; i < amount + 1; i++) {
    totals.push(Infinity);
    for (let coin = coins.length - 1; coin >= 0; coin--) {
      let curCoin = coins[coin];
      if (curCoin <= i) {
        totals[i] = Math.min(totals[i], totals[i - curCoin] + 1);
      }
    }
  }
  return totals[amount] !== Infinity ? totals[amount] : -1;
};

console.log(coinChange([1, 5, 10, 25], 467));
