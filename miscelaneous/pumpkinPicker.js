/*
Write a function `pumpkinPicker` that, given a deeply-nested object, returns the count of the number of 'pumpkin' strings stored as a value in any of the nested objects.
*/

const pumpkinPicker = obj => {
  let pumpkinCount = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      pumpkinCount += pumpkinPicker(obj[key]);
    } else if (obj[key] === 'pumpkin') pumpkinCount++;
  }
  return pumpkinCount;
};

const pumpkinPatch = {
  meadow: {
    byTheRock: 'apples',
    byThePuddle: 'pumpkin',
  },
  hill: {
    byTheBench: {
      leftOfBench: 'pumpkin',
      rightOfBench: 'pumpkin',
    },
    topOfHill: 'apples',
  },
};

console.log(3 === pumpkinPicker(pumpkinPatch));
