// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    // get number for a and b
    const sumArray = (getNumber(a) + getNumber(b)).toString().split('');
    let prev = null;
    console.log(sumArray);
    while (sumArray.length) {
        const numToSplice = sumArray.length > 4 ? 4 : sumArray.length
        const value = sumArray.splice(sumArray.length - numToSplice).join('');
        const newNode = new ListNode(Number(value));
        newNode.next = prev;
        prev = newNode;
    }

    return prev;
}

const getNumber = list => {
    let sum = [];
    let pointer = list;
    
    // visit each node
    while (pointer) {
        // hold digits in array
        const digits = pointer.value.toString().split('');
        // while length of value is less than 4
        while (digits.length < 4) {
            digits.unshift('0');
        }
        // combine sum with digits array
        sum = sum.concat(digits);
        pointer = pointer.next;
    }

    return Number(sum.join(''));
}