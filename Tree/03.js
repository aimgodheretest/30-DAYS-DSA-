// Count Total Nodes
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function countNodes(root) {
  if (root === null) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
}

let root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(40);
root.left.left = new TreeNode(50);
root.left.right = new TreeNode(70);

console.log(countNodes(root));
