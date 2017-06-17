/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
  if (typeof string !== 'string' || string.length === 0) {
    return null;
  }

  let currentStart = 0;
  let currentEnd = 0;


  let longestStart = 0;
  let longestEnd = 0;


  for (let i = 1; i < string.length; i++) {
    if (string[i-1] === string[i]) {
      currentEnd++;
    }
    if(string[i-1] !== string[i] || (string[i+1] === undefined)) {
      let longestLength = longestEnd - longestStart;
      let currentLength = currentEnd - currentStart;
      if (currentLength > longestLength) {
        longestStart = currentStart;
        longestEnd = currentEnd;
        currentStart = i;
        currentEnd = i;
      }
    }
  }

  return [longestStart, longestEnd];

  // keep track of current run
    //start of current run
    // end of currnet run
  // keep track of longest run
    // start of longest run
    // end of longest run

  // if next character is different
    // compare longest run with current run for new longest run value

};

console.log(longestRun('aabbbcccc'));
console.log(longestRun(''));
console.log(longestRun([1, 2, 3]));

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};  