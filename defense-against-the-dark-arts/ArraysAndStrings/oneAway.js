

const oneAway = (str1, str2) => {
  const hash1 = {};
  const hash2 = {};
  let oneDiffs = 0;

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    hash1[char] = hash1[char] + 1 || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    hash2[char] = hash2[char] + 1 || 1;
  }

  const largerHash = Object.keys(hash1).length > Object.keys(hash2).length ? hash1 : hash2;
  const smallerHash = Object.keys(hash1).length > Object.keys(hash2).length ? hash2 : hash1;

  for (char in largerHash) {
    if (smallerHash[char] === undefined) {
      smallerHash[char] = 0;
    }

    const diff = Math.abs(largerHash[char] - smallerHash[char]);

    if (diff === 1) {
      oneDiffs++;
    } else if (diff > 1) {
      return false;
    }
  }

  return oneDiffs <= 1;
};


console.log('shouldBeTrue', oneAway('pale', 'ple'));
console.log('shouldBeTrue', oneAway('pales', 'pale'));
console.log('shouldBeTrue', oneAway('pale', 'bale'));
console.log('shouldBeFalse', oneAway('bake', 'pale'));