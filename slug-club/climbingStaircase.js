function climbingStaircase(n, k) {
    const sequences = [];
    
    const climbStairs = (stepsRemaining, jumpsSoFar) => {
        if (stepsRemaining === 0) {
            sequences.push(jumpsSoFar);
            return;
        }
        
        for (let i = 1; i <= k; i++) {
            const stepsLeft = stepsRemaining - i;
            if (stepsLeft >= 0) {
                climbStairs(stepsLeft, jumpsSoFar.concat(i));
            }
        }
    }
    
    climbStairs(n, []);
    
    return sequences;
}