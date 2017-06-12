class Stack {
  // implement using linked-list
  // we dont need next since we just need to keep track of previous node
  constructor(value) {
    this.stack = {
      value: value,
      prev: null
    };

    this.size = 1,
    this.tail = this.stack;
    // this.head = this.stack;

  }

  createNode(value) {
    let node = {
      value: value,
      prev: null
    }
    return node;
  }

  pop() {
    //removes the top item from the stack
    if (this.tail.prev === null) {
      this.stack = null;
    }
    let lastNode = this.tail;
    this.tail = this.tail.prev;
    this.size--;
    return lastNode;

  }

  push(item) {
    // add and item to the top of the stack
    let newNode = this.createNode(item);
    if (this.stack === null) {
      this.stack = newNode
      this.tail = this.stack
      this.size++;
    } else {
      newNode.prev = this.tail;
      this.tail = newNode;
      this.size++;
    }

  }

  peek() {
    // return the top of the stack
    return this.tail;
  }

  isEmpty() {
    // return true if and only if the stack is empty
    return this.size === 0 ? true : false;
  }
}


let stack = new Stack('enoch');
// console.log(stack);
stack.push('sara');
// console.log('after adding sara', stack);
console.log(stack.pop());
// console.log('pop1', stack);
console.log(stack.pop());
// console.log('pop2', stack);
console.log('isEmpty', stack.isEmpty())

stack.push('enoch');
console.log(stack.peek())

// console.log(stack)
