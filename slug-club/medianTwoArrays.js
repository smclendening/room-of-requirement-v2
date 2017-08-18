// O(n + m) space, O(n + m) time

var findMedianSortedArrays = function(nums1, nums2) {
    let allElements = [];
    const totalLength = nums1.length + nums2.length;
    const midPoint = Math.ceil(((nums1.length + nums2.length) / 2) - 1);
    nums1 = nums1.slice();
    nums2 = nums2.slice();
    
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            allElements.push(nums1.shift());
        } else {
            allElements.push(nums2.shift());
        }
    }
    
    allElements = nums1.length ? allElements.concat(nums1) : allElements.concat(nums2);
    
    if (totalLength % 2) {
        return allElements[midPoint];
    } else {
        return (allElements[midPoint] + allElements[midPoint + 1]) / 2;
    }
};



// O(1) space, O(n) time

const findMedianSortedArrays = (nums1, nums2) => {
    const midPoint = Math.ceil(((nums1.length + nums2.length) / 2) - 1);
    let counter = 0;
    let pointer1 = 0;
    let pointer2 = 0;
    let mostRecent;
    let next;

    while (counter <= midPoint) {
        if (pointer1 === nums1.length) {
            mostRecent = nums2[pointer2 + (midPoint - counter)];
            next = nums2[pointer2 + (midPoint - counter) + 1];
            break;
        } else if (pointer2 === nums2.length) {
            mostRecent = nums1[pointer1 + (midPoint - counter)];
            next = nums1[pointer1 + (midPoint - counter) + 1];
            break;
        }
        
        if (nums1[pointer1] < nums2[pointer2]) {
            mostRecent = nums1[pointer1];
            pointer1++;
            next = nums1[pointer1] ? Math.min(nums1[pointer1], nums2[pointer2]) : nums2[pointer2];
        } else {
            mostRecent = nums2[pointer2];
            pointer2++;
            next = nums2[pointer2] ? Math.min(nums2[pointer2], nums1[pointer1]) : nums1[pointer1];
        }
        counter++;
    }
    
    if ((nums1.length + nums2.length) % 2) {
        return mostRecent;
    } else {
        return (mostRecent + next) / 2;
    }
}