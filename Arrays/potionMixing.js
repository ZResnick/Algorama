/*
Mix Potions
Write a function mixPotions that accepts one argument, an array of potion objects, and returns the potion that is produced when they are mixed.
A potion is represented in the following format:
{
volume: x,
ingredients: { ingredient1: a, ingredient2: b, ingredientA: c } }
Where x is a positive number representing the volume of the potion and a, b, and c are positive numbers representing the concentrations of the corresponding ingredients in the potion.
In the above example, the potion has three different ingredients, but a potion can have any number of different ingredients. The function should accept any positive number of potions. Each potion can have any non-negative number of different ingredients.
After mixing, the resulting potion should have a volume equal to the sum of the volumes of the input potions. Also, the resulting potion should have volume-weighted concentrations of each ingredient in the input potions.
Example:
mixPotions([
    {volume: 100,
ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }}, {volume: 300,
ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }}, ])
The above should return:
{ volume: 400,
ingredients: { ingredient1: 125, ingredient2: 5, ingredientA: 350,
ingredientB: 712.5 } }
The result's volume is 400 because 100 + 300 = 400.
The result's concentration of ingredient1 is 125. We can determine this because first potion has 50 units of concentration in 100 units of volume and the second potion has 125 units of concentration in 300 units of volume, and (50*100 + 150*300)/(100 + 300) = 125.
Only one of the potions has any of ingredient2, Using the same math, but with 0 for the concentration of ingredient2 in the second potion, we get (20*100 + 0*300)/(100 + 300) = 5.
*/

/* eslint-disable guard-for-in */
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
