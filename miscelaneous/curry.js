function dragon(name, size, element) {
  return name + ' is a ' + size + ' dragon that breathes ' + element;
}

/*
Here, we initially pass the greet function into curry.
We get the inner function returned as a result.
*/

function curry(func) {
  console.log(...arguments);
  return function() {
    /*
    'arguments' is an Array-like object accessible inside functions
    that contains the values of the arguments passed to that function.
    functions all have a 'length' that indicates the number of parameters
    expected by the function.
    */
    console.log(arguments);
    if (arguments.length >= func.length) {
      /*
      spread the arguments that you have into the actual function. The function
       itself is unchanged through the recursion calls; the arguments are what
       gets attached to the function with each curry call.
      */
      return func(...arguments);
    } else {
      /*
      When a function is bound to n arguments, the returned bound function
       length has a length that is n smaller than the original function.
      */
      const boundFunc = func.bind(null, ...arguments);
      return curry(boundFunc);
    }
  };
}

//you can think of the above as doing this to the dragon function...
const dragonBrokenOut = name => size => element =>
  name + ' is a ' + size + ' dragon that breathes ' + element;

let curriedDragon = curry(dragon);
// let dragonHasBeenNamed = curriedDragon('Zach');
// let dragonHasBeenSizedAndOnlyNeedsAnElement = dragonHasBeenNamed('tiny');
// let dragonHasAllItsArguments = dragonHasBeenSizedAndOnlyNeedsAnElement(
//   'dreams'
// );//

// console.log(dragon('zach', 'huge', 'lightning'));
//console.log(curriedDragon('Zach', 'medium sized')('fire'));
console.log(curriedDragon('Zach')('medium sized')('fire'));
// console.log(dragonHasAllItsArguments);
