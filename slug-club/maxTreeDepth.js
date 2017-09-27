var maxDepth = function(root) {
    let max = 0;
    
    const depthFirstTraverse = (depthSoFar, node) => {
        max = Math.max(depthSoFar, max);
        
        if (!node.left && !node.right) {
            return;
        }
        
        if (node.left) {
            depthFirstTraverse(depthSoFar + 1, node.left);
        }
        
        if (node.right) {
            depthFirstTraverse(depthSoFar + 1, node.right);
        }
    }
    
    if (root) {
        depthFirstTraverse(1, root);
    }
    
    return max;
};