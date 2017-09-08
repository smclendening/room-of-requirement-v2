// Implement a document scanning function wordCountEngine, which receives a string document and returns a
// list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a
// descending order. Assume that all letters are in english alphabet. You function should be case-insensitive,
// so for instance, the words “Perfect” and “perfect” should be considered the same word.

// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate
// words.

// Analyze the time and space complexities of your solution. Try to optimize for time while keeping a
// polynomial space complexity.

// Examples:

// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["get", "1"], ["by", "1"],
//           ["just", "1"], ["youll", "1"], ["only", "1"] ]

const wordCountEngine = str => {
  const hash = {};
  const count = [];
  const words = str.toLowerCase().split(' ');

  words.forEach(word => {
    word = removePunctuation(word);
    hash[word] = hash[word] + 1 || 1;
  });

  for (let word in hash) {
    count.push([word, hash[word].toString()]);
  }

  count.sort((a, b) => {
    return Number(b[1]) > Number(a[1]);
  });

  return count;
}

const punctuation = {
  "'": true,
  "!": true,
  "?": true,
  ".": true,
  ",": true,
  ":": true,
  ";": true,
  "[": true,
  "{": true,
  "|": true,
  "}": true,
  "]": true
}

const removePunctuation = word => {
  let removed = '';

  word.split('').forEach(letter => {
    if (!punctuation[letter]) {
      removed += letter;
    }
  })

  return removed;
}






const testDoc = "Practice makes perfect. you'll only get Perfect by practice. just practice!";

const test = wordCountEngine(testDoc);

const testOutput = [ ["practice", "3"], ["perfect", "2"],
["makes", "1"], ["get", "1"], ["by", "1"],
["just", "1"], ["youll", "1"], ["only", "1"] ];

console.log(test);