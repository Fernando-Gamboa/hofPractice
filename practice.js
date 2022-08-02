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
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) { // Completed
  // create result set to 0
  var result = 0;
  // use _.each() to iterate through numbers array
  _.each(numbers, function(number, index, collection) {
    // if evenly divides in 5
    if (number % 5 === 0) {
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
  _.filter(fruits, function(value, index) {
    // if value equals targetFruit
    if (value === targetFruit) {
      // assign fruits array to value
      fruits = [value];
    }
  });
  // return fruits array
  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) { // Completed
  // create boolean variable
  var reset = false;
  // iterate through fruits array
  _.filter(fruits, function(value, index) {
    // if first letter in value equals letter
    if (value[0] === letter) {
      // if reset is false
      if (reset === false) {
        // reset the fruits array and set it to one value array
        fruits = [value];
        // set reset to true
        reset = true;
      } else { // else if reset is true
        // push values into new fruits array
        fruits.push(value);
      }
    }
  });
  // return fruits array
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) { // Completed
  // create boolean variable
  var reset = false;
  // iterate through fruits array
  _.filter(desserts, function(value, key) {

    // if value type in value equals cookie
    if (value['type'] === 'cookie') {
      // if reset is false
      if (reset === false) {
        // reset the desserts array and set it to one value array
        desserts = [value];
        // set reset to true
        reset = true;
      } else { // else if reset is true
        // push values into new desserts array
        desserts.push(value);
      }
    }
  });
  // return desserts array
  return desserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) { // Completed
  // create total var set to 0
  var total = 0;
  // iterate through products array and objects
  _.reduce(products, function(value, index) {
    // add total with each object price
    total += Number(index['price'].slice(1));
  }, 0);
  // return total amount
  return total;
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
  // accumulator set to emoty array
  var accumulator = [];
  // iterate with reduce through array
  _.reduce(movies, function(value, key, collection) {
    // if value is between 1990 and 2000
    if (key['releaseYear'] >= 1990 && key['releaseYear'] <= 2000) {
      // use accumulator to push movies
      accumulator.push(key['title']);
    }
  });
  // return accumulator
  return accumulator;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) { // Completed
  // count and keep track of how many movies can watch
  var count = 0;
  // iterate with reduce through array
  _.reduce(movies, function(value, key, collection) {
    // if value is shorter than timeLimit
    if (key['runtime'] < timeLimit) {
      // increment count
      count++;
    }
  });
  // Ternanry: if count is greater than 0, return true, else return false
  return (count > 0) ? true : false;
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
