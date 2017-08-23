// function maxLen(n, s){
//   let max = 0;
  
//   const recurse = (s, chars) => {
//     console.log('s leng', s.length);
//     if (isValidT(s) && s.length > max) {
//       max = s.length;
//       return;
//     } 
    
//     if (s.length === 1 || s.length === 0) {
//       return;
//     }
    
//     for (let char in chars) {
//       if (chars[char]) {
//         chars[char] = false;
//         const newString = removeChar(s, char);
//         recurse(newString, chars);
//       //  chars[char] = true;
//       }
//     }
    
//   }

  // const charCount = s.split('').reduce((acc, cur) => {
  //   acc[cur] = true;
  //   return acc;
  // }, {});
  
//   recurse(s, charCount);
  
//   return max;
// }

function maxLen(n, s) {
  let max = 0;

  const charCount = s.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  const sortedChars = Object.keys(charCount).sort((a, b) => {
    return charCount[b] - charCount[a];
  });

  for (let i = 0; i < sortedChars.length; i++) {
    if (charCount[sortedChars[i]] + charCount[sortedChars[i + 1]] < max) {
      break;
    }

    for (let j = 1; j < sortedChars.length; j++) {
      const newString = createString(s, sortedChars[i], sortedChars[j]);
      if (newString.length > max && isValidT(newString)) {
        max = newString.length;
      }
    }
  }

  return max;
}

function createString(str, char1, char2) {
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char1 || str[i] === char2) {
      newString += str[i];
    }
  }

  return newString;
}

function isValidT(s) {
  const first = s[0];
  const second = s[1];

  if (first === second || !first || !second) {
    return false;
  }
  
  for (let i = 2; i < s.length; i++) {
    if (i % 2 && s[i] !== second) {
      return false;
    } else if (i % 2 === 0 && s[i] !== first) {
      return false;
    }
  }
  
  return true;
}

function removeChar(string, char) {
  let newString = '';
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== char) {
      newString += string[i];
    }
  }
  
  return newString;
}



console.log('should be 5', maxLen(10, 'beabeefeab'));