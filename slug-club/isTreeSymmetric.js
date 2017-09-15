//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
    // if tree has no left and no right, return true
    if (!t || (!t.left && !t.right)) { return true };
    
    let symmetric = true;
    
    const checkSymmetric = (node1, node2) => {
        if (!symmetric) { return };
        
        if (!node1 && !node2) {
            return;
        }
        
        if (!node1 || !node2 || node1.value !== node2.value) {
            symmetric = false;
            return;
        }
        
        checkSymmetric(node1.left, node2.right);
        checkSymmetric(node1.right, node2.left);
    }
    
    checkSymmetric(t.left, t.right);
    
    return symmetric;
}
