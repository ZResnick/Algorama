/*
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.



Example 1:

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
*/

var twoCitySchedCost = function(costs) {
  //order the array by the cost of a - b.  If a is cheaper then b, this number will           be negative but will represent the money you will save by flying to a instead         of b.
  //At this point, you will have a list organized by the money you would save flying         to A from greatest savings to least.
  //Then iterate through the array taking the cost of a from the first half and the           cost of b for the second half.

  const moneyLost = arr => {
    return arr[0] - arr[1];
  };
  costs.sort((a, b) => moneyLost(a) - moneyLost(b));

  let totalCost = 0;
  for (let i = 0, j = costs.length / 2; j < costs.length; i++, j++) {
    totalCost += costs[i][0] + costs[j][1];
  }
  return totalCost;
};

console.log(
  980 ===
    twoCitySchedCost([
      [10, 20],
      [30, 200],
      [400, 50],
      [30, 20],
      [10, 300],
      [50, 200],
      [400, 500],
      [300, 1000],
    ])
);

console.log(
  110 ===
    twoCitySchedCost([
      [10, 20],
      [30, 200],
      [400, 50],
      [30, 20],
    ])
);
