// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
// [1, 2, 3, 4, 3, 2, 1]; // l is 5
// [1, 2, 2, 1];

function isListPalindrome(l) {
    // walk one pointer to halfway through the linked list
    const length = getLength(l);
    const midPoint = Math.ceil(length / 2);
    let pointer1 = l;
    let pointer1Index = 0; 
    
    while (pointer1Index < midPoint) {
        pointer1 = pointer1.next;
        pointer1Index++;
    }
    
    // walk pointer through remainder of list, reversing nodes on its way
    reverse(pointer1);
    
    // set other pointer at beginning of list
    // walk both pointers one by one, reversing back on way
}

const reverse = (node) => {
    // [1, 2, 3] ==> [3, 2, 1];
    let pointer = node; // 1
    let nextNode = node.next; // 3
    
    while (nextNode) {
        const temp = nextNode.next; // 3
        nextNode.next = pointer; // 2 --> 1
        nextNode = temp; 
        pointer.next = null; // 1 --> null
        pointer = 
    }
    
    
}

const getLength = (list) => {
    let length = 0;
    let pointer = list;
    
    while (pointer) {
        length++;
        pointer = pointer.next;
    }
    
    return length;
}