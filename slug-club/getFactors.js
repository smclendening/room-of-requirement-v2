// ex: 8 ==> 2 * 2 * 2, 2 * 4

const getFactors = n => {
  const hash = [];
  const combos = [];

  const findFactors = (num, factors) => {
    //const startingPoint = factors[factors.length - 1] || 2;
    // base case: if num is n, push to combos
    const start = factors[factors.length - 1] || 2;
    if (num === 1) {
      combos.push(factors);
      return;
    }    

    for (let i = start; i <= n / 2; i++) {
      // if n divisible by i
      if (num % i === 0) {
        findFactors(num / i, factors.concat(i));
      }
    }
  }

  findFactors(n, []);

  // if (!combos[0].length) {
  //   return [];
  // }

  return combos;
}

console.log('should be [2, 6], [2, 2, 3], [3, 4]', getFactors(12));
console.log('should be [2, 2, 2], [2, 4]', getFactors(8));

console.log('should be []', getFactors(1));