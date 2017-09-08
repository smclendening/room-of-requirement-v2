// You are given a string of characters and you are required to
// reduce it to replace all occurrences of two or more consecutive "e"s
// with a single "e".

// Example:
// Input: "asdheeeeskaeeeleee"
// Output: "asdheskaele"

const testInput = 'asdheeeeskaeeeleee';

const replaceE = str => {
  let reduced = '';
  let consecutive = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e' && str[i - 1] === 'e') {
      continue;
    } else {
      reduced += str[i];
    }
  }

  return reduced;
}

console.log('should be asdheskaele', replaceE(testInput));


