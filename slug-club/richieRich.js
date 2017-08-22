function isPalindrome(arr) {
  let startPointer = 0;
  let endPointer = arr.length - 1;
  
  while (startPointer < endPointer) {
    if (arr[startPointer] !== arr[endPointer]) {
      return false;
    }
    startPointer++;
    endPointer--;
  }
  return true;
}

function richieRich(s, n, k){
    let startPointer = 0;
    let endPointer = n - 1;
    let largest = -1;
    const numArr = k.toString().split('');
  

    const changed = numArr.map(num => false);

    if (s >= n) {
     const result = [];
      while (s > 0) {
        result.push(9);
        s--;
      }
      return Number(result.join(''));
    }
  
    while(numArr.length < n) {
      numArr.unshift('0');
    }
    
    while (s > 0 && startPointer < endPointer) {
      if (Number(numArr[startPointer]) > Number(numArr[endPointer])) {
        numArr[endPointer] = numArr[startPointer];
        changed[endPointer] = true;
        s--;
      } else if (Number(numArr[endPointer]) > Number(numArr[startPointer])) {
        numArr[startPointer] = numArr[endPointer];
        changed[startPointer] = true;
        s--;
      }
      startPointer++;
      endPointer--;
    }

    let num = Number(numArr.join(''));
  
    if (num > largest && isPalindrome(numArr)) {
      largest = num; 
    };
  
 // console.log('changed', changed);
  
    if (s > 0) {
      startPointer = 0;
      endPointer = n - 1;
      while (s > 0 && startPointer < endPointer) {
        if (Number(numArr[startPointer]) < 9) {
          numArr[startPointer] = '9';  
          if (!changed[startPointer]) {
            s--; 
            if (!s) { break };
          }
        }
        
        if (Number(numArr[endPointer]) < 9) {
          numArr[endPointer] = '9';
          if (!changed[endPointer]) {
            s--;
            if (!s) { break };
          }
        }
        const newNum = Number(numArr.join(''));
        //console.log('numarr', numArr);
            //       console.log('is pal', isPalindrome(numArr));
        if (newNum > largest && isPalindrome(numArr)) {
          largest = newNum;
        }
        
        startPointer++;
        endPointer--;
      }
    }
  
    num = Number(numArr.join(''));
  
    if (num > largest && isPalindrome(numArr)) {
      largest = num; 
    };
    
    return largest;
}

console.log('should be 12921', richieRich(1, 5, 12321));