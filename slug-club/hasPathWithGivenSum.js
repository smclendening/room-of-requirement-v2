//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
    let foundPath = false;
    
    if (!t) {
        return s === 0;
    }
    
    const traverseDF = (node, sum) => {
        sum += node.value;
        // base case: if node has no children, check sum
        if (!node.left && !node.right) {
            if (sum === s) { foundPath = true };
            return;
        }
        
        if (node.left) {
            traverseDF(node.left, sum);
        }
        
        if (node.right) {
            traverseDF(node.right, sum);
        }
    }
    
    traverseDF(t, 0);
    
    return foundPath;
}