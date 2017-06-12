class LinkedList {
  constructor(value) {
    let node = this.createNode(value)
    this.list = node,
    this.head = null,
    this.tail = null
  }

  createNode(value) {
    let node = {
      value: value,
      next: null,
      prev: null
    };
    return node;
  }

  removeHead() {


  }

  removeTail() {

  }

  addTail(value) {
    let node = this.createNode(value);

  }

  addHead() {
    
  }


}