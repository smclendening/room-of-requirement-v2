


const phoneVerification = (string) => {
  let phoneNumber = '';
  let startsWithOne = false;


  for (let i = 0; i < string.length; i++) {
    // if i === 0 and char is 1
    const char = string[i];
    if (i === 0 && char === '1') {
      // starsWithOne is true
      startsWithOne = true;
      // add 1 and then (
      phoneNumber += '1(';
    } else if (i === 0) {
    // else if i === 0
      // if digit is a number, add ( and then num to phoneNumber
      if (isNaN(parseFloat(char))) {
        return '';
      } else {
        phoneNumber += char;//letterToDigit[char.toUpperCase()].toString();
      }
    } else if (isNaN(parseFloat(char)) && char.toUpperCase() in letterToDigit) {
      // add it 
      phoneNumber += letterToDigit[char.toUpperCase()].toString();
    } else if (!isNaN(parseFloat(char))) {
      phoneNumber += char;
    }

    // if length of phoneN is 5 and startsWithone or len is 4 and startsWithOne False
    if ((phoneNumber.length === 5 && startsWithOne) || (phoneNumber.length === 4 && !startsWithOne)) {
      // add a )
      phoneNumber += ')';
    }

    // if len of phoneN is 9 and startsWithOne or len is 8 and startsWithOne is false
      // add a -
    if ((phoneNumber.length === 9 && startsWithOne) || (phoneNumber.length === 8 && !startsWithOne)) {
      // add a )
      phoneNumber += '-';
    }
  }

  return phoneNumber;
}

const letterToDigit = {
  A: 2,
  B: 2,
  C: 2,
  D: 3,
  E: 3,
  F: 3,
  G: 4,
  H: 4,
  I: 4,
  J: 5,
  K: 5,
  L: 5,
  M: 6,
  N: 6,
  O: 6,
  P: 7,
  Q: 7,
  R: 7,
  S: 7,
  T: 8,
  U: 8,
  V: 8,
  W: 9,
  X: 9,
  Y: 9,
  X: 9
}


const test1 = phoneVerification('1-800-CARPETS');
console.log(test1);