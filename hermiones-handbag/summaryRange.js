const rangeToString = (range) => {
    if (range.length === 1) {
        return range[0].toString();
    }
    return range[0].toString() + '->' + range[1].toString();
}

const summaryRanges = (nums) => {
    const ranges = [];
    let curRange = [];
    let prevNum = null;
    
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        
        if (curRange.length === 0) {
            curRange.push(curNum);
        } else if (curNum === prevNum + 1) {
            curRange[1] = curNum;
        } else {
            ranges.push(rangeToString(curRange));
            curRange = [curNum];
        }
        prevNum = curNum;
    }
    
    if (curRange.length) {
        ranges.push(rangeToString(curRange));
    }
    
    return ranges;
};