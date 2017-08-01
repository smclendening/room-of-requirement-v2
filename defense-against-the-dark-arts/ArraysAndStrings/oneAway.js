

// const oneAway = (str1, str2) => {
//   const hash1 = {};
//   const hash2 = {};
//   let oneDiffs = 0;

//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     hash1[char] = hash1[char] + 1 || 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     hash2[char] = hash2[char] + 1 || 1;
//   }

//   const largerHash = Object.keys(hash1).length > Object.keys(hash2).length ? hash1 : hash2;
//   const smallerHash = Object.keys(hash1).length > Object.keys(hash2).length ? hash2 : hash1;

//   for (char in largerHash) {
//     if (smallerHash[char] === undefined) {
//       smallerHash[char] = 0;
//     }

//     const diff = Math.abs(largerHash[char] - smallerHash[char]);

//     if (diff === 1) {
//       oneDiffs++;
//     } else if (diff > 1) {
//       return false;
//     }
//   }

//   return oneDiffs <= 1;
// };

const oneAway = (str1, str2) => {

  const checkReplace = (str1, str2) => {
    let different = 0;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        different++;
      }
    }

    return different <= 1;
  }

  const checkInsertAndDelete = (longer, shorter) => {
    let longerIndex = 0;
    let alreadyIncreased = false;

    for (let i = 0; i < longer.length; i++) {
      if (shorter[i] !== longer[longerIndex]) {
        if (!alreadyIncreased) {
          alreadyIncreased = true;
          longerIndex++;
        } else {
          console.log('')
          return false;
        }
      }
      longerIndex++;
    }

    return true;
  }

  if (str1.length === str2.length) {
    return checkReplace(str1, str2);
  } 

  return str1.length > str2.length ? checkInsertAndDelete(str1, str2) : checkInsertAndDelete(str2, str1);
}

console.log('shouldBeTrue', oneAway('pale', 'ple'));
console.log('shouldBeTrue', oneAway('pales', 'pale'));
console.log('shouldBeTrue', oneAway('pale', 'bale'));
console.log('shouldBeFalse', oneAway('bake', 'pale'));