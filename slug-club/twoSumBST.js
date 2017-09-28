var findTarget = function(root, k) {
    const hash = {};
    
    const depthTraverse = node => {
        // check if node value is already in hash
        if (hash[node.val]) { return true };
            // if so, return true
        const remainder = k - node.val;
        // store remainder in hash
        hash[remainder] = true;
        
        if (!node.left && !node.right) { return false };
        
        
        if (!node.left) {
            return depthTraverse(node.right);
        } 
        
        if (!node.right) {
            return depthTraverse(node.left);
        }
        
        // return left DT is true or right DT is true
        return depthTraverse(node.left) || depthTraverse(node.right);
    }
    
    return depthTraverse(root);
};