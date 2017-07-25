/*
Question:
You are given an array of integers. Write an algorithm that brings all nonzero elements to the left of the array,
and returns the number of nonzero elements.
 
Condition:
The algorithm should operate in place, i.e. shouldn't create a new array.
The order of the nonzero elements does not matter. The numbers that remain in the right portion of the array can be anything

Example:
Given the array [ 1, 0, 2, 0, 0, 3, 4 ], a possible answer is [ 4, 1, 3, 2, ?, ?, ? ], 4 non-zero elements, 
where "?" can be any number. Code should have good complexity and minimize the number of writes to the array

input: Array
output: number of non-zero
condition: shouldnt create a new array - the order of nonzero elements does not matter
Edge Cases:

*/

var findNonZero = (array) => {
  let frontCount = 0;
  let backCount = array.length - 1;
  
  for(let i =0; i < array.length; i++) {
    // if array[frontCount] === 0, we want to bring the zero to the end of the array
    // array[backCount] !==0, we want to bring the non zero number to the front of the array
    // we only want to swap in this case

    if (array[frontCount] === 0 && array[backCount] !== 0) {
      let temp = array[backCount];
      array[backCount] = array[frontCount];
      array[frontCount] = temp;
      backCount--;
      frontCount++;
    }

    // if (array[i] !== 0) {
    //   array[count] = array[i];
      
    //   count++;
    // }
  }
  
  let startIndex = count;
  
  while(startIndex < array.length) {
    array[startIndex] = '?';
    startIndex++;
  }

  console.log(array);
  
  return frontCount;
}
