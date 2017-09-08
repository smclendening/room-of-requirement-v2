const test1 = 'We promptly judged antique ivory buckles for the next prize';

const test2 = 'We promptly judged antique ivory buckles for the prize';


const pangram = str => {
  const alphabet = [];

  str.split('').forEach(letter => {
    const code = letter.toLowerCase().charCodeAt(0) - 97;
    if (code >= 0) {
      alphabet[code] = true;
    }
  });

  for (let i = 0; i < alphabet.length; i++) {
    if (!alphabet[i]) {
      return false;
    }
  }

  return true;
}

console.log('shoul be true', pangram(test1));
console.log('shoul be false', pangram(test2));