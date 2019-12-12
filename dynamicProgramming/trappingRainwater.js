const trappedRainwater = arr => {
  let leftWall = 0;
  let rightWall = 0;
  let rightIdx = 0;
  let total = 0;
  let j = arr.length - 1;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > leftWall && arr[i] > arr[i + 1]) {
  //     console.log('basin');
  //     leftWall = arr[i];
  //     while (j > i + 1) {
  //       if (arr[j] >= leftWall || arr[j] > rightWall) {
  //         rightWall = arr[j];
  //         rightIdx = j;
  //       }
  //       j--;
  //     }
  //     for (let spot = i + 1; spot < rightIdx; spot++) {
  //       total += Math.min(leftWall, rightWall) - arr[spot];
  //     }
  //   }
  //   i = rightIdx - 1;
  //   leftWall = 0;
  // }
  // return total;
};

// console.log(trappedRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trappedRainwater([6, 0, 4, 0, 2, 0, 5]));
