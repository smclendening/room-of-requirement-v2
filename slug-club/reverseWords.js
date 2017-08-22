// Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

// The input string does not contain leading or trailing spaces and the words are always separated by a single space.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

// Could you do it in-place without allocating extra space?



const reverseWords = (str) => {
  str = str.split(' ');
  // start pointers at beginning and end
  let startPointer = 0;
  let endPointer = str.length - 1;

  // while they have not met 
  while (startPointer < endPointer) {
    // swap them
    const temp = str[startPointer];
    str[startPointer] = str[endPointer];
    str[endPointer] = temp;
    startPointer++;
    endPointer--;
  }

  return str.join(' ');
};

let test1 = 'the sky is blue';
test1 = reverseWords(test1);

console.log('should be: blue is sky the', test1);

let test2 = 'a';
test2 = reverseWords(test2);

console.log('should be: whoa', test2);

let test3 = '';
test3 = reverseWords(test3);

console.log('should be empty string', test3);

let test4 = 'check please';
test4 = reverseWords(test4);

console.log('should be: please check', test4);

let test5 = 'in a bag';
test5 = reverseWords(test5);

console.log('should be: bag a in', test5);
