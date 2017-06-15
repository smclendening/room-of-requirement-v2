let Node = (value) => {
  let node = {};
  node.value = value;
  node.next = null;
  return node;
}

let nodeDetection = (node, history) => {
  history = history || {};
  if (node.next === null) {
    return 'No loop detected'
  }
  // console.log('node:', node)
  if (history[node.value]) {
    return node
  } else {
    history[node.value] = node.value;
    // console.log('history', history)
    return nodeDetection(node.next, history) // have to return the recusion so it bring up the value;
  }
}

let A = Node('A');
A.next = Node('B');
A.next.next = Node('C');
A.next.next.next = Node('D');
A.next.next.next.next = Node('E');
A.next.next.next.next.next = A.next.next;

// console.log(A.next.next.next)
console.log(nodeDetection(A))
