// const longestConsecutive = function(nums) {
//     const positiveElements = [];
//     const negativeElements = [];
//     let longest = 0;
//     let currentRun = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         // if num is greater than or equal to 0
//         if (nums[i] >= 0) {
//             positiveElements[nums[i]] = true;
//         } else {
//             negativeElements[-nums[i]] = true;
//         }
//     }
    
//     let prevNum = null;
//     // iterate starting at length working backwards
//     for (let i = negativeElements.length - 1; i > 0; i--) {
//         // if prevNum does not exist, set it to current number
//          if (!negativeElements[i]) {
//             currentRun = 0;
//             prevNum = null;
//             continue;
//          }
//         if (prevNum === null) {
//             prevNum = -i;
//             currentRun++;
//         } else if (-i === prevNum + 1) {
//         // if element is 1 greater than prevNum, increment currentRun
//             prevNum = -i;
//             currentRun++;
//         } else {
//         // otherwise, set currentRun to 0
//             currentRun = 0;
//             prevNum = null;
//         }
        
//         // if currentRun is greater than longest, reset longest
//         if (currentRun > longest) {
//             longest = currentRun;
//         }
//     }

//     // if prevNum is not -1, reset prevNum and currentRun 
//     if (prevNum !== -1) {
//         prevNum = null;
//         currentRun = 0;
//     }

//     for (let j = 0; j < positiveElements.length; j++) {
//      //   if (positiveElements)
//         if (!positiveElements[j]) {
//             currentRun = 0;
//             prevNum = null;
//             continue;
//         }

//         if (prevNum === null) {
//             prevNum = j;
//             currentRun++;
//         } else if (j === prevNum + 1) {
//         // if element is 1 greater than prevNum, increment currentRun
//             prevNum = j;
//             currentRun++;
//         } else {
//         // otherwise, set currentRun to 0
//             currentRun = 0;
//             prevNum = null;
//         }
        
//         // if currentRun is greater than longest, reset longest
//         if (currentRun > longest) {
//             longest = currentRun;
//         }
//     }
    
//     return longest;
// };

const longestConsecutive = function(nums) {
    const elements = {};
    let longest = 0;
    
    for(let i = 0; i < nums.length; i++) {
        elements[nums[i]] = 1;
    }
    
    const visited = {};
    
    for(let i = 0; i < nums.length; i++) {
        const currentElement = nums[i];
        if (visited[currentElement]) {
            continue;
        }

        visited[currentElement] = true;
        let currentRun = 1;
        let preVal = currentElement - 1;
        while(elements[preVal]) {
            currentRun++
            visited[preVal--] = true;
        }
        var nxtVal = currentElement + 1;
        while(elements[nxtVal]) {
            currentRun++
            visited[nxtVal++] = true;
        }
        
        if(currentRun > longest) {
            longest = currentRun;
        }
    }
    
    return longest;
};

const test = longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]);
console.log(test);