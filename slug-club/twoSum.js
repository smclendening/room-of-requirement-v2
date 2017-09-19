var twoSum = function(nums, target) {
    const remainder = {};
    
    for (let i = 0; i < nums.length; i++) {
        // check if remainder at nums[i] exists
        if (remainder.hasOwnProperty([nums[i]])) {
            return [remainder[nums[i]], i];
        }
        // calculate remainder needed
        const remainderNeeded = target - nums[i];
        // store current index at remainder array
        remainder[remainderNeeded] = i;
    }
    
    return null;
};