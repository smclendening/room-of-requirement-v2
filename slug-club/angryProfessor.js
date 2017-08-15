// input: N and K
// N = number of students in class
// K = if fewer than K students present, will cancel class
// Given arrival time of each student, determine if class is canceled 

const angryProfessor = (n, k, a) => {
  let onTime = 0;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      onTime++;
    }
  }
  return onTime < k ? 'YES' : 'NO';
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        var result = angryProfessor(n, k, a);
        process.stdout.write("" + result + "\n");
    }
}