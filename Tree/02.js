//Building first tree;
class TreeNode {
  constructor(value) {
    this.root = value;
    this.left = null;
    this.right = null;
  }
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(root);
