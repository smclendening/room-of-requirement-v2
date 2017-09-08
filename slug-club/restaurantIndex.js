// given 2 arrays of restaurants, return rest that was in both arrays w/ lowest combined index


const testArr1 = ['McDonalds', 'Burger King', 'Prime Quarter', 'JackBox', 'Popeyes', 'Panda'];

const testArr2 = ['Subway', 'Safeway', 'Burger King', 'Panda', 'McDonalds', 'Popeyes'];

const restaurantIndex = (arr1, arr2) => {
  const restCount = arr1.reduce((acc, cur, i) => {
    acc[cur] = [false, i];
    return acc;
  }, {});

  arr2.forEach((restaurant, i) => {
    if (restCount[restaurant]) {
      restCount[restaurant][1] += i;
      restCount[restaurant][0] = true;
    }
  });

  let lowest = null;

  for (let restaurant in restCount) {
    if (restCount[restaurant][0]) {
      if (lowest === null) {
        lowest = restaurant;
      } else if (restCount[restaurant][1] < restCount[lowest][1]) {
        lowest = restaurant;
      }
    }
  }

  return lowest;
}

const test = restaurantIndex(testArr1, testArr2);

console.log('should be Burger King', test);

