// • Array B containing elements B1, B2,..., Bn is provided as input.
// • Elements A1, A2,.., An for array A has to be decided by the coder/code. An element Ai can be any integer such that 1 <= Ai <= Bi.
// • Select elements for array A such that it maximizes S (sum of difference between consecutive elements of A).
// • Output required : the maximized value S.

const largestS = (arrayB) => {
  let maxSum = 0;
  let maxArray = [];

  const findSum = (arraySoFar, arraySum, curIndex) => {
    // if arraySoFar len = arrayB len
    if (arraySoFar.length === arrayB.length) {
      // check against maxSum 
      //console.log('sum', arraySum, arraySoFar);
      if (arraySum > maxSum) {
        maxSum = arraySum;
        maxArray = arraySoFar;
      }
      // return
      return;
    }

    // iterate from 1 to arrayB at curIndex
    // for (let i = 1; i <= arrayB[curIndex]; i++) {
    //   // add num to arraySoFar
    //   // increment arraySum
    //   // increment currIndex, call recursively
    //   const difference = curIndex ? Math.abs(i - arraySoFar[curIndex - 1]) : 0;
    //   findSum(arraySoFar.concat(i), arraySum + difference, curIndex + 1);
    // }
    const upper = arrayB[curIndex];
    const lower = 1;

    const differenceUpper = curIndex ? Math.abs(upper - arraySoFar[curIndex - 1]) : 0;
    const differenceLower = curIndex ? Math.abs(arraySoFar[curIndex - 1] - lower) : 0;

    findSum(arraySoFar.concat(upper), arraySum + differenceUpper, curIndex + 1);
    findSum(arraySoFar.concat(lower), arraySum + differenceLower, curIndex + 1);
  }

  findSum([], 0, 0);

  return maxSum;

}

//console.log('should be [1, 4, 1]', largestS([2, 4, 3]));
console.log('should be 36', largestS([10, 1, 10, 1, 10, 3, 8, 1, 8 , 1 ,1 ,1 ,1 ,1 , 52, ,550 , 52, 23, 42, 1, 4, 5]))