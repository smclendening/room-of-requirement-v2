const isSymmetric = (root) => {
    if (root === null) {
        // if root is already null, return false
        return true;
    }
    
    const checkLeftRight = (left, right) => {
        // if one is null, check if equal
        if (!left || !right) {
            return left === right;
        }
        
        if (left.val !== right.val) {
            return false;
        }
        
        // call recursively
        return checkLeftRight(left.left, right.right) && checkLeftRight(left.right, right.left);
    }
    
    // otherwise, call recursive func on left and right
    return checkLeftRight(root.left, root.right)
};