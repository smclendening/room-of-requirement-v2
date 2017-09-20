var reverseList = function(head) {
    // 1 -> 2 -> 3 -> 4 ==> 4 -> 3 -> 2 -> 1
    let node = head;
    let prev = null;
    
    while (node) {
        const temp = node.next;
        // point node to prev node
        node.next = prev;
        // set prev to current node
        prev = node;
        // set pointer to previous next
        node = temp;
    }
    
    return prev;
};