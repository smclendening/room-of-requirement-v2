


const maxSubArray = nums => {
  let maxSum = nums[0]; // 6
  let currentSum = nums[0]; // 6

  for (let i = 1; i < nums.length; i++) {
    // add num to currentSum
    currentSum += nums[i];
    // if num is greater than currentSum
    if (nums[i] > currentSum) {
      // reset currentSum
      currentSum = nums[i];
    }

    // if currentSum is greater than maxSum
    if (currentSum > maxSum) {
      // reset maxSum
      maxSum = currentSum;
    }

  }


  return maxSum;
}


// DP Solution

// Sub-problem: find max up to certain index in array
// Max at index 4 === Math.max(max at index 3, max at index 3 + val at index 4);

const maxSubArrayDP = nums => {
  // let max = nums[0];
  let maxThruIndex = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // store whichever is bigger at previous index
    // const prevMax = maxThruIndex[i - 1];
    // const newSum = prevMax >= 0 ? nums[i] + prevMax : nums[i];
    const toAdd = Math.max(maxThruIndex[i - 1], 0);
    maxThruIndex[i] = nums[i] + toAdd;
    max = Math.max(max, maxThruIndex[i]);
  }
  console.log(maxThruIndex);
  return max;
}

console.log('should be 6', maxSubArrayDP([-2, 1, -3, 4, -1, 2, 1, -5, 4]));