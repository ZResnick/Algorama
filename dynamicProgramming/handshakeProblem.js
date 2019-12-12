const handshakes = arr => {
  let total = 0;
  let time = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.max(...arr[i]) > time) time = Math.max(...arr[i]);
  }
  let people = Array(time).fill(0);

  //sort the array by arrival time
  let sorted = arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < sorted.length; i++) {
    let arrival = sorted[i][0];
    let departure = sorted[i][1];
    for (let j = arrival - 1; j <= departure - 1; j++) {
      if (j === arrival - 1) total += people[j];
      people[j]++;
    }
  }
  return total;
};

console.log(
  handshakes([
    [5, 6],
    [2, 8],
    [1, 2],
    [3, 4],
    [4, 6],
  ])
);
