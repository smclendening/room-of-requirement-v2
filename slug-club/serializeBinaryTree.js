/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

  //  1
  //  / \
  // 2   3
  //    / \
  //   4   5

var serialize = function(treeRoot) {
    let data = '';
    const queue = []; // [{node: {val: 1, left: {}, right: {} || null}, depth: 0}, {node: }]
    let curNode;
    const maxDepth = findTreeDepth(treeRoot);
    
    queue.push({ node: treeRoot, depth: 0 });
    data += treeRoot.val + ',';

    // while curNode left or right exists
    while (queue.length) {
      // curNode = first value of queue
      curNode = queue.shift();
      if (curNode.node === null || curNode.depth === maxDepth) { continue };
      // add both children to queue and data
      queue.push({ node: curNode.node.left, depth: curNode.depth + 1 });
      queue.push({ node: curNode.node.right, depth: curNode.depth + 1 });
      data += (curNode.node.left ? curNode.node.left.val : null) + ',';
      data += (curNode.node.right ? curNode.node.right.val : null) + ',';
    }

    data = data.substring(0, data.length - 1);
    return `[${data}]`;
};

const findTreeDepth = (treeRoot) => {
  let depth = 0;

  const checkDepth = (node, curDepth) => {
    if (!node || (!node.left && !node.right)) {
      return;
    }

    curDepth++;

    if (curDepth > depth) {
      depth = curDepth;
    }

    checkDepth(node.left, curDepth);
    checkDepth(node.right, curDepth);
    
  }

  checkDepth(treeRoot, 0);

  return depth;
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const testRoot = new TreeNode(1);
testRoot.left = new TreeNode(2);
testRoot.right = new TreeNode(3);
testRoot.right.left = new TreeNode(4);
testRoot.right.right = new TreeNode(5);




/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const queue = data.split(',');
  queue[0] = queue[0][1];
  queue[queue.length - 1] = queue[queue.length - 1][0]
  const treeRoot = new TreeNode(Number(queue[0]));
  let fastPointer = 1;
  let curNode;
  let slowPointer = 0;

  while (queue.length && fastPointer < queue.length) {
    curNode = fastPointer === 1 ? treeRoot : queue[slowPointer];
    if (queue[fastPointer] !== 'null') {
      queue[fastPointer] = curNode.left = new TreeNode(Number(queue[fastPointer]));
    }

    if (queue[fastPointer + 1] !== 'null') {
      queue[fastPointer + 1] = curNode.right = new TreeNode(Number(queue[fastPointer + 1]));
    }
   // console.log('cur node after', curNode);
    fastPointer += 2;
    slowPointer += 1;
  }

  return treeRoot;

};

//console.log(serialize(testRoot));
//console.log(deserialize(serialize(testRoot)));
const hmm = new TreeNode(1);
console.log(deserialize(serialize(hmm)));
console

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


  //  1
  //  / \
  // 2   3
  //    / \
  //   4   5


  //   "[1,2,3,null,null,4,5]"