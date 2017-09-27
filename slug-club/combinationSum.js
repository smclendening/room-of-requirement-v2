var combinationSum = function(candidates, target) {
    const combos = [];
    const memo = {};
    
    const addNums = (currentSum, possibleNums, comboSoFar, startIndex) => {
        if (currentSum > target) {
            return;
        }
        
        if (currentSum === target) {
            combos.push(comboSoFar);
            return;
        }
        
        for (let i = startIndex; i < possibleNums.length; i++) {
            const newSum = currentSum + possibleNums[i];
            if (newSum <= target) {
                addNums(newSum, possibleNums, comboSoFar.concat([possibleNums[i]]), i);
            }
        }
    }
    
    addNums(0, candidates, [], 0);
    
    return combos;
};