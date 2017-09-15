  /*
  Find the most commonly occuring colors for the provided image. In cases
  where more than one color occurs, return them all (sort colors
  alphabetically).
  Args:
      image: a nested array of color values
  Input:
  [
      [ 'red', 'green', 'green', ]
      [ 'black', 'blue', 'black', ]
      [ 'red', 'yellow', 'yellow', ]
  ]
  Expected output:
  ['black', 'green', 'red', 'yellow']
  */

  // TODO: COMPLETE ME

const topColor = arr => {
  const count = {};

  arr.forEach(colorArr => {
    colorArr.forEach(color => {
      count[color] = count[color] + 1 || 1;
    })
  });

  let mostCommon;

  for (let color in count) {
    console.log('mc', mostCommon);
    console.log('cur col', color, count[color]);
    if (!mostCommon) {
      mostCommon = [color];
    } else if (count[color] > count[mostCommon[0]]) {
      mostCommon = [color];
    } else if (count[color] === count[mostCommon[0]]) {
      mostCommon.push(color);
    }
  };

  if (mostCommon.length === 1) {
    return mostCommon[0];
  }

  return mostCommon.sort();
}

console.log(topColor([
  [ 'red', 'green', 'green', ],
  [ 'black', 'blue', 'black', ],
  [ 'red', 'yellow', 'yellow', ]
]));