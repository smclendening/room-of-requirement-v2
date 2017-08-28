function solve(n, s, d, m){
  // n = num squares, s = square values (arr), d = day, m = month
  let correctSums = 0;
  // goal: m consecutive squares that sum to d 
  for (let i = 0; i <= s.length - m; i++) {
    let toAdd = m - 1;
    let curSum = s[i];
    let index = i + 1;
    while (toAdd) {
      curSum += s[index];
      toAdd--;
      index++;
    }
    if (curSum === d) { correctSums++ };
  }
  
  return correctSums;
}