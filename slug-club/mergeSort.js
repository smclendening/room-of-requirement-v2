// mergeSort


const mergeSort = arr => {
  // base case: arr length is 1
  if (arr.length === 1) {
    return arr;
  }

  // recursive case: split in half and merge
  const midIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIndex));
  const right = mergeSort(arr.slice(midIndex));

  // return merged
  return merge(left, right);

};

const merge = (arr1, arr2) => {
  let merged = [];
  let pointer1 = pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    const element1 = arr1[pointer1];
    const element2 = arr2[pointer2];

    if (element1 < element2) {
      merged.push(element1);
      pointer1++;
    } else {
      merged.push(element2);
      pointer2++;
    }
  }

  merged = pointer1 < arr1.length ? merged.concat(arr1.slice(pointer1)) : merged.concat(arr2.slice(pointer2));

  return merged;
};



const testArr1 = [4, 7, 4, 3, 9, 1, 2];

const testArr2 = [3, 5, 6, 8];

const testArr3 = [1, 2, 7, 8, 12];

const test1 = merge(testArr2, testArr3);

console.log('should be [1, 2, 3, 5, 6, 7, 8, 8, 12]', test1);

const test2 = mergeSort(testArr1);

console.log('should be [1, 2, 3, 4, 4, 7, 9]', test2);
