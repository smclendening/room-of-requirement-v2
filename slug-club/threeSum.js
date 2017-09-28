/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const alreadyFound = {};
    nums = nums.sort((a, b) => { return a - b});
    
    // lock first element in place
    for (let i = 0; i < nums.length - 2; i++) {
        // while we have not found sum and second less than third 
        if (i === 0 || nums[i] > nums[i - 1]) {
            const first = i;
            let second = i + 1;
            let third = nums.length - 1;
            let foundTriplet = false;

            while (second < third) {
                const sum = nums[first] + nums[second] + nums[third];
                const triplet = [nums[first], nums[second], nums[third]];

                if (sum === 0 && !alreadyFound[triplet]) {
                    result.push([nums[first], nums[second], nums[third]]);
                    alreadyFound[triplet] = true;
                    second++;
                    third--;
                } else if (sum > 0) {
                    third--;
                } else {
                    second++;
                }
            }
        }
    }
            
    
    
    
    return result;
};