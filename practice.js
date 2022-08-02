// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) { // Completed
  // create empty array
  var results = [];

  // iterate through array using the each() method
  _.each(fruits, function(currentValue, index, collection) {
    results.push(currentValue);
  });

  // return array
  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) { // Completed
  // create result set to 0
  var result = 0;
  // use _.each() to iterate through numbers array
  _.each(numbers, function(currentValue, index, collection) {
    // if evenly divides in 5
    if (currentValue % 5 === 0) {
      // increment result by 1
      result++;
    }
  });
  // return result
  return result;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) { // Completed
  // use _.filter() to iterate through fruits array
  return _.filter(fruits, function(currentValue, index, collection) {
    // if value equals targetFruit
    if (currentValue === targetFruit) {
      // assign fruits array to currentValue
      return currentValue;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) { // Completed
  // iterate through fruits array
  return _.filter(fruits, function(currentValue, index, collection) {
    // if first letter in value equals letter
    if (currentValue[0] === letter) {
      // return that value
      return currentValue;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) { // Completed
  // iterate through fruits array
  return _.filter(desserts, function(currentValue, index, collection) {
    // if value type in value equals cookie
    if (currentValue['type'] === 'cookie') {
      // return the current value
      return currentValue;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) { // Completed
  // iterate through products array and objects
  return _.reduce(products, function(accumulator, currentValue, index) {
    // add total with each object price
    accumulator += Number(currentValue['price'].slice(1));
    // return total amount
    return accumulator;
  }, 0); // accumulator is set to 0
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) { // Completed
  // // create an empty object result
  // var result = {};
  // // iterate through array with reduce
  // _.reduce(desserts, function(value, index, collections) {
  //   // if dessert type value doesnt exist in object as key
  //   if (!result[index['type']]) {
  //     // create it and set it to 1
  //     result[index['type']] = 1;
  //   } else { // else
  //     // increment the key by 1
  //     result[index['type']]++;
  //   }
  // }, 0);
  // // return object
  // return result;


  // iterate through array with reduce
  return _.reduce(desserts, function(accumulator, currentValue, index) {
    // if dessert type value doesnt exist in object as key
    if (!accumulator[currentValue['type']]) {
      // create it and set it to 1
      accumulator[currentValue['type']] = 1;
    } else { // else
      // increment by 1
      accumulator[currentValue['type']]++;
    }
    // return accumulator
    return accumulator;
  }, {}); // the accumulator is set to an empty object here
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) { // Completed
  // iterate with reduce through array
  return _.reduce(movies, function(accumulator, currentValue, index) {
    // if value is between 1990 and 2000
    if (currentValue['releaseYear'] >= 1990 && currentValue['releaseYear'] <= 2000) {
      // use accumulator to push movies
      accumulator.push(currentValue['title']);
    }
    // return accumulator
    return accumulator;
  }, []); // set empty array to accumulator
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) { // Completed
  // iterate with reduce through array
  return _.reduce(movies, function(accumulator, currentValue, index) {
    // if value is shorter than timeLimit
    if (currentValue['runtime'] < timeLimit) {
      // increment accumulator
      accumulator++;
    }
    // Ternanry: if accumulator is greater than 0, return true, else return false
    return (accumulator > 0) ? true : false;
  }, 0); // set accumulator to 0
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) { // Completed
  // use map to iterate array
  _.map(fruits, function(value, index, collection) {
    // return value capitalize
    return value.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) { // Completed
  // use map to iterate array
  _.map(desserts, function(currentValue, index, collection) {
    // if item doesn't contain flour in ingredients
    if (currentValue['ingredients'].indexOf('flour') === -1) {
      // create the property glutenFree in object to true
      currentValue['glutenFree'] = true;
    } else { // otherwise
      // create the same property but set it to false
      currentValue['glutenFree'] = false;
    }
  });
  // return desserts with all new properties
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) { // Completed
  // use map to iterate array
  _.map(groceries, function(currentValue, index, collection) {
    // if sale price property doesnt exist in the current obj
    if (!currentValue['salePrice']) {
      // create discountedPrice var to calculate discounted price
      var discountedPrice = Number(currentValue['price'].slice(1)) -
      (Number(currentValue['price'].slice(1)) * coupon);
      // create sale price property
      currentValue['salePrice'] = '$' + discountedPrice.toFixed(2);
    }
  });
  // return groceries with all new properties
  return groceries;
};
