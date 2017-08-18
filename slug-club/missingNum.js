const missingNumber = nums => {
    // iterate from 0 to nums.length
    for (let i = 0; i < nums.length; i++) {
        // set cur num to be at its own index
        //console.log(nums, nums[i]);
        if (nums[nums[i]] === nums[i]) { continue };
        // if its index already exists, make it a tuple with correct value at index 1 
        if (typeof nums[i] === 'object') {
            const toMove = nums[i][0];
            nums[toMove] = typeof nums[toMove] === 'number' ? [nums[toMove], toMove] : toMove;
            nums[i] = nums[i][1];
        } else if (typeof nums[nums[i]] === 'number') {
            // if num at correct index already exists as a number, make it an array
            nums[nums[i]] = [nums[nums[i]], nums[i]];
            nums[i] = null;
        } else {
            nums[nums[i]] = nums[i];
            nums[i] = null;
        }
            // move index 0 to correct spot 
            // set cur index to index 1 
        // if moving a single element away, set cur index to null
    }

    console.log(nums);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return nums.length;
    
};

console.log('should be 2', missingNumber([1, 2, 0]));