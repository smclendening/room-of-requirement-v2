class Queue {
  constructor() {
    this.queue = null;
    this.head = null;
    this.tail = null;
    this.size =

  }

  createNode(value){
    let node = {
      value: value,
      next: next,
      prev: prev
    }
    return node;
  }

  add(value) {
    //Add an item to the end of the list
    let node = this.createNode(value);
    if (this.head === null && this.tail === null) {
      this.queue = node;
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail
      this.tail = node;
      this.tail.prev = oldTail

    }
    this.size++;

  }

  remove() {
    // remove the first item in the list

    let oldHead = this.head;

    this.head = old.head.next;
    this.head.prev = null;
    this.size--

    return oldHead;


  }

  peek() {
    // return the top of the queue
    return this.head;

  }

  isEmpty() {
    // returns true if and only if the queue is empty
    return this.size === 0 ? true : false


  }
}