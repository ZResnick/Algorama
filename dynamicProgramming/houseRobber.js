/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/

const rob = nums => {
  if (!nums || !nums.length) return 0;
  if (nums.length <= 2) return Math.max(...nums);

  let totals = [nums[0], nums[1]];
  for (let i = 2; i < nums.length; i++) {
    totals.push(0);
    let currentAmount = nums[i];
    for (let j = totals.length - 3; j >= 0; j--) {
      if (totals[j] + currentAmount > totals[i])
        totals[i] = totals[j] + currentAmount;
    }
  }
  return Math.max(...totals);
};

console.log(115 === rob([5, 7, 25, 13, 12, 60, 3, 19, 4, 6]));
console.log(4 === rob([1, 2, 3, 1]));
console.log(12 === rob([2, 7, 9, 3, 1]));
